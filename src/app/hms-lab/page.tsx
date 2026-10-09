import type { Metadata } from "next";
import { ArrowRight, BookOpen, FlaskConical, Info, UserRound, Users } from "lucide-react";
import Link from "next/link";
import { PageHero, Status } from "@/components/page-elements";

export const metadata: Metadata = {
  title: "Human Movement Systems Laboratory",
  description:
    "Explore the HMS Lab, its projects, community, scholarly resources, and clinically oriented program of movement inquiry.",
};

const destinations = [
  {
    href: "/hms-lab/about",
    icon: Info,
    label: "About",
    title: "Purpose and direction",
    description: "The lab’s scientific identity, clinical orientation, and current development.",
  },
  {
    href: "/hms-lab/projects",
    icon: FlaskConical,
    label: "Projects",
    title: "Questions under study",
    description: "Current project programs, methods, collaborators, and public records.",
  },
  {
    href: "/hms-lab/people",
    icon: UserRound,
    label: "People",
    title: "The lab community",
    description: "Faculty, students, clinicians, and collaborators contributing to the HMS Lab.",
  },
  {
    href: "/hms-lab/participate",
    icon: Users,
    label: "Participate",
    title: "Join the inquiry",
    description: "The weekly seminar and ways students, clinicians, faculty, and collaborators contribute.",
  },
  {
    href: "/hms-lab/library",
    icon: BookOpen,
    label: "Library",
    title: "Shared scholarly resources",
    description: "The Zotero library, project records, repositories, and public presentations.",
  },
];

export default function HmsLabPage() {
  return (
    <>
      <PageHero
        eyebrow="Human Movement Systems Laboratory"
        title={<>A community of <em>inquiry.</em></>}
        summary="The HMS Lab studies human movement through clinically oriented questions, accessible measurement, physiological and mechanical analysis, and computational modeling."
        tone="forest"
      />

      <section className="lab-hub-intro section-shell">
        <p className="section-label">HMS Lab</p>
        <h2>Questions about human movement bring the lab together.</h2>
        <p>
          Students, clinicians, faculty, and collaborators develop questions, methods, evidence,
          and models together. Explore the laboratory through the topics below.
        </p>
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
            <Link href="/hms-lab/projects/movesense-opensense">
              <Status tone="proposed">Proposed</Status>
              <h3>Movesense–OpenSense Integration</h3>
              <p>Developing a scalable wearable measurement pathway for OpenSense.</p>
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
