import type { Metadata } from "next";
import { BookOpen, MessageCircle, Microscope, Workflow } from "lucide-react";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, SectionIntro } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Participate in the HMS Lab",
  description:
    "Learn about the HMS Lab weekly seminar and ways students, clinicians, faculty, engineers, and collaborators contribute to research and development.",
};

const contributions = [
  {
    icon: BookOpen,
    title: "Literature and questions",
    text: "Develop shared reading, define constructs, and turn observations into researchable questions.",
  },
  {
    icon: Microscope,
    title: "Design and prototyping",
    text: "Contribute to accessible instrumentation, open software, fabrication, repair, calibration, and iterative development.",
  },
  {
    icon: Workflow,
    title: "Measurement and modeling",
    text: "Build reproducible protocols, analyses, computational workflows, visualizations, and testable models.",
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
        title={<>Question, build, test, and <em>learn together.</em></>}
        summary="Students, clinicians, faculty, engineers, and collaborators participate through shared discussion and defined contributions across the R&D cycle."
        tone="forest"
      />
      <HmsLabNav />

      <section className="page-section section-shell">
        <SectionIntro label="Weekly seminar" title="Development begins with shared inquiry.">
          <p className="lead">
            HMS Lab participants meet weekly to discuss literature, developing questions, methods,
            designs, projects, evidence, failures, and next iterations.
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
          <p className="section-label section-label-light">Open R&amp;D community</p>
          <h2>Different ways of knowing strengthen the work.</h2>
          <p>
            Participants bring different clinical, scientific, technical, and lived perspectives
            to shared questions about human movement, then make the development process visible
            enough for others to inspect, learn from, and improve.
          </p>
        </div>
      </section>
    </>
  );
}
