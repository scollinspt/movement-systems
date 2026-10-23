import type { Metadata } from "next";
import { ArrowRight, Gauge, HeartPulse, Move3d } from "lucide-react";
import Link from "next/link";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, SectionIntro, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "HMS Lab Projects",
  description:
    "Current HMS Lab research-and-development programs in accessible measurement, wearable technology, ventilatory pump function, mechanics, and modeling.",
};

export default function HmsLabProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="HMS Lab · Projects"
        title={<>Questions in <em>development.</em></>}
        summary="HMS Lab projects connect a consequential question to design, prototyping, measurement, empirical evaluation, refinement, collaborators, and public records."
        tone="forest"
      />
      <HmsLabNav />

      <section className="page-section section-shell">
        <SectionIntro label="R&amp;D portfolio" title="Develop the method before making the claim.">
          <p>
            Each program has its own questions, development stages, evidence gates, collaborations,
            and outputs while contributing to shared measurement, modeling, and open-development
            capabilities.
          </p>
        </SectionIntro>
        <div className="lab-project-index">
          <Link href="/hms-lab/projects/tilt-ecg-measurement-review">
            <HeartPulse aria-hidden="true" />
            <Status>In progress</Status>
            <h3>Tilt ECG Measurement and Physiology Review</h3>
            <p>De-identified ECG and chest-angle acquisition, governed physiology review, and reporting.</p>
            <span>Explore project <ArrowRight aria-hidden="true" /></span>
          </Link>
          <Link href="/hms-lab/projects/movesense-opensense">
            <Move3d aria-hidden="true" />
            <Status tone="proposed">Proposed</Status>
            <h3>Movesense–OpenSense Integration</h3>
            <p>Open wearable acquisition, calibration, scaling, interoperability, and staged comparison.</p>
            <span>Explore project <ArrowRight aria-hidden="true" /></span>
          </Link>
          <Link href="/hms-lab/projects/ventilatory-pump-measurement-mechanics">
            <Gauge aria-hidden="true" />
            <Status>Planning</Status>
            <h3>Ventilatory Pump Measurement and Mechanics</h3>
            <p>Accessible pressure measurement, inspiratory muscle performance, and chest-wall mechanics.</p>
            <span>Explore project <ArrowRight aria-hidden="true" /></span>
          </Link>
        </div>
      </section>
    </>
  );
}
