export type PricingTier = {
  name: string;
  price: string;
  lifetimePrice?: string;
  summary: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
  highlight?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Coach Lite",
    price: "Free",
    summary: "Start free and review your first mace sessions.",
    description:
      "The free entry point for players who want a cleaner way to start improving without committing to a paid plan first.",
    features: [
      "Review your first mace sessions",
      "See recent fight history",
      "Get a lightweight improvement loop",
      "Understand the basic product flow",
      "Enter the DropTool ecosystem for free",
    ],
    ctaLabel: "Start Free",
    ctaHref: "/downloads",
    badge: "Free Entry",
  },
  {
    name: "Coach",
    price: "GBP 3.99/month",
    lifetimePrice: "GBP 24.99 founder lifetime",
    summary: "The main paid plan for serious mace players.",
    description:
      "Built for players who want the core premium review loop: more depth, clearer structure, and stronger value for consistent improvement.",
    features: [
      "Review more mace sessions",
      "Unlock deeper fight breakdowns",
      "Spot repeated mistakes more clearly",
      "Track progress with more context",
      "Use a stronger premium workflow",
      "Get the clearest value for most players",
    ],
    ctaLabel: "Choose Coach",
    ctaHref: "/contact",
    badge: "Recommended",
    highlight: true,
  },
  {
    name: "Full",
    price: "GBP 7.99/month",
    lifetimePrice: "GBP 49.99 founder lifetime",
    summary: "The deepest premium layer for stronger review depth.",
    description:
      "The flagship premium tier for players who want the richest review layer, stronger evidence, and the highest long-term ceiling.",
    features: [
      "Everything in Coach",
      "Richer evidence and review depth",
      "Stronger long-term progression context",
      "Deeper premium analysis layer",
      "Highest product ceiling",
      "Best fit for the most serious grinders",
    ],
    ctaLabel: "Choose Full",
    ctaHref: "/contact",
    badge: "Flagship",
  },
];
