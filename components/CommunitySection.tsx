"use client";

import { motion } from "framer-motion";
import { communityGroups } from "@/lib/data";
import { SectionLabel } from "@/components/SectionLabel";

export function CommunitySection() {
  return (
    <section className="bg-ink px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="sticky top-28 space-y-8 self-start"
        >
          <SectionLabel index="05" label="Comunidad" />
          <h2 className="max-w-lg font-serif text-5xl uppercase leading-[0.9] text-bone sm:text-7xl">
            No camines solo.
            <span className="block text-bone/62">Hay una casa para ti.</span>
          </h2>
        </motion.div>

        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
          {communityGroups.map((group, index) => (
            <motion.article
              key={group}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group min-h-52 bg-ink p-7 transition duration-500 hover:bg-[#11100e]"
            >
              <p className="mb-16 text-[0.68rem] font-semibold uppercase tracking-editorial text-bone/42">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-5xl uppercase leading-none text-bone transition group-hover:text-ember">
                {group}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
