import type { Metadata } from "next";
import { NextLink, PageHero, SectionIntro, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Movement Systems Theory",
  description:
    "An integrative map of dynamical systems, constraints, complex adaptive systems, ecological approaches, and movement-system reasoning in physical therapy.",
};

const traditions = [
  {
    name: "Dynamical systems",
    contribution:
      "Characterizes how coordinated patterns organize, stabilize, lose stability, and change through interactions among coupled components.",
    boundary:
      "A dynamical description does not by itself identify the mechanical or physiological processes producing the pattern.",
    status: "Foundation in development",
  },
  {
    name: "Constraints approach",
    contribution:
      "Examines how organismic, task, and environmental conditions restrict and enable possible movement solutions.",
    boundary:
      "Naming constraints does not establish their relative influence or causal role.",
    status: "Source-grounded record",
  },
  {
    name: "Complex adaptive systems",
    contribution:
      "Emphasizes open, multiscale, history-dependent systems whose interactions can produce nonlinear change, adaptation, and emergent behavior.",
    boundary:
      "Complexity language must not substitute for a specified mechanism, model, or test.",
    status: "Foundation in development",
  },
  {
    name: "Ecological psychology",
    contribution:
      "Studies information about possibilities for action, action capabilities, exploration, and the reciprocal relation between person and environment.",
    boundary:
      "An affordance claim requires evidence about information and action, not biomechanics alone.",
    status: "Foundation in development",
  },
  {
    name: "Ecological dynamics",
    contribution:
      "Connects perception–action relations, constraints, self-organization, exploration, and representative conditions for learning and adaptable performance.",
    boundary:
      "The framework does not establish that every constraints-led intervention is effective.",
    status: "Foundation in development",
  },
  {
    name: "Movement systems in physical therapy",
    contribution:
      "Applies systems reasoning to purposeful movement, changing movement solutions, prognosis, intervention, activity, participation, and diagnosis.",
    boundary:
      "A systems perspective does not eliminate impairment examination or create a validated diagnostic classification by itself.",
    status: "Source-grounded record",
  },
] as const;

const concepts = [
  ["Capacity", "What the interacting systems can support under specified conditions."],
  ["Task", "The goal, demands, rules, and tolerances that organize possible movement solutions."],
  ["Environment", "The physical, social, and informational surroundings in which action occurs."],
  ["Variability", "Structured differences across repetitions, contexts, timescales, and people."],
  ["Adaptation", "Change in the system or its behavior through exposure, learning, recovery, or compensation."],
  ["Movement solution", "A context-bound way of satisfying a task with the resources currently available."],
];

export default function TheoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrative theory"
        title={<>Movement is an <em>emergent phenomenon.</em></>}
        summary="Movement Systems connects complementary scientific traditions to study how purposeful movement emerges, changes, and adapts through interactions among people, tasks, environments, and nested biological processes."
        aside={
          <div className="theory-field" aria-label="Movement emerging from interacting systems">
            <span>organism</span><span>task</span><span>environment</span><span>resources</span><span>information</span><span>history</span>
            <strong>movement</strong>
          </div>
        }
      />

      <section className="page-section section-shell">
        <SectionIntro label="Working position" title="Explain the movement without losing the person.">
          <p className="lead">
            The object of study is a person using movement to accomplish something meaningful under
            particular conditions—not a body part, measurement, impairment, or diagnosis in
            isolation.
          </p>
        </SectionIntro>
        <div className="proposition-list">
          <article><span>01</span><h3>Movement is emergent.</h3><p>It arises from interactions across physiological, neural, muscular, mechanical, perceptual, behavioral, task, environmental, and historical conditions.</p></article>
          <article><span>02</span><h3>Movement is goal-directed.</h3><p>Its meaning depends on the activity, desired outcome, participation goal, and real-world context.</p></article>
          <article><span>03</span><h3>Movement is dynamically organized.</h3><p>Coordination can stabilize, vary, reorganize, and transition as constraints and control parameters change.</p></article>
          <article><span>04</span><h3>Movement uses available resources.</h3><p>Force, timing, elasticity, inertia, damping, energy supply, information, and action capabilities shape possible solutions.</p></article>
          <article><span>05</span><h3>Movement is adaptive.</h3><p>A nonstandard pattern may be an effective response to current constraints while still carrying costs or limitations over another task or timescale.</p></article>
          <article><span>06</span><h3>Observation is not explanation.</h3><p>Measurements constrain hypotheses; mechanisms require models, manipulation, competing explanations, and convergent evidence.</p></article>
        </div>
      </section>

      <section className="theory-traditions">
        <div className="section-shell">
          <SectionIntro
            label="Intellectual foundations"
            title="Related traditions contribute different questions."
          >
            <p>
              These perspectives overlap, but they are not interchangeable. Each highlights
              particular relations and leaves other explanatory work to complementary approaches.
            </p>
          </SectionIntro>
          <div className="tradition-grid">
            {traditions.map((tradition) => (
              <article key={tradition.name}>
                <Status tone={tradition.status === "Source-grounded record" ? "established" : "development"}>
                  {tradition.status}
                </Status>
                <h3>{tradition.name}</h3>
                <p>{tradition.contribution}</p>
                <small>{tradition.boundary}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theory-source-records section-shell">
        <SectionIntro
          label="Source-grounded records"
          title="Follow the ideas into rehabilitation and physical therapy."
        >
          <p>
            Two records develop the current foundation directly from Holt, Wagenaar, and Saltzman
            (2010) and Guccione, Neville, and George (2019).
          </p>
        </SectionIntro>
        <div className="foundation-two-grid">
          <article>
            <span>Holt et al. (2010)</span>
            <h3>Dynamic systems, constraints, and dynamic resources</h3>
            <p>
              Connect coordination dynamics with biomechanics, force and energy resources,
              locomotor adaptation, activity, participation, and rehabilitation reasoning.
            </p>
            <NextLink href="/foundations/dynamic-systems-constraints">Read the foundation</NextLink>
          </article>
          <article>
            <span>Guccione et al. (2019)</span>
            <h3>Movement solutions, optimization, and PT diagnosis</h3>
            <p>
              Connect emergent movement with bounded variability, person-relative optimization,
              dynamic diagnosis, prognosis, intervention, and participation.
            </p>
            <NextLink href="/foundations/movement-solutions-optimization">Read the foundation</NextLink>
          </article>
        </div>
      </section>

      <section className="concept-section">
        <div className="section-shell">
          <SectionIntro label="Foundational vocabulary" title="Concepts to build." />
          <div className="concept-index">
            {concepts.map(([title, description]) => (
              <article key={title}>
                <Status tone="development">In development</Status>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="development-note">
            These are orientation statements, not completed theory records. Each concept will gain
            operational definitions, scales, observables, competing accounts, evidence, and
            measurement limits as the public knowledge base develops.
          </p>
        </div>
      </section>

      <section className="theory-to-practice section-shell">
        <div>
          <p className="section-label">Clinical consequence</p>
          <h2>A systems account changes the next question.</h2>
        </div>
        <div>
          <p className="lead">Instead of asking only, “What impairment explains this movement?”</p>
          <p>Clinical inquiry can also ask:</p>
          <ul>
            <li>What is the person trying to accomplish?</li>
            <li>What constraints and resources shape the current solution?</li>
            <li>What is stable, variable, adaptable, or costly about it?</li>
            <li>What manipulation would distinguish competing explanations?</li>
            <li>What is likely to happen across tasks and over time?</li>
          </ul>
          <NextLink href="/clinical-inquiry">Carry theory into instantiation</NextLink>
        </div>
      </section>

      <section className="theory-synthesis">
        <div className="section-shell">
          <SectionIntro
            label="Developing synthesis"
            title="Attain, Sustain, and Maintain cuts across these foundations."
          >
            <p>
              The framework organizes whether nested systems can reach an objective, continue
              meeting it, and preserve, recover, or adapt the required capability. It complements
              rather than replaces constraints, coordination, ecological, biomechanical, ICF, and
              diagnostic approaches.
            </p>
          </SectionIntro>
          <NextLink href="/foundations/attain-sustain-maintain">Read the developing framework</NextLink>
        </div>
      </section>
    </>
  );
}
