# Project Log

## 2026-09-25: Reusable Syllabus Template Workspace

### Decision

The separate `syllabus-template` workspace will become the canonical reusable LaTeX
source for future course syllabi. Its current `template.tex` and `inzane_syllabus.cls`
are byte-identical to the retained PTH6111 snapshot in this repository, so the current
state is a historical course-specific baseline rather than a generic release.

Genericization will occur in the template workspace. Specific syllabi will consume
versioned, self-contained copies rather than symlinks or live build dependencies. Each
course copy will retain the class, license, required assets, and a `TEMPLATE_SOURCE.md`
record containing the source release, date, and checksums.

### Planned Use

After the generic template is prepared and validated, independent snapshots will support
the Spring 2027 PTH6132 Movement Systems and Exercise Prescription & Nutrition syllabi in
the private PTH6132 course workspace. Those syllabi are not being developed yet.

## 2026-09-25: Public Research Architecture And HMS Lab Role

### Decision

The public `movement-systems` repository is the scholarly home for Movement Systems
theory, concepts, methods, HMS Lab research records, approved results, educational
translations, and `movementsystems.org`. The Human Movement Systems Laboratory is the
empirical research program within this work, not a separate intellectual identity or an
equipment-centered service.

Operational PTH6132 course development now belongs primarily in the institution-managed
private course workspace and Canvas. Public work moves from private course or research
environments into Git only through deliberate authorship, permission, privacy,
governance, and publication review. There is no automatic synchronization.

The public content model distinguishes theory, research questions, methods,
capabilities, projects, results, models, and educational resources. Records use explicit
maturity states so that proposals, in-development capabilities, operational methods,
analyzed observations, and established results cannot be mistaken for one another.

### Implementation And Next Step

The repository overview, research architecture, content model, publication policy, site
plan, workspace integration, curriculum boundaries, source-library guidance, research
guidance, and roadmap now express this architecture. The accumulated HMS Lab context was
reviewed completely and its durable decisions were promoted into governing documents.
Next, inventory and verify actual laboratory equipment, software, licenses, spaces, data
access, and governance before publishing capability claims or beginning website
implementation.

## 2026-09-20: Public Domain Registered

### Decision

`movementsystems.org` is registered and is the canonical public domain for the planned
Movement Systems site and book. GitHub Pages remains the planned host, but the production
site will be built for the custom-domain root rather than the
`/movement-systems` project base path.

### Implementation Note

The first approved website release must coordinate the repository's GitHub Pages custom
domain setting and the registrar's DNS records using the deployment method's current
requirements. Until then, registration does not imply that the domain is configured or
serving repository content.

## 2026-09-20: Clinical Inquiry Ecosystem Role

### Decision

Movement Systems is not only a course and public educational site. It also develops the
movement-domain knowledge needed by the broader Clinical Inquiry Ecosystem, including
biomechanics, neuromechanics, neuromuscular control, motor control, motor learning, task
performance, and adaptation.

Reviewed movement-domain contributions may inform Models4PT population causal knowledge
alongside scientific evidence and Physiolog mechanisms. Models4PT remains distinct from
`movement-models-`, and the Clinical Inference Engine retains responsibility for
patient-specific reasoning. The professional profile provides discovery rather than
duplicating authoritative project content.

### Validation And Next Step

The governing role, contribution contract, boundaries, and feedback loop are documented
in [docs/clinical-inquiry-integration.md](docs/clinical-inquiry-integration.md) and linked
from the repository, curriculum, workspace, and roadmap documents.

The next concrete ecosystem step is to use one gait row in the planned
concept-to-course-to-practice matrix as a pilot. It should identify the movement concept,
mechanisms, evidence, scale, context, measurements, uncertainty, pedagogical
simplifications, and destination of each artifact before any Models4PT contribution is
proposed.

## 2026-09-14: Gait Module Decision Resolved

### Decision

Eydie Kendall approved the proposed three-normal-gait-lecture/one-lab opening block,
provided that the displaced material is covered later in Movement Systems or in other
courses. The Spring 2027 semester map now assigns:

- Sean's Movement Systems introduction to January 26;
- Eydie's normal-gait lectures to January 28, February 2, and February 4;
- Eydie's normal-gait laboratory to the second instructional week;
- the start of Movement Systems proper to February 9; and
- a later Movement Systems atypical-gait module to neuromuscular and musculoskeletal
  contributors, constraints, variability, capacity, compensation, dysfunction, and
  clinical synthesis.

This later module satisfies the coverage condition within Movement Systems rather than
depending on unverified coverage in another course.

### Validation And Next Step

The dated sequence retains 14 instructional weeks, excludes Spring Break (March 22-26),
and reserves May 10-14 for finals. Exact meeting times, rooms, lab sections, and assigned
exam periods remain to be confirmed.

The next smallest step toward the concept-to-course-to-practice matrix is to create its
seven-column scaffold from `docs/curriculum-architecture.md` and populate one gait row.
That row should trace normal-gait prerequisite knowledge through the Movement Systems
and shared-lab contributions to PCM III application and PCM IV-V transfer before the
matrix expands to other concepts.

## 2026-09-13: Spring 2027 Semester Map

### Completed

- Grounded the working semester map in the official PSU Spring 2027 calendar and the
  archived Dynamic Systems I, Movement Systems, EP&N, and PTH6111 syllabi.
- Established a 14-instructional-week sequence plus finals week.
- Placed DAM in Chapter 13 at the end of Physiolog Part III and exercise adaptation in
  the planned Part IV.
- Drafted an integrated Movement Systems, EP&N, and shared-laboratory sequence in
  [content/curriculum/spring-2027-semester-map.md](content/curriculum/spring-2027-semester-map.md).

### Faculty Decision Pending At Time Of Entry

Sean emailed Eydie Kendall proposing that her opening gait block be reduced from the
current five-lecture/two-lab fallback to three normal-gait lectures and one lab. Under
the proposal:

- Sean teaches the Movement Systems introduction on January 26.
- Eydie teaches normal gait on January 28, February 2, and February 4 and leads one lab
  during the second week.
- Sean begins Movement Systems proper on February 9.
- Sean introduces atypical gait later, after students have systems concepts for
  constraints, variability, capacity, compensation, and dysfunction.

This proposal was approved on September 14, 2026, with the coverage condition recorded
in the entry above.

### Original Resume Point

The easiest return path is to paste Eydie's reply and use this prompt:

> Resume Phase 1 in `movement-systems`. Read `PROJECT_LOG.md`, `ROADMAP.md`, and
> `content/curriculum/spring-2027-semester-map.md`. Eydie's reply is pasted below.
> Resolve the pending gait-module decision, update the semester map and affected
> documentation, validate the calendar, and identify the next smallest step toward the
> concept-to-course-to-practice matrix. Do not begin the website or syllabus drafting
> yet.

This resume point is retained as project history; the decision is no longer pending.