import { ArrowRight, FlaskConical, GraduationCap, Stethoscope } from "lucide-react";
import Link from "next/link";
import { MovementField } from "@/components/movement-field";

const inquirySteps = [
  ["01", "Observe", "Begin with movement, function, and the questions that emerge in care."],
  ["02", "Question", "Make competing explanations explicit and identify what would distinguish them."],
  ["03", "Measure", "Select observations that can constrain the system without confusing a proxy for the person."],
  ["04", "Explain", "Connect evidence to physiological, neural, mechanical, behavioral, and environmental mechanisms."],
  ["05", "Instantiate", "Bring population knowledge into an inspectable working model of this person, here and now."],
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">Physical therapy · Human movement · Clinical inquiry</p>
          <h1>Clinical inquiry begins with <em>movement.</em></h1>
          <p className="hero-lead">
            Physical therapists are human movement system specialists. Movement Systems studies how
            movement emerges, how it can be measured, and how population knowledge about movement
            becomes useful for one person through clinical instantiation.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/hms-lab">
              Enter the HMS Lab <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-text" href="/clinical-inquiry">
              Follow the inquiry
            </Link>
          </div>
        </div>
        <MovementField />
        <div className="hero-index" aria-hidden="true">
          <span>OBSERVATION</span><i /><span>PERSON</span><i /><span>KNOWLEDGE</span>
        </div>
      </section>

      <section className="intro-band">
        <p className="section-label">A clinically oriented research program</p>
        <div className="intro-grid">
          <h2>The profession’s object of study is not a joint, a force, or a diagnosis. It is a person moving.</h2>
          <div className="intro-copy">
            <p className="lead">
              Human movement is where physiology, neural control, mechanics, behavior, task, and
              environment become visible together.
            </p>
            <p>
              Movement Systems provides the conceptual structure. The Human Movement Systems
              Laboratory provides the empirical work: turning clinical observations into researchable
              questions, careful measurements, mechanistic explanations, and better questions for
              physical therapy.
            </p>
          </div>
        </div>
      </section>

      <section className="three-roles section-shell">
        <article>
          <Stethoscope aria-hidden="true" />
          <p className="role-number">01 / Profession</p>
          <h3>PTs as human movement specialists</h3>
          <p>
            Movement expertise is more than naming impairments. It means reasoning across systems,
            tasks, contexts, timescales, and the lived goals of a person.
          </p>
        </article>
        <article>
          <FlaskConical aria-hidden="true" />
          <p className="role-number">02 / Inquiry</p>
          <h3>Clinical questions become research</h3>
          <p>
            The HMS Lab creates a governed path from an observation in practice to a question that
            can be measured, tested, modeled, and returned to the profession.
          </p>
        </article>
        <article>
          <GraduationCap aria-hidden="true" />
          <p className="role-number">03 / Formation</p>
          <h3>Clinicians learn by doing</h3>
          <p>
            PSU’s clinicians-first philosophy, DPT curriculum, and Pro Bono Clinic make inquiry a
            hands-on habit: observe carefully, reason explicitly, and remain accountable to the person.
          </p>
        </article>
      </section>

      <section className="instantiation-band">
        <div className="section-shell instantiation-grid">
          <div>
            <p className="section-label section-label-light">The central clinical problem</p>
            <h2>Knowledge is built in populations. Care happens with a person.</h2>
            <p>
              <strong>Instantiation</strong> is the disciplined act of bringing general evidence and
              mechanisms into a patient-specific model without pretending that population knowledge
              determines the individual.
            </p>
            <Link className="inline-link light-link" href="/clinical-inquiry">
              Explore instantiation <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="instantiation-equation" aria-label="Population knowledge and individual findings combine through clinical inquiry into a patient-specific working model">
            <div>
              <small>What is generally known</small>
              <strong>Evidence + mechanisms</strong>
            </div>
            <span className="equation-mark">+</span>
            <div>
              <small>What is observed here</small>
              <strong>Person + context + time</strong>
            </div>
            <span className="equation-mark">→</span>
            <div className="equation-result">
              <small>What we can defend now</small>
              <strong>A working clinical model</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="inquiry-section section-shell">
        <div className="section-heading">
          <p className="section-label">The inquiry cycle</p>
          <h2>From a puzzling movement to a more useful understanding.</h2>
          <p>
            The cycle is empirical and recursive. A result can revise the measurement, the model,
            or the original question.
          </p>
        </div>
        <ol className="inquiry-steps">
          {inquirySteps.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="psu-section">
        <div className="psu-mast">
          <p className="section-label">Plymouth State University DPT</p>
          <h2>Teach clinicians first.</h2>
        </div>
        <div className="psu-content">
          <p className="lead">
            Inquiry is not reserved for a research methods course. It is learned in the repeated work
            of seeing, measuring, explaining, acting, and reflecting.
          </p>
          <div className="psu-path">
            <span>DPT classroom</span><i />
            <span>Hands-on laboratory</span><i />
            <span>Pro Bono Clinic</span><i />
            <span>Research question</span>
          </div>
          <p>
            The HMS Lab strengthens this loop while preserving a firm boundary: clinical care,
            education, and research are connected forms of inquiry, but they are not interchangeable
            activities. Participation, privacy, consent, and research governance remain explicit.
          </p>
          <Link className="inline-link" href="/education">
            See the teaching and learning model <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="explore-section section-shell">
        <div className="section-heading compact">
          <p className="section-label">Build the field</p>
          <h2>Four ways into the work.</h2>
        </div>
        <div className="explore-links">
          <Link href="/theory"><span>01</span><strong>Theory</strong><small>How movement emerges</small><ArrowRight aria-hidden="true" /></Link>
          <Link href="/research"><span>02</span><strong>Research</strong><small>Questions, methods, projects</small><ArrowRight aria-hidden="true" /></Link>
          <Link href="/hms-lab"><span>03</span><strong>HMS Lab</strong><small>Clinical movement inquiry</small><ArrowRight aria-hidden="true" /></Link>
          <Link href="/clinical-inquiry"><span>04</span><strong>Instantiation</strong><small>From populations to a person</small><ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}