import { SectionHeader } from "@/components/section-header";

const items = [
  {
    title: "Scheduled Viewings",
    lines: ["Thursday : 10:30 am", "1:00 pm - 2:30 pm", "1:30 am - 7:00 pm"],
    cta: "Scheduled Viewing",
  },
  {
    title: "Scheduled Viewing",
    lines: ["Scheduled reminder committed your viewing cards."],
    cta: "Scheduled Viewing",
  },
  {
    title: "Automated Reminder",
    lines: ["Automated reminder committed your viewing cards."],
    cta: "Automate reminder",
  },
  {
    title: "Automated Reminder",
    lines: ["Auto-viewing cards ready for broker review."],
    cta: "Automate reminder",
  },
];

export function ShowingsSection() {
  return (
    <section>
      <SectionHeader title="Upcoming Showings & Follow-ups" />
      <div className="grid gap-3 xl:grid-cols-4 md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="rounded-[20px] border border-white/5 bg-[#121926] p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-medium text-white">{item.title}</h3>
                <p className="mt-1 text-[11px] text-[#8f96a5]">Scheduled Viewings</p>
              </div>
              <span className="text-[#737a86]">{index === 0 ? "⋮" : "×"}</span>
            </div>

            <div className="mt-4 space-y-2 text-[12px] leading-5 text-[#b4bac6]">
              {item.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <button className="mt-5 rounded-xl bg-[#c9a458] px-3 py-2 text-xs font-medium text-[#161209] shadow-[0_8px_24px_rgba(201,164,88,0.28)]">
              {item.cta}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
