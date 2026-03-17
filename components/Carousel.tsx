"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, ReactNode, useCallback } from "react";

interface CarouselProps {
  children: ReactNode;
  autoSlide?: boolean;
  interval?: number;
  total: number;
}

export default function Carousel({
  children,
  total = 1,
  autoSlide = true,
  interval = 5000,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  },[total]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  },[total]);

  useEffect(() => {
    if (!autoSlide) return;

    timer.current = setInterval(next, interval);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [index, autoSlide, interval, next]);

  return (
    <div className="relative overflow-hidden w-full">

      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]  w-full  md:gap-0"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
         {children}
      </div>
{
    total > 1 && (<>
    {/* Previous */}
      <button
        onClick={prev}
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full
        bg-purple-200  
        text-neutral-800  
        hover:scale-105 transition"
      >
        <ChevronLeft />
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full
         bg-purple-200  
        text-neutral-800  
        hover:scale-105 transition"
      >
        <ChevronRight />
      </button>
    </>)
}
      
    </div>
  );
}