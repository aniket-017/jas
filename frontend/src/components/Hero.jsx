export default function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden pb-[72px] pt-14 md:pb-[110px] md:pt-24">
      <div className="mx-auto grid max-w-site items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="order-2 lg:order-1">
          <div className="mb-[22px] inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-brand-600">
            <span className="inline-block h-0.5 w-[26px] bg-brand-500" />
            Pune, India — Digital Product Studio
          </div>
          <h1 className="mb-6 text-[34px] font-bold md:text-[clamp(38px,4.6vw,60px)]">
            We turn business problems into <span className="text-brand-600">working software.</span>
          </h1>
          <p className="mb-9 max-w-[520px] text-[17.5px] text-muted">
            JAS Digital Technologies designs and builds the web platforms, mobile apps, AI workflows and cloud systems that let growing businesses run on modern infrastructure instead of manual processes.
          </p>
          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href="#solutions"
              className="clip-btn inline-flex items-center gap-2.5 bg-navy-900 px-[26px] py-[15px] text-[14.5px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Explore solutions
            </a>
            <a
              href="#products"
              className="clip-btn inline-flex items-center gap-2.5 border-[1.5px] border-navy-900 bg-transparent px-[26px] py-[15px] text-[14.5px] font-semibold text-navy-900 transition duration-200 hover:-translate-y-0.5 hover:border-brand-600 hover:text-brand-600"
            >
              Our products
            </a>
          </div>
          <div className="flex flex-wrap gap-5 border-t border-line pt-8 md:gap-9">
            {[
              'End-to-end delivery, in-house',
              'Modern, scalable tech stacks',
              'Built by engineers, not templates',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[13.5px] font-medium text-muted">
                <span className="h-[7px] w-[7px] shrink-0 bg-brand-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 flex h-80 items-center justify-center lg:order-2 lg:h-[440px]">
          <div className="clip-mark relative h-full w-full bg-navy-900 shadow-panel">
            <div className="grid-lines pointer-events-none absolute inset-0" />
            <div className="absolute left-[14%] top-[16%] h-[34px] w-[34px] bg-brand-500" />
            <div className="absolute right-[16%] bottom-[20%] h-0 w-0 border-x-[42px] border-b-[68px] border-x-transparent border-b-brand-500" />
            <div className="absolute right-[20%] top-[24%] h-0 w-0 border-x-[26px] border-b-[42px] border-x-transparent border-b-white/14" />
            <div className="absolute bottom-[16%] left-[20%] h-[18px] w-[18px] bg-white/16" />
            <div className="absolute left-[44%] top-[44%] h-[120px] w-[120px] rounded-full border-[1.5px] border-white/18" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between font-mono text-[12.5px] font-medium uppercase tracking-[0.14em] text-white/72">
              <span>SYS.01</span>
              <span>JAS/DT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
