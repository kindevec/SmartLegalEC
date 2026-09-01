import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface ImageAutoSliderProps {
  /** Optional custom list of image URLs */
  images?: string[];
  /** Optional custom auto-advance interval in seconds (default: 4.5) */
  autoAdvanceSeconds?: number;
  /** Speed prop for backward compatibility */
  speed?: number;
  /** Optional direction: 'left' | 'right' (default: 'left') */
  direction?: 'left' | 'right';
  /** Optional pause on hover (default: true) */
  pauseOnHover?: boolean;
  /** Milliseconds to wait before resuming auto-play after user manipulation (default: 10000 = 10s) */
  resumeDelayMs?: number;
  /** Show arrow navigation controls (default: true) */
  showControls?: boolean;
  /** Show pagination indicator dots (default: true) */
  showDots?: boolean;
  /** Optional custom className for the container */
  className?: string;
  /** Optional custom items to render instead of simple images */
  children?: React.ReactNode;
}

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({
  images = [
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=2030&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?q=80&w=1940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop"
  ],
  autoAdvanceSeconds = 4.5,
  direction = 'left',
  pauseOnHover = true,
  resumeDelayMs = 10000,
  showControls = true,
  showDots = true,
  className = '',
  children
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isManipulated, setIsManipulated] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Programmatic scroll lock to prevent onScroll from overriding user click / auto-advance target
  const isProgrammaticScroll = useRef(false);
  const programmaticTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mouse Drag state
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const hasDraggedDistance = useRef(false);

  // 10-Second Resume Timer Reference
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);

  // Normalize items
  const items = children
    ? React.Children.toArray(children)
    : images.map((img, idx) => (
        <div
          key={idx}
          className="shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-md bg-slate-100"
        >
          <img
            src={img}
            alt={`Gallery item ${idx + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ));

  const totalItems = items.length;

  // Accurately determines active index based on scroll position
  const updateScrollState = useCallback(() => {
    if (isProgrammaticScroll.current) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const container = scrollContainerRef.current;
      if (!container || container.children.length === 0) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll <= 5) {
        setActiveSlideIndex(0);
        return;
      }

      // If scrolled all the way to the right end
      if (scrollLeft >= maxScroll - 16) {
        setActiveSlideIndex(totalItems - 1);
        return;
      }

      // If scrolled all the way to the left beginning
      if (scrollLeft <= 12) {
        setActiveSlideIndex(0);
        return;
      }

      // Proportional matching: interpolate index based on scroll progress and card positions
      const containerRect = container.getBoundingClientRect();
      const containerLeft = containerRect.left;
      let closestIndex = 0;
      let minDistance = Infinity;

      for (let i = 0; i < container.children.length; i++) {
        const child = container.children[i] as HTMLElement;
        const childRect = child.getBoundingClientRect();
        const distance = Math.abs(childRect.left - containerLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }

      setActiveSlideIndex(closestIndex);
    });
  }, [totalItems]);

  // Handles any user interaction (drag, click arrows, touch, dots)
  // Pauses auto-play and sets a resume timer
  const handleUserManipulation = useCallback(() => {
    setIsManipulated(true);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsManipulated(false);
    }, resumeDelayMs);
  }, [resumeDelayMs]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      if (programmaticTimeoutRef.current) clearTimeout(programmaticTimeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Update scroll state on mount and resize
  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [updateScrollState]);

  // Smooth slide to specific index
  const scrollToSlide = useCallback(
    (targetIndex: number) => {
      const container = scrollContainerRef.current;
      if (!container || totalItems === 0) return;

      const boundedIndex = Math.max(0, Math.min(totalItems - 1, targetIndex));
      setActiveSlideIndex(boundedIndex);

      // Lock programmatic scroll for smooth transition duration
      isProgrammaticScroll.current = true;
      if (programmaticTimeoutRef.current) clearTimeout(programmaticTimeoutRef.current);
      programmaticTimeoutRef.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 650);

      const maxScroll = container.scrollWidth - container.clientWidth;

      if (boundedIndex === 0) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      if (boundedIndex === totalItems - 1) {
        container.scrollTo({ left: maxScroll, behavior: 'smooth' });
        return;
      }

      const targetChild = container.children[boundedIndex] as HTMLElement | null;
      if (targetChild) {
        const containerRect = container.getBoundingClientRect();
        const targetRect = targetChild.getBoundingClientRect();
        const targetScroll = container.scrollLeft + (targetRect.left - containerRect.left);
        container.scrollTo({
          left: Math.min(maxScroll, Math.max(0, targetScroll)),
          behavior: 'smooth'
        });
      } else {
        const firstChild = container.firstElementChild as HTMLElement | null;
        const cardWidth = firstChild ? firstChild.getBoundingClientRect().width + 20 : 250;
        container.scrollTo({
          left: Math.min(maxScroll, Math.max(0, boundedIndex * cardWidth)),
          behavior: 'smooth'
        });
      }
    },
    [totalItems]
  );

  // Manual Previous Navigation
  const scrollPrev = useCallback(() => {
    handleUserManipulation();
    const nextIndex = activeSlideIndex === 0 ? totalItems - 1 : activeSlideIndex - 1;
    scrollToSlide(nextIndex);
  }, [activeSlideIndex, totalItems, handleUserManipulation, scrollToSlide]);

  // Manual Next Navigation
  const scrollNext = useCallback(() => {
    handleUserManipulation();
    const nextIndex = (activeSlideIndex + 1) % totalItems;
    scrollToSlide(nextIndex);
  }, [activeSlideIndex, totalItems, handleUserManipulation, scrollToSlide]);

  // Auto-play Interval: active only when NOT hovered, NOT manipulated, and NOT dragging
  useEffect(() => {
    const isPaused = (pauseOnHover && isHovered) || isManipulated || isDragging;
    if (isPaused || totalItems <= 1) return;

    const interval = setInterval(() => {
      setActiveSlideIndex((current) => {
        const nextIndex = direction === 'right'
          ? (current === 0 ? totalItems - 1 : current - 1)
          : (current + 1) % totalItems;

        const container = scrollContainerRef.current;
        if (container) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          isProgrammaticScroll.current = true;
          if (programmaticTimeoutRef.current) clearTimeout(programmaticTimeoutRef.current);
          programmaticTimeoutRef.current = setTimeout(() => {
            isProgrammaticScroll.current = false;
          }, 650);

          if (nextIndex === 0) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else if (nextIndex === totalItems - 1) {
            container.scrollTo({ left: maxScroll, behavior: 'smooth' });
          } else {
            const targetChild = container.children[nextIndex] as HTMLElement | null;
            if (targetChild) {
              const containerRect = container.getBoundingClientRect();
              const targetRect = targetChild.getBoundingClientRect();
              const targetScroll = container.scrollLeft + (targetRect.left - containerRect.left);
              container.scrollTo({
                left: Math.min(maxScroll, Math.max(0, targetScroll)),
                behavior: 'smooth'
              });
            }
          }
        }

        return nextIndex;
      });
    }, autoAdvanceSeconds * 1000);

    return () => clearInterval(interval);
  }, [
    isHovered,
    isManipulated,
    isDragging,
    pauseOnHover,
    autoAdvanceSeconds,
    direction,
    totalItems
  ]);

  // Mouse Drag Handlers for Desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    handleUserManipulation();
    setIsDragging(true);
    hasDraggedDistance.current = false;
    dragStartX.current = e.pageX - container.offsetLeft;
    dragStartScrollLeft.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = x - dragStartX.current;

    if (Math.abs(walk) > 6) {
      hasDraggedDistance.current = true;
    }

    container.scrollLeft = dragStartScrollLeft.current - walk;
    updateScrollState();
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      handleUserManipulation();
      updateScrollState();
    }
  };

  // Prevent accidental clicks on child links if user was dragging
  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasDraggedDistance.current) {
      e.stopPropagation();
      e.preventDefault();
      hasDraggedDistance.current = false;
    }
  };

  // Touch Handlers for Mobile
  const handleTouchStart = () => {
    handleUserManipulation();
  };

  const handleTouchEnd = () => {
    handleUserManipulation();
    updateScrollState();
  };

  return (
    <div
      className={`relative w-full group/slider select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isDragging) {
          setIsDragging(false);
          handleUserManipulation();
          updateScrollState();
        }
      }}
    >
      {/* Top Slider Navigation Controls */}
      {showControls && totalItems > 1 && (
        <div className="flex items-center justify-end px-2 sm:px-1 mb-2">
          <div className="flex items-center gap-1.5">
            <button
              onClick={scrollPrev}
              type="button"
              aria-label="Servicio anterior"
              className="p-1.5 sm:p-2 rounded-full bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-700 hover:text-[#0A66FF] border border-slate-200 shadow-xs transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0A66FF]/40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              type="button"
              aria-label="Siguiente servicio"
              className="p-1.5 sm:p-2 rounded-full bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-700 hover:text-[#0A66FF] border border-slate-200 shadow-xs transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0A66FF]/40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Interactive Scrollable Container */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollState}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onClickCapture={handleClickCapture}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-6 lg:px-0 py-2 ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {items.map((item, idx) => (
            <div key={idx} className="shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Interactive Dot Pagination */}
      {showDots && totalItems > 1 && (
        <div className="flex items-center justify-center gap-1 mt-3.5 pb-1">
          {items.map((_, idx) => {
            const isActive = idx === activeSlideIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleUserManipulation();
                  scrollToSlide(idx);
                }}
                aria-label={`Ir al elemento ${idx + 1}`}
                className="p-2 -m-0.5 inline-flex items-center justify-center cursor-pointer group/dot focus:outline-none"
              >
                <span
                  className={`transition-all duration-300 rounded-full block ${
                    isActive
                      ? 'w-6 h-2 bg-[#0A66FF] shadow-xs'
                      : 'w-2 h-2 bg-slate-300 group-hover/dot:bg-slate-400'
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Aliased export for compatibility with standard shadcn snippet format
export const Component = ImageAutoSlider;
export default ImageAutoSlider;
