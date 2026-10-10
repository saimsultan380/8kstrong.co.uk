"use client";

import { Tv, Trophy, Film, Clapperboard, Newspaper, Baby, Globe, Music } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";

const INCLUDED = [
  "40,000+ available live channels.",
  "140,000+ VOD titles, including films and series.",
  "UK-focused and international viewing.",
  "HD, FHD and UHD options where supported.",
  "Multilingual content, with audio and subtitles varying by title.",
  "Requests for favourite films and series.",
  "Live event updates and availability enquiries.",
  "Limited catch-up on supported channels and programmes.",
  "Limited EPG programme information.",
  "Our app for compatible Fire OS and Android devices.",
  "Help setting up supported devices and players.",
  "24/7 customer support.",
  "Plans for one or more simultaneous connections.",
];

const CATEGORIES = [
  {
    id: "uk",
    icon: Tv,
    title: "UK television and entertainment",
    description: "Available UK-focused programmes and everyday viewing",
  },
  {
    id: "sports",
    icon: Trophy,
    title: "Live sports",
    description: "Available football, rugby, cricket, motorsport, boxing and other events",
  },
  {
    id: "films",
    icon: Film,
    title: "Films",
    description: "On-demand films across available genres and languages",
  },
  {
    id: "series",
    icon: Clapperboard,
    title: "Series and box sets",
    description: "Available seasons and episodes within the VOD library",
  },
  {
    id: "news",
    icon: Newspaper,
    title: "News and factual programmes",
    description: "News, current affairs and documentary viewing",
  },
  {
    id: "family",
    icon: Baby,
    title: "Children and family",
    description: "Available animation and family programmes",
  },
  {
    id: "international",
    icon: Globe,
    title: "International content",
    description: "Channels and titles from different countries and languages",
  },
  {
    id: "music",
    icon: Music,
    title: "Music and radio",
    description: "Available listening and music channels",
  },
];

export function EverythingIncludedSection() {
  return (
    <section
      id="content-library"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mb-12 max-w-4xl md:mb-16">
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Included with every plan
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Everything Included with Your Live and On-Demand Subscription
            </h2>
          </FadeIn>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-[1.65] sm:text-[15px]">
              <span
                className="mt-[9px] h-px w-3 shrink-0"
                style={{ background: "var(--grad-brand)" }}
                aria-hidden
              />
              <span style={{ color: "var(--hero-muted)" }}>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
          A specific channel, title or feature can change. If something is essential
          to your viewing, ask us to check it before choosing a plan.
        </p>

        <div className="mb-12 mt-20 max-w-4xl md:mb-16">
          <h2
            className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Explore Our UK Channels and On-Demand Content Catalogue
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
            Browse UK television, live sports and on-demand entertainment across the
            main categories below.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} direction="up" delay={0.04 * i} once className="h-full">
                <div
                  className="flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300 hover:border-[var(--hero-accent)]"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--feature-card-border)",
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: "var(--hero-accent)" }} strokeWidth={1.75} />
                  <p className="mt-5 text-lg font-bold leading-snug" style={{ color: "var(--hero-heading)" }}>
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-[1.65]" style={{ color: "var(--feature-body)" }}>
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-10 max-w-3xl space-y-4 text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
          <RevealParts>
          <p>
            For live television, save your regular channels as favourites if the player
            supports it. This gives you a shorter list for everyday use.
          </p>
          <p>
            For films, check the available version, audio language and subtitles.
            Different versions of a title may have different quality or language options.
          </p>
          <p>
            For series, browse the available seasons and episodes. If something is
            missing, send the exact season and episode information to support. Films,
            series and box sets are included within the 140,000+ VOD library.
          </p>
          <p>
            The categories describe the type of content offered. Ask us for current
            availability rather than assuming that a particular channel or title is included.
          </p>
          </RevealParts>
        </div>
      </Container>
    </section>
  );
}
