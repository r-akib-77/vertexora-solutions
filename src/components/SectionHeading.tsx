import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = "center", dark = false }: Props) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] ${
          dark ? "border-white/15 bg-white/5 text-[#7DB4FF]" : "border-[#E2E8F0] bg-[#F7F9FC] text-[#0866F5]"
        }`}
      >
        <span className="inline-block h-1.5 w-1.5 rotate-45 bg-current" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={`fluid-h2 font-display max-w-2xl font-extrabold text-balance ${
          dark ? "text-white" : "text-[#071631]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? "text-slate-300" : "text-[#64748B]"}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
