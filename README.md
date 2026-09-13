# Movement Systems and Exercise Prescription & Nutrition

This private repository is the authoritative home for the coordinated educational
development, public learning resources, and research integration supporting two courses
in the Plymouth State University Doctor of Physical Therapy program:

- **Movement Systems (MS):** 3-credit lecture
- **Exercise Prescription & Nutrition (EP&N):** 3-credit lecture
- **Movement and Exercise Laboratory:** shared 1-credit, 3-hour lab

Movement Systems contributes to the curriculum's Systems Theory sequence. EP&N
contributes to Knowledge Foundations. Shared conceptual work connects systems,
adaptation, and causation across both lectures; the shared lab is the principal applied
bridge into patient/client management. Nutrition content belongs to the EP&N lecture.

This repository does not need to contain every artifact used in either course. Each
course's Canvas shell remains the operational home for semester logistics, assignments,
grades, restricted materials, and instructor-specific artifacts. Canvas links students
to the stable public website; the website does not link back to changing Canvas shells.

The public site will contain Movement Systems presentations, shared cross-course
interactive work, shared laboratory resources, curricular context, and selected models
and simulations. EP&N PowerPoints developed and owned by the future adjunct remain in
Canvas unless that instructor explicitly approves another arrangement.

See the [roadmap](ROADMAP.md), [curriculum architecture](docs/curriculum-architecture.md),
[site plan](docs/site-plan.md), and
[publication policy](docs/publication-policy.md) for the governing decisions.

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
  curriculum/
    syllabi/
      references/        # Existing syllabi used as curricular context
      development/       # LaTeX sources for the new MS, EP&N, and shared-lab syllabi
  source-library/        # Legacy materials retained for deliberate review and adaptation
  shared-lab/            # Coordinated movement and exercise lab materials
docs/                     # Curriculum, site, publication, and workspace decisions
research/                # Questions, notes, and outputs related to the course sequence
ROADMAP.md                # Phased project plan and current status
```

Existing syllabi belong under `references/`; new authoritative syllabus sources belong
under `development/`. Earlier teaching materials belong in `source-library/` until they
are deliberately adapted into current course or lab content. Presence in this private
repository does not authorize website publication.

Related repositories have explicit roles: Physiolog owns deeper physiological
explanations; `movement-models-` owns ontology and computational research; OpenSim and
SCONE remain external engines; and `scollinspt` may point to the public site after
release. See [workspace integration](docs/workspace-integration.md).

## Current Status

The initial repository scaffold and governing roadmap are complete. Current work is
curriculum architecture and content classification, followed by coordinated course
design and the public website foundation.