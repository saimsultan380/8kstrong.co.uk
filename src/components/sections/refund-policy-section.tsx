import Link from "next/link";
import { Container } from "@/components/layout/container";
import { routes } from "@/lib/routes";

export function RefundPolicySection() {
  return (
    <section
      id="refund-policy"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl">
          <h2
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--hero-heading)" }}
          >
            Read the Strong 8k Refund Policy Before Ordering
          </h2>
          <div
            className="mt-6 space-y-5 text-sm leading-[1.8] sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            <p>
              You can request a refund within seven days of activation of your paid
              subscription if you change your mind or are dissatisfied with the service.
            </p>
            <p>To request a refund, contact support and provide:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Your order reference.</li>
              <li>The account covered by your request.</li>
              <li>Your device and player details.</li>
              <li>A brief explanation of your request.</li>
            </ul>
            <p>
              Where an order contains multiple accounts, identify which account or
              accounts the request concerns so we can confirm the applicable refund amount.
            </p>
            <p>
              The seven-day refund period ends after that window. Technical support
              remains available throughout your active subscription.
            </p>
            <p>
              Reseller credit purchases follow separate wholesale terms, which should
              be confirmed before purchasing credits.
            </p>
            <p>This policy does not affect your statutory rights.</p>
            <Link
              href={`${routes.contactUs}?enquiry=refund`}
              className="inline-flex font-semibold underline"
              style={{ color: "var(--hero-heading)" }}
            >
              Contact Support About a Refund
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
