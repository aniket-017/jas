import Icon from './Icon.jsx'

const variants = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-500 hover:shadow-glow',
  navy: 'bg-navy-900 text-white hover:bg-brand-600',
  outlineLight:
    'border-[1.5px] border-navy-900/25 text-navy-900 hover:border-brand-500 hover:bg-brand-50 hover:text-brand-600',
  outlineDark:
    'border-[1.5px] border-white/30 text-white hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-400',
}

export default function Button({
  href = '#',
  variant = 'primary',
  icon = 'arrowRight',
  className = '',
  children,
  ...rest
}) {
  return (
    <a
      href={href}
      className={`clip-btn group inline-flex items-center gap-2.5 px-[26px] py-[15px] text-[14.5px] font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon && (
        <Icon
          name={icon}
          className="h-[18px] w-[18px] transition-transform duration-300 ease-out group-hover:translate-x-1"
          strokeWidth={1.8}
        />
      )}
    </a>
  )
}
