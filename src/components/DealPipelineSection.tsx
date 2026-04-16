import { pipelineCards } from "@/data/dashboard";
import { SectionHeader } from "./SectionHeader";

const toneClass: Record<string, string> = {
  teal: "bg-teal-500/70",
  amber: "bg-amber-500/70",
  dark: "bg-slate-700/80",
};

export function DealPipelineSection() {
  return (
    <section>
      <SectionHeader title="Deal Pipeline" />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {pipelineCards.map((card) => (
          <a key={card.title + card.stage} href="#" className="overflow-hidden rounded-[18px] border border-white/7 bg-[#151d29]">
            <div className={`px-4 py-3 ${toneClass[card.tone]}`}>
              <p className="text-sm font-semibold text-white">{card.title}</p>
              <p className="text-xs text-white/70">{card.subtitle}</p>
            </div>
            <div className="p-4">
              <div className="mb-3 flex items-center justify-between text-sm text-white/80">
                <span>{card.stage}</span>
                <span className="font-semibold text-[#f1e1b0]">{card.progress}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/8">
                <div className="h-full rounded-full bg-[#c6a86a]" style={{ width: `${card.progress}%` }} />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-white/35">
                <span>Progress</span>
                <span>Milestones</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
