"use client";

import { motion } from "framer-motion";
import { navItems } from "@/lib/data";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8 lg:px-12"
    >
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-8 border-b border-white/10 pb-5">
        <a href="#inicio" className="eyebrow text-[#f5f0e8]" aria-label="Made in Jesús inicio">
          Made in Jesús
        </a>

        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="eyebrow text-[#f5f0e8]/62 transition duration-300 hover:text-[#c58b3b]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#visitanos"
          className="eyebrow rounded-full border border-white/14 px-4 py-2 text-[#f5f0e8]/78 transition duration-300 hover:border-[#c58b3b]/70 hover:text-[#c58b3b]"
        >
          Primera vez
        </a>
      </nav>
    </motion.header>
  );
}
