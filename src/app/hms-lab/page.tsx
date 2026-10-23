import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BookOpen, FlaskConical, Info, UserRound, Users } from "lucide-react";
import Link from "next/link";
import { Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Human Movement Systems Laboratory",
  description:
    "Explore the HMS Lab's clinically grounded research and development in movement science, accessible technology, measurement, modeling, and physical therapy.",
};

const destinations = [
  {
    href: "/hms-lab/about",
    icon: Info,
    label: "About",
    title: "Purpose and direction",
    description: "The lab’s R&D purpose, scientific foundations, clinical orientation, and open development culture.",
  },
  {
    href: "/hms-lab/projects",
    icon: FlaskConical,
    label: "Projects",
    title: "Questions under study",
    description: "Current development programs, methods, evidence gates, collaborators, and public records.",
  },
  {
    href: "/hms-lab/people",
    icon: UserRound,
    label: "People",
    title: "The lab community",
    description: "Faculty, students, clinicians, and collaborators who question, build, measure, and learn together.",
  },
  {
    href: "/hms-lab/participate",
    icon: Users,
    label: "Participate",
    title: "Join the inquiry",
    description: "The weekly seminar and ways participants contribute to research, design, development, and scholarship.",
  },
  {
    href: "/hms-lab/library",
    icon: BookOpen,
    label: "Library",
    title: "Shared scholarly resources",
    description: "Literature, project records, repositories, and public resources supporting durable R&D.",
  },
];

export default function HmsLabPage() {
  return (
    <>
      <header className="lab-brand-hero">
        <div className="lab-brand-logo">
          <Image
            className="lab-hero-logo"
            src="/images/branding/hms-lab/hms-logo-horizontal.png"
            alt="Human Movement Systems Laboratory"
            width={2172}
            height={724}
            sizes="(max-width: 980px) 88vw, 42vw"
            priority
          />
        </div>
        <div className="lab-brand-copy">
          <h1>Research and development for <em>movement-system practice.</em></h1>
          <p>
            The HMS Lab begins with questions from physical therapy and develops accessible, open
            tools and methods for understanding movement as emergent, adaptive behavior.
          </p>
        </div>
      </header>

      <section className="lab-hub-intro section-shell">
        <p className="section-label">Clinically grounded R&amp;D</p>
        <h2>Clinical questions become things physical therapists can test and use.</h2>
        <p>
          Students, clinicians, faculty, and collaborators combine movement science, systems
          thinking, causal reasoning, and biomedical engineering to develop measurements,
          prototypes, models, workflows, and educational resources.
        </p>
        <ol className="rd-cycle" aria-label="HMS Lab research and development cycle">
          {["Question", "Develop", "Measure", "Evaluate", "Refine", "Share"].map((step, index) => (
            <li key={step}><span>0{index + 1}</span>{step}</li>
          ))}
        </ol>
      </section>

      <nav className="lab-hub-nav section-shell" aria-label="Explore the HMS Lab">
        {destinations.map(({ href, icon: Icon, label, title, description }, index) => (
          <Link href={href} key={href}>
            <div className="lab-hub-nav-meta">
              <Icon aria-hidden="true" />
              <span>0{index + 1} · {label}</span>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </nav>

      <section className="lab-current-work">
        <div className="section-shell">
          <div className="lab-current-work-heading">
            <div>
              <p className="section-label section-label-light">Current work</p>
              <h2>Projects in development</h2>
            </div>
            <Link className="inline-link light-link" href="/hms-lab/projects">
              View all projects <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="lab-current-work-grid">
            <Link href="/hms-lab/projects/tilt-ecg-measurement-review">
              <Status>Development</Status>
              <h3>Tilt ECG Measurement and Physiology Review</h3>
              <p>
                Refining de-identified ECG and chest-angle acquisition, governed review, and
                reporting across the complete tilt-table workflow.
              </p>
            </Link>
            <Link href="/hms-lab/projects/movesense-opensense">
              <Status tone="proposed">Proposed</Status>
              <h3>Movesense–OpenSense Integration</h3>
              <p>Developing and evaluating an open, scalable wearable measurement pathway.</p>
            </Link>
            <Link href="/hms-lab/projects/ventilatory-pump-measurement-mechanics">
              <Status>Planning</Status>
              <h3>Ventilatory Pump Measurement and Mechanics</h3>
              <p>
                Developing accessible measurement of ventilatory pump pressure and chest-wall
                mechanics.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
