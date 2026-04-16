import { clientCards } from "@/data/dashboard";
import { SectionHeader } from "./SectionHeader";

export function ClientPortfoliosSection() {
  return (
    <section>
      <SectionHeader title="Client Portfolios" />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {clientCards.map((client) => (
          <a key={client.title + client.name} href="#" className="grid grid-cols-[72px_1fr_88px] gap-3 rounded-[18px] border border-white/7 bg-[#151d29] p-3">
            <div className="h-14 w-14 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${client.profileImage})` }} />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">{client.title}</p>
              <p className="mt-1 text-xs text-white/55">{client.name}</p>
              <div className="mt-3 space-y-1 text-[11px] text-white/35">
                {client.meta.map((item) => (
                  <p key={item} className="truncate">{item}</p>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${client.propertyImage})` }} />
          </a>
        ))}
      </div>
    </section>
  );
}
