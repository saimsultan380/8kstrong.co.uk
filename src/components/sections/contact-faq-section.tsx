import Link from "next/link";
import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";
import { routes } from "@/lib/routes";

const CONTACT_FAQS: FaqItem[] = [
  {
    id: "before",
    q: "Can I ask before ordering?",
    a: "Yes. Contact us about your device, content preferences, connections or an 8k IPTV free trial.",
  },
  {
    id: "activation",
    q: "How quickly will my account be activated?",
    a: "We confirm the activation timing with your trial or paid order.",
  },
  {
    id: "player",
    q: "Can you help with another player?",
    a: "Send its name and your device model so we can check the account format and available assistance.",
  },
  {
    id: "refund",
    q: "Where can I read the refund terms?",
    a: (
      <>
        Read the refund terms on our{" "}
        <Link
          href={`${routes.subscriptionPlans}#refund-policy`}
          className="font-semibold underline"
          style={{ color: "var(--hero-heading)" }}
        >
          Pricing page
        </Link>{" "}
        and include your order reference when requesting help.
      </>
    ),
  },
];

export function ContactFaqSection() {
  return (
    <FaqAccordionSection
      faqs={CONTACT_FAQS}
      defaultOpenId="before"
      eyebrow="FAQ"
      description="Trials, activation, players and refunds."
      title={<>Answers to Common Questions About Contacting Our Team</>}
    />
  );
}
