type LogoProps = {
  variant?: "dark" | "light";
  compact?: boolean;
  className?: string;
};

/** Angular Vertexora mark — matches supplied brand geometry (diamond apex, split beams). */
export function VertexMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 52" fill="none" className={className} role="img" aria-label="Vertexora mark">
      {/* apex diamond */}
      <path d="M32 1 38.5 9.5 32 18 25.5 9.5 32 1Z" fill="#1685FF" />
      {/* left beam */}
      <path d="M4 48 22.5 17.5 29 25 16.5 48H4Z" fill="currentColor" opacity="0.98" />
      {/* right beam */}
      <path d="M60 48 41.5 17.5 35 25 47.5 48H60Z" fill="#0866F5" />
      {/* centre triangle */}
      <path d="M32 27 22.5 48h19L32 27Z" fill="#0A4BD6" />
    </svg>
  );
}

export default function Logo({ variant = "dark", compact = false, className = "" }: LogoProps) {
  const wordColor = variant === "dark" ? "text-[#071631]" : "text-white";
  const subColor = variant === "dark" ? "text-[#0866F5]" : "text-[#7DB4FF]";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Vertexora Solutions home">
      <span className={variant === "dark" ? "text-[#071631]" : "text-white"}>
        <VertexMark className={compact ? "h-8 w-8" : "h-9 w-9"} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.15rem] font-extrabold tracking-[0.08em] ${wordColor}`}>
          VERTEX<span className={variant === "dark" ? "text-[#0866F5]" : "text-[#3E9BFF]"}>ORA</span>
        </span>
        {!compact && (
          <span className={`mt-1 text-[0.6rem] font-bold tracking-[0.42em] ${subColor}`}>SOLUTIONS</span>
        )}
      </span>
    </span>
  );
}
