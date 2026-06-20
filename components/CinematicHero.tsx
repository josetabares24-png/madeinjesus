"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import { ArrowDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, useSpring } from "framer-motion";
import { heroSlides } from "@/lib/data";

const SLIDE_SECONDS = 6.5;

export function CinematicHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const tiltX = useSpring(0, { stiffness: 60, damping: 18, mass: 0.4 });
  const tiltY = useSpring(0, { stiffness: 60, damping: 18, mass: 0.4 });

  function handleSlideComplete() {
    if (shouldReduceMotion || paused) return;
    setIndex((current) => (current + 1) % heroSlides.length);
  }

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
    setPaused(false);
  }

  const slide = heroSlides[index];

  return (
    <section
      className="relative h-screen min-h-screen w-full overflow-hidden bg-ink px-5 sm:px-8 lg:px-12"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 z-0 bg-ink" style={{ perspective: 1200 }}>
        <motion.div className="absolute inset-0" style={{ rotateX: tiltX, rotateY: tiltY }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/cielo-hero-poster.jpg"
            className="h-full w-full object-cover"
          >
            <source src="/videos/cielo-loop.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.08),rgba(3,3,3,0.22)_50%,rgba(3,3,3,0.64)_100%),linear-gradient(90deg,rgba(3,3,3,0.58)_0%,rgba(3,3,3,0.24)_38%,transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_42%,rgba(197,139,59,0.12),transparent_34%)]" />
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

          <div className="flex items-center gap-2" role="tablist" aria-label="Diapositivas del hero">
            {heroSlides.map((_, slideIndex) => {
              const status = slideIndex < index ? "done" : slideIndex === index ? "active" : "upcoming";
              return (
                <button
                  key={slideIndex}
                  type="button"
                  role="tab"
                  aria-selected={status === "active"}
                  aria-label={`Ir a la diapositiva ${slideIndex + 1}`}
                  onClick={() => setIndex(slideIndex)}
                  className="relative h-[3px] w-9 overflow-hidden rounded-full bg-white/20 transition-colors hover:bg-white/35 md:w-12"
                >
                  <span
                    onAnimationEnd={status === "active" ? handleSlideComplete : undefined}
                    className="absolute inset-y-0 left-0 block w-full bg-ember"
                    style={
                      status === "done"
                        ? { transform: "scaleX(1)", transformOrigin: "left" }
                        : status === "active"
                        ? {
                            transformOrigin: "left",
                            transform: shouldReduceMotion ? "scaleX(1)" : undefined,
                            animationName: shouldReduceMotion ? "none" : "hero-bar-fill",
                            animationDuration: `${SLIDE_SECONDS}s`,
                            animationTimingFunction: "linear",
                            animationFillMode: "forwards",
                            animationPlayState: paused ? "paused" : "running"
                          }
                        : { transform: "scaleX(0)", transformOrigin: "left" }
                    }
                  />
                </button>
              );
            })}
          </div>

          <div className="flex md:justify-end">
            <a
              href="#explora"
              aria-label="Bajar a contenido"
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
