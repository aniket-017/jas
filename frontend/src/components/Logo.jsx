import logo from '../assets/logo.jpeg'

export default function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <span className={`shrink-0 overflow-hidden bg-white ${compact ? 'h-8 w-8' : 'h-10 w-10'}`}>
        <img src={logo} alt="JAS Digital logo" className="h-full w-full scale-[1.22] object-cover" />
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
