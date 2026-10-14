import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, SectionIntro } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "HMS Lab People",
  description:
    "Meet the faculty, students, clinicians, engineers, and collaborators who contribute to HMS Lab research and development.",
};

export default function HmsLabPeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="HMS Lab · People"
        title={<>A community that <em>questions and builds.</em></>}
        summary="The HMS Lab brings together clinical, scientific, technical, educational, and lived perspectives to develop better ways to understand movement."
        tone="forest"
      />
      <HmsLabNav />

      <section className="page-section section-shell">
        <SectionIntro label="People" title="Different expertise, shared development.">
          <p>
            This page will grow as participants contribute to clinical questions, design,
            fabrication, software, measurement, analysis, modeling, documentation, education, and
            scholarship.
          </p>
        </SectionIntro>

        <div className="people-directory">
          <article className="person-card">
            <Image
              src="https://avatars.githubusercontent.com/u/75478344?v=4"
              alt="Sean M. Collins"
              width={240}
              height={240}
            />
            <div>
              <p className="section-label">Principal Investigator · Lab Director</p>
              <h2>Sean M. Collins, PT, ScD</h2>
              <p>
                Physical therapist, Professor of Clinical Inquiry, scientist, and educator working
                across clinical physiology, movement systems, physiological measurement, ergonomics
                and human factors, causal analysis, complex and dynamical systems, evidence
                synthesis, and computational clinical inquiry.
              </p>
              <a className="inline-link" href="https://scollinspt.github.io/">
                View professional profile <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
