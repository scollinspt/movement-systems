import { ArrowRight } from "lucide-react";
import { Status } from "@/components/page-elements";

const projects = [
  {
    id: "HMS-PROJ-001",
    title: "Movesense acquisition and single-sensor feasibility",
    description:
      "Verify one-sensor acquisition on the bench before considering a governed one-sensor human feasibility session.",
    nextStep:
      "Complete the hardware and firmware inventory, then capture the first non-human bench recording.",
    record:
      "https://github.com/scollinspt/movement-systems/blob/main/research/projects/movesense-opensense-foundation.md",
    supportingLink: "https://github.com/scollinspt/movesense-opensense",
    supportingLabel: "Implementation repository",
  },
  {
    id: "HMS-PROJ-002",
    title: "Movesense multi-sensor timing and scaling",
    description:
      "Measure timing and integrity with two sensors, then stage 3-, 5-, and 10-sensor loads non-human before corresponding human feasibility.",
    nextStep:
      "Begin with a two-sensor non-human shared event after single-sensor acquisition is stable.",
    record:
      "https://github.com/scollinspt/movement-systems/blob/main/research/projects/movesense-multisensor-scaling.md",
    supportingLink: "https://github.com/scollinspt/movesense-opensense",
    supportingLabel: "Implementation repository",
  },
  {
    id: "HMS-PROJ-003",
    title: "Movesense calibration and orientation validation",
    description:
      "Establish calibration, fusion, coordinate, drift, magnetic, and invalid-state limits across supported sensor counts.",
    nextStep:
      "Start with one-sensor non-human static poses and prescribed rotations after the timing envelope is known.",
    record:
      "https://github.com/scollinspt/movement-systems/blob/main/research/projects/movesense-orientation-validation.md",
    supportingLink: "https://github.com/scollinspt/movesense-opensense",
    supportingLabel: "Implementation repository",
  },
  {
    id: "HMS-PROJ-004",
    title: "Movesense-OpenSense interoperability",
    description:
      "Build reproducible OpenSense input, calibration, and inverse-kinematics acceptance after orientation limits are explicit.",
    nextStep:
      "Round-trip synthetic trajectories, then complete a non-human two- or three-sensor acceptance run.",
    record:
      "https://github.com/scollinspt/movement-systems/blob/main/research/projects/movesense-opensense-interoperability.md",
    supportingLink: "https://github.com/scollinspt/movesense-opensense",
    supportingLabel: "Implementation repository",
  },
  {
    id: "HMS-PROJ-005",
    title: "Movesense-OpenSense and OpenCap comparison",
    description:
      "Compare synchronized wearable and video estimates without treating agreement as accuracy or OpenCap as ground truth.",
    nextStep:
      "Begin only after Project 004 makes timing, orientation, placement, coordinate, and export limits explicit.",
    record:
      "https://github.com/scollinspt/movement-systems/blob/main/research/projects/movesense-opencap-validation.md",
    supportingLink: "https://www.opencap.ai/",
    supportingLabel: "OpenCap",
  },
];

export function ProjectSequence() {
  return (
    <>
      <div className="project-progression" aria-label="Required sensor and participation progression">
        <div>
          <span>01</span>
          <strong>One sensor</strong>
          <p>Non-human bench evidence before any governed human feasibility.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Two sensors</strong>
          <p>Non-human timing and integrity before simple human feasibility.</p>
        </div>
        <div>
          <span>03</span>
          <strong>3, 5, then 10</strong>
          <p>Each sensor count passes non-human and prior human stop/go criteria.</p>
        </div>
        <p className="project-progression-rule">
          Human activity requires a documented institutional governance determination.
          Feasibility does not establish validity, reliability, clinical utility, or an operational service.
        </p>
      </div>
      <div className="project-sequence">
        {projects.map((project, index) => (
          <article className="project-record" key={project.id}>
            <div className="project-record-meta">
              <span>0{index + 1}</span>
              <strong>{project.id}</strong>
              <Status tone="proposed">Proposed</Status>
            </div>
            <div className="project-record-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-record-links">
                <a href={project.record}>Read project record <ArrowRight aria-hidden="true" /></a>
                <a href={project.supportingLink}>{project.supportingLabel} <ArrowRight aria-hidden="true" /></a>
              </div>
            </div>
            <div className="project-record-next">
              <span>Next decision point</span>
              <p>{project.nextStep}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}