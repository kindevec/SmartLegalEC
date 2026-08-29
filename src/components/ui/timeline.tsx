import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  subtitle?: string;
  badge?: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  showHeader?: boolean;
}

export const Timeline = ({ 
  data, 
  title, 
  subtitle,
  description,
  className = "",
  showHeader = false
}: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  // Recalculate height on resize or dynamic content changes
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 65%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      className={`w-full font-sans ${className}`}
      ref={containerRef}
    >
      {/* Optional Header section of Timeline */}
      {showHeader && title && (
        <div className="max-w-7xl mx-auto pt-6 pb-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          {subtitle && (
            <span className="text-xs font-bold text-[#0A66FF] uppercase tracking-wider block mb-2 font-heading">
              {subtitle}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight font-heading max-w-4xl">
            {title}
          </h2>
          {description && (
            <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      <div ref={ref} className="relative w-full max-w-[1540px] mx-auto pb-4 sm:pb-8 px-0 sm:px-2 md:px-0">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-5 sm:pt-7 md:pt-9 first:pt-0 gap-0 md:gap-5 lg:gap-7 w-full"
          >
            {/* Phase / Chapter Indicator (Left Column - Static on mobile, Sticky on desktop) */}
            <div className="w-full md:w-[250px] lg:w-[290px] shrink-0 static md:sticky md:top-28 lg:top-32 self-start z-20 px-4 sm:px-0 mb-3 md:mb-0">
              {/* Mobile Header: Inline Node + Title (Flows naturally without sticking) */}
              <div className="md:hidden flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-full bg-[#071326] flex items-center justify-center shadow-md border-2 border-white ring-2 ring-blue-100/80 shrink-0">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#0A66FF] border border-[#93C5FD] animate-pulse" />
                </div>
                <div>
                  {item.badge && (
                    <span className="text-[10px] font-bold text-[#0A66FF] uppercase tracking-wider block font-heading leading-none mb-0.5">
                      {item.badge}
                    </span>
                  )}
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <span className="text-[11px] font-semibold text-slate-500 block mt-0.5">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </div>

              {/* Desktop Header: Node Orb + Editorial Typography */}
              <div className="hidden md:block relative">
                {/* Node Orb aligned directly with Vertical Beam */}
                <div className="h-10 w-10 absolute left-0 top-1 rounded-full bg-[#071326] flex items-center justify-center shadow-lg border-2 border-white ring-2 ring-blue-100/80">
                  <div className="h-3.5 w-3.5 rounded-full bg-[#0A66FF] border border-[#93C5FD] animate-pulse" />
                </div>

                <div className="pl-12 lg:pl-13">
                  {item.badge && (
                    <span className="text-[11px] font-bold text-[#0A66FF] uppercase tracking-wider block mb-1 font-heading">
                      {item.badge}
                    </span>
                  )}
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <span className="text-xs font-semibold text-slate-500 block mt-1">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Content Column (Right Column - Takes remainder of width cleanly) */}
            <div className="flex-1 min-w-0 w-full relative px-0 sm:px-0 md:px-2">
              <motion.div 
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-slate-700 w-full"
              >
                {item.content}
              </motion.div>
            </div>
          </div>
        ))}

        {/* Illuminated Vertical Beam Line (Desktop Only - perfectly centered on Node Orbs) */}
        <div
          style={{
            height: height + "px",
          }}
          className="hidden md:block absolute left-[19px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#D4AF37] via-[#0A66FF] to-transparent from-[0%] via-[20%] rounded-full shadow-[0_0_10px_#0A66FF]"
          />
        </div>
      </div>
    </div>
  );
};

