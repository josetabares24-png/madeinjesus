"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { reels } from "@/lib/data";

function ReelCard({ reel }: { reel: (typeof reels)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    videoRef.current?.play();
    setPlaying(true);
  }

  return (
    <div className="shrink-0 snap-start">
      <div className="group relative aspect-[9/16] w-[72vw] max-w-[280px] overflow-hidden sm:w-[280px]">
        <video
          ref={videoRef}
          src={reel.src}
          poster={reel.poster}
          playsInline
          controls={playing}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className="h-full w-full object-cover"
        />
        {!playing && (
          <button
            type="button"
            aria-label="Reproducir video"
            onClick={play}
            className="absolute inset-0 grid place-items-center bg-[#050505]/22 transition duration-300 group-hover:bg-[#050505]/32"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full border border-white/30 bg-[#050505]/45 text-bone backdrop-blur transition duration-300 group-hover:border-brass group-hover:text-brass">
              <Play className="h-6 w-6 fill-current" />
            </span>
          </button>
        )}
      </div>
      <p className="mt-4 max-w-[280px] text-sm leading-6 text-espresso/64">{reel.caption}</p>
    </div>
  );
}

export function ReelsSection() {
  return (
    <section className="bg-cream px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="mb-16 border-t border-espresso/12 pt-10"
        >
          <p className="eyebrow text-brass">Devocionales</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl uppercase leading-[0.86] text-espresso sm:text-6xl lg:text-7xl">
            Fe que cabe en un minuto.
          </h2>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reels.map((reel) => (
            <ReelCard key={reel.src} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}
