import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  summary: string;
  aside?: ReactNode;
  tone?: "paper" | "forest" | "coral";
};

export function PageHero({ eyebrow, title, summary, aside, tone = "paper" }: PageHeroProps) {
  return (
    <header className={`page-hero page-hero-${tone}`}>
      <div className="page-hero-copy reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>
      {aside && <div className="page-hero-aside">{aside}</div>}
    </header>
  );
}

export function SectionIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-intro">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {children && <div className="section-intro-copy">{children}</div>}
    </div>
  );
}

export function Status({ children, tone = "development" }: { children: ReactNode; tone?: "proposed" | "development" | "established" }) {
  return <span className={`status status-${tone}`}>{children}</span>;
}

export function NextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="inline-link" href={href}>
      {children} <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}