import { AssistantPanel } from "@/components/assistant-panel";
import { DashboardNav } from "@/components/dashboard-nav";
import { DealPipelineSection } from "@/components/deal-pipeline-section";
import { HeroDealsCard } from "@/components/hero-deals-card";
import { HotLeadsSection } from "@/components/hot-leads-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ShowingsSection } from "@/components/showings-section";
import { SidebarRail } from "@/components/sidebar-rail";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b101a] text-[#f4efe4]">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-4 p-4 lg:p-5">
        <SidebarRail />

        <div className="grid flex-1 gap-4 xl:grid-cols-[0.98fr_1.12fr]">
          <AssistantPanel />

          <section className="rounded-[28px] border border-[#2b2416] bg-[#0f1522] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <DashboardNav />
            <div className="space-y-5 p-4 lg:p-5">
              <HeroDealsCard />
              <HotLeadsSection />
              <PortfolioSection />
              <DealPipelineSection />
              <ShowingsSection />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
