"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";

const METHODS = [
  "A server URL, username and password.",
  "A complete M3U playlist link.",
  "A device ID, MAC address or key for account linking.",
];

export function InstallationBeforeStart() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
            Prepare Your Device and Account Before Starting Installation
          </h2>
        </FadeIn>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
          <p>Have your device make and model, an internet connection and an active trial or subscription ready.</p>
          <p>Contact support for your login details. Depending on the player, setup may use:</p>
          <ul className="space-y-2">
            {METHODS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-[9px] h-px w-3 shrink-0" style={{ background: "var(--grad-brand)" }} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>Some third-party players have a separate licence charge. An app licence and a Strong 8k viewing subscription are separate purchases.</p>
          <p>If you already have a player installed, tell support its name so we can check the correct account method.</p>
        </div>
      </Container>
    </section>
  );
}
