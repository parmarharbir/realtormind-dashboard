const messages = [
  {
    role: "Realtor",
    body: "Show me hot leads near Oak Street.",
    tone: "user",
  },
  {
    role: "Kingpin AI",
    body:
      "Found 3 highly qualified buyers for properties on Oak Street. Here is John Doe (Approved $900k) and Sarah Chen (Cash, $1.2M). Draft introductory email?",
    tone: "assistant",
  },
  {
    role: "Realtor",
    body: "Yes, for John Doe, mentioning the listing at 123 Oak St.",
    tone: "user",
  },
  {
    role: "Kingpin AI",
    body: "Drafting email. [Action: Draft Email]",
    tone: "assistant",
  },
];

const pendingActions = [
  ["Hot Leads & opportunities", "0"],
  ["Contact staging & opportunities", "11"],
  ["Update communications", "3"],
  ["Automascagement", "2"],
  ["Understabilization", "7"],
];

const quickTools = [
  "Quick Tools",
  "Quick Tools",
  "New Hot Insider",
  "Quick Chat",
  "Events",
];

export function AssistantPanel() {
  return (
    <section className="rounded-[28px] border border-[#2b2416] bg-[#0f1522] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:p-5">
      <div className="rounded-[24px] border border-white/5 bg-[#131a28] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[28px] font-semibold leading-tight text-[#f6f0e4]">
              Kingpin AI Assistant Command Center
            </h1>
            <p className="mt-1 text-sm text-[#8b8f99]">A refined, dark, elegant workspace</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 py-1.5 text-sm text-[#d7bd7a]">
            ♛ <span>Kingpin</span>
          </div>
        </div>

        <div className="mt-5 flex gap-5 border-b border-white/5 pb-3 text-sm">
          <button className="border-b border-[#d0b06a] pb-2 font-medium text-[#f5ecd3]">Chat</button>
          <button className="pb-2 text-[#737b88]">Ehaf</button>
        </div>

        <div className="mt-4 rounded-[22px] border border-white/5 bg-[#111723] p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.tone === "user"
                    ? "bg-[#1a2432] text-[#dbe3ef]"
                    : "bg-[#171d27] text-[#d5c48c]"
                } ${message.tone === "user" ? "ml-auto" : "mr-auto"}`}
              >
                <span className="font-semibold">{message.role}:</span> {message.body}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[20px] border border-white/5 bg-[#0f1520] p-3">
            <div className="flex items-center gap-3">
              <input
                readOnly
                value="Type a message..."
                className="h-12 flex-1 rounded-2xl border border-white/5 bg-[#121926] px-4 text-sm text-[#6e7686] outline-none"
              />
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-white/[0.04] text-[#8b91a0]">
                ◎
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#caa65b] text-[#161209] shadow-[0_10px_30px_rgba(202,166,91,0.35)]">
                ➤
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[22px] border border-white/5 bg-[#111723] p-4">
            <h2 className="text-sm font-semibold text-[#f4ead0]">Pending Actions</h2>
            <div className="mt-3 space-y-2">
              {pendingActions.map(([label, count]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-sm text-[#b4bac4]"
                >
                  <span>{label}</span>
                  <span className="rounded-full border border-white/5 bg-white/[0.03] px-2 py-0.5 text-xs text-[#f2e4b6]">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] border border-white/5 bg-[#111723] p-4">
            <h2 className="text-sm font-semibold text-[#f4ead0]">Quick Tools</h2>
            <div className="mt-3 space-y-2">
              {quickTools.map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-sm text-[#b4bac4]"
                >
                  <span>{label}</span>
                  <span className="text-[#7c8491]">›</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
