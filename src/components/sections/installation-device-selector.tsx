"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { DEVICE_GUIDES, type DeviceGuide } from "@/data/device-guides";
import { routes } from "@/lib/routes";

const DEVICES = DEVICE_GUIDES;

function GuideBody({ device }: { device: DeviceGuide }) {
  return (
    <div className="space-y-6">
      {device.intro ? (
        <p className="text-[15px] leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
          {device.intro}
        </p>
      ) : null}

      {device.steps ? (
        <ol className="space-y-3">
          {device.steps.map((step, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-xl border p-4 text-sm leading-[1.7] sm:text-[15px]"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
                color: "var(--feature-body)",
              }}
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--hero-accent) 18%, transparent)",
                  color: "var(--hero-accent)",
                }}
              >
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      ) : null}

      {device.alternative ? (
        <p className="text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
          {device.alternative}
        </p>
      ) : null}

      {device.note ? (
        <p
          className="rounded-xl border px-4 py-3 text-sm leading-[1.7]"
          style={{
            borderColor: "var(--feature-card-border)",
            color: "var(--hero-muted)",
            backgroundColor: "transparent",
          }}
        >
          <span className="font-semibold" style={{ color: "var(--hero-heading)" }}>
            Note:{" "}
          </span>
          {device.note}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <a
          href="#choose-device"
          className="inline-flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold"
          style={{ borderColor: "var(--hero-btn-border)", color: "var(--hero-heading)" }}
        >
          Change Device
        </a>
        <Link
          href={`${routes.contactUs}?enquiry=installation`}
          className="inline-flex items-center justify-center rounded-xl bg-gradient-brand px-4 py-3 text-sm font-bold text-black"
        >
          {device.helpLabel}
        </Link>
      </div>
    </div>
  );
}

export function InstallationDeviceSelector() {
  return (
    <section
      id="choose-device"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Choose your device
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--hero-heading)" }}
          >
            Choose Your Device for Strong 8k Setup Instructions
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
            Select the box that matches your device. Your recommended apps and installation steps will appear below.
          </p>
        </FadeIn>

        <nav className="mt-10 flex flex-wrap gap-2 sm:gap-3" aria-label="Device guides">
          {DEVICES.map((device) => {
            const Icon = device.Icon;
            return (
              <a
                key={device.id}
                href={`#${device.id}`}
                className="inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)]"
                style={{
                  borderColor: "var(--feature-card-border)",
                  color: "var(--hero-muted)",
                  backgroundColor: "transparent",
                }}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                <span className="hidden sm:inline">{device.label}</span>
                <span className="sm:hidden">{device.shortLabel}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-10 space-y-6">
          {DEVICES.map((device) => (
            <article
              key={device.id}
              id={device.id}
              className="scroll-mt-28 rounded-2xl border p-6 sm:p-8 md:p-10"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
              }}
            >
              <h2
                className="max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[34px]"
                style={{ color: "var(--hero-heading)" }}
              >
                {device.title}
              </h2>
              <div className="mt-6">
                <GuideBody device={device} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
