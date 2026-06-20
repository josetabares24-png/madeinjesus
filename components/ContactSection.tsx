"use client";

import { ArrowUpRight, Cross } from "lucide-react";
import { motion } from "framer-motion";
import { contactActions } from "@/lib/data";

export function ContactSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream px-5 py-32 sm:px-8 lg:px-12 lg:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(159,113,56,0.14),transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative z-10 mx-auto grid max-w-[92rem] gap-14 border-t border-espresso/12 pt-10 lg:grid-cols-[1fr_0.58fr] lg:items-end"
      >
        <div>
          <p className="eyebrow mb-8 text-brass">Contacto / Visítanos</p>
          <h2 className="max-w-5xl font-serif text-5xl uppercase leading-[0.84] text-espresso sm:text-7xl lg:text-[6.2rem]">
            ¿Vienes por primera vez?
          </h2>
          <p className="mt-9 max-w-xl text-lg leading-8 text-espresso/64">
            Queremos conocerte, recibirte y ayudarte a dar tu próximo paso.
          </p>
        </div>

        <div>
          <div className="mb-10 grid h-24 w-24 place-items-center rounded-full border border-brass/48 text-brass">
            <Cross className="h-8 w-8" />
          </div>

          <div className="border-y border-espresso/12">
            {contactActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="eyebrow group flex items-center justify-between gap-5 border-b border-espresso/10 py-5 text-espresso/76 transition duration-300 last:border-b-0 hover:text-brass"
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
