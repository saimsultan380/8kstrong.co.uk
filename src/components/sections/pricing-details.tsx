"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PRICING_PLAN_FEATURES } from "@/lib/plans";
import { routes } from "@/lib/routes";
import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";

function Prose({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn delay={0.05}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
              {title}
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <RevealParts>{children}</RevealParts>
          </div>
        </div>
      </Container>
    </section>
  );
}

const linkClass = "font-semibold underline";

const PRICING_FAQS: FaqItem[] = [
  {
    id: "change-connections",
    q: "Can I change my connection allowance after ordering?",
    a: "Contact us with your current subscription details and the number of simultaneous streams you now require. Support will confirm the available arrangement and any price adjustment before a change is made.",
  },
  {
    id: "replacement-device",
    q: "Can I move my subscription to a replacement device?",
    a: "Tell support the old and new device models, along with the player you want to use. The required steps depend on whether your setup uses direct credentials, a playlist or device activation.",
  },
  {
    id: "player-licence",
    q: "Does an IPTV premium subscription include a player licence?",
    a: "Third-party players have their own activation and licence conditions. Ask support whether your chosen player requires a separate payment before completing your subscription order.",
  },
  {
    id: "native-8k",
    q: "Does an IPTV 8k subscription mean every stream is native 8K?",
    a: "Strong 8k is our brand name. The subscription offers available HD, FHD and UHD sources. The resolution of an individual channel or title determines its available picture quality.",
  },
];

export function PricingDetails() {
  return (
    <>
      <Prose title="See What Every Strong 8k Subscription Plan Includes">
        <p>The following catalogue and service features apply across all subscription durations and connection options:</p>
        <ul className="space-y-2">
          {PRICING_PLAN_FEATURES.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[9px] h-px w-3 shrink-0" style={{ background: "var(--grad-brand)" }} aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Individual channels, titles, languages and features can change. If a particular programme, channel or viewing feature is essential to you, ask us about its current availability before choosing a plan.
        </p>
      </Prose>

      <Prose title="Request Favourite Films, Series and Live Event Updates">
        <p>Looking for a favourite film or series that you cannot find in the catalogue? Send the title to our support team.</p>
        <p>Include the release year where possible. For a series, tell us which season or episodes you want. These details help us identify the correct content and avoid confusion between titles with similar names.</p>
        <p>We can add requested films and series to the server, subject to availability. Support will confirm what can be added and any available update on the request.</p>
        <p>For live events, send the event name, date and approximate start time. We provide event updates and can help you check the available viewing options before it begins.</p>
        <Link href={`${routes.contactUs}?enquiry=content-request`} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          Request Content or Ask About an Event
        </Link>
      </Prose>

      <Prose title="Understand Picture Quality, Programme Guides and Catch-Up Availability">
        <p>Available streams include HD, FHD and UHD sources. The quality you receive depends on the channel or title, your device, the player and your internet connection.</p>
        <p>A UHD-capable television can display a suitable UHD source, but the source itself determines the available picture detail. Ask us about a particular channel or programme if its resolution matters to your choice.</p>
        <p>EPG availability is limited. Programme information may appear for some channels while being unavailable or incomplete for others. The player you use can also affect how the guide is displayed.</p>
        <p>Catch-up is also limited. It is available only for supported content and requires a player that can use the supplied catch-up information. Check a particular channel with support before relying on catch-up for a programme you want to watch.</p>
      </Prose>

      <Prose title="Check Your Devices Before Ordering a Strong 8k Subscription">
        <p>Tell us which devices you intend to use so we can recommend the appropriate installation route.</p>
        <p>Supported setups include compatible Smart TVs, Firestick and Fire TV devices, Android devices, iPhone, iPad, Apple TV, Windows, Mac and Roku. The available player and installation method depend on the exact model and operating system.</p>
        <p>Our current app uses Downloader code 4330396 on compatible Fire OS and Android devices. The earlier code 439873 belongs to the previous version.</p>
        <p>For compatible Android TV devices, TiviMate is another player option. Samsung and LG televisions use an available player from their own app stores, while Apple TV and other platforms require an app compatible with that platform.</p>
        <p>If you already have a player, send us its exact name before ordering. We can check whether it supports the account method supplied for your subscription.</p>
        <Link href={routes.installationGuide} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          Open the Strong 8k Installation Guide
        </Link>
      </Prose>

      <Prose title="Request a Free Trial Before Choosing Your Subscription">
        <p>Contact us for a Strong 8k free trial and tell us which device you want to test.</p>
        <p>The trial gives you an opportunity to check the available catalogue, use the recommended player and assess playback on your own internet connection. Test the channels and on-demand categories that matter most to you.</p>
        <p>Support will confirm the trial duration, access details and any applicable conditions when arranging it.</p>
        <p>Testing your intended device is particularly useful if you are considering UHD viewing or a player you have not used before. If you need several simultaneous streams, tell support so the connection requirement can be discussed.</p>
        <Link href={`${routes.contactUs}?enquiry=free-trial`} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          Request Your Free Trial
        </Link>
      </Prose>

      <Prose title="Order Your Strong 8k IPTV Subscription in Simple Steps">
        <ol className="list-decimal space-y-3 pl-5">
          <li>Select your connections. Choose the number of streams you need playing simultaneously.</li>
          <li>Choose your duration. Select a one-month, three-month, six-month or twelve-month plan.</li>
          <li>Send your device details. Tell us the device model and player you intend to use.</li>
          <li>Confirm your order. Check the total price, connection allowance, location arrangement and activation details before payment.</li>
          <li>Follow the supplied setup instructions. Use your account details with the recommended app or compatible player.</li>
          <li>Keep your login information private. If setup requires device activation, send the required identifiers directly to support.</li>
        </ol>
        <p>Our customer support is available 24/7 for subscription enquiries and assistance with the supported setup process.</p>
        <p>
          If you intend to sell subscriptions to your own customers, visit the{" "}
          <Link href={routes.resellerPanel} className={linkClass} style={{ color: "var(--hero-heading)" }}>
            Strong 8k Reseller Panel
          </Link>{" "}
          for business enquiries.
        </p>
      </Prose>

      <Prose title="Renew Your Strong 8k Subscription Before Access Expires">
        <p>For subscription renewal, contact us with your existing order reference or the account information requested by support.</p>
        <p>Tell us whether you want to keep your current duration and connection allowance or discuss a different arrangement. We will confirm the available renewal option and its price before you pay.</p>
        <p>For an existing Strong8k account, make clear that you are renewing. This helps support identify the correct subscription and explain how the renewal will apply.</p>
        <p>If you also want to change devices, mention this in the same enquiry. Some players use direct account credentials, while others require device linking or a refreshed playlist.</p>
        <Link href={`${routes.contactUs}?enquiry=renewal`} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          Ask About Subscription Renewal
        </Link>
      </Prose>

      <FaqAccordionSection
        faqs={PRICING_FAQS}
        defaultOpenId="change-connections"
        eyebrow="FAQ"
        description="Connections, devices, player licences and picture quality."
        title={<>Answers to Common Questions About Strong 8k Subscriptions</>}
      />
      <Prose title="Need help choosing your subscription?">
        <p>Send us your device details, preferred duration and required connection allowance. We can help you check the plan before you order.</p>
        <Link href={routes.contactUs} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          Contact Strong 8k About Your Subscription
        </Link>
      </Prose>
    </>
  );
}
