import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  BookMarked,
  FileCheck2,
  FileText,
  GitBranch,
  ListChecks,
  Presentation,
  SearchCheck,
} from "lucide-react";
import Link from "next/link";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, SectionIntro } from "@/components/page-elements";
import {
  formatSynchronizationDate,
  getZoteroCollection,
  getZoteroLibrarySnapshot,
  zoteroCollectionKeys,
} from "@/lib/zotero";

export const metadata: Metadata = {
  title: "HMS Lab Library",
  description:
    "The HMS Lab literature, project records, repositories, presentations, and shared infrastructure for open research and development.",
};

const primaryCollections = [
  {
    key: zoteroCollectionKeys.foundations,
    label: "Foundations",
    description:
      "Human movement systems, dynamical systems, motor control, adaptation, and learning.",
  },
  {
    key: zoteroCollectionKeys.measurement,
    label: "Measurement",
    description:
      "Wearable sensing, biomechanics, physiological measurement, validation, and datasets.",
  },
  {
    key: zoteroCollectionKeys.modeling,
    label: "Modeling",
    description:
      "OpenSim, predictive simulation, neuromuscular control, optimization, and muscle mechanics.",
  },
  {
    key: zoteroCollectionKeys.clinical,
    label: "Application",
    description:
      "Rehabilitation, gait, balance, performance, assistive technology, and human-device interaction.",
  },
] as const;

export default async function HmsLabLibraryPage() {
  const library = await getZoteroLibrarySnapshot();
  const professionalCollection = getZoteroCollection(
    library,
    zoteroCollectionKeys.movementSystemPhysicalTherapy,
  );

  return (
    <>
      <PageHero
        eyebrow="HMS Lab · Library"
        title={<>Shared infrastructure for <em>durable development.</em></>}
        summary="Literature, project records, repositories, and presentations make the laboratory’s questions, methods, decisions, and developing work available for shared learning."
        tone="forest"
      />
      <HmsLabNav />

      <section className="page-section section-shell">
        <SectionIntro label="HMS Lab library" title="Evidence and records that move development forward.">
          <p>
            The public Zotero group library collects literature informing the laboratory’s
            questions, designs, methods, modeling, evaluation, and weekly seminar discussions.
          </p>
        </SectionIntro>
        <div className="resource-directory">
          <article>
            <BookMarked aria-hidden="true" />
            <span>Literature</span>
            <h3>Zotero group library</h3>
            <p>Shared literature for HMS Lab projects, methods, and seminar discussions.</p>
            <a href="https://www.zotero.org/groups/6710776/human_movement_system_lab">
              Open the library <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>
          <article>
            <FileText aria-hidden="true" />
            <span>Records</span>
            <h3>Shared public records</h3>
            <p>Questions, designs, projects, methods, status, decisions, evidence gates, and developing outputs.</p>
            <a href="https://github.com/scollinspt/movement-systems/tree/main/research">
              Browse research records <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>
          <article>
            <GitBranch aria-hidden="true" />
            <span>Implementation</span>
            <h3>Movesense–OpenSense</h3>
            <p>Open code and technical records for wearable acquisition and OpenSense integration.</p>
            <a href="https://github.com/scollinspt/movesense-opensense">
              View repository <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>
          <article>
            <Presentation aria-hidden="true" />
            <span>Presentation</span>
            <h3>Health Systems project</h3>
            <p>The organizational development of the HMS Lab as an institutional capability.</p>
            <Link href="/health-systems-project">
              View presentation <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section className="zotero-library-section">
        <div className="section-shell">
          <SectionIntro label="Explore the literature" title="Follow the questions across fields.">
            <p>
              The library contains {library.itemCount} unique works. Papers can appear in more
              than one collection when they contribute to multiple areas of inquiry.
            </p>
          </SectionIntro>
          <div className="zotero-collection-grid">
            {primaryCollections.map(({ key, label, description }) => {
              const collection = getZoteroCollection(library, key);

              return (
                <a href={collection.url} key={collection.key}>
                  <div>
                    <span>{label}</span>
                    <strong>{collection.itemCount} papers</strong>
                  </div>
                  <h3>{collection.name.replace(/^\d{2}\s/, "")}</h3>
                  <p>{description}</p>
                  <span>
                    Browse in Zotero <ArrowUpRight aria-hidden="true" />
                  </span>
                </a>
              );
            })}
          </div>
          <p className="zotero-sync-date">
            Synchronized with Zotero {formatSynchronizationDate(library.synchronizedAt)}
          </p>
        </div>
      </section>

      <section className="featured-literature section-shell">
        <div>
          <p className="section-label">Featured collection</p>
          <h2>The movement system in physical therapy.</h2>
        </div>
        <div>
          <strong>{professionalCollection.itemCount} papers</strong>
          <p>
            Literature addressing the movement system as the profession&apos;s identity, area of
            expertise, framework for diagnosis, and basis for practice.
          </p>
          <a href={professionalCollection.url}>
            Explore identity, expertise, and diagnosis
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="literature-practice">
        <div className="section-shell">
          <SectionIntro label="From literature to development" title="Use evidence to move the work.">
            <p>
              Collections organize sources. Evidence maps, method comparisons, and seminar
              discussions connect those sources to designs, decisions, evaluation, and new questions.
            </p>
          </SectionIntro>
          <div className="literature-practice-grid">
            <article>
              <SearchCheck aria-hidden="true" />
              <h3>Find evidence gaps</h3>
              <p>Identify where a project needs stronger theory, methods, or validation evidence.</p>
            </article>
            <article>
              <ListChecks aria-hidden="true" />
              <h3>Compare methods</h3>
              <p>Build structured comparisons of instruments, protocols, and reference measures.</p>
            </article>
            <article>
              <FileCheck2 aria-hidden="true" />
              <h3>Check claims</h3>
              <p>Connect public scientific statements to appropriate sources and limitations.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
