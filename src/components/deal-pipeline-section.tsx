import Image from "next/image";
import { SectionHeader } from "@/components/section-header";

const stages = [
  { title: "Active Transactions", progress: 20, imageX: "18% 62%" },
  { title: "Offer Transaction", progress: 30, imageX: "45% 55%" },
  { title: "Deal Pipeline", progress: 20, imageX: "68% 48%" },
  { title: "Closing", progress: 40, imageX: "84% 40%" },
];

export function DealPipelineSection() {
  return (
    <section>
      <SectionHeader title="Deal Pipeline" />
      <div className="grid gap-3 xl:grid-cols-4 md:grid-cols-2">
        {stages.map((stage) => (
          <article
            key={stage.title}
            className="overflow-hidden rounded-[20px] border border-white/5 bg-[#121926]"
          >
            <div className="relative h-[126px] p-3">
              <Image
                src="/images/mockup-reference.png"
                alt={stage.title}
                fill
                className="object-cover opacity-55"
                style={{ objectPosition: stage.imageX }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.3)_0%,rgba(8,10,15,0.88)_100%)]" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-medium text-white">{stage.title}</h3>
                    <p className="mt-0.5 text-[11px] text-[#a1a8b5]">Active Transactions</p>
                  </div>
                  <span className="text-[#9a927f]">›</span>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-[11px] text-[#dbcfab]">
                    <span>Progress</span>
                    <span>{stage.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-[#d0ab63] to-[#f1da9d]"
                      style={{ width: `${stage.progress}%` }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-[11px] text-[#8e96a6]">
                    <span>Progress</span>
                    <span>Milestones</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
