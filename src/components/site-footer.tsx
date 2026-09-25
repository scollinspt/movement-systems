import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-primary">
        <div>
          <p className="footer-kicker">Movement Systems</p>
          <p className="footer-statement">
            Human movement, clinical inquiry, and the disciplined work of understanding one person.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/hms-lab">HMS Lab</Link>
          <Link href="/clinical-inquiry">Clinical Inquiry</Link>
          <Link href="/resources">Resources</Link>
          <a href="https://scollinspt.github.io/">
            Sean Collins <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="footer-meta">
        <span>Human Movement Systems Laboratory · Plymouth State University</span>
        <span>movementsystems.org</span>
      </div>
    </footer>
  );
}