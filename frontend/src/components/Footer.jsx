import Logo from './Logo.jsx'
import Icon from './ui/Icon.jsx'

const links = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#products', label: 'Products' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 pb-8 pt-14">
      <div className="grid-lines-lg pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="relative z-[2] mx-auto max-w-site px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-8 sm:flex-row sm:items-center">
          <a href="#top" className="clip-foot bg-white px-4 py-2.5" aria-label="Back to top">
            <Logo compact />
          </a>

          <nav className="flex flex-wrap gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-brand-500"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[12.5px] text-slate-500">
          <span>© {new Date().getFullYear()} JAS Digital Technologies. All rights reserved.</span>
          <a
            href="https://jasdigitaltechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-brand-500"
          >
            jasdigitaltechnologies.com
            <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
