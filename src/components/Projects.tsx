"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { projects } from "@/data/content";
import { SectionHeading } from "./About";

const EASE = [0.16, 1, 0.3, 1] as const;

const STATUS_LABEL: Record<string, string> = {
  "in development": "In development",
  "academic submission": "Academic submission — local only",
  "experimental build": "Experimental build",
};

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <section id="projects" className="border-b border-rule px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Builds" title="What's actually been shipped" />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="mt-6 max-w-2xl text-graphite"
        >
          Three projects, none of them finished products — all of them real code,
          written and run, with honest status notes instead of polished demo links.
        </motion.p>

        <div className="mt-14 divide-y divide-rule border-t border-b border-rule">
          {projects.map((project, i) => {
            const open = openId === project.id;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              >
                <button
                  onClick={() => setOpenId(open ? null : project.id)}
                  data-cursor="lock"
                  aria-expanded={open}
                  className="group flex w-full items-start justify-between gap-6 py-8 text-left"
                >
                  <div className="flex flex-1 items-start gap-6">
                    <span className="diagnostic mt-2 text-graphite-light">
                      {project.index}
                    </span>
                    <div>
                      <p className="diagnostic mb-1 text-graphite">{project.kicker}</p>
                      <h3 className="font-serif text-3xl text-ink transition-colors group-hover:text-signal md:text-4xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-4">
                    <span
                      className={`diagnostic hidden whitespace-nowrap rounded-full border px-3 py-1.5 sm:inline-block ${
                        project.accent === "signal"
                          ? "border-signal/40 text-signal"
                          : "border-moss/40 text-moss"
                      }`}
                    >
                      {STATUS_LABEL[project.status]}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="text-graphite"
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-8 pb-10 pl-0 md:grid-cols-[1.4fr_1fr] md:pl-16">
                        <div>
                          <p className="diagnostic mb-3 text-graphite-light sm:hidden">
                            {STATUS_LABEL[project.status]}
                          </p>
                          <p className="text-lg leading-relaxed text-ink-soft">
                            {project.description}
                          </p>
                          <ul className="mt-5 space-y-3">
                            {project.details.map((d, idx) => (
                              <li key={idx} className="flex gap-3 text-sm text-graphite">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border border-rule bg-paper-raised p-5">
                          <p className="diagnostic mb-3 text-graphite-light">Stack</p>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((s) => (
                              <span
                                key={s}
                                className="diagnostic rounded border border-rule-strong bg-paper px-2.5 py-1 text-ink-soft"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                          <p className="diagnostic mt-5 mb-1 text-graphite-light">Year</p>
                          <p className="text-sm text-ink-soft">{project.year}</p>

                          <a
                            href="https://github.com/Endurance3000"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor="lock"
                            className="diagnostic mt-5 flex w-fit items-center gap-2 text-graphite transition-colors hover:text-signal"
                          >
                            <GithubIcon size={14} />
                            See GitHub profile
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
