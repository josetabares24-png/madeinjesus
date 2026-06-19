"use client";

import { ArrowUpRight, Cross } from "lucide-react";
import { motion } from "framer-motion";
import { contactActions } from "@/lib/data";

export function ContactSection() {
  return (
    <section
      id="visitanos"
      className="relative overflow-hidden bg-coal px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[1fr_0.62fr] lg:items-end"
      >
        <div>
          <p className="mb-7 text-[0.68rem] font-semibold uppercase tracking-editorial text-ember">
            Contacto / Visítanos
          </p>
          <h2 className="max-w-5xl font-serif text-6xl uppercase leading-[0.82] text-bone sm:text-8xl lg:text-[8rem]">
            ¿Vienes por primera vez?
          </h2>
          <p className="mt-9 max-w-xl text-lg leading-8 text-muted">
            Queremos conocerte, recibirte y ayudarte a dar tu próximo paso.
          </p>
        </div>

        <div className="space-y-4">
          <div className="mb-8 grid h-28 w-28 place-items-center rounded-full border border-ember/40 text-ember">
            <Cross className="h-8 w-8" />
          </div>
          {contactActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="group flex items-center justify-between gap-5 border-b border-white/10 py-5 text-sm font-semibold uppercase tracking-editorial text-bone/80 transition hover:border-ember/60 hover:text-ember"
            >
              <span>{action.label}</span>
              <ArrowUpRight className="h-5 w-5 shrink-0 transition group-hover:rotate-45" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
