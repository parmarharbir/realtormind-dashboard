import Link from "next/link";

type SectionHeaderProps = {
  title: string;
};

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <Link
        href="#"
        className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f3ead0] transition hover:text-[#d6b76f]"
      >
        {title}
      </Link>
      <div className="flex items-center gap-2 text-[#8f8672]">
        <Link
          href="#"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/5 bg-white/[0.03] text-xs hover:text-[#d7b66d]"
        >
          ‹
        </Link>
        <Link
          href="#"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/5 bg-white/[0.03] text-xs hover:text-[#d7b66d]"
        >
          ›
        </Link>
      </div>
    </div>
  );
}
