import Icon from "./ui/Icon.jsx";
import Reveal from "./ui/Reveal.jsx";
import { Section, SectionHead } from "./ui/Section.jsx";

const services = [
  {
    icon: "database",
    title: "Data Ingestion",
    description: "Collecting data from robots, machines, sensors and enterprise systems.",
  },
  {
    icon: "sliders",
    title: "Data Processing",
    description: "Cleaning, transforming and validating raw data for accuracy and consistency.",
  },
  {
    icon: "hub",
    title: "Data Integration",
    description: "Consolidating data from multiple sources into a unified view.",
  },
  {
    icon: "chart",
    title: "Analytics & Insights",
    description: "Turning processed data into dashboards and actionable business insights.",
  },
  {
    icon: "cloud",
    title: "Data Platforms",
    description: "Building scalable data pipelines and cloud-native data platforms.",
  },
  {
    icon: "shield",
    title: "Data Governance",
    description: "Ensuring data quality, security, compliance and traceability.",
  },
];

export default function WhatWeDo() {
  return (
    <Section id="what-we-do" tone="white">
      <SectionHead
        eyebrow="What we do"
        title="End-to-end data processing for the automotive industry."
        body="Six connected capabilities that take raw machine output all the way through to decisions your teams can act on."
      />

      <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal
            key={service.title}
            delay={index * 70}
            className="group relative bg-white p-8 transition-colors duration-300 ease-out hover:bg-canvas-alt md:p-10"
          >
            {/* Accent rule that draws in on hover */}
            <span
              className="absolute left-0 top-0 h-[3px] w-0 bg-brand-500 transition-all duration-300 ease-out group-hover:w-full"
              aria-hidden="true"
            />

            <div className="mb-7 flex items-center justify-between">
              <span className="clip-mark flex h-14 w-14 items-center justify-center bg-navy-900 text-white transition-colors duration-300 ease-out group-hover:bg-brand-600">
                <Icon name={service.icon} className="h-[26px] w-[26px]" />
              </span>
              <span className="font-mono text-xs text-muted-light transition-colors duration-300 group-hover:text-brand-500">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mb-3 text-[19px] font-semibold text-navy-900">{service.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted">{service.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
