import React from 'react';

export interface ImageAutoSliderProps {
  /** Optional custom list of image URLs */
  images?: string[];
  /** Optional custom speed in seconds (default: 35) */
  speed?: number;
  /** Optional direction: 'left' | 'right' (default: 'left') */
  direction?: 'left' | 'right';
  /** Optional pause on hover (default: true) */
  pauseOnHover?: boolean;
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
  speed = 35,
  direction = 'left',
  pauseOnHover = true,
  className = '',
  children
}) => {
  // If children are provided, we duplicate them for seamless loop
  if (children) {
    return (
      <div className={`relative w-full overflow-hidden ${className}`}>
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .slider-track-left {
            animation: scroll-left ${speed}s linear infinite;
          }
          .slider-track-right {
            animation: scroll-right ${speed}s linear infinite;
          }
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
          .slider-mask {
            mask: linear-gradient(
              90deg,
              transparent 0%,
              rgba(0,0,0,1) 1.5%,
              rgba(0,0,0,1) 98.5%,
              transparent 100%
            );
            -webkit-mask: linear-gradient(
              90deg,
              transparent 0%,
              rgba(0,0,0,1) 1.5%,
              rgba(0,0,0,1) 98.5%,
              transparent 100%
            );
          }
        `}</style>
        <div className="slider-mask w-full py-4">
          <div
            className={`flex gap-4 sm:gap-6 w-max ${
              direction === 'left' ? 'slider-track-left' : 'slider-track-right'
            } ${pauseOnHover ? 'pause-on-hover' : ''}`}
          >
            {/* Primary Track */}
            <div className="flex gap-4 sm:gap-6 shrink-0">{children}</div>
            {/* Duplicated Track for Seamless 100% Loop */}
            <div className="flex gap-4 sm:gap-6 shrink-0" aria-hidden="true">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const duplicatedImages = [...images, ...images];

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <style>{`
        @keyframes scroll-left-img {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right-img {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .infinite-scroll-img-left {
          animation: scroll-left-img ${speed}s linear infinite;
        }
        .infinite-scroll-img-right {
          animation: scroll-right-img ${speed}s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
        .scroll-container-img {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }
        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .image-item:hover {
          transform: scale(1.04);
          filter: brightness(1.08);
        }
      `}</style>

      <div className="relative z-10 w-full flex items-center justify-center py-4">
        <div className="scroll-container-img w-full">
          <div
            className={`flex gap-6 w-max ${
              direction === 'left'
                ? 'infinite-scroll-img-left'
                : 'infinite-scroll-img-right'
            } ${pauseOnHover ? 'pause-on-hover' : ''}`}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-md bg-slate-100"
              >
                <img
                  src={image}
                  alt={`Gallery item ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Aliased export for compatibility with standard shadcn snippet format
export const Component = ImageAutoSlider;
export default ImageAutoSlider;
