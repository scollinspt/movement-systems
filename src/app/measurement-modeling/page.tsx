import type { Metadata } from "next";
import { Binary, RadioTower, ScanSearch, Waves } from "lucide-react";
import { PageHero, SectionIntro, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Measurement and Modeling",
  description: "Measurement, uncertainty, observability, and mechanistic modeling in human movement research.",
};

export default function MeasurementModelingPage() {
  return (
    <>
      <PageHero
        eyebrow="Measurement and modeling"
        title={<>What can an observation <em>actually tell us?</em></>}
        summary="Movement measurement is an inference problem. Sensors produce signals; methods turn signals into quantities; models connect quantities to possible mechanisms. Each step adds assumptions and uncertainty."
        tone="forest"
        aside={<div className="measurement-rings"><span>signal</span><span>quantity</span><span>state</span><strong>mechanism?</strong></div>}
      />
      <section className="page-section section-shell">
        <SectionIntro label="Methodological position" title="Accessible measurement can support ambitious science.">
          <p className="lead">Scientific sophistication does not require making the most expensive instrument the center of the laboratory.</p>
          <p>Portable video, wearable sensing, physiological signals, imaging, and computational models can be combined when the question justifies them and their common timeline, uncertainty, and validity are explicit.</p>
        </SectionIntro>
        <div className="method-domains">
          <article><ScanSearch aria-hidden="true" /><Status>In development</Status><h3>Movement observation</h3><p>Video, markerless approaches, and task-specific kinematic descriptions.</p></article>
          <article><RadioTower aria-hidden="true" /><Status>In development</Status><h3>Wearable sensing</h3><p>Distributed inertial and physiological measurements in laboratory and field contexts.</p></article>
          <article><Waves aria-hidden="true" /><Status tone="proposed">Proposed</Status><h3>Sensor integration</h3><p>Synchronization, calibration, uncertainty, and common-time representations.</p></article>
          <article><Binary aria-hidden="true" /><Status>In development</Status><h3>Mechanistic models</h3><p>Dynamical and neuromusculoskeletal representations that generate testable behavior.</p></article>
        </div>
      </section>
      <section className="observability-band">
        <div><p className="section-label section-label-light">Foundational question</p><h2>How much of the scientifically important structure of movement can we recover from strategically chosen measurements?</h2></div>
        <p>This question connects clinical feasibility to observability, dimensionality, state estimation, sensor fusion, system identification, movement variability, and model identifiability.</p>
      </section>
    </>
  );
}