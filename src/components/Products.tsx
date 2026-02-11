import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function Products() {
  return (
    <section id="products" className="py-20  overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Products"
            title="Unified Cloud Intelligence with IAN"
            description="Monitor and manage your Azure resources—Virtual Machines, App Services, Storage Accounts, and more—from a central dashboard with real-time insights and intelligent automation."
          />

          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            {/* Left Side - Feature List */}
            <div className="w-full lg:w-1/2 space-y-6">
              <SectionHeader
                badge="IAN Technology"
                title="Unified Cloud Intelligence with IAN"
                description="Monitor and manage your Azure services—Virtual Machines, App Services, Storage Accounts, and more—from a centralized dashboard with real-time insights and intelligent recommendations."
                align="left"
                variant="secondary"
              />

              {/* Feature Item */}
              <div className="p-4 rounded-xl bg-[#FFFFFF0D] border border-white/5 hover:border-blue-500/30 transition-all cursor-default">
                <div className="flex items-start gap-4">
                  <Image
                    src="/icons/circle-pointer.svg"
                    alt="Feature icon"
                    width={32}
                    height={32}
                    className="w-8 h-8 mt-1"
                  />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Track real-time performance metrics
                    </h3>
                    <p className="text-sm text-gray-400">
                      Monitor CPU, memory, network, and disk usage across all
                      your resources.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Item */}
              <div className="p-4 rounded-xl bg-[#FFFFFF0D] border border-white/5 hover:border-blue-500/30 transition-all cursor-default">
                <div className="flex items-start gap-4">
                  <Image
                    src="/icons/circle-pointer.svg"
                    alt="Feature icon"
                    width={32}
                    height={32}
                    className="w-8 h-8 mt-1"
                  />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Intelligent recommendations
                    </h3>
                    <p className="text-sm text-gray-400">
                      Get proactive insights to optimize cost, performance, and
                      security.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Item */}
              <div className="p-4 rounded-xl bg-[#FFFFFF0D] border border-white/5 hover:border-blue-500/30 transition-all cursor-default">
                <div className="flex items-start gap-4">
                  <Image
                    src="/icons/circle-pointer.svg"
                    alt="Feature icon"
                    width={32}
                    height={32}
                    className="w-8 h-8 mt-1"
                  />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Centralized cloud visibility
                    </h3>
                    <p className="text-sm text-gray-400">
                      Manage all Azure resources from a single, unified
                      dashboard.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="px-8 py-3 rounded-lg bg-[#0078D4]   text-white transition-all ">
                Explore IAN →
              </button>
            </div>

            {/* Right Side - Image (Height matches left) */}
            <div className="w-full lg:w-1/2   rounded-xl">
              <div className="h-full rounded-xl border border-white/16 p-5 pr-0 overflow-hidden shadow-2xl w-[50vw] relative">
                <Image
                  src="/cards-images/ian-card-image.png"
                  alt="IAN Dashboard"
                  fill
                  className="object-cover rounded-l-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
