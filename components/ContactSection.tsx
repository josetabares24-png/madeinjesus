"use client";

import { ArrowUpRight, Cross } from "lucide-react";
import { motion } from "framer-motion";
import { contactActions } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="visitanos" className="relative overflow-hidden bg-[#050505] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(197,139,59,0.16),transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative z-10 mx-auto grid max-w-[92rem] gap-14 border-t border-white/12 pt-10 lg:grid-cols-[1fr_0.58fr] lg:items-end"
      >
        <div>
          <p className="eyebrow mb-8 text-[#c58b3b]">Contacto / Visítanos</p>
          <h2 className="max-w-5xl font-serif text-5xl uppercase leading-[0.84] text-[#f5f0e8] sm:text-7xl lg:text-[6.2rem]">
            ¿Vienes por primera vez?
          </h2>
          <p className="mt-9 max-w-xl text-lg leading-8 text-[#b8aa98]">
            Queremos conocerte, recibirte y ayudarte a dar tu próximo paso.
          </p>
        </div>

        <div>
          <div className="mb-10 grid h-24 w-24 place-items-center rounded-full border border-[#c58b3b]/48 text-[#c58b3b]">
            <Cross className="h-8 w-8" />
          </div>

          <div className="border-y border-white/12">
            {contactActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="eyebrow group flex items-center justify-between gap-5 border-b border-white/10 py-5 text-[#f5f0e8]/76 transition duration-300 last:border-b-0 hover:text-[#c58b3b]"
              >
                <span>{action.label}</span>
                <ArrowUpRight className="h-5 w-5 shrink-0 transition group-hover:rotate-45" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
