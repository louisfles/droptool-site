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

export type ComparisonRow = {
  label: string;
  values: [string, string, string];
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Coach Lite",
    price: "Free",
    summary: "Start free and test the core review loop.",
    description:
      "The free entry point for players who want to try DropTool Mace, understand the flow, and decide whether deeper review is worth paying for.",
    features: [
      "Limited recent session review",
      "Basic fight history access",
      "Starter improvement loop",
      "Entry access to the product",
      "No payment required",
    ],
    ctaLabel: "Start Free",
    ctaHref: "/downloads",
    badge: "Free Entry",
  },
  {
    name: "Coach",
    price: "GBP 3.99/month",
    lifetimePrice: "GBP 24.99 founder lifetime",
    summary: "The main paid plan for most serious players.",
    description:
      "Built for players who want a stronger review loop, more usable depth, and the clearest value point without needing the highest tier.",
    features: [
      "Expanded session review access",
      "Deeper fight breakdowns",
      "Clearer repeated mistake visibility",
      "More progression context",
      "Best value for most serious players",
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
    summary: "The deepest premium layer for the most committed players.",
    description:
      "The flagship tier for players who want the richest review depth, strongest long-term context, and the highest-end version of the product.",
    features: [
      "Everything in Coach",
      "Deepest review depth",
      "Strongest evidence layer",
      "Richest long-term progression context",
      "Best fit for hardcore grinders",
    ],
    ctaLabel: "Choose Full",
    ctaHref: "/contact",
    badge: "Flagship",
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    label: "Price",
    values: ["Free", "GBP 3.99/month", "GBP 7.99/month"],
  },
  {
    label: "Founder lifetime",
    values: ["Not included", "GBP 24.99", "GBP 49.99"],
  },
  {
    label: "Recent session review",
    values: ["Limited", "Expanded", "Fullest access"],
  },
  {
    label: "Fight breakdown depth",
    values: ["Basic", "Deeper", "Deepest"],
  },
  {
    label: "Repeated mistake visibility",
    values: ["Starter", "Stronger", "Strongest"],
  },
  {
    label: "Progress tracking context",
    values: ["Light", "Expanded", "Richest"],
  },
  {
    label: "Best fit",
    values: ["First-time users", "Most serious players", "Hardcore grinders"],
  },
];
