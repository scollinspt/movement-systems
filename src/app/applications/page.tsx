import type { Metadata } from "next";
import { BriefcaseBusiness, HeartPulse, PersonStanding, Wrench } from "lucide-react";
import { PageHero, SectionIntro } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Applications",
  description: "Clinical, rehabilitation, ergonomic, performance, and human-device applications of Movement Systems research.",
};

const applications = [
  [PersonStanding, "Rehabilitation and function", "How movement capacity, task demands, context, adaptation, and participation interact during recovery and change."],
  [HeartPulse, "Performance and fatigue", "How physiological stress and changing system capacity reorganize movement across repetitions and timescales."],
  [BriefcaseBusiness, "Ergonomics and work", "How people adapt to occupational demands, tools, environments, pacing, and accumulated exposure."],
  [Wrench, "Human-device interaction", "How assistive, rehabilitative, and commercial devices alter movement possibilities and demands."],
] as const;

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title={<>Study movement where it <em>matters.</em></>}
        summary="Movement Systems connects fundamental questions to rehabilitation, work, performance, and interactions with technology without treating application as a substitute for scientific validation."
        aside={<div className="application-coordinate"><span>person</span><span>task</span><span>setting</span><strong>movement in context</strong></div>}
      />
      <section className="page-section section-shell">
        <SectionIntro label="Application domains" title="One systems framework, different human problems.">
          <p>Domains organize questions and collaborations. They do not imply that every service, instrument, or research capability is currently operational.</p>
        </SectionIntro>
        <div className="application-list">
          {applications.map(([Icon, title, text], index) => (
            <article key={title}><span>0{index + 1}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>
      <section className="application-principle"><p>Bring the instrumentation to the movement.</p><h2>Study authentic tasks without giving up measurement discipline.</h2></section>
    </>
  );
}