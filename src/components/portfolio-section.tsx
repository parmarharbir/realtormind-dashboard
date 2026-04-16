import Image from "next/image";
import Link from "next/link";
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
          <Link
            href="#"
            key={`${client}-${index}`}
            className="grid grid-cols-[74px_1fr_88px] gap-3 rounded-[20px] border border-white/5 bg-[#121926] p-3"
          >
            <div className="relative h-16 w-16">
              <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#121926] bg-[#d8d8d8] text-xs font-semibold text-[#232323]">
                {client.charAt(0)}
              </div>
              <div className="absolute left-6 top-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#121926] bg-[#b7bcc7] text-xs font-semibold text-[#232323]">
                {String.fromCharCode(65 + index)}
              </div>
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
          </Link>
        ))}
      </div>
    </section>
  );
}
