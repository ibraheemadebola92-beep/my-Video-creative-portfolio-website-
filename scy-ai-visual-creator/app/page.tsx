"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";

const specialties = [
  "AI Video Creation",
  "AI Image Generation",
  "Cinematic Storytelling",
  "Creative Direction",
  "Prompt Engineering",
  "Digital Campaigns",
  "Brand Visuals",
  "Social Media Content",
  "Product Visuals",
  "UGC & Advertisements",
  "Motion & Visual Design",
  "Creative Concepts",
  "AI-Assisted Editing",
  "Content Strategy",
];

const tools = [
  "Veo",
  "Kling",
  "Flow",
  "ElevenLabs",
  "CapCut",
  "ChatGPT",
  "Gemini",
  "Midjourney",
  "Adobe Creative Tools",
  "Sanity",
  "Next.js",
];

const process = [
  {
    number: "01",
    title: "Brief & Concept",
    description:
      "Understanding the idea, audience, brand and creative objective before production begins.",
  },
  {
    number: "02",
    title: "Prompt Engineering & Generation",
    description:
      "Turning concepts into detailed visual instructions and generating the core creative assets.",
  },
  {
    number: "03",
    title: "Editing & Refinement",
    description:
      "Combining generated assets with editing, sound, pacing, visual continuity and storytelling.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "Preparing polished, platform-ready creative assets that communicate the intended message.",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
              AI Visual Creator • Creative Director
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
              AI Visual
              <br />
              Creator
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60 sm:text-xl">
              I create cinematic AI-powered visuals, digital experiences and
              creative campaigns that turn ideas into compelling visual
              stories.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 dark:bg-white dark:text-black"
              >
                View Work
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-black/10 px-5 py-24 dark:border-white/10 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400">
              01 / ABOUT ME
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Creating with AI.
              <br />
              Thinking beyond AI.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-black/60 dark:text-white/60">
              <p>
                I am Ibrahim Adebola, an AI Visual Creator and Creative
                Director focused on transforming ideas into powerful visual
                experiences.
              </p>

              <p>
                I combine artificial intelligence, visual storytelling,
                creative direction and modern digital tools to develop
                cinematic videos, digital creatives, brand visuals and
                experimental concepts.
              </p>

              <p>
                My approach is simple: use technology as a creative advantage,
                while keeping the human idea at the center of the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400">
            02 / CREATIVE SPECIALTIES
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            A creative toolkit built around AI.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10 dark:bg-white/10">
            {specialties.map((item, index) => (
              <div
                key={item}
                className="bg-white p-6 transition-colors hover:bg-black hover:text-white dark:bg-[#0a0a0a] dark:hover:bg-white dark:hover:text-black"
              >
                <span className="mb-8 block text-xs text-black/40 dark:text-white/40">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section
        id="approach"
        className="border-y border-black/10 bg-black px-5 py-24 text-white dark:border-white/10 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-blue-400">
              03 / CREATIVE APPROACH
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              Technology is the tool.
              <br />
              The idea comes first.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/60">
              I don't use AI simply because it is new. I use it when it helps
              make an idea faster, more visual, more experimental or more
              powerful.
            </p>

            <h3 className="mt-12 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Who I Create For
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Brands",
                "Businesses",
                "Startups",
                "Creators",
                "Digital Marketers",
                "Agencies",
                "Product Teams",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400">
            04 / TOOLS & TECHNOLOGIES
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium dark:border-white/15"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="border-t border-black/10 px-5 py-24 dark:border-white/10 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400">
                05 / SELECTED WORK
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                Selected creative work.
              </h2>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold"
            >
              Explore Journal
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="group relative aspect-video overflow-hidden rounded-2xl border border-black/10 bg-neutral-100 dark:border-white/10 dark:bg-neutral-900"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/80">
                    <Play size={18} fill="currentColor" />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Project {item.toString().padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Creative Project Coming Soon
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* CERTIFICATES */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400">
            06 / CERTIFICATES
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Learning. Building. Improving.
          </h2>

          <p className="mt-6 max-w-2xl text-black/60 dark:text-white/60">
            A growing collection of certifications and learning milestones
            across AI, technology and creative tools.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-black/10 px-5 py-24 dark:border-white/10 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400">
            07 / TESTIMONIALS
          </p>

          <div className="mt-12 max-w-4xl">
            <Sparkles className="mb-8 text-blue-600 dark:text-blue-400" />

            <blockquote className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              “Great creative work starts with understanding the idea, not
              simply generating an image.”
            </blockquote>

            <p className="mt-8 text-sm text-black/50 dark:text-white/50">
              Client testimonials will appear here through Sanity CMS.
            </p>
          </div>
        </div>
      </section>

      {/* CREATIVE PROCESS */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400">
            08 / CREATIVE PROCESS
          </p>

          <div className="mt-14 grid border-t border-black/10 dark:border-white/10">
            {process.map((item) => (
              <div
                key={item.number}
                className="grid gap-6 border-b border-black/10 py-10 dark:border-white/10 md:grid-cols-[100px_1fr_1fr]"
              >
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  {item.number}
                </span>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="text-sm leading-7 text-black/60 dark:text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-black px-5 py-24 text-white sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.25em] text-blue-400">
            09 / CONTACT
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-black tracking-tight sm:text-8xl">
            Have an idea?
            <br />
            Let&apos;s create it.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            Have a visual concept, campaign, product or creative idea you want
            to bring to life? Let&apos;s talk about it.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:scyintelligence@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              scyintelligence@gmail.com
            </a>

            <a
              href="https://wa.me/2348103348891"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-black"
            >
              WhatsApp
            </a>

            <a
              href="https://t.me/scyintelligence"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-black"
            >
              Telegram
            </a>
          </div>

          <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Ibrahim Adebola / SCY Intelligence
            </p>

            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/ibraheem-adebola-a0a404405/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/ibraheemadebola92-beep"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
