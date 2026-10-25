import type { Metadata } from "next";
import { NextLink, PageHero, SectionIntro } from "@/components/page-elements";
import { ScientificRecordMeta } from "@/components/scientific-record-meta";
import { attainSustainMaintainRecord } from "@/lib/scientific-records";

export const metadata: Metadata = {
  title: "Attain, Sustain, Maintain",
  description:
    "A developing hierarchical framework for functional capability across organizational levels, tasks, constraints, and timescales.",
};

const dimensions = [
  {
    name: "Attain",
    definition:
      "At a specified organizational level, reach a defined state or objective under specified constraints.",
  },
  {
    name: "Sustain",
    definition:
      "Continue meeting that objective for the required duration despite resource use, perturbation, and change.",
  },
  {
    name: "Maintain",
    definition:
      "Preserve, recover, or adapt the resources and organization needed to attain and sustain relevant objectives across repeated demands and longer timescales.",
  },
] as const;

const scaleRows = [
  ["Molecular and cellular", "Regenerate ATP at the required rate", "Continue supply, transport, and regulation", "Preserve cellular integrity and adaptability"],
  ["Muscle fiber and motor unit", "Generate required tension", "Continue required excitation and tension", "Recover resources and adapt rate or capacity"],
  ["Muscle and joint", "Produce required force or torque", "Preserve task-relevant mechanical output", "Preserve or adapt mechanical capacity"],
  ["Limb and coordination", "Form a task-effective movement solution", "Stabilize or adapt the solution during performance", "Retain or reorganize available solutions"],
  ["Whole-person activity", "Stand, walk, reach, or transfer", "Continue for the required duration", "Recover and retain repeated-task capability"],
  ["Participation", "Enter a meaningful activity or role", "Remain engaged as required", "Preserve participation across changing conditions"],
] as const;

const coordinates = [
  "Focal organizational scale",
  "Objective and higher-level purpose",
  "Lower-level dependencies and available resources",
  "Selected activity and workload",
  "Required duration and repetition",
  "Task and environmental constraints",
  "Success and intolerance criteria",
  "Adaptation or compensatory strategy",
  "The person’s participation goal",
] as const;

export default function AttainSustainMaintainPage() {
  return (
    <>
      <PageHero
        eyebrow="Scientific foundations"
        title={<>Attain. Sustain. <em>Maintain.</em></>}
        summary={attainSustainMaintainRecord.summary}
        tone="accent"
      />

      <section className="record-intro section-shell">
        <ScientificRecordMeta record={attainSustainMaintainRecord} />
        <div>
          <p className="lead">
            These are relational, scale-indexed dimensions of functional capability, not fixed
            properties of a person.
          </p>
          <p>
            A defensible statement must specify which system is attaining or sustaining which
            objective, under which constraints, at what workload, for what duration, and for what
            higher-level purpose.
          </p>
        </div>
      </section>

      <section className="asm-definitions">
        <div className="section-shell">
          <SectionIntro
            label="Working definitions"
            title="Distinguish the dimensions without separating the system."
          />
          <div className="asm-definition-grid">
            {dimensions.map((dimension, index) => (
              <article key={dimension.name}>
                <span>0{index + 1}</span>
                <h2>{dimension.name}</h2>
                <p>{dimension.definition}</p>
              </article>
            ))}
          </div>
          <p className="development-note">
            The dimensions may operate simultaneously at different scales. Maintaining function
            does not require maintaining an identical movement pattern.
          </p>
        </div>
      </section>

      <section className="asm-hierarchy section-shell">
        <SectionIntro
          label="Hierarchical and stratified"
          title="Success at one level does not establish success at another."
        >
          <p>
            Lower levels support and constrain higher levels. Higher-level tasks impose demands on
            lower levels. The same task outcome can emerge from different combinations of resources
            and coordination.
          </p>
        </SectionIntro>
        <div className="asm-table-wrap">
          <table>
            <caption>
              Working examples of Attain, Sustain, and Maintain across organizational scales
            </caption>
            <thead>
              <tr>
                <th scope="col">Scale</th>
                <th scope="col">Attain</th>
                <th scope="col">Sustain</th>
                <th scope="col">Maintain</th>
              </tr>
            </thead>
            <tbody>
              {scaleRows.map(([scale, attain, sustain, maintain]) => (
                <tr key={scale}>
                  <th scope="row">{scale}</th>
                  <td>{attain}</td>
                  <td>{sustain}</td>
                  <td>{maintain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="asm-coordinate-section">
        <div className="section-shell">
          <SectionIntro
            label="Required coordinates"
            title="No capability claim is complete without its conditions."
          />
          <ol>
            {coordinates.map((coordinate, index) => (
              <li key={coordinate}>
                <span>0{index + 1}</span>
                <strong>{coordinate}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="asm-clinical-logic section-shell">
        <SectionIntro
          label="Iterative clinical logic"
          title="When the objective is met, change the demand."
        >
          <p>
            The 2020 heart-failure guideline algorithm asks whether an activity can be performed,
            then whether endurance limits it, and then whether a new task or higher workload is
            needed. The result of one examination determines the next question.
          </p>
        </SectionIntro>
        <ol>
          <li><span>01</span><strong>Specify the objective and its scale.</strong></li>
          <li><span>02</span><strong>Determine whether it can be attained.</strong></li>
          <li><span>03</span><strong>Determine whether it can be sustained.</strong></li>
          <li><span>04</span><strong>Change workload, duration, task, or environment.</strong></li>
          <li><span>05</span><strong>Evaluate recovery, adaptation, and repeated capability.</strong></li>
        </ol>
      </section>

      <section className="asm-evidence">
        <div className="section-shell">
          <SectionIntro
            label="Scientific status"
            title="A documented foundation and a developing synthesis."
          />
          <div className="asm-evidence-grid">
            <article>
              <span>Documented source foundation</span>
              <h3>Physiology and clinical decision logic</h3>
              <p>
                The Clinical Physiology text explicitly distinguishes attaining and sustaining
                tension and connects adaptation to attaining, sustaining, and maintaining capacity.
                The heart-failure guideline embeds performance and endurance decisions in a
                published clinical algorithm.
              </p>
            </article>
            <article>
              <span>Interpretive synthesis</span>
              <h3>Functional capability across levels</h3>
              <p>
                Extending this logic from physiological and clinical examples to coordination,
                activity, participation, and multiple timescales is a reasoned synthesis.
              </p>
            </article>
            <article>
              <span>Proposed development</span>
              <h3>Operational measures and experiments</h3>
              <p>
                Construct-specific definitions, perturbations, measurements, and validation
                studies are still required before the framework can support empirical claims.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="asm-relationships section-shell">
        <SectionIntro
          label="Relationship to established foundations"
          title="A cross-cutting framework, not a replacement theory."
        >
          <p>
            Dynamic systems and constraints approaches help investigate how a movement solution
            emerges. Dynamic-resource models help investigate how it is produced. Ecological
            approaches address information and possibilities for action. ICF organizes activity
            and participation. Attain, Sustain, and Maintain asks a different but related question:
            whether relevant systems can meet, continue meeting, and preserve or adapt capability
            for a specified objective.
          </p>
          <p>
            Holt, Wagenaar, and Saltzman (2010) and Guccione, Neville, and George (2019) establish
            important scientific context. They are not presented as the originators of this
            developing synthesis.
          </p>
        </SectionIntro>
        <div className="asm-relationship-links">
          <NextLink href="/foundations/dynamic-systems-constraints">
            Read about constraints and dynamic resources
          </NextLink>
          <NextLink href="/foundations/movement-solutions-optimization">
            Read about movement solutions and optimization
          </NextLink>
        </div>
      </section>
    </>
  );
}
