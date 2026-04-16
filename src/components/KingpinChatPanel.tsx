import { chatMessages, pendingActions, quickTools } from "@/data/dashboard";

export function KingpinChatPanel() {
  return (
    <section className="rounded-[24px] border border-white/7 bg-[#151d29] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <div className="flex items-start justify-between gap-4 border-b border-white/6 pb-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Kingpin AI Assistant Command Center</h2>
          <p className="mt-1 text-sm text-white/45">A refined, dark, elegant workspace</p>
          <div className="mt-4 flex gap-5 text-sm text-white/50">
            <a href="#" className="text-[#d8ba74]">Chat</a>
            <a href="#">Chat</a>
          </div>
        </div>
        <a href="#" className="flex items-center gap-2 text-sm text-[#d8ba74]">
          <span className="text-lg">♛</span>
          <span>Kingpin</span>
        </a>
      </div>

      <div className="space-y-4 py-5">
        {chatMessages.map((message, index) => (
          <a
            href="#"
            key={index}
            className={`block max-w-[92%] rounded-2xl border px-4 py-3 text-sm leading-6 ${
              message.tone === "assistant"
                ? "border-[#2c3544] bg-[#252d3a] text-[#d8c79e]"
                : "ml-auto border-[#283243] bg-[#2a3444] text-white/82"
            }`}
          >
            <span className="font-semibold">{message.sender}: </span>
            {message.text}
          </a>
        ))}
      </div>

      <div className="rounded-[20px] border border-white/6 bg-[#131a25] p-3">
        <a href="#" className="flex items-center gap-3 rounded-2xl border border-white/6 bg-[#0f1620] px-4 py-3 text-sm text-white/30">
          <span className="flex-1">Type a message...</span>
          <span>☺</span>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#a8894d] text-[#11161f]">➤</span>
        </a>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Pending Actions</h3>
          <div className="space-y-2">
            {pendingActions.map((item) => (
              <a key={item.label} href="#" className="flex items-center justify-between rounded-xl border border-white/6 bg-[#141b26] px-4 py-3 text-sm text-white/70">
                <span>{item.label}</span>
                <span className="rounded-md bg-[#0c121b] px-2 py-1 text-xs text-white/45">{item.count}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Quick Tools</h3>
          <div className="space-y-2">
            {quickTools.map((tool) => (
              <a key={tool} href="#" className="flex items-center justify-between rounded-xl border border-white/6 bg-[#141b26] px-4 py-3 text-sm text-white/70">
                <span>{tool}</span>
                <span className="text-white/28">›</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
