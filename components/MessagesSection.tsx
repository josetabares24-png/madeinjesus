"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { messages } from "@/lib/data";
import { SectionLabel } from "@/components/SectionLabel";

export function MessagesSection() {
  return (
    <section id="mensajes" className="relative bg-coal px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 grid gap-9 lg:grid-cols-[1fr_0.72fr] lg:items-end"
        >
          <div className="space-y-7">
            <SectionLabel index="04" label="Mensajes" />
            <h2 className="max-w-4xl font-serif text-5xl uppercase leading-[0.9] text-bone sm:text-7xl lg:text-8xl">
              Palabras que despiertan fe
            </h2>
          </div>
          <p className="max-w-md text-sm uppercase leading-7 tracking-[0.08em] text-muted lg:justify-self-end">
            Predicaciones y conversaciones para formar una fe viva, profunda y cotidiana.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {messages.map((message, index) => (
            <motion.article
              key={message.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-ink">
                <Image
                  src={message.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover opacity-82 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/18 to-transparent" />
                <button
                  className="absolute right-5 top-5 grid h-14 w-14 place-items-center rounded-full border border-bone/24 bg-ink/32 text-bone backdrop-blur transition group-hover:rotate-45 group-hover:border-ember group-hover:text-ember"
                  aria-label={`Reproducir ${message.title}`}
                >
                  <Play className="h-5 w-5 fill-current" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-editorial text-ember">
                    {message.meta}
                  </p>
                  <h3 className="font-serif text-4xl uppercase leading-[0.9] text-bone">{message.title}</h3>
                  <p className="mt-4 text-sm uppercase tracking-[0.1em] text-bone/58">{message.speaker}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
