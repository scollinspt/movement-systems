import type { Metadata } from "next";
import { ArrowUpRight, BookMarked, FileText, GitBranch, Presentation } from "lucide-react";
import Link from "next/link";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, SectionIntro } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "HMS Lab Library",
  description:
    "The HMS Lab Zotero library, project records, repositories, presentations, and shared scholarly resources.",
};

export default function HmsLabLibraryPage() {
  return (
    <>
      <PageHero
        eyebrow="HMS Lab · Library"
        title={<>Shared scholarly <em>resources.</em></>}
        summary="The laboratory’s literature, project records, repositories, and presentations support shared learning and durable scientific work."
        tone="forest"
      />
      <HmsLabNav />

      <section className="page-section section-shell">
        <SectionIntro label="HMS Lab library" title="A shared foundation for inquiry.">
          <p>
            The public Zotero group library collects literature informing the laboratory’s
            questions, methods, modeling, and weekly seminar discussions.
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
            <p>Research questions, projects, methods, status, decisions, and developing outputs.</p>
            <a href="https://github.com/scollinspt/movement-systems/tree/main/research">
              Browse research records <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>
          <article>
            <GitBranch aria-hidden="true" />
            <span>Implementation</span>
            <h3>Movesense–OpenSense</h3>
            <p>Code and public technical work for wearable acquisition and OpenSense integration.</p>
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
    </>
  );
}
