import logo from "../assets/jas_logo.png";

export default function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <img src={logo} alt="JAS Digital" className="h-8 w-8 shrink-0" />
      <span className={`font-display font-bold leading-tight text-navy-900 ${compact ? "text-[13px]" : "text-[15px]"}`}>
        JAS Digital
        {!compact && (
          <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
            Technologies
          </span>
        )}
      </span>
    </span>
  );
}
