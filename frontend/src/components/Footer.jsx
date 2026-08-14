import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-navy-950 pb-7 pt-12">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/8 pb-7 sm:flex-row sm:items-center">
          <div className="clip-foot bg-white px-3.5 py-2">
            <Logo compact />
          </div>
          <nav className="flex gap-8">
            <a href="#solutions" className="text-sm font-medium text-white/65 hover:text-brand-500">
              Solutions
            </a>
            <a href="#products" className="text-sm font-medium text-white/65 hover:text-brand-500">
              Products
            </a>
            <a href="#contact" className="text-sm font-medium text-white/65 hover:text-brand-500">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-[22px] text-[12.5px] text-white/40">
          <span>© 2026 JAS Digital Technologies. All rights reserved.</span>
          <a
            href="https://jasdigitaltechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-brand-500"
          >
            jasdigitaltechnologies.com
          </a>
        </div>
      </div>
    </footer>
  )
}
