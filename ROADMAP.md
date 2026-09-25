# Movement Systems Roadmap

_Last updated: 2026-09-25_

This roadmap coordinates public Movement Systems scholarship, development of the Human
Movement Systems Laboratory (HMS Lab), the public website, educational translation, and
integration with the wider Clinical Inquiry program.

## North Star

Movement Systems studies how robust, adaptive movement emerges from interacting
physiological, neural, muscular, mechanical, behavioral, task, and environmental
systems. The HMS Lab supplies an empirical engine for this scholarship through
observation, accessible multimodal measurement, experimentation, and computational
modeling.

The program follows a recurring cycle:

```text
observation -> question -> measurement -> evidence -> mechanism -> model -> new observation
```

The repository develops public theory, research records, methods, capability statements,
approved results, and educational translations. It contributes reviewed movement-domain
knowledge to the Clinical Inquiry Ecosystem while preserving the distinct authority of
stats4PT, Physiolog, `movement-models-`, Models4PT, and the Clinical Inference Engine.

The governing rationale is in
[docs/research-architecture.md](docs/research-architecture.md), the record structures are
in [docs/content-model.md](docs/content-model.md), and the ecosystem role is in
[docs/clinical-inquiry-integration.md](docs/clinical-inquiry-integration.md).

## Parallel Work Tracks

### Public Scholarship And HMS Lab

This repository owns public movement-systems theory, the HMS Lab research agenda, public
questions and methods, conservative capability records, approved results, educational
translations, and `movementsystems.org`.

### Operational Course Development

PTH6132 Movement Systems and coordinated EP&N development occur primarily in the private
PTH6132 workspace and Canvas. The private systems own syllabi, schedules, assessments,
restricted readings, instructor artifacts, and semester operations. Durable,
permission-cleared work may be promoted into this repository after review; there is no
automatic synchronization.

The established course structure and teaching transition remain documented in
[docs/curriculum-architecture.md](docs/curriculum-architecture.md). They are important
applications of the scholarship but no longer organize the entire repository.

The separate `syllabus-template` workspace will provide a generic, versioned LaTeX
baseline. It currently contains the PTH6111 source and must be genericized before the
Spring 2027 PTH6132 Movement Systems and Exercise Prescription & Nutrition syllabi are
started. Each course will receive an independent copied snapshot in private storage.

### Governed Research Storage

Raw or controlled data, identifiable records, consent and recruitment records,
confidential partner material, and unapproved research artifacts remain in approved
private storage. Public records must stand on their own without exposing private paths or
requiring private files at build time.

Publication and ownership rules are defined in
[docs/publication-policy.md](docs/publication-policy.md).

## Public Website Scope

The visible identity is **Movement Systems**, with the **Human Movement Systems
Laboratory** immediately visible as its empirical research program. The canonical public
URL is `https://movementsystems.org`.

Planned public areas are:

1. **Home**: Movement Systems, HMS Lab, current questions, and authentic public work.
2. **Theory**: concepts, mechanisms, competing explanations, evidence, and limits.
3. **Research**: questions, projects, methods, results, publications, and provenance.
4. **HMS Lab**: mission, people, verified capabilities, gaps, governance, and student
  inquiry.
5. **Measurement and Modeling**: multimodal measurement, synchronization, uncertainty,
  observability, and computational approaches.
6. **Applications**: rehabilitation, ergonomics, human performance, human-device
  interaction, and validation.
7. **Education**: durable Movement Systems resources and reviewed translations.
8. **Resources**: glossary, references, downloads, reuse terms, accessibility, and
  version information.

See [docs/site-plan.md](docs/site-plan.md) for the detailed information architecture.

## Phases

### 1. Public research architecture

- [x] Reframe the repository as the public home for Movement Systems scholarship and HMS
  Lab research.
- [x] Define the relationship among HMS Lab, education, Physiolog, `movement-models-`,
  Models4PT, the Clinical Inference Engine, and the professional profile.
- [x] Formalize the private-course/public-scholarship boundary.
- [x] Define public record types for theories, questions, methods, capabilities,
  projects, results, models, and educational resources.
- [x] Define maturity states and claim-specific publication rules.
- [x] Review the accumulated HMS Lab context and promote only durable decisions into
  the governing documents.

**Exit criterion:** repository authority, private boundaries, record types, maturity
states, and cross-project ownership are explicit and non-contradictory.

### 2. HMS Lab inventory and governance

- [ ] Inventory exact sensors, modules, ultrasound units, mobile devices, computers,
  spaces, software, licenses, mounts, calibration tools, and related resources.
- [ ] Verify raw-data access, export formats, APIs, sampling behavior, and software
  constraints rather than inferring them from product categories.
- [ ] Define the relationship among research, education, Pro Bono Clinic observations,
  and any future clinical measurement activity.
- [ ] Document IRB, consent, privacy, data governance, student supervision, ultrasound
  training, industry contracting, and intellectual-property requirements.
- [ ] Establish private research storage and backup practices before collecting data.
- [ ] Define what the first operational version of the laboratory will not attempt.

**Exit criterion:** current resources and governance are verified sufficiently to design
responsible pilot work without overstating capability.

### 3. Theory and research foundation

- [ ] Establish stable identifiers and templates for each public content type.
- [ ] Define foundational terms including movement, function, capacity, performance,
  constraint, variability, stability, compensation, adaptation, and control.
- [ ] Develop the first theory records with scale, timescale, observables, competing
  explanations, and measurement limits.
- [ ] Create a representative experiment matrix spanning rehabilitation, ergonomics,
  wearable validation, human-device interaction, physiological-movement integration,
  and fundamental movement science.
- [ ] Select controlled, portable, and computational pilot projects from that matrix.
- [ ] Map repeated experiment requirements to capability gaps before purchasing.

**Exit criterion:** the project has a coherent theoretical vocabulary, a prioritized
research agenda, and pilot questions that determine measurement needs.

### 4. Methods and capability development

- [ ] Define acquisition, calibration, synchronization, data-quality, and uncertainty
  procedures for selected pilot methods.
- [ ] Establish readiness checks for OpenCap/video, Movesense, BIOPAC, ultrasound, and
  any external-force measurement used by a pilot.
- [ ] Build a common-timeline strategy for multimodal observations where required.
- [ ] Define reproducible analysis and model-development practices.
- [ ] Create capability records that separate proposed, in-development, and operational
  functions.
- [ ] Develop the initial purchasing plan only after repeated gaps are demonstrated.

**Exit criterion:** selected methods have documented limits and readiness criteria, and
public capability claims are supported by evidence.

### 5. Public content and publication workflow

- [ ] Implement templates for all public record types.
- [ ] Classify existing repository materials under the public content model.
- [ ] Establish citation, accessibility, copyright, provenance, privacy, and scientific
  review requirements.
- [ ] Create an explicit publication manifest or allowlist.
- [ ] Define versioning for protocols, results, and model exports.
- [ ] Create automated checks for restricted files, missing maturity states, and broken
  public relationships where practical.

**Exit criterion:** every website candidate has a type, owner, permission status,
maturity state, limitations, review record, and stable identifier.

### 6. Website foundation

- [x] Build a Next.js static-export site in this repository, after consulting the bundled
      Next.js documentation for the installed version.
- [ ] Configure GitHub Pages to publish at `https://movementsystems.org`.
- [ ] Configure the custom domain and DNS records during the first approved release.
- [x] Use a manual GitHub Actions deployment so a push does not automatically publish.
- [x] Serve the static export from the domain root without a `/movement-systems` base
  path.
- [ ] Add checks for static builds, broken links, accessibility, and restricted files.
- [x] Keep the site usable without authentication and without links to Canvas shells.

**Exit criterion:** an approved static build deploys manually to GitHub Pages and remains
independent of private storage and sibling repositories.

### 7. Initial public site

- [x] Build the Movement Systems and HMS Lab orientation for the first approved release.
- [ ] Publish a small set of foundational theory records.
- [ ] Publish one research question and linked project record at its actual maturity.
- [ ] Publish verified method and capability records without implying unsupported
  services.
- [ ] Publish one reviewed model or simulation with assumptions and provenance.
- [ ] Publish one durable educational translation linked back to its scientific records.
- [ ] Test accessibility, mobile presentation, links, metadata, and maturity labels.

**Exit criterion:** visitors can understand the scientific program, distinguish current
work from plans and results, and inspect at least one complete question-to-method-to-
interpretation pathway.

### 8. Computational and ecosystem integration

- [ ] Select a movement question before selecting a model or engine.
- [ ] Pilot the Clinical Inquiry Ecosystem contribution contract with one gait concept.
- [ ] Create a provenance record and experiment in `movement-models-`.
- [ ] Map relevant movement concepts to physiological mechanisms in Physiolog.
- [ ] Separate the research model, public scientific interpretation, and educational
  representation.
- [ ] Use OpenSim for analysis when it answers a defined question.
- [ ] Use SCONE when prediction, control, or optimization is instructionally necessary.
- [ ] Export reviewed, browser-ready artifacts to this repository without making the
      website depend on local engine source trees.
- [ ] Separate every public representation from any proposed Models4PT population
  knowledge contribution.

**Exit criterion:** each model addresses a defined question, is reproducible at its
source, states assumptions and limits, and does not acquire clinical validity merely by
executing successfully.

### 9. Education, collaboration, and sustainability

- [ ] Genericize, compile, document, and version the reusable `syllabus-template` package.
- [ ] Copy a released template snapshot into separate private Spring 2027 PTH6132 and
  Exercise Prescription & Nutrition development directories when syllabus work begins.
- [ ] Continue operational PTH6132 development in the private course workspace.
- [ ] Promote durable public educational resources through the publication gate.
- [ ] Evaluate learning and usability without publishing identifiable data.
- [ ] Establish the Movement Inquiry Meeting and pathways for student participation.
- [ ] Develop public collaboration materials only from authentic operational work.
- [ ] Pursue industry conversations without implying partnerships before they exist.
- [ ] Update the professional profile to show HMS Lab and computational clinical inquiry
  as complementary parts of one program.
- [ ] Publish content, method, result, and model provenance appropriate to each record.
- [x] Register `movementsystems.org` as the canonical public domain.

**Exit criterion:** research, education, public communication, and collaboration can be
maintained without ambiguous ownership, unsupported capability claims, or dependence on
one course offering.

## Workspace Responsibilities

- `movement-systems`: public movement theory, HMS Lab research records, methods,
  capabilities, approved results, educational translations, and the public website.
- private PTH6132 workspace and Canvas: operational course development, semester
  delivery, assessments, restricted resources, and instructor-specific artifacts.
- `physiolog`: authoritative physiological explanations and physiological teaching
  simulations.
- `movement-models-`: movement ontology, model provenance, engine mappings,
  computational experiments, and reviewed educational exports.
- `Models4PT`: integration of evidence and domain mechanisms into curated population
  causal knowledge; it is distinct from `movement-models-`.
- `Clinical Inference Engine`: patient-specific reasoning using versioned population
  knowledge and individual information.
- `opensim-core`: forked upstream engine source; modify only for a justified engine
  contribution.
- `scone-core`: forked upstream simulation and optimization source; modify only for a
  justified engine contribution.
- `scollinspt`: professional identity, ecosystem discovery, and explanation of HMS Lab
  and computational clinical inquiry as one program.

The detailed contract is in
[docs/workspace-integration.md](docs/workspace-integration.md).

## Current Status

The repository is public. Its research architecture, public/private boundary, content
types, maturity states, website information architecture, and cross-repository ownership
are now documented. The earlier curriculum and syllabus scaffolds remain as project
history and public context; operational course development has moved to the private
PTH6132 workspace.

Phase 1 is complete. The next public-repository work is Phase 2: build a verified
laboratory inventory and governance map. Theory and pilot-question development can
proceed in parallel when it does not require unverified capability claims.

Website implementation remains intentionally deferred until representative theory,
question, method, capability, and project records can exercise the content model. The
[Spring 2027 semester map](content/curriculum/spring-2027-semester-map.md) remains a
useful historical planning record, while current operational revisions belong in the
private course workspace.