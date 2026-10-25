import type { Metadata } from "next";
import { Activity, ArrowRight, Gauge, ScanLine } from "lucide-react";
import Link from "next/link";
import { PageHero, SectionIntro, Status } from "@/components/page-elements";
import { ProjectSequence } from "@/components/project-sequence";

export const metadata: Metadata = {
  title: "Research",
  description:
    "The Movement Systems and HMS Lab R&D agenda: clinical movement questions, accessible measurement, mechanisms, modeling, development, and responsible public records.",
};

const questions = [
  "How do interacting constraints produce, stabilize, and change a movement solution?",
  "When is variability evidence of adaptability, and when does it indicate loss of control?",
  "How do fatigue and physiological stress reorganize movement across tasks and time?",
  "What clinically important structure can be recovered from sparse, portable measurements?",
  "How can movement observations improve patient-specific reasoning without becoming automatic conclusions?",
];

const researchThemes = [
  {
    title: "Emergence and organization of coordination",
    description:
      "How interacting components and constraints give rise to preferred patterns, stability, and transitions.",
  },
  {
    title: "Variability, stability, and adaptability",
    description:
      "When variation supports exploration and flexible performance, and when it reflects a loss of useful control.",
  },
  {
    title: "Dynamic resources and task performance",
    description:
      "How force, timing, elasticity, inertia, damping, and energy supply contribute to movement solutions.",
  },
  {
    title: "Perception, action, and environmental information",
    description:
      "How action capabilities, information, exploration, and context shape possibilities for movement.",
  },
  {
    title: "Fatigue, recovery, and multiscale capability",
    description:
      "How physiological demands and adaptation affect the ability to attain, sustain, and maintain function.",
  },
  {
    title: "Movement solutions, intervention, and prognosis",
    description:
      "How changing constraints and resources influence performance, participation, response to intervention, and what is likely to happen over time.",
  },
] as const;

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title={<>Questions before <em>instruments.</em></>}
        summary="The R&D program begins with phenomena that matter to movement and care, then develops measurements, models, prototypes, and studies that can discriminate among plausible explanations."
        aside={
          <div className="research-signal" aria-label="Observation transformed through measurement and analysis into an interpretable signal">
            <Activity aria-hidden="true" /><span>phenomenon</span><i />
            <ScanLine aria-hidden="true" /><span>measurement</span><i />
            <Gauge aria-hidden="true" /><span>interpretation</span>
          </div>
        }
      />

      <section className="page-section section-shell">
        <SectionIntro label="R&amp;D agenda" title="Clinical relevance, technical development, and scientific depth belong together.">
          <p className="lead">
            A useful movement question should matter in practice and survive contact with measurement,
            uncertainty, alternative mechanisms, and the limits of generalization.
          </p>
          <p>
            The agenda spans rehabilitation, motor control and learning, neuromechanics, physiological
            stress, ergonomics, human performance, assistive technology, and movement measurement.
          </p>
        </SectionIntro>
        <ol className="question-list">
          {questions.map((question, index) => (
            <li key={question}><span>Q{index + 1}</span><p>{question}</p><Status tone="proposed">Proposed</Status></li>
          ))}
        </ol>
      </section>

      <section className="research-themes">
        <div className="section-shell">
          <SectionIntro
            label="Research themes"
            title="Organize development around the phenomena under study."
          >
            <p>
              These themes connect the scientific foundations to questions, measurements,
              experiments, models, and clinical translation. They are research directions, not
              claims that every program is currently operational.
            </p>
          </SectionIntro>
          <div className="research-theme-grid">
            {researchThemes.map((theme, index) => (
              <article key={theme.title}>
                <span>0{index + 1}</span>
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project-program">
        <div className="section-shell">
          <SectionIntro
            label="Initial method-development programs"
            title="Build the methods needed to investigate the questions."
          >
            <p className="lead">
              These initial sensor-development programs support the research questions by staging
              acquisition, sensor-count scaling, orientation validation, OpenSense interoperability,
              and only then synchronized OpenCap comparison.
            </p>
            <p>
              Every new sensor count, task, placement, or processing claim is tested non-human before
              corresponding human feasibility is considered. These are planning records, not
              operational capability or validity claims.
            </p>
          </SectionIntro>
          <ProjectSequence />
        </div>
      </section>

      <section className="research-records">
        <div className="section-shell">
          <SectionIntro label="Public research records" title="Make maturity and limits visible." />
          <div className="record-types">
            <article><span>01</span><h3>Question</h3><p>The phenomenon, candidate mechanisms, discriminating observations, and why the problem matters.</p></article>
            <article><span>02</span><h3>Method</h3><p>How an observation is produced, calibrated, transformed, validated, and bounded.</p></article>
            <article><span>03</span><h3>Capability</h3><p>What the laboratory can presently do, at what readiness, and with which explicit gaps.</p></article>
            <article><span>04</span><h3>Project</h3><p>A governed body of work connecting a question, methods, milestones, outputs, and responsibility.</p></article>
            <article><span>05</span><h3>Result</h3><p>A claim-specific finding with uncertainty, alternatives, context, provenance, and review status.</p></article>
          </div>
        </div>
      </section>

      <section className="research-pathways section-shell">
        <Link href="/research-approach"><span>Approach</span><strong>Questions, measurement &amp; learning</strong><ArrowRight aria-hidden="true" /></Link>
        <Link href="/foundations/dynamic-systems-constraints"><span>Foundation</span><strong>Constraints &amp; dynamic resources</strong><ArrowRight aria-hidden="true" /></Link>
        <Link href="/foundations/movement-solutions-optimization"><span>Foundation</span><strong>Movement solutions &amp; optimization</strong><ArrowRight aria-hidden="true" /></Link>
        <Link href="/foundations/attain-sustain-maintain"><span>Developing framework</span><strong>Attain, Sustain, Maintain</strong><ArrowRight aria-hidden="true" /></Link>
        <Link href="/measurement-modeling"><span>Methods</span><strong>Measurement &amp; modeling</strong><ArrowRight aria-hidden="true" /></Link>
        <Link href="/applications"><span>Contexts</span><strong>Clinical and human applications</strong><ArrowRight aria-hidden="true" /></Link>
        <Link href="/resources"><span>Infrastructure</span><strong>Records, glossary &amp; governance</strong><ArrowRight aria-hidden="true" /></Link>
      </section>
    </>
  );
}