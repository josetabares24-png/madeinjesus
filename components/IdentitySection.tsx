"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";

export function IdentitySection() {
  return (
    <section id="identidad" className="bg-[#050505] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="mx-auto grid max-w-[92rem] gap-12 border-t border-white/12 pt-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="space-y-8">
          <SectionLabel index="02" label="Identidad" />
          <p className="max-w-xs text-xs font-semibold uppercase leading-6 tracking-[0.12em] text-[#f5f0e8]/46">
            No somos definidos por una estética, sino por Aquel a quien pertenecemos.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.72fr] lg:items-end">
          <h2 className="font-serif text-5xl uppercase leading-[0.84] text-[#f5f0e8] sm:text-7xl lg:text-[6.6rem]">
            No es una marca.
            <span className="block text-[#f5f0e8]/62">Es una identidad.</span>
          </h2>

          <p className="max-w-md text-pretty text-base leading-8 text-[#b8aa98]">
            Somos una comunidad que cree en Jesús, vive en familia y camina con propósito. No somos definidos por lo que hacemos, sino por Aquel a quien pertenecemos.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
