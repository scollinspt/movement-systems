"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "/theory", label: "Theory" },
  { href: "/research", label: "Research" },
  { href: "/hms-lab", label: "HMS Lab" },
  { href: "/clinical-inquiry", label: "Clinical Inquiry" },
  { href: "/education", label: "Education" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="institution-bar">
        <span>Human Movement Systems Laboratory</span>
        <span>Plymouth State University DPT</span>
      </div>
      <div className="nav-shell">
        <Link className="wordmark" href="/" onClick={() => setIsOpen(false)}>
          <span className="wordmark-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>
            <strong>Movement Systems</strong>
            <small>Clinical inquiry in motion</small>
          </span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="primary-navigation" className={isOpen ? "primary-nav is-open" : "primary-nav"}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}