"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "home", label: "Index" },
  { id: "about", label: "Profile" },
  { id: "registers", label: "Method" },
  { id: "projects", label: "Builds" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-rule" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#home"
          data-cursor="lock"
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          S.SHRESTHA <span className="text-graphite-light">/ portfolio.v1</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                data-cursor="lock"
                className={`diagnostic relative pb-1 transition-colors ${
                  active === s.id ? "text-ink" : "text-graphite hover:text-ink"
                }`}
              >
                {s.label}
                {active === s.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0 left-0 h-[1.5px] w-full bg-signal"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          data-cursor="lock"
          className="diagnostic hidden rounded-full border border-ink px-4 py-2 transition-colors hover:bg-ink hover:text-paper md:inline-flex"
        >
          Say hello →
        </a>

        <MobileMenu sections={SECTIONS} active={active} />
      </nav>
    </motion.header>
  );
}

function MobileMenu({
  sections,
  active,
}: {
  sections: { id: string; label: string }[];
  active: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        data-cursor="lock"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
          className="h-[1.5px] w-5 bg-ink"
        />
        <motion.span
          animate={{ opacity: open ? 0 : 1 }}
          className="h-[1.5px] w-5 bg-ink"
        />
        <motion.span
          animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
          className="h-[1.5px] w-5 bg-ink"
        />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed left-0 right-0 top-[57px] z-40 border-b border-rule bg-paper px-6 py-4 shadow-sm"
        >
          <ul className="flex flex-col gap-4">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`diagnostic block py-1 ${
                    active === s.id ? "text-signal" : "text-graphite"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
