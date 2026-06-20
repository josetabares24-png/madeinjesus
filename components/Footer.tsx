import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactActions, meetings, navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/12 bg-ink px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div className="space-y-5">
          <p className="font-serif text-2xl uppercase tracking-wide text-bone">Made in Jesús</p>
          <p className="max-w-xs text-sm leading-7 text-bone/60">
            Una comunidad formada por Jesús, reunida en familia y enviada con propósito.
          </p>
        </div>

        <div className="space-y-5">
          <p className="eyebrow text-ember">Navegación</p>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-bone/62 transition duration-300 hover:text-ember">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <p className="eyebrow text-ember">Reuniones</p>
          <ul className="space-y-3">
            {meetings.map((meeting) => (
              <li key={meeting.title} className="text-sm leading-6 text-bone/62">
                <span className="text-bone/85">{meeting.day}</span> · {meeting.time}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <p className="eyebrow text-ember">Contacto</p>
          <ul className="space-y-3">
            {contactActions.map((action) => (
              <li key={action.label}>
                <a
                  href={action.href}
                  className="group inline-flex items-center gap-2 text-sm text-bone/62 transition duration-300 hover:text-ember"
                >
                  {action.label}
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition group-hover:rotate-45" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[92rem] flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-bone/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Made in Jesús</p>
        <p>Hechos por Él. Hechos para Él.</p>
      </div>
    </footer>
  );
}
