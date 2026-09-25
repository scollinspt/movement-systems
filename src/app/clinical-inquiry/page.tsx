import type { Metadata } from "next";
import { ArrowDown, CircleDot, Network, Scale, UserRoundSearch } from "lucide-react";
import { NextLink, PageHero, SectionIntro } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Clinical Inquiry and Instantiation",
  description:
    "How movement evidence and population knowledge become an inspectable, patient-specific working model through clinical instantiation.",
};

const ecosystem = [
  ["stats4PT", "Evidence", "What can observations warrant?"],
  ["Physiolog", "Mechanisms", "How are effects generated?"],
  ["Movement Systems", "Movement knowledge", "How is movement produced and changed?"],
  ["Models4PT", "Population models", "How does the knowledge fit together?"],
  ["Clinical Inference Engine", "Instantiation", "What may be true for this person?"],
];

export default function ClinicalInquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinical inquiry"
        title={<>From what is known to <em>who is here.</em></>}
        summary="Instantiation is the work of bringing population evidence, mechanisms, and movement knowledge into a patient-specific model that can be questioned, revised, and acted upon without hiding uncertainty."
        tone="coral"
        aside={
          <div className="person-context-figure">
            <span>Population knowledge</span>
            <ArrowDown aria-hidden="true" />
            <div><UserRoundSearch aria-hidden="true" /><strong>This person</strong><small>goals · findings · context · time</small></div>
          </div>
        }
      />

      <section className="page-section section-shell">
        <SectionIntro label="Instantiation" title="A clinical model is made specific, not merely retrieved.">
          <p className="lead">
            Evidence describes groups, mechanisms describe possible processes, and models organize
            relationships. None of those is yet a conclusion about one person.
          </p>
          <p>
            The clinician instantiates that knowledge by mapping it to the person’s observations,
            history, goals, environment, response over time, and plausible alternatives. The resulting
            model is provisional: useful enough to guide the next action, explicit enough to revise.
          </p>
        </SectionIntro>
        <div className="distinction-table" role="table" aria-label="Population knowledge and patient-specific reasoning">
          <div role="row"><span role="columnheader">Population knowledge</span><span role="columnheader">Patient-specific inquiry</span></div>
          <div role="row"><span role="cell">Estimates average patterns and variation</span><span role="cell">Asks which patterns plausibly apply here</span></div>
          <div role="row"><span role="cell">Represents mechanisms across contexts</span><span role="cell">Tests mechanisms against individual findings</span></div>
          <div role="row"><span role="cell">Constrains what should be believed</span><span role="cell">Revises belief as the person responds</span></div>
          <div role="row"><span role="cell">Supports but does not determine care</span><span role="cell">Integrates goals, values, feasibility, and judgment</span></div>
        </div>
      </section>

      <section className="ecosystem-section">
        <div className="section-shell">
          <SectionIntro label="Clinical Inquiry Ecosystem" title="Distinct kinds of knowledge, deliberately connected.">
            <p>
              Sean Collins’s broader program separates discovery, mechanism, movement-domain
              scholarship, knowledge integration, and patient-specific inference so each can be
              inspected on its own terms.
            </p>
          </SectionIntro>
          <div className="ecosystem-track">
            {ecosystem.map(([name, role, question], index) => (
              <article key={name}>
                <span>0{index + 1}</span>
                <small>{role}</small>
                <h3>{name}</h3>
                <p>{question}</p>
              </article>
            ))}
          </div>
          <p className="ecosystem-note">
            This is a conceptual and scholarly flow, not an automated pipeline. Each project remains
            independently governed and versioned.
          </p>
        </div>
      </section>

      <section className="inquiry-safeguards section-shell">
        <SectionIntro label="Safeguards" title="Clinical specificity without false certainty." />
        <div className="safeguard-grid">
          <article><Scale aria-hidden="true" /><h3>Population is not person</h3><p>Group estimates constrain reasoning; they do not substitute for individual findings and context.</p></article>
          <article><CircleDot aria-hidden="true" /><h3>Observation is not explanation</h3><p>A visible pattern may have multiple sufficient mechanisms, and the same mechanism may produce different patterns.</p></article>
          <article><Network aria-hidden="true" /><h3>A model is not the patient</h3><p>Models are explicit tools for inquiry. Their omissions, uncertainty, and revision history remain visible.</p></article>
        </div>
      </section>

      <section className="closing-question">
        <p>Movement gives clinical inquiry something indispensable:</p>
        <h2>a changing, observable expression of the person as a system.</h2>
        <NextLink href="/hms-lab">See how the HMS Lab investigates it</NextLink>
      </section>
    </>
  );
}