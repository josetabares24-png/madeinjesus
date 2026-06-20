"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { messages } from "@/lib/data";
import { SectionLabel } from "@/components/SectionLabel";

export function MessagesSection() {
  return (
    <section id="mensajes" className="bg-[#050505] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="mb-16 grid gap-10 border-t border-white/12 pt-10 lg:grid-cols-[0.52fr_1fr]"
        >
          <SectionLabel index="04" label="Mensajes" />
          <h2 className="max-w-5xl font-serif text-5xl uppercase leading-[0.86] text-[#f5f0e8] sm:text-7xl lg:text-[6.4rem]">
            Palabras que despiertan fe.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:items-end">
          {messages.map((message, index) => (
            <motion.article
              key={message.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: "easeOut" }}
              className="group border-t border-white/12 pt-5"
            >
              <div className={`relative overflow-hidden ${index === 0 ? "aspect-[16/10] lg:aspect-[4/5]" : "aspect-[4/5]"}`}>
                <Image
                  src={message.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover opacity-[0.82] transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/18 to-transparent" />
                <button
                  aria-label={`Reproducir ${message.title}`}
                  className="absolute right-5 top-5 grid h-14 w-14 place-items-center rounded-full border border-white/22 bg-[#050505]/35 text-[#f5f0e8] backdrop-blur transition duration-500 group-hover:rotate-45 group-hover:border-[#c58b3b] group-hover:text-[#c58b3b]"
                >
                  <Play className="h-5 w-5 fill-current" />
                </button>
              </div>

              <div className="grid gap-5 border-b border-white/10 py-6 sm:grid-cols-[0.45fr_1fr] lg:grid-cols-1">
                <p className="eyebrow text-[#c58b3b]">{message.category}</p>
                <div>
                  <h3 className="font-serif text-4xl uppercase leading-[0.92] text-[#f5f0e8]">{message.title}</h3>
                  <p className="eyebrow mt-4 text-[#f5f0e8]/45">{message.series}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
