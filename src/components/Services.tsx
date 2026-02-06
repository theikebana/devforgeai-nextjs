import SectionHeader from "./SectionHeader";
import ServiceItem from "../components/ServiceItemCard";

const servicesData = [
  {
    badge: "CI/CD Automation - Powered by REX",
    title: "REX: Intelligent CI/CD Pipeline Security",
    description:
      "RevX integrates seamlessly into your DevOps workflow, providing automated code review and security scanning before production. It ensures your deployments are:",
    checks: [
      {
        title: "Secure by Design",
        description:
          "Automated secret detection and dependency scanning in every PR",
      },
      {
        title: "Compliance Ready",
        description: "Enforce infrastructure-as-code (IaC) policies automatically",
      },
      {
        title: "Production Safe",
        description: "Prevent breaking changes with AI-driven impact analysis",
      },
    ],
    imageSrc: "/cards-images/ian-card-image.png",
     reverse: true,
  },
  {
    badge: "Cloud Monitoring - Powered by IAN",
    title: "IAN (Infrastructure Analysis Navigator): Complete Cloud Visibility",
    description:
      "IAN is your centralized command center for Azure infrastructure monitoring. It offers a unified dashboard that seamlessly integrates with Azure services, including:",
    checks: [
      {
        title: "App Services",
        description: "Monitor performance, availability, and resource usage",
      },
      {
        title: "Virtual Machines",
        description: "Track CPU, memory, disk, and network metrics in real-time",
      },
      {
        title: "Storage Accounts",
        description: "Monitor capacity, transactions, and access patterns",
      },
      {
        title: "And more",
        description: "Databases, networking, containers, and serverless functions",
      }
    ],
    imageSrc: "/cards-images/ian-card-image.png",
   
  },
  {
    badge: "Security & Compliance - Powered by VIRA",
    title: "Cloud Security Auditing & Vulnerability Assessment",
    description:
      "Our VIRA (Virtual Infra Risk Advisor) automated tool provides continuous protection for your Azure environment. It systematically scans your cloud infrastructure to detect:",
    checks: [
      {
        title: "Misconfigurations",
        description:
          "Identify and fix security misconfigurations before they're exploited",
      },
      {
        title: "Excessive Permissions",
        description:
          "Detect over-privileged accounts and enforce least privilege access",
      },
      {
        title: "Compliance Violations",
        description:
          "Ensure adherence to HIPAA, PCI DSS, GDPR, and other standards",
      },
    ],
    imageSrc: "/cards-images/ian-card-image.png",
    reverse: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-8  md:py-12 lg:py-16 lg:py-20">
      <div className="custom-container mx-auto px-4 sm:px-0">
        <SectionHeader
         
          title="Our Services"
          description="Comprehensive cloud management and security solutions for your Azure infrastructure."
          descriptionVariant="secondary"
        />

        {servicesData.map((service, idx) => (
          <ServiceItem
            key={idx}
            badge={service.badge}
            title={service.title}
            description={service.description}
            checks={service.checks}
            imageSrc={service.imageSrc}
            reverse={service.reverse}
          />
        ))}
      </div>
    </section>
  );
}
