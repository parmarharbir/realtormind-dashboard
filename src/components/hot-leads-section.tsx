import Image from "next/image";
import { SectionHeader } from "@/components/section-header";

const leads = [
  { name: "Lead Profile", score: "A+", imageX: "12% 18%" },
  { name: "Lead Profile", score: "A+", imageX: "36% 25%" },
  { name: "Sarah Chen", score: "A", imageX: "59% 38%" },
  { name: "Lead Profile", score: "A", imageX: "83% 44%" },
];

export function HotLeadsSection() {
  return (
    <section>
      <SectionHeader title="Hot Leads & Opportunities" />
      <div className="grid gap-3 xl:grid-cols-4 md:grid-cols-2">
        {leads.map((lead, index) => (
          <article
            key={`${lead.name}-${index}`}
            className="overflow-hidden rounded-[20px] border border-white/5 bg-[#121926]"
          >
            <div className="relative h-[118px]">
              <Image
                src="/images/mockup-reference.png"
                alt={lead.name}
                fill
                className="object-cover opacity-90"
                style={{ objectPosition: lead.imageX }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(10,13,20,0.5)_50%,rgba(10,13,20,0.94)_100%)]" />
              <div className="absolute left-3 top-3 rounded-full border border-[#4a3b1f] bg-[#1a160e]/90 px-2 py-0.5 text-[11px] font-medium text-[#e2c57c]">
                {lead.score}
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9d9d9] text-xs font-semibold text-[#202020]">
                  {lead.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{lead.name}</p>
                </div>
              </div>
            </div>
            <div className="space-y-1.5 px-3 pb-3 pt-2 text-[11px] text-[#98a0af]">
              <div className="flex justify-between gap-3">
                <span>Contact Frequency</span>
                <span className="text-[#e7ddc4]">Weekly</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Interest Score</span>
                <span className="text-[#e7ddc4]">A-</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Next Best Action</span>
                <span className="text-[#e7ddc4]">Draft Email</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
