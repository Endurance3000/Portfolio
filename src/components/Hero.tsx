"use client";

import { motion } from "framer-motion";
import ContourField from "./ContourField";
import { profile } from "@/data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] flex-col overflow-hidden border-b border-rule"
    >
      <ContourField />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-28 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="diagnostic mb-6"
        >
          {profile.role} — {profile.institution}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="max-w-4xl font-serif text-[13vw] leading-[0.95] tracking-tight text-ink sm:text-[9vw] md:text-[7rem] lg:text-[7.5rem]"
        >
          {profile.firstName}
          <span className="text-signal">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
          className="mt-6 max-w-xl font-serif text-xl italic leading-snug text-ink-soft sm:text-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          <a
            href="#projects"
            data-cursor="lock"
            className="diagnostic group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-paper transition-colors hover:bg-signal"
          >
            View builds
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            data-cursor="lock"
            className="diagnostic underline decoration-rule-strong decoration-1 underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Bottom meta strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 grid grid-cols-2 gap-4 border-t border-rule px-6 py-4 backdrop-blur-[2px] sm:grid-cols-4 md:px-10"
      >
        <MetaItem label="Based in" value={profile.location} />
        <MetaItem label="Field" value="Comp. Engineering" />
        <MetaItem label="Status" value="Open to internships" />
        <MetaItem label="Cursor" value="Move to warp the grid" hideOnMobile />
      </motion.div>
    </section>
  );
}

function MetaItem({
  label,
  value,
  hideOnMobile,
}: {
  label: string;
  value: string;
  hideOnMobile?: boolean;
}) {
  return (
    <div className={hideOnMobile ? "hidden sm:block" : ""}>
      <p className="diagnostic mb-1 text-graphite-light">{label}</p>
      <p className="text-sm text-ink-soft">{value}</p>
    </div>
  );
}
