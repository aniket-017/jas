import Icon from './ui/Icon.jsx'
import Reveal from './ui/Reveal.jsx'
import { Section, SectionHead } from './ui/Section.jsx'

const solutions = [
  {
    num: '01',
    icon: 'code',
    title: 'Software Development',
    body: 'Custom web applications, enterprise software, dashboards, and business platforms.',
  },
  {
    num: '02',
    icon: 'mobile',
    title: 'Mobile App Development',
    body: 'iOS and Android applications designed for real-world business needs.',
  },
  {
    num: '03',
    icon: 'chip',
    title: 'AI & Automation',
    body: 'AI-powered applications, intelligent workflows, chatbots, and business automation.',
  },
  {
    num: '04',
    icon: 'server',
    title: 'Cloud & DevOps',
    body: 'Cloud infrastructure, deployment, hosting, APIs, monitoring, and scalable systems.',
  },
  {
    num: '05',
    icon: 'transform',
    title: 'Digital Transformation',
    body: 'Helping businesses replace manual processes with modern digital solutions.',
  },
  {
    num: '06',
    icon: 'wrench',
    title: 'Custom Technology Solutions',
    body: 'End-to-end technology solutions tailored to specific business requirements.',
  },
]

export default function Solutions() {
  return (
    <Section id="solutions" tone="light" className="border-y border-line">
      <SectionHead
        eyebrow="Capabilities"
        title="Solutions"
        body="Six practice areas, one team. We pick the right stack for the problem rather than forcing your business into ours."
      />

      <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item, index) => (
          <Reveal
            key={item.num}
            delay={index * 70}
            className="group relative bg-white p-8 transition-colors duration-300 ease-out hover:bg-canvas-alt md:p-10"
          >
            {/* Corner notch reacts to hover */}
            <span
              className="absolute left-0 top-0 h-0 w-0 border-b-[26px] border-l-[26px] border-b-brand-100 border-l-transparent transition-colors duration-300 ease-out group-hover:border-b-brand-500"
              aria-hidden="true"
            />
            <span className="absolute right-8 top-8 font-mono text-xs text-muted-light transition-colors duration-300 group-hover:text-brand-500 md:right-10 md:top-10">
              {item.num}
            </span>

            <div className="mb-7 flex h-14 w-14 items-center justify-center border border-line bg-canvas-alt text-navy-900 transition-all duration-300 ease-out group-hover:border-brand-500/40 group-hover:bg-brand-50 group-hover:text-brand-600">
              <Icon name={item.icon} className="h-[26px] w-[26px]" />
            </div>

            <h3 className="mb-3 max-w-[85%] text-[19px] font-semibold text-navy-900">{item.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
