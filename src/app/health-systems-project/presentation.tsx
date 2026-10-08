"use client";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Expand,
  FlaskConical,
  GraduationCap,
  HandHeart,
  LaptopMinimalCheck,
  Maximize2,
  Minimize2,
  Move3d,
  Network,
  RefreshCw,
  ShieldCheck,
  Stethoscope,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./presentation.module.css";

type SlideTone = "paper" | "forest" | "coral" | "yellow";

type Slide = {
  section: string;
  title: string;
  tone: SlideTone;
  content: ReactNode;
};

const systemAssets = [
  ["Clinical", "DPT Program · Pro Bono Clinic"],
  ["Education", "Movement Systems · Exercise Prescription · Shared laboratories"],
  ["Measurement", "BIOPAC · Movesense · OpenCap · Existing rehabilitation resources"],
  ["Computation", "OpenSim · OpenSense · SCONE · Reproducible analysis"],
  ["Campus", "Exercise science · Athletic training · Allied health · Adventure education · PE"],
  ["Partnership", "Healthcare · Community · Employers · Product and technology companies"],
];

const slides: Slide[] = [
  {
    section: "PTH8323 Health Systems · Example project",
    title: "From Capital Equipment to Institutional Capability",
    tone: "forest",
    content: (
      <div className={styles.titleSlide}>
        <p className={styles.deckKicker}>Human Movement Systems Laboratory</p>
        <h2>From capital equipment to <em>institutional capability.</em></h2>
        <p className={styles.subtitle}>
          Developing the Human Movement Systems Laboratory at Plymouth State University
        </p>
        <blockquote>
          How can Plymouth State turn disconnected movement-related assets into a sustainable
          system for education, workforce development, research, clinical inquiry, and industry
          partnership?
        </blockquote>
        <p className={styles.presenter}>Sean M. Collins, PT, ScD · October 2026</p>
      </div>
    ),
  },
  {
    section: "01 · Project frame",
    title: "Beyond opening a room or purchasing equipment",
    tone: "paper",
    content: (
      <div className={styles.statementSlide}>
        <p className={styles.overline}>The intervention is organizational</p>
        <h2>Beyond opening a room or purchasing equipment.</h2>
        <div className={styles.tagField}>
          {[
            "Organizational structure",
            "Capital allocation",
            "Workforce development",
            "Education",
            "Clinical practice",
            "Research",
            "Governance",
            "Sustainability",
          ].map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <p className={styles.takeaway}>
          The project is the system required to make existing and future assets useful,
          responsible, connected, and durable.
        </p>
      </div>
    ),
  },
  {
    section: "02 · Diagnose the system",
    title: "Foundations of the HMS Lab",
    tone: "paper",
    content: (
      <div>
        <div className={styles.slideHeading}>
          <p className={styles.overline}>Starting conditions</p>
          <h2>Foundations of the HMS Lab</h2>
        </div>
        <div className={styles.assetGrid}>
          {systemAssets.map(([label, description], index) => (
            <article key={label}>
              <span>0{index + 1}</span>
              <strong>{label}</strong>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    ),
  },
  {
    section: "03 · Identify the problem",
    title: "Components do not automatically become a system.",
    tone: "coral",
    content: (
      <div className={styles.problemSlide}>
        <div>
          <p className={styles.overline}>The current gap</p>
          <h2>PSU does not yet have a durable mechanism that connects these assets.</h2>
        </div>
        <ul className={styles.problemList}>
          <li><Wrench aria-hidden="true" /><span>Equipment can remain underused without questions, workflows, training, and stewardship.</span></li>
          <li><Network aria-hidden="true" /><span>Courses, clinical experience, research, and campus expertise can remain adjacent rather than connected.</span></li>
          <li><Users aria-hidden="true" /><span>Technical knowledge can leave when students graduate or personnel change.</span></li>
          <li><ShieldCheck aria-hidden="true" /><span>Governance can develop reactively after activity has already begun.</span></li>
        </ul>
      </div>
    ),
  },
  {
    section: "04 · Proposed intervention",
    title: "Create a laboratory organized around consequential questions.",
    tone: "forest",
    content: (
      <div>
        <div className={styles.slideHeading}>
          <p className={styles.overline}>Human Movement Systems Laboratory</p>
          <h2>A clinically oriented platform for inquiry, education, and collaboration.</h2>
        </div>
        <div className={styles.definitionGrid}>
          <article>
            <FlaskConical aria-hidden="true" />
            <h3>Question-driven</h3>
            <p>Scientific and clinical questions determine what should be measured.</p>
          </article>
          <article>
            <Expand aria-hidden="true" />
            <h3>Portable and accessible</h3>
            <p>Bring measurement to authentic movement when the question requires it.</p>
          </article>
          <article>
            <Workflow aria-hidden="true" />
            <h3>Multimodal and computational</h3>
            <p>Connect movement, physiology, context, evidence, mechanisms, and models.</p>
          </article>
          <article>
            <ShieldCheck aria-hidden="true" />
            <h3>Governed by intended use</h3>
            <p>Keep education, care, research, and service distinct even when they inform one another.</p>
          </article>
        </div>
      </div>
    ),
  },
  {
    section: "05 · Organizational design",
    title: "Hierarchical authority. Networked work.",
    tone: "paper",
    content: (
      <div className={styles.organizationSlide}>
        <div className={styles.hierarchy}>
          {["Plymouth State University", "School of Health", "DPT Program", "Human Movement Systems Laboratory"].map((label, index) => (
            <div key={label} className={index === 3 ? styles.hierarchyLab : undefined}>
              <span>{label}</span>
              {index < 3 && <i aria-hidden="true" />}
            </div>
          ))}
        </div>
        <div className={styles.networkPanel}>
          <p className={styles.overline}>Collaborative network</p>
          <div>
            {[
              "DPT courses and laboratories",
              "Pro Bono Clinic",
              "Movement-focused disciplines",
              "Community and healthcare",
              "Industry and workforce",
              "Computational research",
            ].map((label) => <span key={label}>{label}</span>)}
          </div>
          <p>
            A clear institutional home supports accountability without making the work exclusive
            to one course, discipline, or investigator.
          </p>
        </div>
      </div>
    ),
  },
  {
    section: "06 · Operating model",
    title: "Give questions somewhere to go.",
    tone: "yellow",
    content: (
      <div className={styles.cycleSlide}>
        <div className={styles.cycle}>
          {["Observation", "Question", "Measurement", "Evidence", "Mechanism", "Model"].map((step, index) => (
            <div key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
              {index < 5 && <ArrowRight aria-hidden="true" />}
            </div>
          ))}
        </div>
        <div className={styles.entryPoints}>
          <p>Questions may begin with</p>
          <span><GraduationCap aria-hidden="true" /> Classroom learning</span>
          <span><Stethoscope aria-hidden="true" /> Clinical observation</span>
          <span><FlaskConical aria-hidden="true" /> Scientific uncertainty</span>
          <span><BriefcaseBusiness aria-hidden="true" /> Industry R&amp;D need</span>
        </div>
        <p className={styles.loopBack}><RefreshCw aria-hidden="true" /> Every result should produce a better observation, question, method, or model.</p>
      </div>
    ),
  },
  {
    section: "07 · DPT education",
    title: "Learning to ask better questions",
    tone: "paper",
    content: (
      <div>
        <div className={styles.slideHeading}>
          <p className={styles.overline}>A progressive student pathway</p>
          <h2>Learning to ask better questions</h2>
        </div>
        <ol className={styles.pathway}>
          <li><span>01</span><div><strong>Foundation</strong><p>Movement Systems, Exercise Prescription, and shared laboratory experiences.</p></div></li>
          <li><span>02</span><div><strong>Inquiry</strong><p>Translate observations into constructs, competing explanations, and testable questions.</p></div></li>
          <li><span>03</span><div><strong>Applied participation</strong><p>Case discussions, synthetic data, method development, and supervised measurement.</p></div></li>
          <li><span>04</span><div><strong>Advanced contribution</strong><p>Independent study, capstone, research practica, analysis, and public scholarship.</p></div></li>
          <li><span>05</span><div><strong>Continuity</strong><p>Experienced students help preserve capability across cohorts.</p></div></li>
        </ol>
      </div>
    ),
  },
  {
    section: "08 · Clinical inquiry",
    title: "From clinical observation to research question",
    tone: "forest",
    content: (
      <div className={styles.clinicSlide}>
        <div>
          <p className={styles.overline}>Pro Bono Clinic relationship</p>
          <h2>Questions from the Pro Bono Clinic should have somewhere to go.</h2>
          <blockquote>
            A clinical observation should be able to become a research question without a patient
            automatically becoming a research participant.
          </blockquote>
        </div>
        <div className={styles.translationLadder}>
          <div><span>01</span><strong>Clinical observation</strong></div>
          <div><span>02</span><strong>Unresolved movement question</strong></div>
          <div><span>03</span><strong>HMS Lab inquiry</strong></div>
          <div><span>04</span><strong>New understanding</strong></div>
          <p>
            Current state: this is a proposed relationship. No patient-facing HMS Lab measurement
            pathway has been established.
          </p>
        </div>
      </div>
    ),
  },
  {
    section: "09 · Measurement changes inquiry",
    title: "New measurement capabilities should change the questions we ask",
    tone: "yellow",
    content: (
      <div className={styles.measurementShift}>
        <div className={styles.slideHeading}>
          <p className={styles.overline}>From ambulatory physiology to ambulatory movement</p>
          <h2>New measurement capabilities should change the questions we ask.</h2>
        </div>
        <div className={styles.measurementComparison}>
          <article>
            <Activity aria-hidden="true" />
            <span>Prior experience</span>
            <h3>ECG and heart-rate variability</h3>
            <p>
              Ambulatory monitoring made it possible to study regulation, variability, and
              physiological coordination over time and in context—not only a heart-rate snapshot.
            </p>
          </article>
          <ArrowRight aria-hidden="true" />
          <article>
            <Move3d aria-hidden="true" />
            <span>Emerging opportunity</span>
            <h3>Long-term wearable kinematics</h3>
            <p>
              Portable movement measurement can make persistence, adaptation, learning, fatigue,
              symptoms, and transfer beyond the laboratory observable and testable.
            </p>
          </article>
        </div>
        <div className={styles.newQuestions}>
          <strong>Now that we can observe movement across repetitions, sessions, environments, and time—</strong>
          <span>What patterns persist?</span>
          <span>What changes with learning or fatigue?</span>
          <span>Does improvement transfer to daily life?</span>
          <span>What should we do differently?</span>
        </div>
        <p className={styles.measurementPrinciple}>
          Engineering can expand what is observable. Clinical practice must originate the
          consequential questions and define what the observations mean.
        </p>
      </div>
    ),
  },
  {
    section: "10 · Workforce and partnership",
    title: "Build workforce capacity while solving real R&D problems.",
    tone: "paper",
    content: (
      <div className={styles.partnershipSlide}>
        <div>
          <p className={styles.overline}>Workforce development</p>
          <h2>Students learn to work across clinical, scientific, and technical boundaries.</h2>
          <div className={styles.skillList}>
            {[
              "Movement and physiological measurement",
              "Wearable implementation",
              "Biomechanics and modeling",
              "Human-device evaluation",
              "Research and data stewardship",
              "Interdisciplinary communication",
            ].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
        <div className={styles.partnerOffer}>
          <BriefcaseBusiness aria-hidden="true" />
          <h3>Partnership forms</h3>
          <ul>
            <li>Sponsored student and faculty projects</li>
            <li>Internships and applied research experiences</li>
            <li>Product, prototype, wearable, and algorithm evaluation</li>
            <li>Ergonomic and human-device field studies</li>
            <li>Shared grants and professional education</li>
          </ul>
          <blockquote>
            Bring us a problem involving people moving, working, or interacting with a product.
          </blockquote>
        </div>
      </div>
    ),
  },
  {
    section: "11 · Financial pathway",
    title: "Demonstrated capability creates a basis for R&D funding.",
    tone: "coral",
    content: (
      <div className={styles.fundingSlide}>
        <p className={styles.overline}>A staged investment model</p>
        <div className={styles.fundingPath}>
          {[
            ["01", "Capital investment", "BIOPAC · Movesense · computational ecosystem"],
            ["02", "Minimum viable capability", "Governed methods and trained people"],
            ["03", "Demonstration projects", "Authentic evidence of what the lab can do"],
            ["04", "Partner confidence", "Credible industry and community conversations"],
            ["05", "External R&D funding", "Sponsored work · grants · workforce programs"],
            ["06", "Reinvestment", "Personnel · maintenance · targeted instrumentation"],
          ].map(([number, title, detail]) => (
            <article key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </article>
          ))}
        </div>
        <p className={styles.fundingCaution}>
          Funding follows authentic work—not projections of capabilities that have not yet been demonstrated.
        </p>
      </div>
    ),
  },
  {
    section: "12 · Initial portfolio",
    title: "Demonstrate range without losing coherence.",
    tone: "paper",
    content: (
      <div>
        <div className={styles.slideHeading}>
          <p className={styles.overline}>Candidate project portfolio</p>
          <h2>Each project should build both knowledge and institutional capability.</h2>
        </div>
        <div className={styles.portfolioGrid}>
          {[
            ["Wearable foundation", "Movesense acquisition, timing, calibration, orientation, and OpenSense interoperability."],
            ["Integrated teaching", "Movement, exercise response, adaptation, reassessment, and uncertainty."],
            ["Field measurement", "Ergonomics, outdoor movement, fatigue, task demands, and authentic environments."],
            ["Human-device interaction", "Assistive devices, rehabilitation technology, wearables, and product evaluation."],
            ["Computational adaptation", "OpenSim and SCONE studies of constraint, compensation, fatigue, and intervention."],
            ["Clinical needs assessment", "Identify recurring Pro Bono Clinic questions before designing a patient workflow."],
          ].map(([title, detail], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    ),
  },
  {
    section: "13 · Implementation",
    title: "Build capability in stages.",
    tone: "yellow",
    content: (
      <div className={styles.implementationSlide}>
        <div className={styles.slideHeading}>
          <p className={styles.overline}>Development sequence</p>
          <h2>Evidence before escalation.</h2>
        </div>
        <ol>
          {[
            ["Organize", "Charter · authority · stakeholders · inventory · space · scope"],
            ["Govern", "Data · privacy · consent · safety · research · clinical and industry agreements"],
            ["Demonstrate", "Non-human technical foundations and bounded pilot work"],
            ["Integrate", "Courses · student pathways · research · carefully bounded clinical inquiry"],
            ["Sustain", "Partnerships · sponsored R&D · grants · staffing · evaluation · reinvestment"],
          ].map(([title, detail], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <div><strong>{title}</strong><p>{detail}</p></div>
            </li>
          ))}
        </ol>
        <div className={styles.guardrail}>
          <CircleAlert aria-hidden="true" />
          <p>New instruments, tasks, populations, and interpretations require their own readiness evidence.</p>
        </div>
      </div>
    ),
  },
  {
    section: "14 · Causal network",
    title: "Every desirable change creates new demands.",
    tone: "forest",
    content: (
      <div className={styles.causalSlide}>
        <div>
          <p className={styles.overline}>Reinforcing loops</p>
          <h2>Capability can create more capability.</h2>
          <ul>
            <li><ChartNoAxesCombined aria-hidden="true" /><span>Projects → outputs → visibility → partnerships → funding</span></li>
            <li><GraduationCap aria-hidden="true" /><span>Student participation → technical capacity → more ambitious projects</span></li>
            <li><HandHeart aria-hidden="true" /><span>Clinical questions → research → teaching examples → better questions</span></li>
          </ul>
        </div>
        <div>
          <p className={styles.overline}>Balancing loops and risks</p>
          <h2>Growth can exceed the system’s capacity.</h2>
          <ul>
            <li><Users aria-hidden="true" /><span>Demand → supervision burden → delay and quality risk</span></li>
            <li><Wrench aria-hidden="true" /><span>Equipment growth → maintenance, training, storage, and recurring cost</span></li>
            <li><BriefcaseBusiness aria-hidden="true" /><span>Sponsor funding → pressure to prioritize partner needs</span></li>
            <li><ShieldCheck aria-hidden="true" /><span>Clinical integration → risk of unsupported interpretation</span></li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    section: "15 · Current state",
    title: "The project is underway. The system is not finished.",
    tone: "paper",
    content: (
      <div className={styles.statusSlide}>
        <div className={styles.statusColumns}>
          <article>
            <span className={styles.established}>Established</span>
            <ul>
              <li>Scientific and educational rationale</li>
              <li>Capital equipment and computational assets</li>
              <li>Public Movement Systems platform</li>
              <li>DPT curricular and clinical relationships</li>
            </ul>
          </article>
          <article>
            <span className={styles.development}>In development</span>
            <ul>
              <li>This presentation and focus groups with faculty, students, and clinical partners to refine the proposal and begin working with collaborators</li>
              <li>Movesense acquisition and OpenSense interoperability</li>
              <li>Teaching apparatus and pilot methods</li>
              <li>Course–lab integration</li>
              <li>Governance and project selection</li>
            </ul>
          </article>
          <article>
            <span className={styles.proposed}>Proposed</span>
            <ul>
              <li>Routine patient measurement</li>
              <li>Formal cross-program agreements</li>
              <li>Sponsored industry relationships and recurring R&amp;D revenue</li>
              <li>Permanent laboratory staffing</li>
            </ul>
          </article>
        </div>
        <blockquote>
          The equipment created potential capability. The project is the work required to make
          that capability coherent, useful, governed, and sustainable.
        </blockquote>
      </div>
    ),
  },
  {
    section: "16 · Health Systems reflection",
    title: "This has been an example of a Health Systems project",
    tone: "forest",
    content: (
      <div className={styles.projectReflection}>
        <div className={styles.slideHeading}>
          <p className={styles.overline}>PTH8323 project reflection</p>
          <h2>This has been an example of a Health Systems project.</h2>
        </div>
        <div className={styles.requirementGrid}>
          <article>
            <span>01</span>
            <h3>Diagnosed the system</h3>
            <p>Located the project within PSU, the School of Health, DPT, courses, clinic, research, and potential partners.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Defined the need</h3>
            <p>Identified the gap between owning valuable assets and sustaining an integrated institutional capability.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Developed an approach</h3>
            <p>Proposed an organizational home, collaborative network, operating cycle, project portfolio, and staged implementation.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Anticipated consequences</h3>
            <p>Considered stakeholders, reinforcing and balancing loops, governance, workload, recurring cost, and unintended effects.</p>
          </article>
          <article>
            <span>05</span>
            <h3>Addressed sustainability</h3>
            <p>Connected education, workforce development, industry R&amp;D, external funding, personnel, and reinvestment.</p>
          </article>
          <article>
            <span>06</span>
            <h3>Represented the project as it exists today</h3>
            <p>Separated what is established, in development, and proposed at the time of presentation rather than presenting an imagined finished result.</p>
          </article>
        </div>
        <blockquote>
          A systems project can be useful before the intervention is complete: it can make the
          present system visible, clarify the next decisions, and create a defensible path forward.
        </blockquote>
      </div>
    ),
  },
];

function slideNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function HealthSystemsProjectPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const deckRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((index: number) => {
    const next = Math.max(0, Math.min(index, slides.length - 1));
    setCurrentSlide(next);
    window.history.replaceState(null, "", `#slide-${next + 1}`);
  }, []);

  useEffect(() => {
    const syncSlideFromHash = () => {
      const requestedSlide = Number.parseInt(window.location.hash.replace("#slide-", ""), 10);
      if (Number.isInteger(requestedSlide) && requestedSlide >= 1 && requestedSlide <= slides.length) {
        setCurrentSlide(requestedSlide - 1);
      }
    };
    const frame = window.requestAnimationFrame(syncSlideFromHash);
    window.addEventListener("hashchange", syncSlideFromHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncSlideFromHash);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isInteractive = target?.closest("a, button, input, textarea, select");

      if (event.key === "ArrowRight" || event.key === "PageDown" || (!isInteractive && event.key === " ")) {
        event.preventDefault();
        goToSlide(currentSlide + 1);
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        goToSlide(currentSlide - 1);
      } else if (event.key === "Home") {
        event.preventDefault();
        goToSlide(0);
      } else if (event.key === "End") {
        event.preventDefault();
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(document.fullscreenElement === deckRef.current);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await deckRef.current?.requestFullscreen();
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.pageIntro}>
        <div>
          <p>PTH8323 Health Systems · Example Leadership &amp; Transformation Project</p>
          <h1>Health Systems Project</h1>
        </div>
        <p>
          A real initiative in development, presented as a systems analysis rather than a
          completed institutional or clinical service.
        </p>
      </header>

      <div className={styles.deck} ref={deckRef}>
        <div className={styles.deckHeader}>
          <div>
            <span>Health Systems Project</span>
            <strong>{slides[currentSlide].section}</strong>
          </div>
          <button type="button" onClick={toggleFullscreen} aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}>
            {isFullscreen ? <Minimize2 aria-hidden="true" /> : <Maximize2 aria-hidden="true" />}
            <span>{isFullscreen ? "Exit" : "Present"}</span>
          </button>
        </div>

        <div className={styles.viewport} aria-live="polite">
          <div
            className={styles.track}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <section
                className={`${styles.slide} ${styles[slide.tone]}`}
                id={`slide-${index + 1}`}
                key={slide.title}
                aria-hidden={index !== currentSlide}
                aria-labelledby={`slide-title-${index + 1}`}
              >
                <h1 className={styles.srOnly} id={`slide-title-${index + 1}`}>{slide.title}</h1>
                <div className={styles.slideContent}>{slide.content}</div>
                <div className={styles.slideFooter}>
                  <span>Movement Systems · Plymouth State University</span>
                  <strong>{slideNumber(index)} / {slides.length}</strong>
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            onClick={() => goToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft aria-hidden="true" />
            <span>Previous</span>
          </button>
          <div className={styles.progress} aria-label={`Slide ${currentSlide + 1} of ${slides.length}`}>
            {slides.map((slide, index) => (
              <button
                type="button"
                key={slide.title}
                onClick={() => goToSlide(index)}
                className={index === currentSlide ? styles.activeDot : undefined}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-current={index === currentSlide ? "step" : undefined}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goToSlide(currentSlide + 1)}
            disabled={currentSlide === slides.length - 1}
            aria-label="Next slide"
          >
            <span>Next</span>
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={styles.presentationHelp}>
        <span><ArrowLeft aria-hidden="true" /><ArrowRight aria-hidden="true" /> Navigate with arrow keys</span>
        <span><LaptopMinimalCheck aria-hidden="true" /> Use Present for a full-screen deck</span>
      </div>
    </div>
  );
}
