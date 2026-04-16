import { leadCards } from "@/data/dashboard";
import { SectionHeader } from "./SectionHeader";

export function LeadCardsSection() {
  return (
    <section>
      <SectionHeader title="Hot Leads & Opportunities" />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {leadCards.map((lead) => (
          <a key={lead.name + lead.image} href="#" className="overflow-hidden rounded-[18px] border border-white/7 bg-[#151d29]">
            <div className="relative h-28 bg-cover bg-center" style={{ backgroundImage: `url(${lead.image})` }}>
              <span className="absolute right-3 top-3 text-white/75">♡</span>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">{lead.name}</p>
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${lead.scoreTone === "green" ? "bg-emerald-500/18 text-emerald-300" : "bg-[#c6a86a]/18 text-[#e7d4a1]"}`}>{lead.score}</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-white/45">
                <span>{lead.metrics[0]}</span>
                <span>|</span>
                <span>{lead.metrics[1]}</span>
                <span>|</span>
                <span>{lead.metrics[2]}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
