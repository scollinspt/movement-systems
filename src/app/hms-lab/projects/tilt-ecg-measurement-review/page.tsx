import type { Metadata } from "next";
import {
  Activity,
  ArrowRight,
  Database,
  FileCheck2,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import { HmsLabNav } from "@/components/hms-lab-nav";
import { PageHero, SectionIntro, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Tilt ECG Measurement and Physiology Review",
  description:
    "The HMS Lab development project connecting de-identified Movesense ECG and chest-angle acquisition with governed physiology review and reporting.",
};

const workflow = [
  {
    number: "01",
    title: "Acquire",
    description: "Stream ECG and chest orientation from a Movesense sensor during a governed tilt-table workflow.",
  },
  {
    number: "02",
    title: "Preserve",
    description: "Write native-rate signals, exact events, metadata, checksums, and a five-second summary.",
  },
  {
    number: "03",
    title: "Verify",
    description: "Confirm source integrity and review the relationship between sensor angle and achieved table angle.",
  },
  {
    number: "04",
    title: "Analyze",
    description: "Review beat-to-beat HR, R–R intervals, BP, end-tidal CO₂, symptoms, HRV, and Poincaré measures.",
  },
  {
    number: "05",
    title: "Report",
    description: "Approve an immutable review record and export a de-identified portrait report.",
  },
];

export default function TiltEcgProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="HMS Lab · Projects"
        title={<>Tilt ECG Measurement and <em>Physiology Review.</em></>}
        summary="A development project connecting synchronized Movesense ECG and chest-angle acquisition with governed, de-identified review of the physiologic response to orthostatic stress."
        tone="forest"
      />
      <HmsLabNav />

      <section className="tilt-project-overview section-shell">
        <div>
          <Status>Development</Status>
          <p className="section-label">HMS-PROJ-007</p>
          <h2>Develop the complete measurement workflow before extending its use.</h2>
        </div>
        <div className="tilt-project-overview-copy">
          <p className="lead">
            The current system records native ECG and inertial signals during head-up tilt,
            preserves them as checksum-verified artifacts, and supports a separate clinical
            physiology review without storing direct identifiers.
          </p>
          <p>
            Representative teaching and clinical-development workflows are now being used to
            refine acquisition, event timing, angle calibration, analysis, review, and report
            export. This development status does not establish diagnostic validity, normative
            reference values, or readiness for distribution.
          </p>
          <a href="https://github.com/scollinspt/movesense-opensense">
            View the public implementation <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="project-program project-program-lab">
        <div className="section-shell">
          <SectionIntro
            label="Acquisition to report"
            title="Keep every transformation visible and reviewable."
          >
            <p>
              Raw physiological signals remain unchanged. Calibration, interval decisions,
              eligibility rules, reviewer conclusions, and report approval are recorded as
              derived provenance.
            </p>
          </SectionIntro>
          <ol className="tilt-project-workflow">
            {workflow.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tilt-project-evidence section-shell">
        <SectionIntro
          label="Current development"
          title="Working software, bounded evidence, open questions."
        >
          <p>
            Engineering validation demonstrates that the components can operate together. It
            does not establish clinical interpretation or scientific validity.
          </p>
        </SectionIntro>
        <div className="tilt-project-evidence-grid">
          <article>
            <HeartPulse aria-hidden="true" />
            <h3>Live acquisition</h3>
            <p>
              Local browser software displays ECG, five-beat heart rate, chest tilt, signal
              quality, protocol phase, symptoms, BP, and end-tidal CO₂ observations.
            </p>
          </article>
          <article>
            <Database aria-hidden="true" />
            <h3>Governed records</h3>
            <p>
              Native-rate ECG and IMU samples, events, metadata, summaries, and checksums are
              retained outside the public repository.
            </p>
          </article>
          <article>
            <Activity aria-hidden="true" />
            <h3>Physiology review</h3>
            <p>
              The review application derives beat-to-beat HR and R–R relationships, segmented
              HRV, Poincaré measures, and time-aligned clinical observations.
            </p>
          </article>
          <article>
            <FileCheck2 aria-hidden="true" />
            <h3>Reviewed report</h3>
            <p>
              Reviewer decisions and source checksums are preserved in a new immutable record
              before a de-identified portrait report can be exported.
            </p>
          </article>
        </div>
      </section>

      <section className="tilt-project-boundary">
        <div className="section-shell">
          <ShieldCheck aria-hidden="true" />
          <div>
            <p className="section-label section-label-light">Boundary</p>
            <h2>Development software does not replace the clinical system.</h2>
          </div>
          <div>
            <p>
              Approved ECG, blood-pressure, end-tidal CO₂, table-safety, supervision, stopping,
              and emergency procedures remain authoritative during clinical testing.
            </p>
            <p>
              The applications do not request a name, medical record number, date of birth, or
              other direct identifier. Clinical recordings and reports remain governed even
              when direct identifiers are absent, and they are not website content.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section section-shell">
        <SectionIntro label="After workflow refinement" title="Two distinct next questions.">
          <p>
            Distribution and research each require their own evidence, governance, and decision
            process. Neither follows automatically from a successful development workflow.
          </p>
        </SectionIntro>
        <div className="tilt-project-next">
          <article>
            <span>Availability</span>
            <h3>Can other qualified users operate and support the system safely?</h3>
            <p>
              This requires a defined intended use, supported hardware and software, installation
              and recovery procedures, training, validation fixtures, documentation, support,
              and the applicable institutional and regulatory determinations.
            </p>
          </article>
          <article>
            <span>Proposed research direction</span>
            <h3>How do active and passive orthostatic stress responses differ?</h3>
            <p>
              A future prospective protocol may compare active orthostatic stress with passive
              head-up tilt in people without signs, symptoms, or a diagnosis of dysautonomia.
              Protocols, outcomes, sample size, consent, governance, and analysis must be defined
              before enrollment.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
