"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { messages } from "@/lib/data";
import { SectionLabel } from "@/components/SectionLabel";

function MessageMedia({ message }: { message: (typeof messages)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  if (message.video) {
    return (
      <>
        <video
          ref={videoRef}
          src={message.video}
          poster={message.image}
          playsInline
          controls={playing}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {!playing && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/18 to-transparent" />
            <button
              type="button"
              aria-label={`Reproducir ${message.title}`}
              onClick={() => {
                videoRef.current?.play();
                setPlaying(true);
              }}
              className="absolute right-5 top-5 grid h-14 w-14 place-items-center rounded-full border border-white/22 bg-[#050505]/35 text-bone backdrop-blur transition duration-500 group-hover:rotate-45 group-hover:border-brass group-hover:text-brass"
            >
              <Play className="h-5 w-5 fill-current" />
            </button>
          </>
        )}
      </>
    );
  }

  return (
    <>
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
        className="absolute right-5 top-5 grid h-14 w-14 place-items-center rounded-full border border-white/22 bg-[#050505]/35 text-bone backdrop-blur transition duration-500 group-hover:rotate-45 group-hover:border-brass group-hover:text-brass"
      >
        <Play className="h-5 w-5 fill-current" />
      </button>
    </>
  );
}

export function MessagesSection() {
  return (
    <section className="min-h-screen bg-cream px-5 py-32 sm:px-8 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="mb-16 grid gap-10 border-t border-espresso/12 pt-10 lg:grid-cols-[0.52fr_1fr]"
        >
          <SectionLabel index="03" label="Mensajes" />
          <h2 className="max-w-5xl font-serif text-4xl uppercase leading-[0.86] text-espresso sm:text-7xl lg:text-[6.4rem]">
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
              className="group border-t border-espresso/12 pt-5"
            >
              <div className={`relative overflow-hidden ${index === 0 ? "aspect-[16/10] lg:aspect-[4/5]" : "aspect-[4/5]"}`}>
                <MessageMedia message={message} />
              </div>

              <div className="grid gap-5 border-b border-espresso/10 py-6 sm:grid-cols-[0.45fr_1fr] lg:grid-cols-1">
                <p className="eyebrow text-brass">{message.category}</p>
                <div>
                  <h3 className="font-serif text-4xl uppercase leading-[0.92] text-espresso">{message.title}</h3>
                  <p className="eyebrow mt-4 text-espresso/45">{message.series}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
