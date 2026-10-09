import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Ventilatory Pump Measurement and Mechanics",
  description:
    "The HMS Lab project studying ventilatory pump pressure generation, inspiratory muscle performance, chest-wall motion, and thoracic mechanics.",
};

export default function VentilatoryPumpProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="HMS Lab · Projects"
        title={<>Ventilatory Pump Measurement and <em>Mechanics.</em></>}
        summary="A project studying pressure generation for ventilation and its relationship to inspiratory muscle function, chest-wall motion, and thoracic mechanics."
        tone="forest"
      />
      <HmsLabNav />

      <section className="ventilatory-project section-shell">
        <div>
          <Status>Planning</Status>
          <p className="section-label">Current direction</p>
          <h2>Measure pressure generation and chest-wall mechanics.</h2>
        </div>
        <div className="ventilatory-project-copy">
          <p className="lead">
            The initial study will develop and evaluate an accessible maximal inspiratory pressure
            measurement system.
          </p>
          <p>
            Developing directions include validity and reliability studies, synchronized BIOPAC
            and IMU measurement of chest-wall motion, and computational thoracic modeling.
          </p>
          <div className="project-collaborator">
            <span>Collaborators</span>
            <strong>Sean M. Collins, PT, ScD</strong>
            <a href="https://med.miami.edu/faculty/lawrence-p-cahalin-pt-phd-fapta">
              Lawrence P. Cahalin, PT, PhD, FAPTA <ArrowRight aria-hidden="true" />
            </a>
            <p>
              Collins and Cahalin began this work together approximately two decades ago through
              the development of accessible methods for measuring inspiratory muscle performance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
