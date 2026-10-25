import type { Metadata } from "next";
import { NextLink, PageHero, SectionIntro } from "@/components/page-elements";
import { ScientificRecordMeta } from "@/components/scientific-record-meta";
import { dynamicSystemsConstraintsRecord } from "@/lib/scientific-records";

export const metadata: Metadata = {
  title: "Dynamic Systems, Constraints, and Dynamic Resources",
  description:
    "A source-grounded foundation for movement emerging from organismic, task, and environmental constraints and available dynamic resources.",
};

const constraintDomains = [
  {
    name: "Organism",
    description:
      "Anatomy, physiology, perception, intention, experience, current resources, impairments, and action capabilities.",
  },
  {
    name: "Task",
    description:
      "The goal, rules, workload, timing, accuracy, sequence, and success criteria that make some solutions more useful than others.",
  },
  {
    name: "Environment",
    description:
      "Physical forces, surfaces, objects, information, social conditions, and opportunities or restrictions for action.",
  },
] as const;

const dynamicResources = [
  ["Active forcing", "Appropriately timed muscular force that adds energy to the movement."],
  ["Elastic storage and return", "Muscle, tendon, and other soft tissues acting as springs."],
  ["Pendular exchange", "Segment mass and length supporting exchanges of kinetic and gravitational potential energy."],
  ["Inertia", "Mass distribution and moments of inertia shaping how segments move and couple."],
  ["Damping and braking", "Passive and active processes that dissipate energy, absorb shock, or stop motion."],
  ["Energy supply", "Cardiopulmonary and metabolic processes supporting continued mechanical work."],
] as const;

export default function DynamicSystemsConstraintsPage() {
  return (
    <>
      <PageHero
        eyebrow="Scientific foundations"
        title={<>Dynamic systems, constraints, and <em>dynamic resources.</em></>}
        summary={dynamicSystemsConstraintsRecord.summary}
        tone="forest"
      />

      <section className="record-intro section-shell">
        <ScientificRecordMeta record={dynamicSystemsConstraintsRecord} />
        <div>
          <p className="lead">
            An observed movement pattern is a temporary resolution of interacting constraints, not
            a direct readout of one structure or impairment.
          </p>
          <p>
            Holt, Wagenaar, and Saltzman use this position to connect body structure and function
            with activity and participation while asking what resources and relationships make a
            particular movement solution possible.
          </p>
        </div>
      </section>

      <section className="foundation-dark-section">
        <div className="section-shell">
          <SectionIntro
            label="Constraint domains"
            title="Constraints restrict possibilities without prescribing one pathway."
          >
            <p>
              Movement changes as the person, task, and environment change. These domains constrain
              one another, so none provides a sufficient explanation in isolation.
            </p>
          </SectionIntro>
          <div className="foundation-three-grid">
            {constraintDomains.map((domain, index) => (
              <article key={domain.name}>
                <span>0{index + 1}</span>
                <h3>{domain.name}</h3>
                <p>{domain.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="foundation-comparison section-shell">
        <SectionIntro
          label="Two complementary tools"
          title="Characterizing organization is not the same as explaining production."
        >
          <p>
            Holt and colleagues distinguish tools for describing how movement is organized from
            models of the resources and mechanics contributing to the observed pattern.
          </p>
        </SectionIntro>
        <div className="foundation-two-grid">
          <article>
            <span>Coordination dynamics</span>
            <h3>How is the movement organized?</h3>
            <p>
              Coordination patterns, coupling, relative phase, stability, control parameters, and
              transitions characterize relationships among changing components.
            </p>
            <p>
              These constructs can describe and predict pattern changes, but they do not alone
              identify the forces, energy exchanges, or physiological processes producing them.
            </p>
          </article>
          <article>
            <span>Biomechanics and dynamic resources</span>
            <h3>How can the movement be produced?</h3>
            <p>
              Mechanical and physiological models investigate how anatomy, force, timing, energy
              storage, energy loss, and energy supply contribute to a movement solution.
            </p>
            <p>
              A resource matters only when it can be recruited in the amount and at the time the
              task and environment require.
            </p>
          </article>
        </div>
      </section>

      <section className="foundation-resource-section">
        <div className="section-shell">
          <SectionIntro
            label="Dynamic resources"
            title="Movement depends on more than force capacity."
          >
            <p>
              Available resources can be combined in different proportions for different tasks.
              Their effective use depends on coordination and environmental context.
            </p>
          </SectionIntro>
          <dl className="foundation-resource-list">
            {dynamicResources.map(([resource, description]) => (
              <div key={resource}>
                <dt>{resource}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="foundation-clinical section-shell">
        <SectionIntro
          label="Rehabilitation consequence"
          title="A nonstandard pattern may be an adaptation to available resources."
        >
          <p>
            The question is not only whether a pattern differs from a reference pattern. It is also
            what the pattern accomplishes, which constraints and resources contribute to it, and
            what short- and long-term consequences follow.
          </p>
        </SectionIntro>
        <ol className="foundation-question-list">
          <li><span>01</span><strong>What functional goal does the movement solution accomplish?</strong></li>
          <li><span>02</span><strong>Which organismic, task, and environmental constraints are most influential?</strong></li>
          <li><span>03</span><strong>Which resources are available, and are they available at the required time and amount?</strong></li>
          <li><span>04</span><strong>What changes when a constraint or resource is manipulated?</strong></li>
          <li><span>05</span><strong>Would changing the visible pattern improve the outcome or remove a useful adaptation?</strong></li>
        </ol>
      </section>

      <section className="foundation-source-section">
        <div className="section-shell">
          <SectionIntro
            label="Principal source and limits"
            title="Use the framework to generate testable explanations."
          />
          <div className="foundation-source-grid">
            <article>
              <h3>Holt, Wagenaar, and Saltzman (2010)</h3>
              <p>
                The principal source connects constraints, coordination dynamics, biomechanical
                models, dynamic resources, locomotor adaptation, and rehabilitation.
              </p>
              <a href="https://doi.org/10.1590/S1413-35552010000600002">
                Read the published article
              </a>
            </article>
            <article>
              <h3>Interpretive boundary</h3>
              <p>
                Naming constraints does not establish causation. Competing explanations require
                measurement, manipulation, model comparison, and attention to consequences across
                tasks and timescales.
              </p>
              <NextLink href="/measurement-modeling">Connect explanation to measurement</NextLink>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
