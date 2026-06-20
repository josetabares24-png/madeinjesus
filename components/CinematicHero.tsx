"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, useSpring } from "framer-motion";
import { heroSlides } from "@/lib/data";

const SLIDE_SECONDS = 6.5;
const FADE_SECONDS = 1.6;

export function CinematicHero() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const tiltX = useSpring(0, { stiffness: 60, damping: 18, mass: 0.4 });
  const tiltY = useSpring(0, { stiffness: 60, damping: 18, mass: 0.4 });

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, SLIDE_SECONDS * 1000);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    tiltY.set(px * -6);
    tiltX.set(py * 4);
  }

  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  const slide = heroSlides[index];

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-screen w-full overflow-hidden bg-ink px-5 sm:px-8 lg:px-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grain" />

      <div className="absolute inset-0 z-0 bg-ink" style={{ perspective: 1200 }}>
        {heroSlides.map((heroSlide, slideIndex) => (
          <motion.div
            key={heroSlide.image}
            className="absolute inset-0"
            style={{ rotateX: tiltX, rotateY: tiltY }}
            initial={false}
            animate={
              slideIndex === index
                ? { opacity: 1, scale: [1.04, 1.12] }
                : { opacity: 0, scale: 1.04 }
            }
            transition={{
              opacity: { duration: shouldReduceMotion ? 0 : FADE_SECONDS, ease: "easeInOut" },
              scale: { duration: shouldReduceMotion ? 0 : SLIDE_SECONDS + FADE_SECONDS, ease: "easeOut" }
            }}
          >
            <Image
              src={heroSlide.image}
              alt=""
              fill
              priority={slideIndex === 0}
              sizes="100vw"
              className="object-cover opacity-[0.86]"
            />
          </motion.div>
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.14),rgba(3,3,3,0.42)_45%,#030303_100%),linear-gradient(90deg,#030303_0%,rgba(3,3,3,0.74)_29%,rgba(3,3,3,0.18)_62%,rgba(3,3,3,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_42%,rgba(197,139,59,0.16),transparent_34%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[92rem] flex-col justify-end gap-8 pb-10 pt-28 md:block md:pb-0 md:pt-0">
        <div className="max-w-md md:absolute md:left-0 md:top-[25%]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="eyebrow mb-4 text-ember">{slide.label}</p>
              <p className="text-lg leading-8 text-bone/90 md:text-xl">{slide.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <h1 className="max-w-[86rem] font-serif text-[14vw] font-normal uppercase leading-[0.78] text-bone drop-shadow-[0_0_38px_rgba(0,0,0,0.75)] sm:text-[11vw] md:absolute md:bottom-[21%] md:left-0 md:text-[9vw] lg:text-[8vw]">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={index}
              className="block"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.7, filter: "blur(14px)" }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, filter: "blur(6px)" }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {slide.title.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </motion.span>
          </AnimatePresence>
        </h1>

        <div className="grid items-end gap-5 border-t border-white/15 pt-6 md:absolute md:bottom-12 md:left-0 md:right-0 md:grid-cols-[1fr_auto_1fr]">
          <p className="max-w-md text-pretty text-sm leading-7 text-bone/82 md:pr-8">
            Una comunidad formada por Jesús, reunida en familia y enviada con propósito.
          </p>

          <p className="eyebrow text-bone/60">
            <span className="text-bone">{String(index + 1).padStart(2, "0")}</span> /{" "}
            {String(heroSlides.length).padStart(2, "0")}
          </p>

          <div className="flex md:justify-end">
            <a
              href="#identidad"
              aria-label="Bajar a identidad"
              className="group grid h-16 w-16 place-items-center rounded-full border border-white/24 bg-ink/22 text-bone backdrop-blur transition duration-500 hover:scale-105 hover:rotate-6 hover:border-ember hover:text-ember md:h-20 md:w-20"
            >
              <ArrowDown className="h-6 w-6 transition duration-500 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
