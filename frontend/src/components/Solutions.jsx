const solutions = [
  {
    num: '01',
    icon: '💻',
    title: 'Software Development',
    body: 'Custom web applications, enterprise software, dashboards, and business platforms.',
  },
  {
    num: '02',
    icon: '📱',
    title: 'Mobile App Development',
    body: 'iOS and Android applications designed for real-world business needs.',
  },
  {
    num: '03',
    icon: '🤖',
    title: 'AI & Automation',
    body: 'AI-powered applications, intelligent workflows, chatbots, and business automation.',
  },
  {
    num: '04',
    icon: '☁️',
    title: 'Cloud & DevOps',
    body: 'Cloud infrastructure, deployment, hosting, APIs, monitoring, and scalable systems.',
  },
  {
    num: '05',
    icon: '🔗',
    title: 'Digital Transformation',
    body: 'Helping businesses replace manual processes with modern digital solutions.',
  },
  {
    num: '06',
    icon: '🛠️',
    title: 'Custom Technology Solutions',
    body: 'End-to-end technology solutions tailored to specific business requirements.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="border-y border-line bg-canvas py-[72px] md:py-[100px]">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="mb-14 max-w-[640px]">
          <div className="mb-[22px] inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-brand-600">
            <span className="inline-block h-0.5 w-[26px] bg-brand-500" />
            What we do
          </div>
          <h2 className="text-[clamp(30px,3.4vw,42px)] font-bold">Solutions</h2>
          <p className="mt-3.5 text-base text-muted">
            Six practice areas, one team. We pick the right stack for the problem rather than forcing your business into ours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <article
              key={item.num}
              className="group relative bg-white px-[34px] pb-[34px] pt-[38px] transition-colors duration-200 hover:bg-canvas-alt"
            >
              <span className="absolute left-0 top-0 h-0 w-0 border-b-[26px] border-l-[26px] border-b-brand-100 border-l-transparent transition-colors duration-200 group-hover:border-b-brand-500" />
              <span className="absolute right-[34px] top-9 font-mono text-xs text-muted-light">
                {item.num}
              </span>
              <div className="mb-[22px] flex h-[52px] w-[52px] items-center justify-center bg-canvas-alt text-[26px]">
                {item.icon}
              </div>
              <h3 className="mb-2.5 text-[19px] font-semibold">{item.title}</h3>
              <p className="text-[14.5px] text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
