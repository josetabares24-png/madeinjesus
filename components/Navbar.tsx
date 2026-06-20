"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8 lg:px-12"
    >
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-8 border-b border-white/10 pb-5">
        <a href="#inicio" className="eyebrow text-bone" aria-label="Made in Jesús inicio">
          Made in Jesús
        </a>

        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="eyebrow text-bone/62 transition duration-300 hover:text-ember"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#visitanos"
            className="eyebrow rounded-full border border-white/14 px-4 py-2 text-bone/78 transition duration-300 hover:border-ember/70 hover:text-ember"
          >
            Primera vez
          </a>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/14 text-bone transition duration-300 hover:border-ember/70 hover:text-ember md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mx-auto max-w-[92rem] overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="eyebrow border-b border-white/8 py-4 text-bone/72 transition duration-300 hover:text-ember"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
