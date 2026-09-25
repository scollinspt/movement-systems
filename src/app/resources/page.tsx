import type { Metadata } from "next";
import { ArrowUpRight, BookMarked, FileText, GitBranch, Library } from "lucide-react";
import Link from "next/link";
import { PageHero, SectionIntro, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Resources",
  description: "Movement Systems concepts, records, documentation, related projects, and public resource development.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>A public knowledge base <em>under construction.</em></>}
        summary="This area will collect reviewed concepts, methods, project records, results, references, and educational translations as they pass the publication process."
        aside={<div className="resource-stack"><FileText /><BookMarked /><Library /><GitBranch /><Status>Structure ready</Status></div>}
      />
      <section className="page-section section-shell">
        <SectionIntro label="Resource structure" title="Build records that remain useful after one project or semester.">
          <p>Every substantial record will show its type, maturity, sources, limits, relationships, ownership, and review state. A published page should never make a proposal look like a result.</p>
        </SectionIntro>
        <div className="resource-directory">
          <article><span>Theory</span><h3>Concepts and definitions</h3><p>Systems, capacity, task, variability, adaptation, compensation, control, and movement solutions.</p><Link href="/theory">Browse the initial structure</Link></article>
          <article><span>Research</span><h3>Questions and projects</h3><p>Public research questions, methods, capability records, projects, approved results, and provenance.</p><Link href="/research">View the agenda</Link></article>
          <article><span>Methods</span><h3>Measurement and models</h3><p>Acquisition, calibration, uncertainty, observability, synchronization, and interpretation.</p><Link href="/measurement-modeling">Explore methods</Link></article>
          <article><span>Ecosystem</span><h3>Related scholarship</h3><p>Evidence, physiology, movement knowledge, population models, and patient-specific inference.</p><Link href="/clinical-inquiry">See the connections</Link></article>
        </div>
      </section>
      <section className="external-resources section-shell">
        <p className="section-label">Related public work</p>
        <a href="https://stats4pt.org"><strong>stats4PT</strong><span>Evidence and scientific inquiry</span><ArrowUpRight /></a>
        <a href="https://physiolog.org"><strong>Physiolog</strong><span>Clinical physiology and mechanisms</span><ArrowUpRight /></a>
        <a href="https://github.com/scollinspt/Models4PT"><strong>Models4PT</strong><span>Population causal knowledge</span><ArrowUpRight /></a>
        <a href="https://scollinspt.github.io"><strong>Sean Collins</strong><span>Professional program and publications</span><ArrowUpRight /></a>
      </section>
    </>
  );
}