"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { meetings } from "@/lib/data";
import { SectionLabel } from "@/components/SectionLabel";

export function MeetingsSection() {
  return (
    <section className="min-h-screen bg-cream px-5 py-32 sm:px-8 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="mb-16 grid gap-10 border-t border-espresso/12 pt-10 lg:grid-cols-[0.62fr_1fr] lg:items-end"
        >
          <SectionLabel index="02" label="Reuniones" />
          <div className="space-y-8">
            <h2 className="max-w-4xl font-serif text-5xl uppercase leading-[0.86] text-espresso sm:text-7xl lg:text-[6.8rem]">
              Nos reunimos para buscarle.
            </h2>
            <a
              href="https://maps.google.com/"
              className="eyebrow group inline-flex items-center gap-3 border-b border-brass/60 pb-2 text-brass"
            >
              Cómo llegar
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </a>
          </div>
        </motion.div>

        <div className="border-y border-espresso/12">
          {meetings.map((meeting, index) => (
            <motion.article
              key={meeting.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.72, delay: index * 0.08, ease: "easeOut" }}
              className="group grid gap-5 border-b border-espresso/10 py-7 last:border-b-0 md:grid-cols-[0.18fr_0.42fr_1fr_0.38fr] md:items-center"
            >
              <p className="eyebrow text-brass">{meeting.number}</p>
              <p className="eyebrow text-espresso/58">{meeting.day}</p>
              <div>
                <h3 className="font-serif text-4xl uppercase leading-none text-espresso transition group-hover:text-brass">
                  {meeting.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-espresso/64">{meeting.description}</p>
              </div>
              <p className="eyebrow text-espresso/78 md:text-right">{meeting.time}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
