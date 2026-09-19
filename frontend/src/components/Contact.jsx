import Button from "./ui/Button.jsx";
import Icon from "./ui/Icon.jsx";
import Reveal from "./ui/Reveal.jsx";
import { Eyebrow } from "./ui/Section.jsx";

export default function Contact() {
  return (
    <section id="contact" className="bg-canvas py-[76px] md:py-section lg:py-section-lg">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal className="grid overflow-hidden border border-line bg-white shadow-card lg:grid-cols-[1.1fr_0.9fr]">
          <div className="px-7 py-10 md:px-14 md:py-16">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="mt-5 text-display-md font-bold text-navy-900">Let&apos;s build something that works.</h2>
            <p className="mb-9 mt-5 max-w-[440px] text-[16px] leading-relaxed text-muted">
              Tell us about your business problem and we&apos;ll tell you honestly whether — and how — we can help.
            </p>
            <Button href="mailto:contact@jasdigitaltechnologies.com" variant="navy" icon="mail">
              Email us
            </Button>
          </div>

          <div className="relative flex flex-col justify-center gap-8 overflow-hidden bg-navy-900 px-7 py-10 md:px-12 md:py-16">
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

            <div className="relative flex gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 bg-white/5 text-brand-500">
                <Icon name="pin" className="h-[18px] w-[18px]" />
              </span>
              <div>
                <div className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                  Studio Address
                </div>
                <p className="text-[15px] font-medium leading-[1.6] text-white">
                  PL-546, Sector 28, PCNTDA, Nigdi, Pradhikaran, P.C.N.T., Nigdi, Pune City, Pune – 411044, Maharashtra,
                  India
                </p>
              </div>
            </div>

            <div className="relative flex gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 bg-white/5 text-brand-500">
                <Icon name="globe" className="h-[18px] w-[18px]" />
              </span>
              <div>
                <div className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                  Website
                </div>
                <a
                  href="https://jasdigitaltechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-white transition-colors duration-200 hover:text-brand-500"
                >
                  jasdigitaltechnologies.com
                  <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
