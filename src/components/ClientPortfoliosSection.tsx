import { clientCards } from "@/data/dashboard";
import { SectionHeader } from "./SectionHeader";

export function ClientPortfoliosSection() {
  return (
    <section>
      <SectionHeader title="Client Portfolios" />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {clientCards.map((client) => (
          <a key={client.name + client.person} href="#" className="rounded-[18px] border border-white/7 bg-[#151d29] p-4">
            <div className="flex items-center gap-3">
              <div className="flex">
                {client.avatars.map((avatar, index) => (
                  <span
                    key={avatar}
                    className={`h-10 w-10 rounded-full border-2 border-[#151d29] bg-cover bg-center ${index > 0 ? "-ml-3" : ""}`}
                    style={{ backgroundImage: `url(${avatar})` }}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{client.name}</p>
                <p className="text-xs text-white/45">{client.person}</p>
              </div>
            </div>
            <div className="mt-4 space-y-1 text-[11px] text-white/35">
              {client.meta.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
