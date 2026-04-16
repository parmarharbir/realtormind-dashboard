export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <a href="#" className="text-sm font-semibold uppercase tracking-[0.22em] text-white/82">{title}</a>
      <div className="flex gap-2 text-white/35">
        <a href="#" className="grid h-6 w-6 place-items-center rounded-full border border-white/10">‹</a>
        <a href="#" className="grid h-6 w-6 place-items-center rounded-full border border-white/10">›</a>
      </div>
    </div>
  );
}
