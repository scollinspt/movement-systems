import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://movementsystems.org"),
  title: {
    default: "Movement Systems | Research and Development for Movement-System Practice",
    template: "%s | Movement Systems",
  },
  description:
    "Movement Systems and the Human Movement Systems Laboratory connect physical therapy, movement science, clinical inquiry, and open research and development at Plymouth State University.",
  openGraph: {
    title: "Movement Systems | Research and Development for Movement-System Practice",
    description:
      "Clinically grounded research and development in human movement, physical therapy, accessible measurement, and patient-specific inquiry.",
    url: "https://movementsystems.org",
    siteName: "Movement Systems",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}