import { Zap, Layers, MonitorSmartphone, Cpu } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { icon: Zap, title: "High-Performance Development", desc: "Fast, lightweight builds" },
  { icon: Layers, title: "Scalable Architecture", desc: "Maintainable from day one" },
  { icon: MonitorSmartphone, title: "Responsive Experiences", desc: "Flawless on every device" },
  { icon: Cpu, title: "Modern Technology", desc: "Current, proven tooling" },
];

export default function CapabilityStrip() {
  return (
    <section id="capabilities" aria-label="Core capabilities" className="relative z-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid -translate-y-0 grid-cols-1 gap-3 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="group flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F7F9FC] p-4 transition-all hover:-translate-y-1 hover:border-[#0866F5]/30 hover:shadow-[0_16px_35px_-20px_rgba(8,102,245,0.5)] sm:p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071631] text-white transition-colors group-hover:bg-[#0866F5]">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-[#071631]">{item.title}</span>
                  <span className="mt-0.5 block text-xs text-[#64748B]">{item.desc}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
