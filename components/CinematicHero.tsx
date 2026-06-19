"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { heroSlides } from "@/lib/data";

const slide = heroSlides[0];

export function CinematicHero() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-screen w-full overflow-hidden bg-[#030303] px-5 sm:px-8 lg:px-12"
    >
      <div className="grain" />

      <div className="absolute inset-0 z-0 bg-[#030303]">
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-78"
          />
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.14),rgba(3,3,3,0.42)_45%,#030303_100%),linear-gradient(90deg,#030303_0%,rgba(3,3,3,0.74)_29%,rgba(3,3,3,0.18)_62%,rgba(3,3,3,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_42%,rgba(197,139,59,0.16),transparent_34%)]" />
      </div>

      <div className="relative z-10 mx-auto h-full max-w-[92rem]">
        <div className="absolute left-0 top-[25%] max-w-md">
          <p className="eyebrow mb-4 text-[#c58b3b]">{slide.label}</p>
          <p className="text-lg leading-8 text-[#f5f0e8]/90 md:text-xl">{slide.subtitle}</p>
        </div>

        <h1 className="absolute bottom-[21%] left-0 max-w-[86rem] font-serif text-[18vw] font-normal uppercase leading-[0.78] text-[#f5f0e8] drop-shadow-[0_0_38px_rgba(0,0,0,0.75)] sm:text-[15vw] md:text-[12vw] lg:text-[11.5vw]">
          <span className="block">MADE</span>
          <span className="block">IN JESÚS</span>
        </h1>

        <div className="absolute bottom-12 left-0 right-0 grid items-end gap-5 border-t border-white/15 pt-6 md:grid-cols-[1fr_auto_1fr]">
          <p className="max-w-md text-pretty text-sm leading-7 text-[#f5f0e8]/82 md:pr-8">
            Una comunidad formada por Jesús, reunida en familia y enviada con propósito.
          </p>

          <p className="eyebrow text-[#f5f0e8]/60">
            <span className="text-[#f5f0e8]">01</span> / 05
          </p>

          <div className="flex md:justify-end">
            <a
              href="#identidad"
              aria-label="Bajar a identidad"
              className="group grid h-16 w-16 place-items-center rounded-full border border-white/24 bg-[#030303]/22 text-[#f5f0e8] backdrop-blur transition duration-500 hover:scale-105 hover:rotate-6 hover:border-[#c58b3b] hover:text-[#c58b3b] md:h-20 md:w-20"
            >
              <ArrowDown className="h-6 w-6 transition duration-500 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
