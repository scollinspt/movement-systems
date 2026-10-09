import type { Metadata } from "next";
import { BookOpen, MessageCircle, Microscope, Workflow } from "lucide-react";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, SectionIntro } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Participate in the HMS Lab",
  description:
    "Learn about the HMS Lab weekly seminar and ways students, clinicians, faculty, and collaborators can participate.",
};

const contributions = [
  {
    icon: BookOpen,
    title: "Literature and questions",
    text: "Develop shared reading, define constructs, and turn observations into researchable questions.",
  },
  {
    icon: Microscope,
    title: "Methods and measurement",
    text: "Contribute to instrumentation, calibration, protocols, reliability, and method development.",
  },
  {
    icon: Workflow,
    title: "Analysis and modeling",
    text: "Build reproducible analyses, computational workflows, visualizations, and mechanistic models.",
  },
  {
    icon: MessageCircle,
    title: "Scholarship and continuity",
    text: "Document decisions, present developing work, and preserve knowledge across projects and cohorts.",
  },
];

export default function HmsLabParticipatePage() {
  return (
    <>
      <PageHero
        eyebrow="HMS Lab · Participate"
        title={<>Join the <em>inquiry.</em></>}
        summary="Students, clinicians, faculty, and collaborators participate through shared discussion and defined contributions to developing work."
        tone="forest"
      />
      <HmsLabNav />

      <section className="page-section section-shell">
        <SectionIntro label="Weekly seminar" title="The laboratory meets through conversation.">
          <p className="lead">
            HMS Lab participants meet weekly to discuss literature, developing questions, methods,
            projects, and findings.
          </p>
          <p>Sustained participation in the lab includes a commitment to the weekly seminar.</p>
          <p className="seminar-time">
            <strong>Tentative seminar time</strong>
            <span>Fridays, 1:00–2:00 p.m. · Samuel Read Hall, Room 216</span>
          </p>
        </SectionIntro>
        <div className="participation-grid">
          {contributions.map(({ icon: Icon, title, text }, index) => (
            <article key={title}>
              <div><Icon aria-hidden="true" /><span>0{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="participation-community">
        <div className="section-shell">
          <p className="section-label section-label-light">Community</p>
          <h2>The lab is a community of inquiry.</h2>
          <p>
            Participants bring different clinical, scientific, technical, and lived perspectives
            to shared questions about human movement.
          </p>
        </div>
      </section>
    </>
  );
}
