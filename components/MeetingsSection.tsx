"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { meetings } from "@/lib/data";
import { SectionLabel } from "@/components/SectionLabel";

export function MeetingsSection() {
  return (
    <section id="reuniones" className="bg-ink px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end"
        >
          <div className="space-y-7">
            <SectionLabel index="03" label="Reuniones" />
            <h2 className="max-w-3xl font-serif text-5xl uppercase leading-[0.92] text-bone sm:text-7xl">
              Nos reunimos
              <span className="block text-bone/62">para buscarle.</span>
            </h2>
          </div>
          <a
            href="https://maps.google.com/"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-bone/18 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-editorial text-bone/78 transition hover:border-ember hover:text-ember"
          >
            Cómo llegar
            <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
          </a>
        </motion.div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {meetings.map((meeting, index) => (
            <motion.article
              key={meeting.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-ink p-7 transition duration-500 hover:bg-[#11100e]"
            >
              <div className="mb-20 flex items-start justify-between gap-8">
                <p className="text-[0.68rem] font-semibold uppercase tracking-editorial text-ember">
                  {meeting.day}
                </p>
                <span className="font-serif text-5xl text-bone/18 transition group-hover:text-ember/70">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-serif text-4xl uppercase leading-none text-bone">{meeting.title}</h3>
              <p className="mt-5 text-sm uppercase tracking-[0.1em] text-bone/64">{meeting.time}</p>
              <p className="mt-8 max-w-xs text-sm leading-6 text-muted">{meeting.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
