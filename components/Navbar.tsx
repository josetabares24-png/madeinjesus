"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8 lg:px-12"
    >
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between gap-8 rounded-2xl border border-white/12 bg-ink/80 px-5 py-4 shadow-glow backdrop-blur-md">
        <Link href="/" className="eyebrow text-bone" aria-label="Made in Jesús inicio">
          Made in Jesús
        </Link>

        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`eyebrow transition duration-300 hover:text-ember ${
                pathname === item.href ? "text-ember" : "text-bone/62"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className="eyebrow rounded-full border border-white/14 px-4 py-2 text-bone/78 transition duration-300 hover:border-ember/70 hover:text-ember"
          >
            Primera vez
          </Link>

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
            className="mx-auto mt-2 max-w-[92rem] overflow-hidden rounded-2xl border border-white/12 bg-ink/92 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`eyebrow border-b border-white/8 py-4 transition duration-300 last:border-b-0 hover:text-ember ${
                    pathname === item.href ? "text-ember" : "text-bone/72"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
