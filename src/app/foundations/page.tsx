import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero, SectionIntro, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Scientific Foundations",
  description:
    "The scientific foundations guiding Movement Systems and the HMS Lab, including systems science, coordination, ecological approaches, dynamic resources, and scientific inference.",
};

const foundations = [
  {
    status: "Source-grounded",
    tone: "established",
    title: "Dynamic Systems, Constraints, and Dynamic Resources",
    description:
      "How movement organization and available mechanical and physiological resources interact with organismic, task, and environmental constraints.",
    href: "/foundations/dynamic-systems-constraints",
  },
  {
    status: "Source-grounded",
    tone: "established",
    title: "Movement Solutions, Optimization, and PT Diagnosis",
    description:
      "Purposeful movement, bounded variability, context-dependent optimization, prognosis, and changing movement-system diagnoses.",
    href: "/foundations/movement-solutions-optimization",
  },
  {
    status: "Developing synthesis",
    tone: "development",
    title: "Attain, Sustain, Maintain",
    description:
      "A hierarchical framework for functional capability across organizational levels, tasks, constraints, and timescales.",
    href: "/foundations/attain-sustain-maintain",
  },
  {
    status: "Existing foundation",
    tone: "established",
    title: "Movement as an emergent phenomenon",
    description:
      "The current theory scaffold for movement arising from interacting person, task, environmental, physiological, neural, mechanical, and behavioral processes.",
    href: "/theory",
  },
] as const;

const plannedFoundations = [
  "Coordination dynamics",
  "Complex adaptive systems",
  "Ecological psychology",
  "Ecological dynamics and constraints-led approaches",
  "Scientific inference and causation",
];

export default function FoundationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Scientific foundations"
        title={<>Theories organize questions. <em>Evidence revises them.</em></>}
        summary="Movement Systems connects dynamical systems, constraints, complex adaptive systems, ecological approaches, biomechanics, and physical therapy movement-system reasoning without treating them as interchangeable."
      />

      <section className="page-section section-shell">
        <SectionIntro
          label="Foundation records"
          title="Make the reasoning behind the research inspectable."
        >
          <p className="lead">
            A foundation record connects definitions and predictions to observable implications,
            alternative explanations, measurement requirements, and limits on inference.
          </p>
          <p>
            The current source-grounded records develop rehabilitation and physical therapy
            implications from Holt, Wagenaar, and Saltzman (2010) and Guccione, Neville, and George
            (2019). No theoretical vocabulary substitutes for construct definition, experimental
            manipulation, or validation.
          </p>
        </SectionIntro>
        <div className="foundation-record-grid">
          {foundations.map((foundation) => (
            <Link href={foundation.href} key={foundation.href}>
              <Status tone={foundation.tone}>{foundation.status}</Status>
              <h2>{foundation.title}</h2>
              <p>{foundation.description}</p>
              <span>
                Read the foundation <ArrowRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="planned-foundations">
        <div className="section-shell">
          <SectionIntro
            label="Planned records"
            title="Build the foundation incrementally."
          >
            <p>
              These records remain proposed until their definitions, principal sources,
              predictions, measurement implications, and scientific limits are reviewed.
            </p>
          </SectionIntro>
          <ol>
            {plannedFoundations.map((foundation, index) => (
              <li key={foundation}>
                <span>0{index + 1}</span>
                <strong>{foundation}</strong>
                <Status tone="proposed">Proposed</Status>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
