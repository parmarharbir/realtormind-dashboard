import { followUpCards } from "@/data/dashboard";
import { SectionHeader } from "./SectionHeader";

export function UpcomingSection() {
  return (
    <section>
      <SectionHeader title="Upcoming Showings & Follow-ups" />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {followUpCards.map((card) => (
          <a key={card.title + card.cta} href="#" className="rounded-[18px] border border-white/7 bg-[#151d29] p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-white">{card.title}</p>
              <span className="text-white/25">×</span>
            </div>
            <div className="mt-3 space-y-2 text-xs leading-5 text-white/45">
              {card.lines.map((line, index) => (
                <div key={line} className="flex items-start gap-2">
                  <span>{index === 0 ? "🗓" : "•"}</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
            <span className="mt-4 inline-flex rounded-lg border border-[#d8ba74] px-3 py-2 text-xs font-semibold text-[#d8ba74]">
              {card.cta}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
