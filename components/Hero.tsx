"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

const titleLines = ["MADE", "IN JESÚS"];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden border-b border-white/10 bg-ink"
      aria-label="Made in Jesús hero"
    >
      <motion.div
        className="absolute inset-0 bg-ink"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-x-4 bottom-24 top-24 overflow-hidden border border-white/10 sm:inset-x-[16vw] sm:bottom-20 sm:top-24 lg:inset-x-[31vw] lg:bottom-14 lg:top-24"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/hero-poster.svg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 38vw, (min-width: 640px) 68vw, 100vw"
            className="object-cover opacity-78"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/20" />
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_39%,rgba(200,145,76,0.15),transparent_27%),linear-gradient(90deg,rgba(5,5,5,0.96),rgba(5,5,5,0.5)_48%,rgba(5,5,5,0.96)),linear-gradient(180deg,rgba(5,5,5,0.35),rgba(5,5,5,0.94))]" />
        <div className="absolute left-1/2 top-24 hidden h-[calc(100%-9rem)] w-px bg-gradient-to-b from-transparent via-bone/14 to-transparent md:block" />
        <div className="absolute bottom-10 left-5 right-5 h-px bg-gradient-to-r from-transparent via-bone/14 to-transparent sm:left-8 sm:right-8 lg:left-12 lg:right-12" />
      </motion.div>

      <div className="noise" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[92rem] flex-col px-5 pb-8 pt-32 sm:px-8 lg:px-12">
        <div className="flex flex-1 flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-5 text-[0.68rem] font-semibold uppercase tracking-editorial text-ember sm:mb-7"
          >
            UNA CASA · UNA FE · UN NOMBRE
          </motion.p>

          <h1 className="max-w-5xl font-serif text-7xl font-normal uppercase leading-[0.78] text-bone sm:text-8xl md:text-[8rem] lg:text-[11rem]">
            {titleLines.map((line, index) => (
              <span className="block overflow-hidden" key={line}>
                <motion.span
                  className="block"
                  initial={{ y: "105%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1.05,
                    delay: 0.38 + index * 0.16,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 max-w-xl text-lg text-bone/84 sm:text-xl"
          >
            Hechos por Él. Hechos para Él.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid items-end gap-8 md:grid-cols-[1fr_auto_1fr]"
        >
          <p className="max-w-sm text-pretty text-sm uppercase leading-6 tracking-[0.08em] text-bone/66">
            Una comunidad formada por Jesús, reunida en familia y enviada con propósito.
          </p>
          <div className="hidden text-[0.68rem] font-semibold uppercase tracking-editorial text-bone/54 md:block">
            01 / 05
          </div>
          <div className="flex justify-start md:justify-end">
            <a
              href="#identidad"
              className="group grid h-24 w-24 place-items-center rounded-full border border-bone/28 bg-bone/[0.03] text-bone shadow-glow backdrop-blur transition duration-500 hover:scale-105 hover:border-ember hover:bg-ember/10"
              aria-label="Explorar Made in Jesús"
            >
              <ArrowDownRight className="h-7 w-7 transition duration-500 group-hover:rotate-45 group-hover:text-ember" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
