import Image from "next/image";
import { SectionHeader } from "@/components/section-header";

const clients = [
  "Client Profile",
  "Sarah Profile",
  "Sarah Chenn",
  "Suraj Singh",
];

export function PortfolioSection() {
  return (
    <section>
      <SectionHeader title="Client Portfolios" />
      <div className="grid gap-3 xl:grid-cols-4 md:grid-cols-2">
        {clients.map((client, index) => (
          <article
            key={`${client}-${index}`}
            className="grid grid-cols-[64px_1fr_88px] gap-3 rounded-[20px] border border-white/5 bg-[#121926] p-3"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d8d8d8] text-sm font-semibold text-[#232323]">
              {client.charAt(0)}
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-sm font-medium text-white">{client}</h3>
              <div className="mt-2 space-y-1 text-[11px] leading-4 text-[#9098a8]">
                <p>Property Matches</p>
                <p>Preferred Areas</p>
                <p>Communication His...</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/5">
              <Image
                src="/images/mockup-reference.png"
                alt={client}
                fill
                className="object-cover"
                style={{ objectPosition: `${20 + index * 18}% 42%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
