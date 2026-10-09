import type { Metadata } from "next";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, SectionIntro } from "@/components/page-elements";
import { ProjectSequence } from "@/components/project-sequence";

export const metadata: Metadata = {
  title: "Movesense–OpenSense Integration",
  description:
    "The HMS Lab project developing Movesense acquisition, calibration, scaling, OpenSense interoperability, and OpenCap comparison.",
};

export default function MovesenseOpenSenseProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="HMS Lab · Projects"
        title={<>Movesense–OpenSense <em>Integration.</em></>}
        summary="A staged project developing a scalable wearable measurement pathway from Movesense acquisition through OpenSense interoperability and OpenCap comparison."
        tone="forest"
      />
      <HmsLabNav />

      <section className="project-program project-program-lab">
        <div className="section-shell">
          <SectionIntro label="Project sequence" title="Build the wearable method in stages.">
            <p className="lead">
              The project progresses from one sensor to two and then staged 3-, 5-, and 10-sensor
              configurations before OpenSense and OpenCap comparison.
            </p>
          </SectionIntro>
          <ProjectSequence />
        </div>
      </section>
    </>
  );
}
