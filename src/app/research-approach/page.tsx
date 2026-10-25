import type { Metadata } from "next";
import { ArrowDown, Repeat2 } from "lucide-react";
import { PageHero, SectionIntro } from "@/components/page-elements";
import { ScientificRecordMeta } from "@/components/scientific-record-meta";
import { researchApproachRecord } from "@/lib/scientific-records";

export const metadata: Metadata = {
  title: "Research Approach",
  description:
    "How Movement Systems connects consequential questions, measurement development, bounded learning, and renewed inquiry.",
};

const inquiryCycle = [
  ["Question", "What do we need to know, and why would knowing it matter?"],
  ["Criterion", "What would count as knowing it, and which competing explanations must be distinguished?"],
  ["Observation", "What must become observable at the relevant scale and timescale?"],
  ["Measurement", "How can that observation be produced, calibrated, validated, and bounded?"],
  ["Learning", "What do the observations support, and what do they leave unresolved?"],
  ["Revision", "How should the question, construct, experiment, or measurement change next?"],
] as const;

export default function ResearchApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Research approach"
        title={<>Questions guide measurement. <em>Learning renews the question.</em></>}
        summary={researchApproachRecord.summary}
        tone="forest"
        aside={
          <div className="learning-cycle-mark" aria-hidden="true">
            <span>question</span>
            <ArrowDown />
            <span>measurement</span>
            <ArrowDown />
            <span>learning</span>
            <Repeat2 />
          </div>
        }
      />

      <section className="record-intro section-shell">
        <ScientificRecordMeta record={researchApproachRecord} />
        <div>
          <p className="lead">
            Measurement enables learning, and learning enables better measurement.
          </p>
          <p>
            The process is recursive rather than a one-way pipeline. A failed measurement may
            revise the operational definition. A surprising observation may expose a missing
            variable. Better theory may reveal that the original instrument measured the wrong
            thing.
          </p>
        </div>
      </section>

      <section className="inquiry-cycle-section">
        <div className="section-shell">
          <SectionIntro
            label="A recurring research logic"
            title="Move from a consequential question to a more defensible next question."
          />
          <ol className="research-learning-cycle">
            {inquiryCycle.map(([title, description], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="two-kinds-learning section-shell">
        <SectionIntro
          label="Two outcomes"
          title="Learn about the phenomenon and the measurement."
        />
        <div>
          <article>
            <span>Phenomenon</span>
            <h3>What did the system do?</h3>
            <ul>
              <li>Which predictions were supported?</li>
              <li>Which candidate mechanisms remain plausible?</li>
              <li>How did behavior change when constraints changed?</li>
              <li>Which observations require a revised explanation?</li>
            </ul>
          </article>
          <article>
            <span>Measurement</span>
            <h3>What could the method reveal?</h3>
            <ul>
              <li>Which construct did the method actually operationalize?</li>
              <li>Which processing choices changed the result?</li>
              <li>Under which conditions was the estimate reliable?</li>
              <li>What additional observation is now required?</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="approach-example">
        <div className="section-shell">
          <SectionIntro
            label="Published clinical example"
            title="Performance first, endurance next, then a more demanding task."
          >
            <p>
              Figure 2 of the 2020 heart-failure clinical practice guideline first asks whether a
              limited activity can be performed. If it can, the algorithm asks whether endurance
              limits it. If it does not, the clinician identifies a new task or higher workload.
            </p>
            <p>
              The algorithm is a clinical example of defining the objective, observing performance,
              locating the next limitation, and allowing the result to determine the next question.
            </p>
          </SectionIntro>
          <a href="https://doi.org/10.1093/ptj/pzz127">
            Read the clinical practice guideline
          </a>
        </div>
      </section>
    </>
  );
}
