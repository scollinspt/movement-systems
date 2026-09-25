import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, FlaskConical, HeartHandshake, Move3d, Users } from "lucide-react";
import { NextLink, PageHero, SectionIntro, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Human Movement Systems Laboratory",
  description:
    "The HMS Lab is a clinically oriented physical therapy research program connecting movement observation, measurement, modeling, and patient-specific inquiry.",
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
    text: "Translate a puzzling pattern from practice into competing explanations, observable quantities, and research designs that can change what the profession knows.",
  },
  {
    icon: HeartHandshake,
    title: "Return knowledge to care",
    text: "Develop clinically meaningful explanations and methods while preserving the boundary between research findings and conclusions about an individual patient.",
  },
];

export default function HmsLabPage() {
  return (
    <>
      <PageHero
        eyebrow="Human Movement Systems Laboratory"
        title={<>A laboratory built around <em>clinical questions.</em></>}
        summary="The HMS Lab is the empirical movement research program of Movement Systems: clinically oriented, grounded in physical therapy, and designed to move questions from practice into rigorous inquiry and back again."
        tone="forest"
        aside={
          <div className="lab-orientation" aria-label="HMS Lab orientation">
            <span>Clinical observation</span><i />
            <span>Movement question</span><i />
            <span>Measurement</span><i />
            <span>Mechanism</span><i />
            <strong>Clinical inquiry</strong>
          </div>
        }
      />

      <section className="page-section section-shell">
        <SectionIntro label="Purpose" title="Research for a profession organized around movement.">
          <p className="lead">
            Physical therapists do not merely apply movement science. They encounter movement in
            context, form explanations, test change, and revise what they believe about a person.
          </p>
          <p>
            The HMS Lab makes that work scientifically inspectable. It connects clinical observation
            to measurement and modeling without reducing a person to a signal, a diagnosis, or a
            laboratory task.
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
          <h2>Not a gait lab with clinical applications. A clinical inquiry lab that studies movement.</h2>
        </div>
        <div className="clinical-lab-copy">
          <p>
            Rehabilitation, functional movement, motor control, physiological stress, ergonomics,
            adaptation, human performance, and human-device interaction all belong when they sharpen
            a question that matters to movement and care.
          </p>
          <p>
            Instruments are selected because a question requires them. Capabilities are published
            only after readiness, uncertainty, and interpretive limits have been established.
          </p>
        </div>
      </section>

      <section className="page-section section-shell lab-status-section">
        <div>
          <Status>Program development</Status>
          <h2>Current work is foundational.</h2>
          <p>
            The laboratory program is defining its research agenda, inventorying resources, specifying
            governance, and identifying representative pilot questions. This site does not yet claim
            operational measurement services or validated laboratory capabilities.
          </p>
          <NextLink href="/research">See the emerging research agenda</NextLink>
        </div>
        <ol className="readiness-list">
          <li><ClipboardCheck aria-hidden="true" /><span><strong>Verify</strong> equipment, software, space, access, and limits.</span></li>
          <li><FlaskConical aria-hidden="true" /><span><strong>Design</strong> pilot work from clinical and scientific questions.</span></li>
          <li><Users aria-hidden="true" /><span><strong>Govern</strong> research, education, clinical care, privacy, and participation.</span></li>
          <li><Move3d aria-hidden="true" /><span><strong>Demonstrate</strong> capability before describing it as operational.</span></li>
        </ol>
      </section>

      <section className="people-section">
        <div className="people-image">
          <Image
            src="https://avatars.githubusercontent.com/u/75478344?v=4"
            alt="Sean M. Collins"
            width={520}
            height={520}
            priority
          />
        </div>
        <div className="people-copy">
          <p className="section-label">Program leadership</p>
          <h2>Sean M. Collins, PT, ScD</h2>
          <p className="lead">Physical therapist · Professor of Clinical Inquiry · Scientist · Educator</p>
          <p>
            The HMS Lab extends a program spanning physical therapy, clinical physiology,
            physiological measurement, ergonomics and human factors, causal analysis, evidence
            synthesis, and computational clinical inquiry. It is a convergence of that work, not a
            departure from it.
          </p>
          <a className="inline-link" href="https://scollinspt.github.io/">
            View the professional program <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="student-inquiry section-shell">
        <SectionIntro label="Students and clinicians" title="Questions should have somewhere to go.">
          <p>
            The lab is intended to create a durable pathway for students, faculty, and clinicians to
            develop observations into structured inquiry. Participation can range from literature and
            method work to governed data collection, analysis, modeling, and public scholarship.
          </p>
        </SectionIntro>
        <blockquote>
          <p>Clinical observation should be able to become a research question without a patient automatically becoming a research participant.</p>
        </blockquote>
      </section>
    </>
  );
}