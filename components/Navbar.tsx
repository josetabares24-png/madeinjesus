"use client";

import { motion } from "framer-motion";
import { navItems } from "@/lib/data";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8 lg:px-12"
    >
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-8 border-b border-white/10 pb-5">
        <a
          href="#inicio"
          className="shrink-0 text-[0.72rem] font-semibold uppercase tracking-editorial text-bone"
          aria-label="Made in Jesús inicio"
        >
          Made in Jesús
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.68rem] font-semibold uppercase tracking-editorial text-bone/68 transition hover:text-ember"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#visitanos"
          className="rounded-full border border-bone/20 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-editorial text-bone/80 transition hover:border-ember/70 hover:text-ember"
        >
          Primera vez
        </a>
      </nav>
    </motion.header>
  );
}
