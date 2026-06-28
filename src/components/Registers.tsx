"use client";

import { motion } from "framer-motion";
import { registers, stack } from "@/data/content";
import { SectionHeading } from "./About";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Registers() {
  return (
    <section
      id="registers"
      className="border-b border-rule bg-paper-raised px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Method" title="Two registers, one habit" />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="mt-6 max-w-2xl text-graphite"
        >
          Every project below sits somewhere between two ways of working. Neither is
          &ldquo;better&rdquo; — they cover for each other&rsquo;s blind spots.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {registers.map((reg, i) => (
            <motion.div
              key={reg.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              className="bg-paper p-8 md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl text-ink md:text-3xl">
                  {reg.label}
                </h3>
                <span
                  className={`diagnostic ${
                    i === 0 ? "text-moss" : "text-signal"
                  }`}
                >
                  {i === 0 ? "Platforms" : "Systems"}
                </span>
              </div>
              <p className="mt-4 text-ink-soft">{reg.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {reg.examples.map((ex) => (
                  <li
                    key={ex}
                    className="diagnostic rounded-full border border-rule-strong px-3 py-1.5 text-graphite"
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stack ticker */}
        <div className="mt-16">
          <p className="diagnostic mb-5 text-graphite-light">Working with, currently</p>
          <div className="flex flex-wrap gap-3">
            {stack.map((item, i) => (
              <motion.span
                key={item.name}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.03, ease: EASE }}
                className="diagnostic rounded border border-rule bg-paper px-3 py-2 text-ink-soft transition-colors hover:border-signal hover:text-signal"
              >
                {item.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
