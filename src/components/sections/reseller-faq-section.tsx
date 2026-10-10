import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const RESELLER_FAQS: FaqItem[] = [
  {
    id: "minimum",
    q: "What is the minimum purchase?",
    a: "120 credits are required to create the dashboard.",
  },
  {
    id: "cost",
    q: "How much do credits cost?",
    a: "Contact us for the current price and available quantities.",
  },
  {
    id: "activation",
    q: "Which details are needed for activation?",
    a: "Your chosen email address and username. Access is activated after payment confirmation.",
  },
  {
    id: "branding",
    q: "Can I use my own branding?",
    a: "Yes. Ask us to confirm the personal domain, URL and available branding elements.",
  },
  {
    id: "vps",
    q: "Can I add a VPS?",
    a: "A compatible VPS arrangement can be configured according to the agreed requirements. Confirm the setup and costs with support.",
  },
  {
    id: "vpn",
    q: "Can customers use a VPN?",
    a: "Ask us for the supported account and specific compatible URL. A VPN subscription is separate unless expressly included.",
  },
  {
    id: "capacity",
    q: "How many subscriptions does 120 credits create?",
    a: "That depends on the terms, connections and confirmed credit deductions.",
  },
  {
    id: "expire",
    q: "Do unused credits expire?",
    a: "The applicable usage and expiry rules are confirmed before purchase.",
  },
  {
    id: "trials",
    q: "Can I create free trials?",
    a: "Confirm the dashboard’s current trial functions and allowances during onboarding.",
  },
  {
    id: "refund",
    q: "Do viewing-subscription refund terms cover reseller credits?",
    a: "Wholesale purchases have separate terms. Read the terms supplied with your credit quote before paying.",
  },
];

export function ResellerFaqSection() {
  return (
    <FaqAccordionSection
      faqs={RESELLER_FAQS}
      defaultOpenId="minimum"
      eyebrow="FAQ"
      description="Credits, branding, VPS, VPN and wholesale terms."
      title={<>Answers to Common Strong 8k Reseller Panel Questions</>}
    />
  );
}
