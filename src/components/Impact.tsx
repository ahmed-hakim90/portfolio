import { milestones, roles } from "@/data/career";

const recent = [...milestones].reverse().slice(0, 6);

export default function Impact() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {recent.map((item) => {
        const role = roles.find((r) => r.id === item.roleId);
        return (
          <a
            key={`${item.month}-${item.label}`}
            href={`/work#${item.roleId}`}
            className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2.5 transition-colors duration-200 hover:border-amber-400/25"
          >
            <div className="text-[11px] font-medium tabular-nums text-amber-200/90">{item.month}</div>
            <div className="mt-1 text-xs leading-snug text-white/70">{item.label}</div>
            <div className="mt-0.5 text-[9px] text-white/25">{role?.company}</div>
          </a>
        );
      })}
    </div>
  );
}
