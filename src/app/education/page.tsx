import type { Metadata } from "next";
import { BookOpenText, HandHeart, Microscope, Repeat2 } from "lucide-react";
import { NextLink, PageHero, SectionIntro } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Education",
  description: "The PSU DPT clinicians-first approach to movement systems, hands-on learning, clinical inquiry, and the Pro Bono Clinic.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title={<>Teach clinicians first. <em>Teach inquiry throughout.</em></>}
        summary="In the Plymouth State DPT program, movement science, hands-on laboratory work, clinical experience, and research inquiry can reinforce one another while remaining distinct and responsibly governed."
        tone="coral"
        aside={<div className="learning-loop"><span>learn</span><span>practice</span><span>observe</span><span>question</span><strong>reflect</strong></div>}
      />
      <section className="page-section section-shell">
        <SectionIntro label="Clinicians-first formation" title="Knowledge becomes durable when it is used, examined, and revised.">
          <p className="lead">Students should learn to see movement, reason across systems, measure responsibly, and explain why the next action is warranted.</p>
          <p>The aim is not to turn every clinician into a laboratory scientist. It is to develop clinicians who can recognize uncertainty, generate better questions, and participate intelligently in building professional knowledge.</p>
        </SectionIntro>
        <div className="learning-pillars">
          <article><BookOpenText aria-hidden="true" /><h3>Conceptual foundations</h3><p>Theory and mechanisms provide language for seeing beyond isolated impairments.</p></article>
          <article><Microscope aria-hidden="true" /><h3>Hands-on laboratory</h3><p>Measurement reveals both what can be observed and what remains uncertain.</p></article>
          <article><HandHeart aria-hidden="true" /><h3>Pro Bono Clinic</h3><p>Authentic care makes patient goals, context, response, and professional accountability unavoidable.</p></article>
          <article><Repeat2 aria-hidden="true" /><h3>Reflective inquiry</h3><p>Cases and observations return to the classroom and lab as questions rather than unsupported claims.</p></article>
        </div>
      </section>
      <section className="clinic-boundary">
        <div><p className="section-label section-label-light">A productive boundary</p><h2>Care can inspire research. Care is not automatically research.</h2></div>
        <div><p>Movement from a clinical observation to a research question should be intellectually easy. Movement from a patient to a research participant must be deliberate, consented, and governed.</p><NextLink href="/hms-lab">See the HMS Lab model</NextLink></div>
      </section>
    </>
  );
}