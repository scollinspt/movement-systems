import type { Metadata } from "next";
import { NextLink, PageHero, SectionIntro, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Movement Systems Theory",
  description:
    "Foundational concepts for understanding human movement as behavior emerging from interacting person, task, and environmental systems.",
};

const concepts = [
  ["Capacity", "What the interacting systems can support under specified conditions."],
  ["Task", "The goal, demands, rules, and tolerances that organize possible movement solutions."],
  ["Environment", "The physical, social, and informational surroundings in which action occurs."],
  ["Variability", "Structured differences across repetitions, contexts, timescales, and people."],
  ["Adaptation", "Change in the system or its behavior through exposure, learning, recovery, or compensation."],
  ["Movement solution", "A context-bound way of satisfying a task with the capacities currently available."],
];

export default function TheoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Theory"
        title={<>Movement is an <em>emergent clinical phenomenon.</em></>}
        summary="Movement is not produced by one structure or controlled from one level. It emerges from interacting physiological, neural, muscular, mechanical, behavioral, task, and environmental processes unfolding across time."
        aside={
          <div className="theory-field" aria-label="Movement emerging from interacting systems">
            <span>physiology</span><span>neural control</span><span>mechanics</span><span>behavior</span><span>task</span><span>environment</span>
            <strong>movement</strong>
          </div>
        }
      />

      <section className="page-section section-shell">
        <SectionIntro label="Working position" title="Explain the movement without losing the person.">
          <p className="lead">
            A movement pattern is neither a direct readout of one impairment nor a complete account of
            function. It is one realized solution from a system with history, redundancy, uncertainty,
            and alternatives.
          </p>
        </SectionIntro>
        <div className="proposition-list">
          <article><span>01</span><h3>Movement is multicausal.</h3><p>Similar observations can arise from different mechanisms; one mechanism can appear differently across people and contexts.</p></article>
          <article><span>02</span><h3>Movement is task-specific.</h3><p>Capacity becomes visible only in relation to demands, goals, tolerances, and environmental opportunities.</p></article>
          <article><span>03</span><h3>Movement is adaptive.</h3><p>Variability and compensation can reflect skill, exploration, protection, fatigue, constraint, or dysfunction.</p></article>
          <article><span>04</span><h3>Movement is inferential.</h3><p>What can be observed constrains explanations but never reveals the entire system that generated the behavior.</p></article>
        </div>
      </section>

      <section className="concept-section">
        <div className="section-shell">
          <SectionIntro label="Foundational vocabulary" title="Concepts to build carefully." />
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
            definitions, scales, observables, competing accounts, evidence, and measurement limits as
            the public knowledge base develops.
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
            <li>What demands make this pattern appear or disappear?</li>
            <li>What alternative mechanisms remain plausible?</li>
            <li>What is the pattern accomplishing for this person?</li>
            <li>What observation would change the current explanation?</li>
          </ul>
          <NextLink href="/clinical-inquiry">Carry theory into instantiation</NextLink>
        </div>
      </section>
    </>
  );
}