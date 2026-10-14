import type { Metadata } from "next";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, SectionIntro } from "@/components/page-elements";
import { ProjectLiterature } from "@/components/project-literature";
import { ProjectSequence } from "@/components/project-sequence";
import {
  getZoteroCollection,
  getZoteroLibrarySnapshot,
  zoteroCollectionKeys,
} from "@/lib/zotero";

export const metadata: Metadata = {
  title: "Movesense–OpenSense Integration",
  description:
    "The HMS Lab R&D program developing and evaluating an open pathway for Movesense acquisition, calibration, scaling, OpenSense interoperability, and OpenCap comparison.",
};

export default async function MovesenseOpenSenseProjectPage() {
  const library = await getZoteroLibrarySnapshot();
  const projectCollection = getZoteroCollection(
    library,
    zoteroCollectionKeys.movesenseOpenSense,
  );

  return (
    <>
      <PageHero
        eyebrow="HMS Lab · Projects"
        title={<>Movesense–OpenSense <em>Integration.</em></>}
        summary="A staged R&D program building an open, scalable wearable measurement pathway from Movesense acquisition through OpenSense interoperability and OpenCap comparison."
        tone="forest"
      />
      <HmsLabNav />

      <section className="project-program project-program-lab">
        <div className="section-shell">
          <SectionIntro label="Development sequence" title="Build and test the wearable method in stages.">
            <p className="lead">
              The project progresses from one sensor to two and then staged 3-, 5-, and 10-sensor
              configurations before OpenSense and OpenCap comparison.
            </p>
            <p>
              Each stage separates technical development from evidence of validity or clinical
              utility. A working pipeline is a prototype to evaluate, not a clinical claim.
            </p>
          </SectionIntro>
          <ProjectSequence />
        </div>
      </section>
      <ProjectLiterature
        collection={projectCollection}
        description="This collection supports the project’s work in wearable sensing, calibration, synchronization, validation, musculoskeletal modeling, and OpenSense interoperability."
        synchronizedAt={library.synchronizedAt}
      />
    </>
  );
}
