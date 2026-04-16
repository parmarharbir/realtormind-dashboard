import Link from "next/link";

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
    <section className="h-full rounded-[28px] border border-[#2b2416] bg-[#0f1522] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:p-5">
      <div className="flex h-full flex-col rounded-[24px] border border-white/5 bg-[#131a28] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href="#" className="text-[28px] font-semibold leading-tight text-[#f6f0e4]">
              Kingpin AI Assistant Command Center
            </Link>
            <p className="mt-1 text-sm text-[#8b8f99]">A refined, dark, elegant workspace</p>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3 py-1.5 text-sm text-[#d7bd7a]"
          >
            ♛ <span>Kingpin</span>
          </Link>
        </div>

        <div className="mt-5 flex gap-5 border-b border-white/5 pb-3 text-sm">
          <Link href="#" className="border-b border-[#d0b06a] pb-2 font-medium text-[#f5ecd3]">
            Chat
          </Link>
          <Link href="#" className="pb-2 text-[#737b88] hover:text-white">
            Ehaf
          </Link>
        </div>

        <div className="mt-4 flex min-h-0 flex-1 flex-col rounded-[22px] border border-white/5 bg-[#111723] p-4">
          <div className="space-y-4 overflow-y-auto pr-1">
            {messages.map((message, index) => (
              <Link
                href="#"
                key={`${message.role}-${index}`}
                className={`block max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.tone === "user"
                    ? "ml-auto bg-[#1a2432] text-[#dbe3ef]"
                    : "mr-auto bg-[#171d27] text-[#d5c48c]"
                }`}
              >
                <span className="font-semibold">{message.role}:</span> {message.body}
              </Link>
            ))}
          </div>

          <div className="mt-6 rounded-[20px] border border-white/5 bg-[#0f1520] p-3">
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="flex h-12 flex-1 items-center rounded-2xl border border-white/5 bg-[#121926] px-4 text-sm text-[#6e7686]"
              >
                Type a message...
              </Link>
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-white/[0.04] text-[#8b91a0]"
              >
                ◎
              </Link>
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#caa65b] text-[#161209] shadow-[0_10px_30px_rgba(202,166,91,0.35)]"
              >
                ➤
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[22px] border border-white/5 bg-[#111723] p-4">
            <Link href="#" className="text-sm font-semibold text-[#f4ead0]">
              Pending Actions
            </Link>
            <div className="mt-3 space-y-2">
              {pendingActions.map(([label, count]) => (
                <Link
                  href="#"
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-sm text-[#b4bac4]"
                >
                  <span>{label}</span>
                  <span className="rounded-full border border-white/5 bg-white/[0.03] px-2 py-0.5 text-xs text-[#f2e4b6]">
                    {count}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] border border-white/5 bg-[#111723] p-4">
            <Link href="#" className="text-sm font-semibold text-[#f4ead0]">
              Quick Tools
            </Link>
            <div className="mt-3 space-y-2">
              {quickTools.map((label, index) => (
                <Link
                  href="#"
                  key={`${label}-${index}`}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-sm text-[#b4bac4]"
                >
                  <span>{label}</span>
                  <span className="text-[#7c8491]">›</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
