import { useState } from 'react'
import Logo from './Logo.jsx'

const links = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#products', label: 'Products' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(250,250,249,0.88)] backdrop-blur-[10px]">
      <div className="mx-auto flex h-[78px] max-w-site items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="JAS Digital Technologies" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-10 nav:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-[14.5px] font-semibold text-navy-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-500 after:content-[''] after:transition-[width] after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="clip-cta hidden items-center gap-2 bg-navy-900 px-5 py-[11px] text-sm font-semibold text-white hover:bg-brand-600 nav:inline-flex"
        >
          Start a project
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line text-navy-900 nav:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-navy-900 transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-navy-900 transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-navy-900 transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-canvas px-5 py-5 nav:hidden md:px-8">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-navy-900"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="clip-cta inline-flex w-fit items-center bg-navy-900 px-5 py-[11px] text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Start a project
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
