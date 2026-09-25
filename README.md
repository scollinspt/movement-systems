# Movement Systems

Movement Systems is the public home for theory, concepts, methods, and research about how
human movement emerges from interacting physiological, neural, muscular, mechanical,
behavioral, task, and environmental systems. The repository supports the public website
at `https://movementsystems.org` and the scholarly work of the **Human Movement Systems
Laboratory (HMS Lab)** at Plymouth State University.

The HMS Lab is the empirical research arm of this work. It turns human-movement problems
into rigorous questions, determines what needs to be measured, integrates multimodal
observations, and uses computational approaches to investigate the system that produced
them. Its scope includes rehabilitation, ergonomics, human performance, movement
measurement, physiological-movement integration, human-device interaction, and student
research inquiry.

The scientific objective is mechanistic and generative rather than merely descriptive or
predictive:

```text
observation -> question -> measurement -> evidence -> mechanism -> model -> new observation
```

Public work in this repository must distinguish a proposed idea, a capability under
development, an operational capability, and an established result. Equipment ownership,
model execution, or a successful analysis does not by itself establish scientific or
clinical validity.

## Relationship To Clinical Inquiry

Movement Systems and the HMS Lab form the empirical and movement-domain component of a
broader Clinical Inquiry program:

```text
clinical observation and patient questions
                 |
                 v
HMS Lab observation, measurement, and experimentation
                 |
                 v
stats4PT evidence and warranted claims
                 |
                 v
Physiolog mechanisms + Movement Systems mechanisms
                 |
                 v
Models4PT integrated population causal knowledge
                 |
                 v
Clinical Inference Engine patient-specific reasoning
                 |
                 v
clinical practice and new observations
```

This is a conceptual cycle, not an automated data pipeline. Physiolog remains
authoritative for physiological explanations; `movement-models-` owns specialized model
implementations and computational experiments; Models4PT owns canonical population
causal knowledge; and the Clinical Inference Engine owns patient-specific inference.
See [clinical inquiry integration](docs/clinical-inquiry-integration.md) and
[workspace integration](docs/workspace-integration.md) for the detailed boundaries.

## Relationship To Education

PTH 6132 Movement Systems and its shared work with Exercise Prescription & Nutrition are
important applications of this scholarship, but they do not define the repository's
entire public identity. Course development occurs primarily in the institution-managed
private PTH6132 workspace and in Canvas. Those systems own semester schedules,
assessments, submissions, grades, restricted readings, correspondence, and
instructor-specific materials.

The separate `syllabus-template` workspace will provide the reusable LaTeX baseline for
future syllabi. After it is genericized and released, each Spring 2027 course will use an
independent, self-contained copy in the private PTH6132 workspace rather than a live
template dependency.

This public repository receives only deliberately promoted work that is suitable for a
broader audience: project-authored theoretical syntheses, public methods, reviewed
research materials, durable learning resources, and permission-cleared educational
artifacts. There is no automatic synchronization between the private course workspace
and this repository.

The relationship is bidirectional. Research and theory can inform teaching, while course
cases and laboratory observations can generate research questions. A pedagogical
simplification or classroom observation does not become an accepted scientific claim
without independent review.

## Repository Scope

This repository owns:

- movement-systems theory and conceptual synthesis;
- HMS Lab research questions, programs, methods, and public protocols;
- conservative descriptions of current and planned laboratory capabilities;
- public, non-identifiable research outputs and results;
- reviewed educational representations and public teaching resources;
- public model interpretations and educational exports with provenance; and
- the source, governance, and publication workflow for `movementsystems.org`.

Private course operations, identifiable or restricted data, third-party teaching
materials, copyrighted source files, and unapproved research records do not belong here.
See the [research architecture](docs/research-architecture.md),
[content model](docs/content-model.md), [publication policy](docs/publication-policy.md),
and [site plan](docs/site-plan.md).

## Curricular Context

These courses sit within a larger curricular sequence:

- **Prerequisites:** physiology, neuroscience, and Dynamic Systems I
- **Co-requisite:** Patient/Client Management III (PCM 3)
- **Later courses supported:** Patient/Client Management IV and V (PCM 4 and PCM 5)

The physiology prerequisite includes project work connected to the broader Physiolog
scholarship program. Official catalog titles and course numbers can be added when the
syllabi are collected.

## Repository Structure

```text
content/
  curriculum/             # Public curricular context and approved educational resources
  shared-lab/             # Public educational laboratory resources
  source-library/         # Citation metadata and public provenance records
docs/                     # Research, content, site, publication, and workspace decisions
research/                 # Public research questions, programs, methods, and outputs
ROADMAP.md                # Phased project plan and current status
PROJECT_LOG.md            # Dated decisions, pending questions, and return-to-work prompt
```

The current tree still contains earlier course-development scaffolding. It will be
evaluated against the public/private boundary rather than treated as the default home for
future operational course work.

## Current Status

The repository is public and its initial
[research architecture](docs/research-architecture.md) and
[content model](docs/content-model.md) are established before website implementation.
Claims about equipment, synchronization, services, partnerships, and research results
remain provisional until verified.

Course architecture and the Spring 2027 semester map remain useful project records, but
future operational PTH6132 development belongs primarily in the private course workspace.
Website implementation has not begun. See the [roadmap](ROADMAP.md) for the revised
sequence.