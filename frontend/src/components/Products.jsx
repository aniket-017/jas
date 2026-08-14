export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-navy-900 py-[72px] md:py-[100px]">
      <div className="grid-lines-lg pointer-events-none absolute inset-0" />
      <div className="relative z-[2] mx-auto max-w-site px-5 md:px-8">
        <div className="mb-14 max-w-[640px]">
          <div className="mb-[22px] inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-brand-500">
            <span className="inline-block h-0.5 w-[26px] bg-brand-500" />
            Built by JAS
          </div>
          <h2 className="text-[clamp(30px,3.4vw,42px)] font-bold text-white">Our Products</h2>
          <p className="mt-3.5 text-base text-white/62">
            Alongside client work, we build and own our own products — starting here, growing over time.
          </p>
        </div>

        <div className="grid items-stretch gap-7 lg:grid-cols-[1.3fr_1fr]">
          <article className="clip-prod relative border border-white/12 bg-white/[0.04] p-11">
            <div className="mb-6 inline-flex items-center gap-2 bg-brand-500/14 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-500">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Live product
            </div>
            <h3 className="mb-3.5 text-[28px] font-bold text-white">Surplus to Value</h3>
            <p className="mb-7 max-w-[440px] text-[15.5px] text-white/68">
              A B2B marketplace connecting businesses with industrial surplus inventory — turning idle stock into working capital, and surplus into sourcing opportunity.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-b-[1.5px] border-brand-500 pb-[3px] text-[14.5px] font-semibold text-white hover:text-brand-500"
            >
              Learn more →
            </a>
            <div className="mt-8 flex flex-wrap gap-7 border-t border-white/12 pt-6">
              <div>
                <span className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/40">
                  Category
                </span>
                <strong className="text-sm font-semibold text-white">B2B Marketplace</strong>
              </div>
              <div>
                <span className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/40">
                  Focus
                </span>
                <strong className="text-sm font-semibold text-white">Industrial Surplus</strong>
              </div>
              <div>
                <span className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/40">
                  Status
                </span>
                <strong className="text-sm font-semibold text-white">Active</strong>
              </div>
            </div>
          </article>

          <article className="clip-prod flex flex-col items-start justify-center border border-dashed border-white/22 bg-transparent p-11">
            <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center bg-white/6 text-[26px] text-white">
              +
            </div>
            <h4 className="mb-2.5 font-display text-lg font-semibold text-white">The next JAS product</h4>
            <p className="text-sm text-white/55">
              We&apos;re building more. Every product we ship starts as a problem we couldn&apos;t stop thinking about.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
