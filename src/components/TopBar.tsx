export function TopBar() {
  return (
    <header className="flex items-center justify-between border-b border-white/6 px-4 py-4 sm:px-6">
      <a href="#" className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg border border-[#c6a86a]/30 bg-[#c6a86a]/10" />
        <div>
          <p className="text-sm font-semibold text-[#f4e7c2]">RealtorMind AI</p>
        </div>
      </a>
      <nav className="hidden items-center gap-6 text-sm text-white/55 md:flex">
        <a className="text-[#d8ba74]" href="#">Workflows</a>
        <a href="#">Analytics</a>
        <a href="#">Settings</a>
        <a href="#">Account</a>
      </nav>
    </header>
  );
}
