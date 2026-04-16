import { ClientPortfoliosSection } from "@/components/ClientPortfoliosSection";
import { DealPipelineSection } from "@/components/DealPipelineSection";
import { HeroDealsCard } from "@/components/HeroDealsCard";
import { KingpinChatPanel } from "@/components/KingpinChatPanel";
import { LeadCardsSection } from "@/components/LeadCardsSection";
import { SidebarNav } from "@/components/SidebarNav";
import { TopBar } from "@/components/TopBar";
import { UpcomingSection } from "@/components/UpcomingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1017] text-white">
      <div className="mx-auto flex min-h-screen max-w-[1600px] border-x border-white/5 bg-[#0b1017]">
        <SidebarNav />
        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar />
          <div className="grid gap-5 p-4 sm:p-5 xl:grid-cols-[620px_minmax(0,1fr)] xl:items-start">
            <div className="xl:sticky xl:top-5">
              <KingpinChatPanel />
            </div>
            <div className="space-y-5">
              <HeroDealsCard />
              <LeadCardsSection />
              <ClientPortfoliosSection />
              <DealPipelineSection />
              <UpcomingSection />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
