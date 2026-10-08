import type { Metadata } from "next";
import { HealthSystemsProjectPresentation } from "./presentation";

export const metadata: Metadata = {
  title: "Health Systems Project",
  description:
    "A PTH8323 Health Systems example project examining development of the Human Movement Systems Laboratory as an institutional capability.",
  openGraph: {
    title: "From Capital Equipment to Institutional Capability",
    description:
      "Developing the Human Movement Systems Laboratory at Plymouth State University as a system for education, workforce development, research, clinical inquiry, and industry partnership.",
    url: "https://movementsystems.org/health-systems-project",
  },
};

export default function HealthSystemsProjectPage() {
  return <HealthSystemsProjectPresentation />;
}
