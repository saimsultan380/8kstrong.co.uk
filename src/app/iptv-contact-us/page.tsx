import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/seo/legacy-redirect";
import { createPageMetadata, pageDescriptions, pageTitles } from "@/lib/site";
import { routes } from "@/lib/routes";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.contactUs,
  description: pageDescriptions.contactUs,
  path: routes.contactUs,
  index: false,
  follow: true,
});

export default function LegacyContactRedirect() {
  return (
    <LegacyRedirect
      href={routes.contactUs}
      message="Redirecting to contact…"
      linkLabel="Continue to Contact Us"
    />
  );
}
