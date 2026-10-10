"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";
import { routes } from "@/lib/routes";

const TRIAL_CHECKS = [
  "Usual live channels",
  "An on-demand film and a series",
  "Available audio and subtitles",
  "Player controls and picture quality",
];

export function HomepageFreeTrialSection() {
  return (
    <section
      id="free-trial"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div
          className="rounded-2xl border"
          style={{
            borderColor: "var(--feature-card-border)",
            backgroundColor: "transparent",
          }}
        >
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div
              className="flex flex-col items-center justify-center border-b p-8 text-center lg:border-b-0 lg:border-r lg:p-12"
              style={{ borderColor: "var(--feature-card-border)" }}
            >
              <FadeIn delay={0.05}>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: "var(--hero-muted)" }}
                >
                  Before you subscribe
                </span>
                <p className="mt-4 text-5xl font-black leading-none text-gradient-brand sm:text-6xl">
                  Free
                </p>
                <p className="mt-3 text-xl font-black uppercase" style={{ color: "var(--hero-accent)" }}>
                  trial
                </p>
                <p className="mt-6 text-sm font-semibold" style={{ color: "var(--hero-heading)" }}>
                  Duration confirmed by support
                </p>
              </FadeIn>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <FadeIn delay={0.1}>
                <h2
                  className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
                  style={{ color: "var(--hero-heading)" }}
                >
                  Request a Strong 8k Free Trial Before Subscribing
                </h2>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="mt-6 max-w-xl space-y-4 text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
                  <p>Contact us for a free trial. Support will confirm its availability, duration and start time.</p>
                  <p>Test your usual live channels, an on-demand film and a series. Check the available audio and subtitles, player controls and picture quality.</p>
                  <p>If you rely on EPG or catch-up, inspect those features on the channels that matter to you.</p>
                  <p>Ask questions before selecting a paid duration. A trial should help you understand the actual viewing experience and account requirements.</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {TRIAL_CHECKS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-[15px]">
                      <span className="mt-[9px] h-px w-3 shrink-0" style={{ background: "var(--grad-brand)" }} aria-hidden />
                      <span style={{ color: "var(--hero-muted)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-8">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link
                    href={`${routes.contactUs}?enquiry=free-trial`}
                    className="inline-flex items-center gap-2.5 rounded-xl px-7 py-4 text-[14px] font-bold transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                    style={{
                      background: "var(--hero-cta-primary-bg)",
                      boxShadow: "var(--hero-cta-primary-shadow)",
                      color: "var(--hero-cta-primary-fg)",
                    }}
                  >
                    Request a Free Trial
                  </Link>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
