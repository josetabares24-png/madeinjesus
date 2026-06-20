"use client";

import { motion } from "framer-motion";
import { communityGroups } from "@/lib/data";
import { SectionLabel } from "@/components/SectionLabel";

export function CommunitySection() {
  return (
    <section className="min-h-screen bg-cream px-5 py-32 sm:px-8 lg:px-12 lg:py-44">
      <div className="mx-auto grid max-w-[92rem] gap-16 border-t border-espresso/12 pt-10 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="space-y-10 lg:sticky lg:top-28 lg:self-start"
        >
          <SectionLabel index="04" label="Comunidad" />
          <h2 className="font-serif text-5xl uppercase leading-[0.86] text-espresso sm:text-7xl lg:text-[6.6rem]">
            No camines solo.
            <span className="block text-espresso/62">Hay una casa para ti.</span>
          </h2>
        </motion.div>

        <div className="border-y border-espresso/12">
          {communityGroups.map((group, index) => (
            <motion.article
              key={group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.72, delay: index * 0.055, ease: "easeOut" }}
              className="group grid grid-cols-[4rem_1fr] items-center border-b border-espresso/10 py-7 last:border-b-0"
            >
              <p className="eyebrow text-brass">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="font-serif text-4xl uppercase leading-none text-espresso transition duration-300 group-hover:translate-x-3 group-hover:text-brass sm:text-6xl">
                {group}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
