"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const ISSUES = [
  {
    id: "login",
    title: "The account details are rejected",
    body: "Check the server URL, username and password, or complete M3U link. Look for missing characters or accidental spaces and confirm the account is active.",
  },
  {
    id: "catalogue",
    title: "The catalogue does not load",
    body: "Restart the player and check the internet connection. Send support the exact message shown.",
  },
  {
    id: "channels",
    title: "One channel or title fails",
    body: "Try another item. Report the affected channel or title and when the problem occurred.",
  },
  {
    id: "connections",
    title: "Playback stops when another device starts",
    body: "Check the simultaneous connection allowance and close streams you are not using.",
  },
  {
    id: "epg",
    title: "Programme information is missing",
    body: "EPG coverage is limited. Refresh the guide where supported and check the player’s time zone.",
  },
  {
    id: "catchup",
    title: "Catch-up is unavailable",
    body: "Catch-up is limited to supported channels and programmes. Ask support about the specific content.",
  },
  {
    id: "licence",
    title: "The player requests a licence payment",
    body: "Check the app licence separately from your Strong 8k subscription.",
  },
  {
    id: "older-app",
    title: "You have an older app installed",
    body: "The current code is 4330396. The previous version used 439873. Ask support about updating your existing installation.",
  },
];

export function InstallationTroubleshooting() {
  return (
    <section
      id="troubleshooting"
      className="relative py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Troubleshooting
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-[42px]">
            Fix Common Strong 8k Login and Playback Problems
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {ISSUES.map((issue, i) => (
            <ScrollReveal key={issue.id} direction="up" delay={0.04 * i} once className="h-full">
              <article
                className="flex h-full flex-col rounded-2xl border p-5 sm:p-6"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                  style={{
                    borderColor: "var(--feature-icon-border)",
                    color: "var(--hero-accent)",
                  }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-4 text-base font-bold leading-snug sm:text-lg"
                  style={{ color: "#ffffff" }}
                >
                  {issue.title}
                </h3>
                <p
                  className="mt-2.5 flex-1 text-sm leading-[1.75]"
                  style={{ color: "var(--feature-body)" }}
                >
                  {issue.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p
            className="mt-10 text-sm sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            Technical support continues throughout your active subscription, including after the
            first seven days. Contact us with your device, app and a description of the problem.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
