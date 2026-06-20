"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { explorePages } from "@/lib/data";

export function ExploreSection() {
  return (
    <section id="explora" className="bg-cream px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="mb-16 border-t border-espresso/12 pt-10"
        >
          <p className="eyebrow text-brass">Conócenos</p>
          <h2 className="mt-4 max-w-3xl font-serif text-5xl uppercase leading-[0.86] text-espresso sm:text-6xl lg:text-7xl">
            Una casa con las puertas abiertas.
          </h2>
        </motion.div>

        <div className="border-t border-espresso/12">
          {explorePages.map((page, idx) => (
            <motion.div
              key={page.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, delay: idx * 0.06, ease: "easeOut" }}
            >
              <Link
                href={page.href}
                className="group grid items-center gap-4 border-b border-espresso/12 py-7 transition duration-300 hover:bg-espresso/[0.03] sm:grid-cols-[3rem_1fr_1fr_auto] sm:gap-8"
              >
                <p className="eyebrow text-brass">{page.index}</p>
                <h3 className="font-serif text-3xl uppercase leading-none text-espresso transition duration-300 group-hover:text-brass sm:text-4xl">
                  {page.label}
                </h3>
                <p className="max-w-sm text-sm leading-6 text-espresso/60">{page.description}</p>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-espresso/40 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brass" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
