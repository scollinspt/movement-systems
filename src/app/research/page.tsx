import type { Metadata } from "next";
import { Activity, ArrowRight, Gauge, ScanLine } from "lucide-react";
import Link from "next/link";
import { PageHero, SectionIntro, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Research",
  description:
    "The Movement Systems and HMS Lab research agenda: clinical movement questions, measurement, mechanisms, modeling, and responsible public records.",
};

const questions = [
  "How do interacting constraints produce, stabilize, and change a movement solution?",
  "When is variability evidence of adaptability, and when does it indicate loss of control?",
  "How do fatigue and physiological stress reorganize movement across tasks and time?",
  "What clinically important structure can be recovered from sparse, portable measurements?",
  "How can movement observations improve patient-specific reasoning without becoming automatic conclusions?",
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title={<>Questions before <em>instruments.</em></>}
        summary="The research program begins with phenomena that matter to movement and care, then selects measurements, models, and study designs that can discriminate among plausible explanations."
        aside={
          <div className="research-signal" aria-label="Observation transformed through measurement and analysis into an interpretable signal">
            <Activity aria-hidden="true" /><span>phenomenon</span><i />
            <ScanLine aria-hidden="true" /><span>measurement</span><i />
            <Gauge aria-hidden="true" /><span>interpretation</span>
          </div>
        }
      />

      <section className="page-section section-shell">
        <SectionIntro label="Research agenda" title="Clinical relevance and scientific depth belong together.">
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
        <Link href="/measurement-modeling"><span>Methods</span><strong>Measurement &amp; modeling</strong><ArrowRight aria-hidden="true" /></Link>
        <Link href="/applications"><span>Contexts</span><strong>Clinical and human applications</strong><ArrowRight aria-hidden="true" /></Link>
        <Link href="/resources"><span>Infrastructure</span><strong>Records, glossary &amp; governance</strong><ArrowRight aria-hidden="true" /></Link>
      </section>
    </>
  );
}