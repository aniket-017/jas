export default function Contact() {
  return (
    <section id="contact" className="bg-canvas py-[72px] md:py-[100px]">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="grid border border-line bg-white shadow-card lg:grid-cols-[1.1fr_0.9fr]">
          <div className="px-7 py-9 md:px-[52px] md:py-14">
            <div className="mb-[18px] inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-brand-600">
              <span className="inline-block h-0.5 w-[26px] bg-brand-500" />
              Get in touch
            </div>
            <h2 className="mb-4 text-[32px] font-bold">Let&apos;s build something that works.</h2>
            <p className="mb-[30px] max-w-[440px] text-[15.5px] text-muted">
              Tell us about your business problem and we&apos;ll tell you honestly whether — and how — we can help.
            </p>
            <a
              href="mailto:info@jasdigitaltechnologies.com"
              className="clip-btn inline-flex items-center gap-2.5 bg-navy-900 px-[26px] py-[15px] text-[14.5px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Email us
            </a>
          </div>

          <div className="flex flex-col justify-center gap-[26px] bg-navy-900 px-7 py-9 md:px-12 md:py-14">
            <div>
              <div className="mb-2.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/42">
                Studio Address
              </div>
              <p className="text-[15px] font-medium leading-[1.55] text-white">
                PL-546, Sector 28, PCNTDA, Nigdi, Pradhikaran, P.C.N.T., Nigdi, Pune City, Pune – 411044, Maharashtra, India
              </p>
            </div>
            <div>
              <div className="mb-2.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/42">
                Website
              </div>
              <a
                href="https://jasdigitaltechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-white hover:text-brand-500"
              >
                jasdigitaltechnologies.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
