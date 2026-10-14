import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, Status } from "@/components/page-elements";
import { ProjectLiterature } from "@/components/project-literature";
import {
  getZoteroCollection,
  getZoteroLibrarySnapshot,
  zoteroCollectionKeys,
} from "@/lib/zotero";

export const metadata: Metadata = {
  title: "Ventilatory Pump Measurement and Mechanics",
  description:
    "The HMS Lab R&D program developing accessible ventilatory pressure measurement and studying inspiratory muscle performance, chest-wall motion, and thoracic mechanics.",
};

export default async function VentilatoryPumpProjectPage() {
  const library = await getZoteroLibrarySnapshot();
  const projectCollection = getZoteroCollection(
    library,
    zoteroCollectionKeys.ventilatoryPump,
  );

  return (
    <>
      <PageHero
        eyebrow="HMS Lab · Projects"
        title={<>Ventilatory Pump Measurement and <em>Mechanics.</em></>}
        summary="An R&D program developing accessible measurement of pressure generation for ventilation and studying its relationship to inspiratory muscle function, chest-wall motion, and thoracic mechanics."
        tone="forest"
      />
      <HmsLabNav />

      <section className="ventilatory-project section-shell">
        <div>
          <Status>Planning</Status>
          <p className="section-label">Initial development</p>
          <h2>Build an accessible measurement method, then evaluate it.</h2>
        </div>
        <div className="ventilatory-project-copy">
          <p className="lead">
            The initial work will develop an accessible maximal inspiratory pressure measurement
            system and evaluate its technical performance before advancing broader claims.
          </p>
          <p>
            Later evidence gates may include validity and reliability studies, synchronized BIOPAC
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
      <ProjectLiterature
        collection={projectCollection}
        description="This developing collection will support maximal inspiratory pressure measurement, ventilatory pump performance, chest-wall motion, and thoracic mechanics."
        synchronizedAt={library.synchronizedAt}
      />
    </>
  );
}
