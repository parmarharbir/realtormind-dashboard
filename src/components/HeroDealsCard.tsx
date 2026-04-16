import { heroStats } from "@/data/dashboard";

export function HeroDealsCard() {
  return (
    <section className="overflow-hidden rounded-[24px] border border-white/7 bg-[#121a25]">
      <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col justify-between p-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">Kingpin Hero</p>
            <h2 className="mt-4 text-[40px] font-semibold uppercase leading-[0.95] text-white">
              Focus on what matters: <span className="text-[#d8ba74]">deals</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
              High-impulse, lifestyle browsing flow with rich visual storytelling and operational elements.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/35">{heroStats[0].label}</p>
              <p className="mt-2 text-3xl font-semibold text-[#f1e1b0]">{heroStats[0].value}</p>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/35">{heroStats[1].label}</p>
              <p className="mt-2 text-3xl font-semibold text-[#f1e1b0]">{heroStats[1].value}</p>
            </div>
          </div>
        </div>
        <div className="relative min-h-[320px] bg-cover bg-center" style={{ backgroundImage: "linear-gradient(90deg, rgba(9,12,17,0.66) 0%, rgba(9,12,17,0.18) 38%, rgba(9,12,17,0.04) 100%), url('https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&q=80')" }}>
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
            <a href="#" className="h-2.5 w-2.5 rounded-full bg-[#d8ba74]" />
            <a href="#" className="h-2.5 w-2.5 rounded-full bg-white/35" />
            <a href="#" className="h-2.5 w-2.5 rounded-full bg-white/35" />
          </div>
        </div>
      </div>
    </section>
  );
}
