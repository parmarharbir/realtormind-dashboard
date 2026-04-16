const navItems = [
  { icon: "▦", label: "Grid" },
  { icon: "▣", label: "Document" },
  { icon: "◌", label: "People" },
  { icon: "⚙", label: "Settings" },
  { icon: "≣", label: "List" },
];

export function SidebarNav() {
  return (
    <aside className="hidden w-[68px] flex-col items-center gap-5 border-r border-white/6 bg-[#0a1018] py-6 lg:flex">
      <a href="#" className="mb-1 text-xl text-white/40">≡</a>
      {navItems.map((item, index) => (
        <a
          key={item.label}
          href="#"
          aria-label={item.label}
          className={`grid h-10 w-10 place-items-center rounded-xl border text-sm transition ${
            index === 0
              ? "border-[#c6a86a]/50 bg-[#c6a86a]/14 text-[#f0ddb0]"
              : "border-white/5 bg-white/[0.02] text-white/45 hover:text-white/80"
          }`}
        >
          {item.icon}
        </a>
      ))}
    </aside>
  );
}
