import Reveal from './Reveal.jsx'

/**
 * Shared section shell. `tone` controls the surface so light/dark rhythm and
 * vertical spacing stay identical across the whole page.
 */
export function Section({ id, tone = 'light', className = '', children }) {
  const tones = {
    light: 'bg-canvas',
    white: 'bg-white',
    alt: 'bg-canvas-alt',
    dark: 'surface-dark',
  }

  return (
    <section
      id={id}
      className={`relative py-[76px] md:py-section lg:py-section-lg ${tones[tone]} ${className}`}
    >
      {tone === 'dark' && (
        <div className="grid-lines-lg mask-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      )}
      <div className="relative z-[2] mx-auto max-w-site px-5 md:px-8">{children}</div>
    </section>
  )
}

export function Eyebrow({ children, dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.16em] ${
        dark ? 'text-brand-500' : 'text-brand-600'
      }`}
    >
      <span className="inline-block h-px w-7 bg-brand-500" />
      {children}
    </div>
  )
}

export function SectionHead({ eyebrow, title, body, dark = false, align = 'left', className = '' }) {
  return (
    <Reveal
      className={`mb-14 max-w-[660px] md:mb-16 ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}
    >
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-5 text-display-lg font-bold ${dark ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
      {body && (
        <p className={`mt-5 text-[16.5px] leading-relaxed ${dark ? 'text-slate-300' : 'text-muted'}`}>{body}</p>
      )}
    </Reveal>
  )
}
