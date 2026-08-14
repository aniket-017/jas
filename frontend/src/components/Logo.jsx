export default function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center bg-navy-900">
        <span className="h-0 w-0 border-x-[7px] border-b-[12px] border-x-transparent border-b-brand-500" />
      </span>
      <span
        className={`font-display font-bold leading-tight text-navy-900 ${
          compact ? 'text-[13px]' : 'text-[15px]'
        }`}
      >
        JAS Digital
        {!compact && (
          <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
            Technologies
          </span>
        )}
      </span>
    </span>
  )
}
