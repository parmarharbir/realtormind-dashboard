import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const clients = [
  {
    title: "Client Profile",
    name: "John Shen",
    avatar: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=240&q=80",
    property: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Sarah Profile",
    name: "Sarah Crimino",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
    property: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Sarah Chenn",
    name: "John Chen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80",
    property: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Sur Profile",
    name: "Scheduled Promote",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    property: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=500&q=80",
  },
];

export function PortfolioSection() {
  return (
    <section>
      <SectionHeader title="Client Portfolios" />
      <div className="grid gap-3 xl:grid-cols-4 md:grid-cols-2">
        {clients.map((client, index) => (
          <Link
            href="#"
            key={`${client.title}-${index}`}
            className="grid grid-cols-[72px_1fr_84px] gap-3 rounded-[20px] border border-white/5 bg-[#121926] p-3"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10">
              <Image src={client.avatar} alt={client.name} fill className="object-cover" unoptimized />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-sm font-medium text-white">{client.title}</h3>
              <p className="mt-1 text-xs text-[#cfd5df]">{client.name}</p>
              <div className="mt-3 space-y-1 text-[11px] leading-4 text-[#9098a8]">
                <p>Property Matches</p>
                <p>Preferred Areas</p>
                <p>Communication History</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/5">
              <Image src={client.property} alt={client.title} fill className="object-cover" unoptimized />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
