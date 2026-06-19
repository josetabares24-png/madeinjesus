"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { heroSlides } from "@/lib/data";

const slideMs = 4500;
const exitMs = 1050;

const titleTransition = {
  duration: 1.08,
  ease: [0.76, 0, 0.24, 1] as const
};

export function CinematicHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const slide = heroSlides[activeSlide];

  const nextSlide = useCallback(() => {
    if (isLeaving) return;

    setIsLeaving(true);
    timeoutRef.current = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
      setIsLeaving(false);
    }, exitMs);
  }, [isLeaving]);

  useEffect(() => {
    const timer = window.setInterval(nextSlide, slideMs);
    return () => {
      window.clearInterval(timer);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [nextSlide]);

  const counter = useMemo(() => String(activeSlide + 1).padStart(2, "0"), [activeSlide]);
  const total = String(heroSlides.length).padStart(2, "0");

  return (
    <section
      id="inicio"
      className="relative flex h-screen min-h-screen w-full flex-col justify-end overflow-hidden bg-[#030303] px-5 pb-10 pt-32 sm:px-8 md:pb-20 lg:px-12"
    >
      <div className="grain" />

      <div className="absolute inset-0 z-0 bg-[#030303]">
        <AnimatePresence mode="sync">
          <motion.div
            key={`image-${activeSlide}`}
            className="absolute inset-0"
            initial={activeSlide === 0 ? false : { opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.35, ease: "easeOut" }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={activeSlide === 0}
              sizes="100vw"
              className="object-cover opacity-72"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.18),rgba(3,3,3,0.58)_46%,#030303_100%),linear-gradient(90deg,#030303_0%,rgba(3,3,3,0.74)_30%,rgba(3,3,3,0.18)_61%,rgba(3,3,3,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_42%,rgba(197,139,59,0.16),transparent_34%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[92rem] flex-col justify-end">
        <div className="mb-8 min-h-[7rem] md:mb-10">
          <motion.div
            key={`intro-${activeSlide}`}
            initial={false}
            animate={
              isLeaving
                ? { opacity: 0, y: -22, filter: "blur(10px)" }
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4 text-[#c58b3b]">{slide.label}</p>
            <p className="max-w-md text-lg leading-8 text-[#f5f0e8]/76 md:text-xl">
              {slide.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="relative mb-10 min-h-[12.4rem] sm:min-h-[16.5rem] md:mb-14 md:min-h-[18rem] lg:min-h-[22rem]">
          <motion.h1
            key={`title-${activeSlide}`}
            initial={false}
            animate={
              isLeaving
                ? { opacity: 0, scale: 1.25, y: -60, filter: "blur(16px)" }
                : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
            }
            transition={titleTransition}
            style={{ transformOrigin: "46% 54%" }}
            className="absolute inset-x-0 bottom-0 max-w-[86rem] font-serif text-[19vw] font-normal uppercase leading-[0.78] tracking-[-0.08em] text-[#f5f0e8] drop-shadow-[0_0_38px_rgba(0,0,0,0.72)] sm:text-[16vw] md:text-[13vw] lg:text-[12vw]"
          >
            {slide.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>
        </div>

        <div className="grid w-full items-end gap-7 border-t border-white/15 pt-6 md:grid-cols-[1fr_auto_1fr]">
          <p className="max-w-md text-pretty text-sm leading-7 text-[#f5f0e8]/78 md:pr-8">
            Una comunidad formada por Jesús, reunida en familia y enviada con propósito.
          </p>

          <p className="eyebrow text-[#f5f0e8]/60">
            <span className="text-[#f5f0e8]">{counter}</span> / {total}
          </p>

          <div className="flex md:justify-end">
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Siguiente slide"
              className="group grid h-16 w-16 place-items-center rounded-full border border-white/24 bg-[#030303]/22 text-[#f5f0e8] backdrop-blur transition duration-500 hover:scale-105 hover:rotate-6 hover:border-[#c58b3b] hover:text-[#c58b3b] md:h-20 md:w-20"
            >
              <ArrowDown className="h-6 w-6 transition duration-500 group-hover:translate-y-1" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full overflow-hidden bg-white/10">
          <motion.div
            key={`progress-${activeSlide}`}
            className="h-full bg-[#c58b3b]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: slideMs / 1000, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
