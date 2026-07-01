"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <section id="about" className="border-b border-rule px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Profile" title="Who's building this" />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            {profile.bio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className={`text-lg leading-relaxed text-ink-soft md:text-xl ${
                  i === 0 ? "font-serif text-2xl md:text-3xl" : ""
                }`}
              >
                {para}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="corner-ticks border border-rule bg-paper-raised p-6"
          >
            <p className="diagnostic mb-5 text-graphite-light">Field notes</p>
            <dl className="space-y-4">
              <Fact term="Location" value={profile.location} />
              <Fact term="Institution" value={profile.institution} />
              <Fact term="Currently" value="Pursuing Computer Engineering" />
              <Fact term="Working in" value="Django, React, Three.js, C++" />
              <Fact term="Interested in" value="Where rendering, input, and data security meet" />
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Fact({ term, value }: { term: string; value: string }) {
  return (
    <div className="border-t border-rule pt-3 first:border-t-0 first:pt-0">
      <dt className="diagnostic mb-1 text-graphite-light">{term}</dt>
      <dd className="text-sm text-ink-soft">{value}</dd>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="flex items-baseline gap-4"
    >
      <span className="diagnostic text-signal">{eyebrow}</span>
      <span className="h-px flex-1 bg-rule" />
      <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
