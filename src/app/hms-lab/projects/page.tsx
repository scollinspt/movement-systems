import type { Metadata } from "next";
import { ArrowRight, Gauge, Move3d } from "lucide-react";
import Link from "next/link";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, SectionIntro, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "HMS Lab Projects",
  description:
    "Current Human Movement Systems Laboratory projects in wearable measurement, ventilatory pump function, mechanics, and modeling.",
};

export default function HmsLabProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="HMS Lab · Projects"
        title={<>Questions under <em>study.</em></>}
        summary="HMS Lab projects connect a defined question with measurement development, collaborators, public records, and a clear account of current progress."
        tone="forest"
      />
      <HmsLabNav />

      <section className="page-section section-shell">
        <SectionIntro label="Project portfolio" title="Distinct projects within one laboratory program.">
          <p>
            Each project develops its own questions, methods, collaborations, and outputs while
            contributing to the laboratory’s shared measurement and modeling capabilities.
          </p>
        </SectionIntro>
        <div className="lab-project-index">
          <Link href="/hms-lab/projects/movesense-opensense">
            <Move3d aria-hidden="true" />
            <Status tone="proposed">Proposed</Status>
            <h3>Movesense–OpenSense Integration</h3>
            <p>Wearable acquisition, calibration, scaling, interoperability, and comparison.</p>
            <span>Explore project <ArrowRight aria-hidden="true" /></span>
          </Link>
          <Link href="/hms-lab/projects/ventilatory-pump-measurement-mechanics">
            <Gauge aria-hidden="true" />
            <Status>Planning</Status>
            <h3>Ventilatory Pump Measurement and Mechanics</h3>
            <p>Ventilatory pressure generation, inspiratory muscle performance, and chest-wall mechanics.</p>
            <span>Explore project <ArrowRight aria-hidden="true" /></span>
          </Link>
        </div>
      </section>
    </>
  );
}
