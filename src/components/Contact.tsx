"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/content";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from "./icons/BrandIcons";

const EASE = [0.16, 1, 0.3, 1] as const;

const SOCIAL_LINKS = [
  { name: "GitHub", url: profile.socials.github, icon: GithubIcon, note: "Code & commits" },
  { name: "LinkedIn", url: profile.socials.linkedin, icon: LinkedinIcon, note: "Professional" },
  { name: "Instagram", url: profile.socials.instagram, icon: InstagramIcon, note: "Off the clock" },
  { name: "Facebook", url: profile.socials.facebook, icon: FacebookIcon, note: "Off the clock" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="diagnostic mb-6 text-signal">Contact</p>
          <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Open to internships, collaborations, and conversations about anything.
          </h2>

          <a
            href="mailto:hello@sanishshrestha.dev"
            data-cursor="lock"
            className="diagnostic mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-lg text-ink transition-colors hover:border-signal hover:text-signal"
          >
            hello@sanishshrestha.dev
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2 md:grid-cols-4">
          {SOCIAL_LINKS.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="lock"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
              className="group flex flex-col justify-between gap-6 bg-paper p-6 transition-colors hover:bg-paper-raised"
            >
              <div className="flex items-center justify-between">
                <link.icon
                  size={22}
                  className="text-ink-soft transition-colors group-hover:text-signal"
                />
                <ArrowUpRight
                  size={16}
                  className="text-graphite-light transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                />
              </div>
              <div>
                <p className="font-serif text-lg text-ink">{link.name}</p>
                <p className="diagnostic mt-1 text-graphite-light">{link.note}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-24 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-rule pt-8 sm:flex-row sm:items-center">
        <p className="diagnostic text-graphite-light">
          {profile.name} — {profile.location}
        </p>
        <p className="diagnostic text-graphite-light">© 2026 — Built with Passion (also Next.js & Framer Motion)</p>
      </div>
    </section>
  );
}
