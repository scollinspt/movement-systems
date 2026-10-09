import type { Metadata } from "next";
import { ClipboardCheck, FlaskConical, HeartHandshake, Move3d, Users } from "lucide-react";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, SectionIntro, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "About the HMS Lab",
  description:
    "The purpose, scientific identity, clinical orientation, and development of the Human Movement Systems Laboratory.",
};

const labRoles = [
  {
    icon: Move3d,
    title: "Observe movement as a system",
    text: "Study movement as the visible behavior of interacting physiological, neural, muscular, mechanical, behavioral, task, and environmental systems.",
  },
  {
    icon: FlaskConical,
    title: "Make clinical questions testable",
    text: "Translate observations into competing explanations, observable quantities, and research designs.",
  },
  {
    icon: HeartHandshake,
    title: "Return knowledge to care",
    text: "Develop clinically meaningful explanations and methods for movement-system practice.",
  },
];

export default function HmsLabAboutPage() {
  return (
    <>
      <PageHero
        eyebrow="HMS Lab · About"
        title={<>Clinical inquiry through <em>movement.</em></>}
        summary="The HMS Lab is the empirical movement research program of Movement Systems, grounded in physical therapy and organized around questions that matter to movement and care."
        tone="forest"
      />
      <HmsLabNav />

      <section className="page-section section-shell">
        <SectionIntro label="Purpose" title="Research for a profession organized around movement.">
          <p className="lead">
            Physical therapists encounter movement in context, form explanations, test change, and
            revise what they believe about a person.
          </p>
          <p>
            The HMS Lab connects clinical observation to measurement, physiological and mechanical
            analysis, and computational modeling.
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

      <section className="clinical-lab-band">
        <div className="clinical-lab-statement">
          <p className="section-label section-label-light">A clinical research identity</p>
          <h2>A clinical inquiry lab that studies movement.</h2>
        </div>
        <div className="clinical-lab-copy">
          <p>
            Rehabilitation, functional movement, motor control, physiological stress, ergonomics,
            adaptation, human performance, and human-device interaction shape the research program.
          </p>
          <p>
            Scientific questions guide the selection of instruments, measurements, and models.
          </p>
        </div>
      </section>

      <section className="page-section section-shell lab-status-section">
        <div>
          <Status>Program development</Status>
          <h2>Current work is foundational.</h2>
          <p>
            The laboratory program is developing its research agenda, measurement methods,
            governance, collaborations, and student pathways.
          </p>
        </div>
        <ol className="readiness-list">
          <li><ClipboardCheck aria-hidden="true" /><span><strong>Verify</strong> equipment, software, space, access, and limits.</span></li>
          <li><FlaskConical aria-hidden="true" /><span><strong>Design</strong> projects from clinical and scientific questions.</span></li>
          <li><Users aria-hidden="true" /><span><strong>Govern</strong> research, education, clinical care, privacy, and participation.</span></li>
          <li><Move3d aria-hidden="true" /><span><strong>Demonstrate</strong> methods through documented work.</span></li>
        </ol>
      </section>
    </>
  );
}
