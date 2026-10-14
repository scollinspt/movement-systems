import type { Metadata } from "next";
import { ClipboardCheck, FlaskConical, HeartHandshake, Move3d, Users } from "lucide-react";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, SectionIntro, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "About the HMS Lab",
  description:
    "The clinically grounded R&D purpose, scientific foundations, and open development culture of the Human Movement Systems Laboratory.",
};

const labRoles = [
  {
    icon: Move3d,
    title: "Study movement in context",
    text: "Study movement as emergent, adaptive behavior shaped by interacting person, task, environmental, physiological, neural, mechanical, behavioral, and historical conditions.",
  },
  {
    icon: FlaskConical,
    title: "Develop ways to test questions",
    text: "Translate observations into competing explanations, observable quantities, accessible measurements, prototypes, models, and research designs.",
  },
  {
    icon: HeartHandshake,
    title: "Return knowledge to care",
    text: "Refine and openly share useful explanations, tools, methods, and learning resources for movement-system practice.",
  },
];

const foundations = [
  {
    label: "Professional purpose",
    title: "Physical therapy",
    text: "APTA’s movement-system orientation grounds the work in professional expertise, clinical practice, education, and improving people’s lives through movement.",
  },
  {
    label: "Movement science",
    title: "Biomechanics",
    text: "The American Society of Biomechanics community contributes rigorous approaches to observing, measuring, and explaining human movement.",
  },
  {
    label: "Scientific perspective",
    title: "Systems and dynamics",
    text: "Complex adaptive and dynamical systems perspectives focus attention on emergence, adaptation, variability, history, context, and change over time.",
  },
  {
    label: "Development practice",
    title: "Biomedical engineering",
    text: "IEEE EMBS and open maker traditions inform an iterative culture of design, prototyping, testing, documentation, repair, and shared technology.",
  },
];

export default function HmsLabAboutPage() {
  return (
    <>
      <PageHero
        eyebrow="HMS Lab · About"
        title={<>Clinically grounded <em>research and development.</em></>}
        summary="The HMS Lab connects questions from physical therapy to movement science, accessible technology, empirical evaluation, and practical resources for education and care."
        tone="forest"
      />
      <HmsLabNav />

      <section className="page-section section-shell">
        <SectionIntro label="Purpose" title="Develop the profession’s capacity to understand movement.">
          <p className="lead">
            Physical therapists encounter movement in context, form explanations, influence change,
            and revise what they believe about a person.
          </p>
          <p>
            The HMS Lab turns those encounters into focused R&D: questions, measurements,
            prototypes, physiological and mechanical analyses, computational models, and methods
            that can be evaluated and improved.
          </p>
        </SectionIntro>
        <div className="role-ledger">
          {labRoles.map(({ icon: Icon, title, text }, index) => (
            <article key={title}>
              <div className="ledger-index"><Icon aria-hidden="true" /><span>0{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section section-shell">
        <SectionIntro label="Foundations" title="Clinical purpose, movement science, systems thinking, and engineering.">
          <p className="lead">
            The lab brings complementary professional and scientific traditions to one practical
            problem: developing better ways to understand and improve movement.
          </p>
          <p>
            These communities orient the work without substituting affiliation for evidence or
            complexity for a specific, testable explanation.
          </p>
        </SectionIntro>
        <div className="foundation-grid">
          {foundations.map(({ label, title, text }) => (
            <article key={title}>
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="clinical-lab-band">
        <div className="clinical-lab-statement">
          <p className="section-label section-label-light">An open development culture</p>
          <h2>Build, measure, learn, and share.</h2>
        </div>
        <div className="clinical-lab-copy">
          <p>
            Open-source software, accessible instrumentation, hands-on fabrication, and
            reproducible workflows make development inspectable and adaptable.
          </p>
          <p>
            Clinical and scientific questions guide the technology. Every prototype remains a
            claim to test, not evidence of validity or clinical usefulness by itself.
          </p>
        </div>
      </section>

      <section className="page-section section-shell lab-status-section">
        <div>
          <Status>Program development</Status>
          <h2>Build the foundation deliberately.</h2>
          <p>
            The laboratory is developing the research agenda, measurement methods, governance,
            collaborations, and student pathways required for durable R&D.
          </p>
        </div>
        <ol className="readiness-list">
          <li><ClipboardCheck aria-hidden="true" /><span><strong>Verify</strong> equipment, software, space, access, and limits.</span></li>
          <li><FlaskConical aria-hidden="true" /><span><strong>Design</strong> projects from clinical and scientific questions.</span></li>
          <li><Users aria-hidden="true" /><span><strong>Govern</strong> research, education, clinical care, privacy, and participation.</span></li>
          <li><Move3d aria-hidden="true" /><span><strong>Develop</strong> and evaluate methods through documented, reproducible work.</span></li>
        </ol>
      </section>
    </>
  );
}
