import { BarChart3, Shield, CheckCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { GoDatabase } from "react-icons/go";

export default function WhyDevForge() {
  const features = [
    {
      icon: <GoDatabase  className="w-6 h-6 text-blue-400" />,
      title: "Full-stack Azure monitoring",
      description:
        "Complete visibility across all your Azure resources with real-time metrics and intelligent alerts",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Automated vulnerability scanning",
      description:
        "Continuous security assessment of your environment with AI-powered threat detection",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
      title: "Continuous compliance enforcement",
      description:
        "Stay compliant with industry standards including HIPAA, PCI DSS, GDPR, and SOC 2",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      title: "Built-in optimization tools",
      description:
        "Reduce costs by up to 35% with our intelligent resource optimization recommendations",
    },
  ];

  return (
    <section id="why" className="py-8 md:py-12 lg:py-16 lg:py-20 relative overflow-hidden">
      <div className="custom-container mx-auto px-4 sm:px-0 relative z-10">
        <div className="max-w-xl mx-auto">
          <SectionHeader
            badge="Benefits"
            title="Why DevForge.ai?"
            description="Our platform combines powerful monitoring, security, and optimization tools to give you complete control over your Azure infrastructure."
            descriptionVariant="secondary"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
              py-12 
              md:!py-16  
              lg:p-6
                rounded-2xl
                flex flex-col
                items-center xl:items-center
                
                text-left xl:text-center
                border border-white/5
                transition-all duration-300
                group hover:-translate-y-1
              "
              style={{
                boxShadow:
                  "0px -1px 2px 0px #FFFFFF0D inset, 0px 1px 1px 0px #FFFFFF33 inset",
              }}
            >
              {/* ICON */}
              <div
  className="
    w-10 h-10
    flex items-center justify-center
    shrink-0
    rounded-[10px]
    bg-white/[0.05] border border-white/5
    shadow-[inset_0px_0.5px_2px_-1px_rgba(255,255,255,0.6)]
    text-white
    mb-5
  "
>
  {feature.icon}
</div>


              {/* TEXT */}
              <div className="text-center">
                <h3
                  className="
                    text-base
                    text-white
                     md:mb-2
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    text-sm
                    text-[#FFFFFF66]
                    leading-snug
                    
                    max-w-[70%] mx-auto
                  "
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
