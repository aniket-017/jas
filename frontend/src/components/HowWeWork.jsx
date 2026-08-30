import Button from './ui/Button.jsx'
import Icon from './ui/Icon.jsx'
import Reveal from './ui/Reveal.jsx'
import { Eyebrow } from './ui/Section.jsx'

const steps = [
  {
    icon: 'signal',
    title: 'Collect',
    description: 'We connect to your machines, robots and systems to collect real-time data.',
  },
  {
    icon: 'funnel',
    title: 'Process',
    description: 'We clean, validate and transform data into structured, reliable datasets.',
  },
  {
    icon: 'scan',
    title: 'Analyze',
    description: 'We analyze data to discover patterns, anomalies and opportunities.',
  },
  {
    icon: 'dashboard',
    title: 'Deliver',
    description: 'We deliver insights through dashboards, reports and data platforms.',
  },
  {
    icon: 'refresh',
    title: 'Improve',
    description: 'Continuous feedback and automation to improve performance and outcomes.',
  },
]

export default function HowWeWork() {
  return (
    <section className="surface-dark py-[76px] md:py-section lg:py-section-lg">
      <div className="grid-lines-lg mask-fade pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-[2] mx-auto max-w-site px-5 md:px-8">
        <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal className="max-w-[560px]">
            <Eyebrow dark>How we work</Eyebrow>
            <h2 className="mt-5 text-display-lg font-bold text-white">From raw data to real impact.</h2>
            <p className="mt-5 max-w-[460px] text-[16.5px] leading-relaxed text-slate-300">
              A proven process that ensures your industrial data is accurate, secure and ready to
              drive outcomes.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Button href="#contact" variant="outlineDark">
              Our approach
            </Button>
          </Reveal>
        </div>

        <div className="relative">
          {/* Connector rail threaded through the icon centres */}
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5 md:gap-5">
            {steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 90}
                className="group flex items-start gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
              >
                <div className="relative shrink-0">
                  <div className="relative z-[2] flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-navy-900 text-data-400 transition-all duration-300 ease-out group-hover:border-brand-500/60 group-hover:bg-navy-800 group-hover:text-brand-500">
                    <Icon name={step.icon} className="h-8 w-8" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 z-[3] flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 font-mono text-[11px] font-bold text-white ring-4 ring-navy-950">
                    {index + 1}
                  </span>
                </div>

                <div className="md:mt-7">
                  <h3 className="mb-2.5 text-[17px] font-semibold text-white">{step.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-slate-400">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
