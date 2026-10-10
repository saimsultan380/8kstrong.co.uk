"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { routes } from "@/lib/routes";

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
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
            {title}
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

const QUOTE = [
  "The credit quantity.",
  "Price and payment instructions.",
  "Credit deductions for available terms.",
  "Any extra deduction for simultaneous connections.",
  "Trial functions and allowances, where available.",
  "Credit expiry or usage terms.",
  "Domain, VPS or URL setup costs.",
  "Activation timing.",
  "The wholesale purchase terms.",
];

const CATALOGUE = [
  "40,000+ live channels.",
  "140,000+ VOD titles.",
  "UK-focused and international content.",
  "HD, FHD and UHD options.",
  "Multilingual viewing where available.",
  "Requests for favourite films and series.",
  "Live event enquiries and updates.",
  "Limited EPG coverage.",
  "Limited catch-up.",
];

const SUPPORT_DETAILS = [
  "The account reference.",
  "Device make and model.",
  "Player name.",
  "Affected channel or title.",
  "The time and symptoms.",
  "Any error message.",
  "Whether other content works.",
  "The checks already completed.",
];

export function ResellerRest() {
  return (
    <>
      <Block title="Manage Customer Subscriptions Through Your Strong 8k Panel">
        <p>Your Strong 8k panel provides a way to manage customer subscriptions using purchased credits.</p>
        <p>You organise your customer accounts and selling prices. We support you with the dashboard and underlying service questions.</p>
        <p>During onboarding, ask us to demonstrate the available account creation, renewal and management functions. Check the credit deduction for the subscriptions and connections you intend to sell.</p>
        <p>If you see Strong8k panel or Strong8k reseller written without a space, check the website associated with the offer. Here, Strong8k IPTV panel refers to our reseller dashboard. Choose the reseller enquiry route for business access.</p>
      </Block>

      <Block id="reseller-plans" title="Start Your Reseller Dashboard with 120 Initial Credits">
        <p>The minimum opening purchase is 120 credits.</p>
        <p>Contact us for the current cash price and any larger purchase requirement.</p>
        <p>Your quote should confirm:</p>
        <ul className="space-y-2">
          {QUOTE.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[9px] h-px w-3 shrink-0" style={{ background: "var(--grad-brand)" }} aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Do not calculate customer capacity from another provider’s credit rules. Confirm the schedule for this panel first.</p>
        <Link href={`${routes.contactUs}?enquiry=reseller-pricing`} className="font-semibold underline" style={{ color: "var(--hero-heading)" }}>
          Request a Credit Quote
        </Link>
      </Block>

      <Block title="Activate Your Panel with Your Email and Username">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Tell us the credit quantity you want, starting from 120.</li>
          <li>Explain the customer account types you intend to sell.</li>
          <li>Include any domain, branding, VPS or URL requirements.</li>
          <li>Review the confirmed price and credit terms.</li>
          <li>Provide your chosen email address and username.</li>
          <li>Complete payment through the verified instructions.</li>
          <li>Receive the panel activation details.</li>
          <li>Check access and your opening credit balance.</li>
        </ol>
        <p>Use an email address you control and check its spelling before activation.</p>
        <p>If someone else manages your accounts, agree which address will receive panel information. Tell support promptly if the supplied details need correcting.</p>
      </Block>

      <Block title="Add Your Own Branding and Personal Customer URLs">
        <p>Your panel address, customer playback URL, VPS and VPN configuration have different roles.</p>
        <p>Describe the outcome you need so we can arrange the correct setup.</p>
        <h3 className="pt-2 text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Use Your Own Domain for a Branded Panel</h3>
        <p>We can add a personal domain to the panel so you can use your own branding and URL.</p>
        <p>Send the domain you control and the preferred hostname or subdomain.</p>
        <p>We will explain the required configuration, what can display your branding and any setup cost.</p>
        <p>A panel-domain change does not automatically change every address used in customer players. Ask us to confirm both requirements if you need a branded dashboard and customer playback address.</p>
        <h3 className="pt-2 text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Discuss VPS Configuration and Secure Customer URL Options</h3>
        <p>We can configure a compatible virtual private server arrangement for your panel and customer URLs.</p>
        <p>Tell us whether you already have a VPS and what you want it to do.</p>
        <p>We can check the compatible configuration, HTTPS requirements, maintenance responsibilities and cost.</p>
        <p>A personal URL alone does not establish encryption or a private server. The relevant security features need to be configured as part of the agreed setup.</p>
        <h3 className="pt-2 text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Confirm the Correct Service URL for VPN Users</h3>
        <p>For customers who want to use a VPN, we can arrange a compatible URL according to the supported account setup.</p>
        <p>Confirm the correct address with us before giving customers VPN instructions.</p>
        <p>A VPN is different from a VPS, and a VPN-compatible service URL does not automatically include a VPN subscription.</p>
        <p>Provide the device, player and intended VPN arrangement so we can check the configuration.</p>
      </Block>

      <Block title="Offer Your Customers Live Channels and On-Demand Content">
        <p>Customer subscriptions use the available Strong 8k service catalogue:</p>
        <ul className="space-y-2">
          {CATALOGUE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Check specific titles, languages and events before promising them to a customer.</p>
        <p>Their player and device still need to support the supplied account method. Simultaneous viewing must match the created subscription’s allowance.</p>
      </Block>

      <Block title="Get Strong 8k Reseller Support for Panel Questions">
        <p>We provide assistance with panel access, credit questions and service issues.</p>
        <p>Contact us about account creation problems, renewals, domain configuration, URL arrangements or a fault that needs investigation.</p>
        <p>For a customer issue, send:</p>
        <ul className="list-disc space-y-1 pl-5">
          {SUPPORT_DETAILS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Hide passwords and full private playlist links in screenshots.</p>
        <p>Clear information helps us identify the correct account and source.</p>
      </Block>

      <Block title="Prepare the Right Viewing Setup for Each Customer">
        <p>Ask the customer which device they own, how many screens need to play together and what content they want to check.</p>
        <p>Confirm the appropriate player before they buy an app licence. Explain whether the account uses server credentials, an M3U link or device activation.</p>
        <p>For compatible Fire OS and Android setups, use the current Strong 8k app code 4330396. The earlier code 439873 should not be given as the current installation instruction.</p>
        <p>Show the customer where to find support and make their expiry date clear.</p>
        <p>If they need catch-up, guide information or a particular language, check those requirements rather than assuming every feature is available across the catalogue.</p>
      </Block>

      <Block title="Support Your Customers with Clear Subscription and Setup Information">
        <p>You manage the relationship with your customers and the retail terms you offer.</p>
        <p>Explain the subscription duration, simultaneous connection allowance, device setup and any separate player charge before taking payment.</p>
        <p>Keep account and expiry records so that renewal questions can be handled accurately.</p>
        <p>For an installation problem, check the player and login method. For playback, establish whether the issue affects one source or the whole catalogue.</p>
        <p>Escalate service and panel questions to Strong 8k with the relevant details. Confirm any direct end-customer support arrangement before advertising it.</p>
      </Block>

      <Block title="Calculate Your Credit Costs, Selling Prices and Margin">
        <p>Your profit depends on the confirmed credit cost, retail price and other expenses.</p>
        <p>Start with the deduction for the customer subscription. Work out its cash cost using your credit purchase price.</p>
        <p>Allow for player licences you include, payment fees, domain or VPS expenses and the time spent providing support.</p>
        <p>A larger purchase may have a different unit price, but use the current quote rather than assuming a discount.</p>
        <p>An 8k reseller dashboard provides management tools. It does not guarantee sales or earnings.</p>
      </Block>
    </>
  );
}
