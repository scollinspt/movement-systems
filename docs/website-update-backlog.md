# Deferred Website Updates

## Status

**Status:** Planning backlog; not approved for implementation or publication  
**Recorded:** 2026-10-03

No website source change or deployment is authorized by this document. The current
website correctly presents the five proposed Movesense projects and does not claim that
the HMS Lab offers a clinical measurement service. Preserve those safeguards until a
separate content review approves specific updates.

## Purpose

Future website work should explain the stronger relationship among the DPT Movement
Systems course, HMS Lab, clinician-led measurement science, and optional student
development. It should also communicate the field-capable longitudinal research vision
without presenting planned clinical or educational workflows as operational.

The authoritative planning sources are:

- [Course–Lab Integration Framework](course-lab-integration.md)
- [Clinician-Led Movement-System Measurement Research Vision](clinician-led-movement-measurement-vision.md)
- [Pro Bono Clinic Movement-Measurement Needs Assessment](pro-bono-measurement-needs-assessment.md)
- [Research Architecture](research-architecture.md)
- [Publication and Ownership Policy](publication-policy.md)

## Candidate Content Changes

### Home

- Connect Movement Systems education, clinician-originated questions, HMS Lab method
  development, and attempts to improve movement as one reciprocal program.
- Keep the current distinction among vision, proposed work, operational capability, and
  established result.
- Avoid making one instrument or software platform the program identity.

### Theory

- Add reviewed treatment of coordination, variability, adaptation, persistence,
  context, and timescale.
- Explain why variability is not inherently healthy or pathological.
- Distinguish candidate constructs from accepted operational definitions.

### Research

- Present the deliberate intellectual trajectory from physiological dynamics and
  autonomic coordination to movement-system coordination.
- Describe field-capable longitudinal measurement as a scientific direction rather than
  a current capability.
- Introduce clinician-originated questions as a program principle.
- Retain the current five-project Movesense sequence and its non-human-before-human
  gates.

### HMS Lab

- Explain that clinicians participate in question formation, construct definition,
  contextual interpretation, and claim limitation.
- Present the student pathway as foundational course preparation followed by optional
  applied and advanced HMS Lab development.
- Describe the proposed Pro Bono Clinic–HMS Lab session only as a planning concept.
- Add the clinical translation ladder: technical development, educational/exploratory
  adjunct, evidence-qualified adjunct, and routine integration.
- State that readiness belongs to a specific method and intended use, not to the lab or
  device as a whole.

### Measurement And Modeling

- Explain the value of repeated, field-based, and multi-timescale observation.
- Emphasize questions before instruments and constructs before metrics.
- Connect technical validity to, but distinguish it from, ecological relevance,
  interpretability, and clinical utility.
- Position Movesense–OpenSense as an enabling measurement stack rather than the research
  identity.

### Education

- State that every DPT student should gain a foundation for participating in
  movement-system measurement science.
- Describe optional curricular and extracurricular pathways for deeper laboratory and
  research development.
- Use the reasoning sequence: observe -> question -> operationalize -> measure ->
  interpret -> improve -> reassess.
- Clarify that the public site does not reproduce operational course materials or Canvas.

### Clinical Inquiry

- Show clinicians as active participants in creating and evaluating measurement
  knowledge, not only consumers of technical output.
- Preserve the boundary between population evidence, patient-specific reasoning,
  educational exploration, clinical care, and research.

## Content Not Approved For The Website

- The needs-assessment questionnaire as an active public form
- Raw responses, quotations, response counts, or internal planning summaries
- Patient-facing recruitment or service-request language
- Claims that pro bono measurement sessions are currently available
- Claims that Movesense, OpenSense, or HMS Lab measures can direct care
- Operational course schedules, assignments, assessments, or student records
- Unverified dissertation citations or a completed white-paper argument

## Preconditions For Implementation

Before editing website source:

1. review and revise the three new planning documents;
2. determine whether the needs assessment requires additional institutional review;
3. collect and summarize feedback under an approved internal process;
4. identify which propositions are durable enough for public communication;
5. verify citations and provenance for the intellectual-history statement;
6. confirm that every capability and service statement matches actual maturity;
7. complete accessibility and scientific-content review; and
8. obtain separate approval to implement and deploy the selected website changes.

## Likely Implementation Surfaces

When approved, review at least:

- `src/app/page.tsx`
- `src/app/theory/page.tsx`
- `src/app/research/page.tsx`
- `src/app/hms-lab/page.tsx`
- `src/app/measurement-modeling/page.tsx`
- `src/app/education/page.tsx`
- `src/app/clinical-inquiry/page.tsx`
- shared components and styles used by those pages

Implementation should follow the installed Next.js documentation, pass lint and static
build checks, receive desktop and mobile review, and require a separately approved manual
GitHub Pages deployment.