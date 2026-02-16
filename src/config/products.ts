import type { LucideIcon } from "lucide-react";
import {
  Rocket,
  ShieldCheck,
  Zap,
  Search,
  MessageCircle,
  Users,
  Layers,
  FileText,
  Bot,
} from "lucide-react";

export type ProductId =
  | "rex"
  | "vira"
  | "ian"
  | "mooglemind"
  | "review-attendant"
  | "attendai"
  | "elvis"
  | "alluvium"
  | "thinkdocs"
  | "demo-agent";

export type ProductConfig = {
  id: ProductId;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Route path for the product detail page */
  path: string;
  /** Whether this product should show in the navbar dropdown */
  showInNavbar?: boolean;
};

export const products: ProductConfig[] = [
  {
    id: "rex",
    title: "REX",
    description:
      "Rex auto-reviews code, finds risks, and secures CI/CD before production.",
    icon: Rocket,
    path: "/rex",
    showInNavbar: true,
  },
  {
    id: "vira",
    title: "VIRA",
    description:
      "Cloud VIRA automates Azure security with continuous, enterprise-grade risk scanning.",
    icon: ShieldCheck,
    path: "/vira",
    showInNavbar: true,
  },
  {
    id: "ian",
    title: "IAN",
    description:
      "Manage all Azure services from one dashboard with real-time insights.",
    icon: Zap,
    path: "/ian",
    showInNavbar: true,
  },
  {
    id: "mooglemind",
    title: "MoogleMind",
    description:
      "An open‑source AI platform for unified enterprise search, custom agents, and secure self‑hosting.",
    icon: Search,
    path: "/mooglemind",
    showInNavbar: true,
  },
  {
    id: "review-attendant",
    title: "Review Attendant",
    description:
      "An AI platform that centralizes reviews and automates responses with sentiment analysis.",
    icon: MessageCircle,
    path: "/review-attendant",
    showInNavbar: true,
  },
  {
    id: "attendai",
    title: "AttendAI",
    description:
      "A smart face‑recognition attendance system with IP camera support and clear reporting.",
    icon: Users,
    path: "/attendai",
    showInNavbar: true,
  },
  {
    id: "elvis",
    title: "Elvis",
    description:
      "Job leads management & analytics platform for sales teams.",
    icon: Layers,
    path: "/elvis",
    showInNavbar: true,
  },
  {
    id: "alluvium",
    title: "Alluvium",
    description:
      "AI-enabled data extraction from invoices, contracts, and financial documents.",
    icon: Rocket,
    path: "/alluvium",
    showInNavbar: true,
  },
  {
    id: "thinkdocs",
    title: "ThinkDocs",
    description:
      "Think Docs is an AI-powered document intelligence platform for smart data extraction, analysis, and insights.",
    icon: FileText,
    path: "/think-docs",
    showInNavbar: true,
  },
  {
    id: "demo-agent",
    title: "Demo Agent (STAGE)",
    description:
      "An automated Demo Agent that simulates real users to deliver consistent, hands-free product walkthroughs.",
    icon: Bot,
    path: "/demo-agent",
    showInNavbar: true,
  },
];

export const productsById: Record<ProductId, ProductConfig> = products.reduce(
  (acc, product) => {
    acc[product.id] = product;
    return acc;
  },
  {} as Record<ProductId, ProductConfig>
);

