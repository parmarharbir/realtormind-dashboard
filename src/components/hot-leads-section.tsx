import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const leads = [
  { name: "Lead Profile", score: "A+", imageX: "12% 18%", badge: "gold" },
  { name: "Lead Profile", score: "A+", imageX: "36% 25%", badge: "green" },
  { name: "Sarah Chen", score: "A", imageX: "59% 38%", badge: "gold" },
  { name: "Lead Profile", score: "A", imageX: "83% 44%", badge: "green" },
];

export function HotLeadsSection() {
  return (
    <section>
      <SectionHeader title="Hot Leads & Opportunities" />
      <div className="grid gap-3 md:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-2">
        {leads.map((lead, index) => (
          <Link
            href="#"
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
              <div className="absolute right-3 top-3 text-sm text-white/80">♡</div>
              <div className="absolute bottom-3 left-3">
                <p className="text-sm font-medium text-white">{lead.name}</p>
              </div>
            </div>
            <div className="px-3 pb-3 pt-2 text-[10px] text-[#98a0af] 2xl:text-[11px]">
              <div className="grid grid-cols-[1.15fr_0.9fr_1.1fr] items-center gap-1 rounded-xl border border-white/5 bg-white/[0.02] px-2 py-2 text-center">
                <div className="min-w-0 border-r border-white/8 pr-2">
                  <p className="whitespace-nowrap text-[9px] 2xl:text-[10px]">Contact Frequency</p>
                  <p className="mt-1 text-[#e7ddc4]">Weekly</p>
                </div>
                <div className="min-w-0 border-r border-white/8 px-2">
                  <p className="whitespace-nowrap text-[9px] 2xl:text-[10px]">Interest Score</p>
                  <p className="mt-1">
                    <span className={`rounded-full px-2 py-0.5 ${lead.badge === "green" ? "border border-[#4e572c] bg-[#1e2b18] text-[#bfe082]" : "border border-[#6a5526] bg-[#2f2411] text-[#e7d4a1]"}`}>
                      {lead.score}
                    </span>
                  </p>
                </div>
                <div className="min-w-0 pl-2">
                  <p className="whitespace-nowrap text-[9px] 2xl:text-[10px]">Next Best Action</p>
                  <p className="mt-1 whitespace-nowrap text-[#e7ddc4]">Draft Email</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
