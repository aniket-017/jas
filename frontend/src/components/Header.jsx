import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import Icon from './ui/Icon.jsx'

const links = [
  { href: '#solutions', label: 'Solutions', id: 'solutions' },
  { href: '#products', label: 'Products', id: 'products' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav item for whichever section owns the viewport.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (top) setActive(top.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ease-out ${
        scrolled
          ? 'border-line bg-canvas/92 shadow-[0_1px_24px_-8px_rgba(10,23,51,0.25)] backdrop-blur-xl'
          : 'border-transparent bg-canvas'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-site items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          aria-label="JAS Digital Technologies — home"
          onClick={() => setOpen(false)}
          className="transition-opacity duration-200 hover:opacity-80"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 nav:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.id ? 'true' : undefined}
              className={`relative py-1.5 text-[14.5px] font-semibold transition-colors duration-200 ${
                active === link.id ? 'text-brand-600' : 'text-navy-900 hover:text-brand-600'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-[2px] bg-brand-500 transition-all duration-300 ease-out ${
                  active === link.id ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="clip-cta hidden items-center gap-2 bg-navy-900 px-5 py-[11px] text-[13.5px] font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-600 nav:inline-flex"
        >
          Start a project
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-line text-navy-900 transition-colors duration-200 hover:border-brand-500 hover:text-brand-600 nav:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex flex-col gap-[5px]">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ease-out ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ease-out ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-line bg-canvas transition-[max-height,opacity] duration-300 ease-out nav:hidden ${
          open ? 'max-h-[380px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-5 md:px-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center justify-between border-b border-line/70 py-3.5 text-base font-semibold text-navy-900"
              onClick={() => setOpen(false)}
            >
              {link.label}
              <Icon name="arrowRight" className="h-4 w-4 text-muted-light" />
            </a>
          ))}
          <a
            href="#contact"
            className="clip-cta mt-4 inline-flex w-fit items-center bg-navy-900 px-5 py-[13px] text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  )
}
