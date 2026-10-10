"use client";

import { Container } from "@/components/layout/container";
import { SMART_TV_PLAYERS } from "@/data/device-guides";

export function InstallationAppsCodes() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
            Recommended Apps for Different Smart TV Models
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
            Choose from the following players where a compatible version is available for your television.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Recommended player</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Setup guidance</th>
                </tr>
              </thead>
              <tbody>
                {SMART_TV_PLAYERS.map(([player, guidance]) => (
                  <tr key={player} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{player}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{guidance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 max-w-3xl space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
            <p>Player availability varies by television, operating system and region. The list does not mean that every app is available on every model.</p>
            <p>Check the app’s publisher and setup instructions, particularly where similarly named players appear.</p>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
            Add Your Account Using the Correct Login Method
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
            Use the setup method supplied for your account and supported by your player.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border p-6" style={{ borderColor: "var(--feature-card-border)" }}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Xtream Codes</h3>
              <p className="mt-3 text-sm leading-[1.7]" style={{ color: "var(--hero-muted)" }}>
                Enter the supplied server URL, username and password. Copy the information accurately, including any required port or path. A profile name is usually your own label inside the player.
              </p>
            </article>
            <article className="rounded-2xl border p-6" style={{ borderColor: "var(--feature-card-border)" }}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>M3U playlist</h3>
              <p className="mt-3 text-sm leading-[1.7]" style={{ color: "var(--hero-muted)" }}>
                Enter the complete playlist link in the player’s playlist URL field. Do not shorten the address or remove parts. If a separate EPG URL is needed, use the information supplied by support.
              </p>
            </article>
            <article className="rounded-2xl border p-6" style={{ borderColor: "var(--feature-card-border)" }}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Device activation</h3>
              <p className="mt-3 text-sm leading-[1.7]" style={{ color: "var(--hero-muted)" }}>
                Some players display a device ID, MAC address or key. Send the required identifiers privately, together with the app name. After account linking, refresh or restart the player.
              </p>
            </article>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
            Keep passwords and full private playlist links out of public posts and screenshots.
          </p>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
            Check Live Channels and On-Demand Playback After Installation
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>Once the catalogue loads:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Open a live channel.</li>
              <li>Test an on-demand film.</li>
              <li>Play an available series episode.</li>
              <li>Check your preferred audio language.</li>
              <li>Try any subtitles supplied for the title.</li>
              <li>Save regular channels as favourites where supported.</li>
              <li>Set the device and player to the correct UK time zone if programme information appears offset.</li>
            </ul>
            <p>Our EPG coverage and catch-up availability are limited. A player supporting those features does not mean they are available for every channel or programme.</p>
            <p>If children use the device, review the player’s available parental controls.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
