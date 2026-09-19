import Icon from './ui/Icon.jsx'
import Reveal from './ui/Reveal.jsx'
import { Section, SectionHead } from './ui/Section.jsx'

const facts = [
  { label: 'Category', value: 'B2B Marketplace' },
  { label: 'Focus', value: 'Industrial Surplus' },
  { label: 'Status', value: 'Active' },
]

export default function Products() {
  return (
    <Section id="products" tone="dark">
      <SectionHead
        dark
        eyebrow="Built by JAS"
        title="Our Products"
        body="Alongside client work, we build and own our own products — starting here, growing over time."
      />

      <div className="grid items-stretch gap-7 lg:grid-cols-[1.35fr_1fr]">
        <Reveal className="clip-prod group relative border border-white/10 bg-white/5 p-9 transition-colors duration-300 ease-out hover:border-brand-500/30 hover:bg-white/[0.07] md:p-11">
          <div className="mb-7 inline-flex items-center gap-2 bg-brand-500/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-400">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-brand-500" />
            Live product
          </div>

          <h3 className="mb-4 text-display-md font-bold text-white">Surplus to Value</h3>
          <p className="mb-8 max-w-[460px] text-[15.5px] leading-relaxed text-slate-300">
            A B2B marketplace connecting businesses with industrial surplus inventory — turning idle
            stock into working capital, and surplus into sourcing opportunity.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-b-[1.5px] border-brand-500 pb-1 text-[14.5px] font-semibold text-white transition-colors duration-200 hover:text-brand-400"
          >
            Learn more
            <Icon name="arrowUpRight" className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  {fact.label}
                </dt>
                <dd className="text-sm font-semibold text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal
          delay={120}
          className="clip-prod flex flex-col items-start justify-center border border-dashed border-white/20 p-9 transition-colors duration-300 ease-out hover:border-white/35 md:p-11"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center border border-white/15 bg-white/5 text-white">
            <Icon name="plus" className="h-6 w-6" />
          </div>
          <h3 className="mb-3 text-lg font-semibold text-white">The next JAS product</h3>
          <p className="text-[14.5px] leading-relaxed text-slate-400">
            We&apos;re building more. Every product we ship starts as a problem we couldn&apos;t stop
            thinking about.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
