import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const stages = [
  { title: "Active Transactions", progress: 20, tone: "bg-[#1f6b74]" },
  { title: "Offer Transaction", progress: 30, tone: "bg-[#9c7a34]" },
  { title: "Deal Pipeline", progress: 20, tone: "bg-[#263042]" },
  { title: "Closing", progress: 40, tone: "bg-[#5f4b1f]" },
];

export function DealPipelineSection() {
  return (
    <section>
      <SectionHeader title="Deal Pipeline" />
      <div className="grid gap-3 xl:grid-cols-4 md:grid-cols-2">
        {stages.map((stage) => (
          <Link
            href="#"
            key={stage.title}
            className="overflow-hidden rounded-[20px] border border-white/5 bg-[#121926]"
          >
            <div className={`h-9 ${stage.tone}`} />
            <div className="p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-medium text-white">{stage.title}</h3>
                  <p className="mt-0.5 text-[11px] text-[#a1a8b5]">Active Transactions</p>
                </div>
                <span className="text-[#9a927f]">›</span>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-[11px] text-[#dbcfab]">
                  <span>Completion</span>
                  <span>{stage.progress}%</span>
                </div>
                <div className="h-3 rounded-full bg-white/10">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-[#d0ab63] to-[#f1da9d]"
                    style={{ width: `${stage.progress}%` }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-[#8e96a6]">
                  <span>Progress</span>
                  <span>Milestones</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
