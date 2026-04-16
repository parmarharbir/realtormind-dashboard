import Link from "next/link";

const icons = [
  { label: "Grid", icon: "▦" },
  { label: "Docs", icon: "◫" },
  { label: "People", icon: "👥" },
  { label: "Settings", icon: "⚙" },
  { label: "List", icon: "☰" },
];

export function SidebarRail() {
  return (
    <aside className="hidden w-[72px] shrink-0 rounded-[28px] border border-[#2b2416] bg-[#0d121d] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:flex md:flex-col md:items-center md:justify-between md:sticky md:top-5 md:h-[calc(100vh-2.5rem)]">
      <div className="flex flex-col items-center gap-3 pt-1">
        <Link
          href="#"
          className="flex h-11 w-11 items-center justify-center rounded-2xl text-[#746f63] transition hover:bg-white/5 hover:text-white"
        >
          ☰
        </Link>
        {icons.map((item, index) => (
          <Link
            key={item.label}
            href="#"
            aria-label={item.label}
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-sm transition ${
              index === 0
                ? "border-[#5c4923] bg-[#c8a45a] text-[#15120b] shadow-[0_10px_25px_rgba(200,164,90,0.3)]"
                : "border-transparent bg-transparent text-[#7f8591] hover:border-white/5 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.icon}
          </Link>
        ))}
      </div>

      <Link
        href="#"
        className="mb-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-xs text-[#d0b06a]"
      >
        AI
      </Link>
    </aside>
  );
}
