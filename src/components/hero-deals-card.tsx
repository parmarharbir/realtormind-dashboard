import Image from "next/image";

export function HeroDealsCard() {
  return (
    <section className="overflow-hidden rounded-[26px] border border-[#382c18] bg-[#121926]">
      <div className="relative min-h-[280px] p-6 lg:min-h-[300px] lg:p-7">
        <Image
          src="/images/mockup-reference.png"
          alt="Luxury property"
          fill
          className="object-cover opacity-32"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,15,0.95)_0%,rgba(8,10,15,0.78)_36%,rgba(8,10,15,0.34)_100%)]" />
        <div className="relative z-10 flex h-full max-w-[420px] flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[#d2b06b]">Kingpin command view</p>
          <h2 className="mt-3 text-4xl font-semibold uppercase leading-none text-white lg:text-[52px]">
            Focus on what matters: deals
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#b6bcca]">
            High-impact, lifestyle-led operating view with instant access to live deals, warm buyers,
            high-value follow-ups, and the next best action.
          </p>
          <div className="mt-7 flex gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#8f98a8]">Active Deals</p>
              <p className="mt-1 text-3xl font-semibold text-[#f7edd4]">14</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#8f98a8]">Total Pipeline</p>
              <p className="mt-1 text-3xl font-semibold text-[#f7edd4]">$28M</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
          <span className="h-1.5 w-8 rounded-full bg-[#d2b06b]" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
}
