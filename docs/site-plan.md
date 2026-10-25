# Public Website Plan

## Implementation Status

The website was implemented beginning on 2026-09-25 using Next.js 16.3.6, React 19.2.8,
TypeScript, static export, and GitHub Pages. The current route structure follows this
plan and gives particular depth to the HMS Lab, Clinical Inquiry, instantiation,
movement theory, and PSU DPT educational model.

The scaffold is a public orientation and content-development surface, not a claim that
planned laboratory capabilities, theories, methods, projects, or results are mature.
Durable scholarly records still pass through the content model and publication gate.
GitHub Pages activation, Cloudflare DNS configuration, the first public deployment, and
HTTPS were completed. The site is live at `https://movementsystems.org`.

## Purpose and Audience

The public Movement Systems site is the scholarly and public home for movement-systems
theory, HMS Lab research, measurement and modeling methods, reviewed results, and durable
educational translations. It serves researchers, clinicians, students, educators, and
potential collaborators without pretending that every audience needs the same entry
point.

The site is not a course mirror, learning management system, clinical diagnostic
service, equipment catalog, or claim that every planned laboratory capability is
operational.

## Public Content

Subject to ownership, accessibility, governance, and publication review, public content
may include:

- movement-systems theories, concepts, and definitions;
- HMS Lab research questions, methods, capabilities, projects, and approved results;
- public protocols, demonstrations, and reproducibility materials;
- reviewed models, simulations, and computational interpretations;
- publications, presentations, and public research outputs;
- durable educational resources and curricular context; and
- collaboration information supported by current capability.

Adjunct-owned EP&N PowerPoints, semester operations, controlled assessments, and
restricted resources are not public candidates by default.

## Relationship To Private Work

Private course and research environments may produce questions or candidate public
artifacts. Promotion into this repository and the website is deliberate and reviewed:

```text
private course or research work
              |
              v
public, permission-cleared repository record
              |
              v
publication review and allowlist
              |
              v
stable public website
```

The public site has no runtime dependency on Canvas, OneDrive, controlled research
storage, or sibling repositories.

## Planned Information Architecture

### Home

A direct introduction to Movement Systems and the HMS Lab, the current scientific
questions, and authentic public work. It should present the research identity in the
first viewport without becoming a generic marketing page.

### Scientific Foundations

- Systems, constraints, emergence, and adaptation
- Attain, Sustain, and Maintain across organizational levels and timescales
- Capacity, task, performance, and environment
- Variability, stability, compensation, and dysfunction
- Motor control, motor learning, and movement solutions
- Competing explanations, evidence, observables, and model limits

The existing `/theory` route remains part of this section while reviewed foundation
records are added incrementally under `/foundations`.

### Research Approach

- Consequential questions and criteria for knowing
- Constructs, observables, and measurement development
- Learning about the phenomenon and the measurement
- Revision of questions, methods, experiments, and models
- Published examples of iterative clinical and scientific reasoning

### Research

- Research agenda and questions
- Active and completed projects
- Study and methodological records
- Results, publications, and presentations
- Reproducibility and provenance

### HMS Lab

- Mission, scientific philosophy, and people
- Current capabilities, in-development capabilities, and explicit gaps
- Measurement spaces and distributed field model
- Student research inquiry
- Participation pathways and weekly seminar information
- Curated literature, project evidence, and public Zotero collections
- Governance and relationship to the Pro Bono Clinic
- Collaboration pathways supported by verified capabilities

### Measurement And Modeling

- Video and markerless movement measurement
- Wearable inertial sensing
- Neuromuscular and physiological measurement
- Ultrasound and local tissue behavior where validated
- External interaction, synchronization, and sensor fusion
- Mechanistic, dynamical, and neuromusculoskeletal models
- Measurement uncertainty, observability, and identifiability

### Applications

- Rehabilitation and functional movement
- Ergonomics and occupational movement
- Human performance and fatigue
- Human-device interaction and assistive technology
- Wearable and measurement validation

### Education

- Public Movement Systems concepts and learning resources
- Selected laboratory methods and cases
- Theory-to-practice and curricular context
- Reviewed educational models and simulations
- Links to deeper physiological explanations in Physiolog

The education area supports PTH6132 and other learners but does not reproduce Canvas or
expose semester operations.

### Resources

- Glossary
- References
- Public downloads
- Attribution and reuse terms
- Accessibility statement
- Version and update information

The [public content model](content-model.md) governs records across these areas. Each
capability, project, method, and result must display a maturity state and relevant limits.

## Technology and Hosting

- Canonical public URL: `https://movementsystems.org`.
- Host: GitHub Pages, configured with the registered custom domain.
- Framework: Next.js with static export, using the installed version's bundled
  documentation for implementation decisions.
- Deployment: GitHub Actions, available manually and scheduled daily at 10:15 UTC.
- Zotero integration: public group metadata is validated and rendered during the static
  build; failed validation prevents replacement of the existing deployment.
- Routing: served from the domain root without a `/movement-systems` base path.
- Domain configuration: Cloudflare DNS and GitHub Pages serve the verified custom domain
  over HTTPS.
- Site output: generated and not treated as authoritative source.

## Physiolog As A Technical Reference

Physiolog provides a proven reference implementation for:

- Next.js and TypeScript project configuration;
- static export and GitHub Pages deployment;
- reviewed publication workflows;
- book-source processing and page generation;
- navigation, accessibility, metadata, and link-checking patterns; and
- separation of authoritative source content from generated site output.

Implementation should inspect the current Physiolog source and the installed Next.js
documentation before adopting those patterns. Versions and framework conventions may
change before website work begins.

Physiolog is a reference, not a runtime or filesystem dependency. A standalone clone of
`movement-systems` must contain everything required to install, build, validate, and
deploy its site. No build step may require a sibling `physiolog` checkout.

The research architecture, public content model, publication policy, approved repository
content, and HMS Lab records are authoritative inputs. Website scaffolding should be
added alongside them rather than reorganizing the project merely to resemble Physiolog.
Movement Systems must retain its own visual language, information architecture, and
movement-domain identity.

## Release Units

Public content should be releasable independently as:

- theory and glossary updates;
- research questions and project updates;
- method and capability records;
- approved results and publications;
- model or simulation exports; and
- educational resources.

Stable records should retain identifiers and review dates. Results, protocols, and model
exports should be versioned rather than silently overwritten. Semester logistics must
not be embedded in durable URLs.