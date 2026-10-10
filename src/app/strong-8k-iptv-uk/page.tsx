import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/seo/legacy-redirect";
import { createPageMetadata, pageDescriptions, pageTitles } from "@/lib/site";
import { routes } from "@/lib/routes";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.home,
  description: pageDescriptions.home,
  path: routes.home,
  index: false,
  follow: true,
});

export default function LegacyHomeRedirect() {
  return (
    <LegacyRedirect
      href={routes.home}
      message="Redirecting to the homepage…"
      linkLabel="Continue to Home"
    />
  );
}
