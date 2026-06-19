"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";

export function IdentitySection() {
  return (
    <section id="identidad" className="relative bg-coal px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <SectionLabel index="02" label="Identidad" />
          <p className="max-w-md text-sm uppercase leading-7 tracking-[0.08em] text-muted">
            Somos una comunidad que cree en Jesús, vive en familia y camina con propósito. No somos definidos por lo que hacemos, sino por Aquel a quien pertenecemos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-5 top-2 hidden h-[86%] w-px bg-gradient-to-b from-transparent via-ember/60 to-transparent lg:block" />
          <h2 className="max-w-4xl font-serif text-5xl uppercase leading-[0.9] text-bone sm:text-7xl lg:text-8xl">
            No es una marca.
            <span className="block text-bone/70">Es una identidad.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
