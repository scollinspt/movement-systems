import Link from "next/link";

const links = [
  ["Overview", "/hms-lab"],
  ["About", "/hms-lab/about"],
  ["Projects", "/hms-lab/projects"],
  ["People", "/hms-lab/people"],
  ["Participate", "/hms-lab/participate"],
  ["Library", "/hms-lab/library"],
];

export function HmsLabNav() {
  return (
    <nav className="lab-subnav" aria-label="HMS Lab navigation">
      {links.map(([label, href]) => (
        <Link href={href} key={href}>{label}</Link>
      ))}
    </nav>
  );
}
