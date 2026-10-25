import type { Metadata } from "next";
import { NextLink, PageHero, SectionIntro } from "@/components/page-elements";
import { ScientificRecordMeta } from "@/components/scientific-record-meta";
import { movementSolutionsOptimizationRecord } from "@/lib/scientific-records";

export const metadata: Metadata = {
  title: "Movement Solutions, Optimization, and Physical Therapy Diagnosis",
  description:
    "A source-grounded foundation for purposeful movement, bounded variability, context-dependent optimization, and dynamic physical therapy diagnosis.",
};

const diagnosticShifts = [
  ["From a fixed label", "To an initial description that can change with treatment, learning, recovery, task, and environment"],
  ["From impairment alone", "To interactions among organismic resources and constraints, task demands, and environmental conditions"],
  ["From one ideal movement", "To multiple possible solutions evaluated against specified outcomes and consequences"],
  ["From classification alone", "To hypotheses, intervention targets, prognosis, and repeated assessment over time"],
] as const;

export default function MovementSolutionsOptimizationPage() {
  return (
    <>
      <PageHero
        eyebrow="Scientific foundations"
        title={<>Movement solutions, optimization, and <em>physical therapy diagnosis.</em></>}
        summary={movementSolutionsOptimizationRecord.summary}
        tone="accent"
      />

      <section className="record-intro section-shell">
        <ScientificRecordMeta record={movementSolutionsOptimizationRecord} />
        <div>
          <p className="lead">
            Physical therapy expertise is not exhausted by naming an impaired structure or
            classifying a static movement deviation.
          </p>
          <p>
            Guccione, Neville, and George frame movement as purposeful behavior: a changing
            solution for accomplishing personally desired activities under real-world conditions.
          </p>
        </div>
      </section>

      <section className="foundation-dark-section">
        <div className="section-shell">
          <SectionIntro
            label="Movement as behavior"
            title="The movement solution is not the system itself."
          >
            <p>
              It is a phenotypic behavioral expression that emerges at a particular time from the
              relationships among a person&apos;s resources and constraints, the task, and the
              environment.
            </p>
          </SectionIntro>
          <div className="solution-sequence" aria-label="Movement solution relationship">
            <span>Organism</span>
            <span>Task</span>
            <span>Environment</span>
            <strong>Movement solution</strong>
            <strong>Performance and participation</strong>
          </div>
          <p className="foundation-note">
            Similar outcomes can be achieved through different movement solutions. Similar visible
            movements can also arise from different underlying relationships.
          </p>
        </div>
      </section>

      <section className="foundation-comparison section-shell">
        <SectionIntro
          label="Optimization"
          title="Optimal is not a synonym for normal or ideal."
        >
          <p>
            Optimization must be judged relative to the individual, desired outcome, task,
            environment, costs, risks, and point in time.
          </p>
        </SectionIntro>
        <div className="foundation-two-grid">
          <article>
            <span>Bounded variability</span>
            <h3>Successful performance permits alternatives.</h3>
            <p>
              Variability can support exploration and adaptable performance when different actions
              remain within acceptable bounds for the desired outcome.
            </p>
            <p>
              Neither more nor less variability is inherently better. Its organization and
              functional consequences must be investigated.
            </p>
          </article>
          <article>
            <span>Trade-offs</span>
            <h3>Different solutions can be useful for different reasons.</h3>
            <p>
              A solution may balance performance, metabolic cost, tissue loading, speed, safety,
              symptoms, confidence, and participation differently.
            </p>
            <p>
              Today&apos;s acceptable solution may not be sufficient for tomorrow&apos;s workload,
              environment, or participation goal.
            </p>
          </article>
        </div>
      </section>

      <section className="diagnostic-shift-section">
        <div className="section-shell">
          <SectionIntro
            label="Physical therapy diagnosis"
            title="Treat the examination as a starting condition, not a final explanation."
          >
            <p>
              Initial findings remain clinically important, but they become inputs to hypotheses
              about performance, adaptation, and what is likely to happen over time.
            </p>
          </SectionIntro>
          <div className="diagnostic-shift-list">
            {diagnosticShifts.map(([from, to]) => (
              <article key={from}>
                <h3>{from}</h3>
                <p>{to}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="foundation-clinical section-shell">
        <SectionIntro
          label="Intervention and prognosis"
          title="Create conditions for useful adaptation."
        >
          <p>
            Intervention can target influential resources, constraints, and relationships while
            repeated observation tests whether performance, adaptability, and participation are
            moving toward the person&apos;s goals.
          </p>
        </SectionIntro>
        <ol className="foundation-question-list">
          <li><span>01</span><strong>What meaningful performance is the person trying to achieve?</strong></li>
          <li><span>02</span><strong>What range of movement solutions currently supports or limits it?</strong></li>
          <li><span>03</span><strong>Which relationships are plausible and modifiable intervention targets?</strong></li>
          <li><span>04</span><strong>What response is expected if those conditions are changed?</strong></li>
          <li><span>05</span><strong>What repeated observations would revise the diagnosis or prognosis?</strong></li>
        </ol>
      </section>

      <section className="foundation-source-section">
        <div className="section-shell">
          <SectionIntro
            label="Principal source and limits"
            title="Diagnosis should remain dynamic, contextual, and revisable."
          />
          <div className="foundation-source-grid">
            <article>
              <h3>Guccione, Neville, and George (2019)</h3>
              <p>
                The principal source develops movement as an emergent phenomenon and examines the
                implications for optimization, variability, diagnosis, prognosis, and intervention.
              </p>
              <a href="https://doi.org/10.1093/ptj/pzy116">Read the published article</a>
            </article>
            <article>
              <h3>Interpretive boundary</h3>
              <p>
                A systems framing does not eliminate impairment examination or supply a validated
                diagnostic taxonomy. It changes how findings are related to goals, contexts,
                hypotheses, interventions, and change over time.
              </p>
              <NextLink href="/clinical-inquiry">Carry the hypothesis into clinical inquiry</NextLink>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
