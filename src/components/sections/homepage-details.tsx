"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";
import { routes } from "@/lib/routes";

const DEVICES = [
  ["Compatible Fire OS Firestick or Fire TV", "Our app through Downloader, or TiviMate where compatible"],
  ["Android TV, Google TV and TV boxes", "Our compatible app or a supported TV player"],
  ["Android phones and tablets", "Our compatible app or a touchscreen player"],
  ["Samsung, LG and other Smart TVs", "A suitable player from the television’s app store"],
  ["iPhone and iPad", "iPlayTV AIO, UHF, GSE Smart IPTV or IBO Player Pro where compatible"],
  ["Windows and Mac", "A compatible IBO Player or IBO Player Pro version"],
  ["Roku", "A compatible IBO player available for the model and region"],
];

function Block({
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
        <FadeIn delay={0.05}>
          <h2
            className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            {title}
          </h2>
        </FadeIn>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
          <RevealParts>{children}</RevealParts>
        </div>
      </Container>
    </section>
  );
}

const linkClass = "font-semibold underline transition-colors hover:text-[var(--hero-accent)]";

export function HomepageDetails() {
  return (
    <>
      <Block id="content-requests" title="Request Your Favourite Films and Series Through Support">
        <p>
          If your favourite film or series is missing, contact us. We accept content
          requests and can arrange additions where the requested title is available for the service.
        </p>
        <p>
          Send the title, release year and preferred language. For a series, include
          the season and episode numbers. Mention subtitles if you need them.
        </p>
        <p>
          A clear request helps us find the correct programme, especially when several
          films share a name or a series has different versions.
        </p>
        <p>
          We will check the request and explain availability. The time needed depends
          on the content and source, so additions are not promised immediately.
        </p>
        <p>
          You can also ask about a missing language, season or available quality option
          for a title already in the library.
        </p>
        <Link href={`${routes.contactUs}?enquiry=content-request`} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          Send a Content Request
        </Link>
      </Block>

      <Block id="live-events" title="Follow UK Television and the Latest Live Event Updates">
        <p>
          Our service is aimed mainly at UK viewers, with prices in pounds and setup
          information written in British English.
        </p>
        <p>
          For a live event, send support the event name and scheduled date. We can help
          you check the current information and find the relevant available category.
        </p>
        <p>
          Before an important programme begins, open the app and test playback. Check
          that your account is active and that other screens are not using connections you need.
        </p>
        <p>
          If an available feed fails, tell us the channel or event, when it stopped and
          whether other content still plays.
        </p>
        <p>
          Event updates help you follow current availability. They are not a guarantee
          that every event or competition worldwide is included.
        </p>
      </Block>

      <Block id="picture-quality" title="Enjoy HD, Full HD and Available UHD Picture Quality">
        <p>Strong 8k offers available HD, Full HD and UHD streams.</p>
        <p>
          The picture you receive depends on the source, player, device, display and
          connection. A UHD television does not turn every channel into a genuine UHD source.
        </p>
        <p>
          For everyday programmes, a consistent HD or FHD picture may suit your setup.
          For available UHD content, check that the device and screen support it and that
          the connection remains stable.
        </p>
        <p>Strong 8k is the brand name. It does not mean that every stream is supplied in 8K.</p>
        <p>
          During a trial, test the content and resolution you actually intend to watch.
          If you need a particular quality option, ask support to check that channel or title.
        </p>
      </Block>

      <section id="device-compatibility" className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <FadeIn delay={0.05}>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]" style={{ color: "var(--hero-heading)" }}>
              Watch Strong 8k on Your Preferred Supported Device
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-3xl text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
              We support the main device families used for IPTV, subject to the exact
              model, operating system and compatible player.
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Your device</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Typical setup</th>
                </tr>
              </thead>
              <tbody>
                {DEVICES.map(([device, setup]) => (
                  <tr key={device} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{device}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{setup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </FadeIn>
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <RevealParts>
            <p>If you already use another device or player, tell us its name before ordering. We can check its account requirements.</p>
            <p>The installation guide also explains what to check for Apple TV, MAG, Formuler, Enigma2, Linux and browser viewing.</p>
            <Link href={routes.installationGuide} className={linkClass} style={{ color: "var(--hero-heading)" }}>
              Find Your Installation Instructions
            </Link>
            </RevealParts>
          </div>
        </Container>
      </section>

      <Block id="app-code" title="Install Our App Using the Current Downloader Code">
        <p>For compatible Fire OS and Android devices, install Downloader by AFTVnews and enter:</p>
        <p className="text-3xl font-black tracking-tight text-gradient-brand">4330396</p>
        <p>The previous version used 439873. Follow the current guide when installing the app or ask support about updating an existing version.</p>
        <p>The code installs the app. It does not create a subscription or provide login access.</p>
        <p>After installation, contact support for your account details and enter them using the method supplied.</p>
        <p>Check the app destination before installing. If your Fire TV uses Vega OS or your device does not support the installation route, ask us for a suitable alternative.</p>
      </Block>

      <Block id="connections" title="Choose How Many Screens You Want Playing Together">
        <p>Choose your connection allowance around simultaneous viewing.</p>
        <p>One connection can suit someone who watches on one device at a time. Two connections can suit a household where two people watch different programmes together. Three or four connections allow the corresponding number of simultaneous streams.</p>
        <p>Installing the player on another device does not increase the account’s allowance.</p>
        <p>For example, watching on a TV at one time and a phone later is different from playing both at once.</p>
        <p>Tell us the screens and locations you need. We will confirm the permitted account arrangement before ordering.</p>
        <Link href={routes.subscriptionPlans} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          View connection prices
        </Link>
      </Block>

      <Block id="guide-catchup" title="Check Programme Guide Information and Available Catch-Up Coverage">
        <p>An EPG shows programme information where schedule data is supplied and supported by the player.</p>
        <p>Our EPG coverage is limited. Some channels may play without showing a complete schedule.</p>
        <p>Catch-up allows replay of supported programmes. Our catch-up availability is also limited, and replay periods can differ.</p>
        <p>A programme appearing in the guide does not prove that a replay is available. Likewise, a player advertising catch-up does not supply an archive for every channel.</p>
        <p>If either feature matters to you, check the specific channels during a trial or ask support before subscribing.</p>
      </Block>

      <Block id="languages" title="Find Available Audio Languages and Subtitles for Your Viewing">
        <p>Explore available programmes in different languages alongside UK content.</p>
        <p>Audio tracks and subtitles vary by title. Tell support which language you need and whether you prefer original audio, dubbed content or subtitles.</p>
        <p>Some catalogues use labels such as VO for original version, VF for French-language versions and VOSTFR for original audio with French subtitles. These labels describe versions; they do not guarantee a language option on every title.</p>
        <p>For English subtitles or another requirement, check the specific content you want. We can also handle enquiries about available animation, anime and film genres without assuming every category contains a particular release.</p>
      </Block>

      <Block id="playback" title="Get Help Keeping Playback Stable on Your Setup">
        <p>We focus on reliable viewing and provide support when something stops working.</p>
        <p>A playback issue can involve a source, device, app or connection. Notice whether it affects one channel, one title or the whole catalogue before contacting us.</p>
        <p>Check your account expiry and simultaneous connection allowance. Restart the player, then tell us if the problem continues.</p>
        <p>For Wi-Fi viewing, signal strength and other household activity can affect playback. A wired connection can help where supported.</p>
        <p>Terms such as anti-freeze IPTV appear in service advertising, but no label guarantees that playback can never pause. Test your own setup and ask about actual symptoms when you need assistance.</p>
      </Block>

      <Block id="support" title="Contact Our Support Team Before and After Subscribing">
        <p>Our customer support is available 24/7 for subscription, installation and service enquiries.</p>
        <p>We can help you choose a plan, check your device, use the app code, add account details and report a playback problem.</p>
        <p>You can also contact us about content requests, live events, renewals and reseller access.</p>
        <p>For a technical question, send your device model, player name, account reference and the message on screen. Explain whether other content works.</p>
        <p>Keep passwords and full playlist links out of public posts and screenshots.</p>
        <Link href={routes.contactUs} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          Contact Customer Support
        </Link>
      </Block>

      <Block id="reseller" title="Run Your Own Reseller Dashboard with Personal Branding">
        <p>Our reseller dashboard starts with a minimum initial purchase of 120 credits.</p>
        <p>After payment, we activate the panel using your supplied email address and username.</p>
        <p>Ask about your own domain, personal panel URL, VPS arrangements and a compatible URL for VPN use. We provide reseller support and confirm the credit price before purchase.</p>
        <Link href={routes.resellerPanel} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          Explore Reseller Options
        </Link>
      </Block>
    </>
  );
}
