const navItems = ["Workflows", "Analytics", "Settings", "Account"];

export function DashboardNav() {
  return (
    <header className="flex flex-col gap-4 border-b border-white/5 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#4f4020] bg-[#171309] text-[#d6b76f]">
          ◇
        </div>
        <div>
          <p className="text-sm font-semibold text-[#f5efe1]">RealtorMind AI</p>
        </div>
      </div>

      <nav className="flex flex-wrap items-center gap-5 text-sm text-[#8d93a0]">
        {navItems.map((item, index) => (
          <a
            key={item}
            href="#"
            className={`relative pb-2 transition ${
              index === 0 ? "text-[#f2e6c5]" : "hover:text-white"
            }`}
          >
            {item}
            {index === 0 && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[#d3b067]" />
            )}
          </a>
        ))}
      </nav>
    </header>
  );
}
