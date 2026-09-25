# Syllabus Development

This directory preserves the initial public scaffold proposed for two LaTeX syllabus
sources: Movement Systems and Exercise Prescription & Nutrition. It is not the
authoritative operational course workspace.

- `shared/` is for the reusable syllabus style, a representative source example, and
  assets common to more than one syllabus.
- Each course directory records the intended source structure and may contain only
  permission-cleared public templates or examples.
- The Movement Systems syllabus includes the shared laboratory within its 4 credits.
- The 3-credit EP&N syllabus references the laboratory, whose content it primarily
  supports.
- The same shared-lab schedule must appear in both syllabi.

Operational syllabi, schedules, assessments, and course-specific assets belong in the
private PTH6132 workspace and Canvas. Adjunct-owned EP&N PowerPoints remain outside this
repository unless explicit permission supports a public derivative. Presence in the
private workspace does not authorize promotion into Git. See
[../../../../docs/publication-policy.md](../../../../docs/publication-policy.md).

The retained PTH6111 example is a historical snapshot. Its `template.tex` and
`inzane_syllabus.cls` match the baseline now held in the separate `syllabus-template`
workspace, which is the intended authority for future genericization and release.

After a generic release exists, copy a complete, versioned snapshot into each private
Spring 2027 course directory and record its provenance in `TEMPLATE_SOURCE.md`. Do not
use symlinks or build-time references to the template workspace. There is no separate
shared-laboratory syllabus; that course-design decision remains documented in
[../../../../docs/curriculum-architecture.md](../../../../docs/curriculum-architecture.md).