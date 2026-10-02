import { ArrowRight } from "lucide-react";
import { Status } from "@/components/page-elements";

const projects = [
  {
    id: "HMS-PROJ-001",
    title: "Movesense-OpenSense laboratory foundation",
    description:
      "Establish an open, reproducible path from wearable IMU acquisition through timing, calibration, orientation estimation, and bounded OpenSense integration.",
    nextStep:
      "Complete the hardware and firmware inventory, then capture the first non-human bench recording.",
    record:
      "https://github.com/scollinspt/movement-systems/blob/main/research/projects/movesense-opensense-foundation.md",
    supportingLink: "https://github.com/scollinspt/movesense-opensense",
    supportingLabel: "Implementation repository",
  },
  {
    id: "HMS-PROJ-002",
    title: "Movesense-OpenSense and OpenCap comparison",
    description:
      "Develop a bounded, synchronized comparison of wearable and video-based movement estimates without treating agreement as accuracy or OpenCap as ground truth.",
    nextStep:
      "Begin only after Project 001 makes timing, orientation, coordinate, and export limits explicit.",
    record:
      "https://github.com/scollinspt/movement-systems/blob/main/research/projects/movesense-opencap-validation.md",
    supportingLink: "https://www.opencap.ai/",
    supportingLabel: "OpenCap",
  },
];

export function ProjectSequence() {
  return (
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
  );
}