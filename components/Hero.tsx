"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="inicio" className="relative flex h-screen min-h-screen w-full flex-col justify-end overflow-hidden bg-[#050505] px-5 pb-10 pt-32 sm:px-8 md:pb-20 lg:px-12">
      <div className="grain" />

      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.045, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/hero-worship.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.18),rgba(5,5,5,0.58)_46%,#050505_100%),linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.72)_33%,rgba(5,5,5,0.2)_66%,rgba(5,5,5,0.72)_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex h-full w-full max-w-[92rem] flex-col justify-end"
      >
        <div className="mb-8 md:mb-12">
          <p className="eyebrow mb-4 text-[#c58b3b]">UNA CASA · UNA FE · UN NOMBRE</p>
          <p className="max-w-md text-lg leading-8 text-[#f5f0e8]/76 md:text-xl">
            Hechos por Él. Hechos para Él.
          </p>
        </div>

        <h1 className="mb-12 max-w-[78rem] font-serif text-6xl font-normal uppercase leading-[0.86] text-[#f5f0e8] sm:text-8xl md:text-[84px] lg:text-[118px]">
          MADE IN JESÚS
        </h1>

        <div className="grid w-full items-end gap-7 border-t border-white/15 pt-6 md:grid-cols-[1fr_auto_1fr]">
          <p className="max-w-md text-pretty text-sm leading-7 text-[#f5f0e8]/78 md:pr-8">
            Una comunidad formada por Jesús, reunida en familia y enviada con propósito.
          </p>

          <p className="eyebrow text-[#f5f0e8]/60">
            <span className="text-[#f5f0e8]">01</span> / 05
          </p>

          <div className="flex md:justify-end">
            <a
              href="#identidad"
              aria-label="Bajar a identidad"
              className="group grid h-16 w-16 place-items-center rounded-full border border-white/24 bg-[#050505]/20 text-[#f5f0e8] backdrop-blur transition duration-500 hover:scale-105 hover:rotate-6 hover:border-[#c58b3b] hover:text-[#c58b3b] md:h-20 md:w-20"
            >
              <ArrowDown className="h-6 w-6 transition duration-500 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
