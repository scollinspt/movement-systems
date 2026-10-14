# HMS Lab R&D Website Plan

## Status

**Status:** Implemented locally; awaiting review  
**Recorded:** 2026-10-14  
**Public site:** [movementsystems.org](https://movementsystems.org)

This plan guides a focused revision of the Movement Systems website and HMS Lab section.
It covers the laboratory's research-and-development identity, the site's visual alignment
with the Plymouth State University color scheme, and integration of the HMS Lab logos.

This plan does not authorize claims that proposed capabilities, services, projects, or
results are operational. The maturity and publication safeguards in the
[Public Website Plan](site-plan.md), [Deferred Website Updates](website-update-backlog.md),
and [Publication and Ownership Policy](publication-policy.md) remain in force.

## Objectives

1. Establish the Human Movement Systems Laboratory as a clinically grounded
   **research-and-development lab for physical therapy**.
2. Explain that the lab studies movement as an emergent, adaptive behavior arising from
   interacting person, task, environmental, physiological, neural, mechanical,
   behavioral, and historical conditions.
3. Make development as visible as research: accessible measurement, open technologies,
   prototypes, methods, models, workflows, and educational approaches are legitimate
   laboratory outputs.
4. Connect the laboratory's work to physical therapists' professional identity as
   movement-system experts and to improving people's lives through movement.
5. Present a focused, agile, open, and clinically useful program without defensive
   comparisons to larger laboratories.
6. Align the entire site with the PSU/HMS visual palette while retaining the site's
   existing editorial character, typography, information architecture, and accessibility.
7. Use the new HMS Lab identity consistently without replacing the broader Movement
   Systems identity.

## Core Position

### Working Positioning Statement

> The Human Movement Systems Laboratory is a clinically grounded research-and-development
> lab that studies movement as an emergent, adaptive behavior and develops accessible,
> open tools and methods for movement-system practice.

This statement is a guide for the site, not text that must be repeated verbatim on every
page.

### Public-Facing Narrative

The lab begins with consequential questions from physical therapy practice and education.
It brings movement science, systems thinking, causal reasoning, and biomedical engineering
to those questions. Through research and iterative development, the lab creates and
evaluates practical tools, methods, models, workflows, and learning approaches. Open-source
and hands-on development make the work inspectable, adaptable, reproducible, and accessible.

The intended development cycle is:

```text
clinical observation
        |
        v
systems question
        |
        v
measurement, model, or prototype
        |
        v
empirical evaluation
        |
        v
refinement and validation
        |
        v
open tool, method, workflow, or educational translation
        |
        v
physical therapy education and practice
```

The site may use a shorter expression when space is limited:

```text
Question -> Develop -> Measure -> Evaluate -> Refine -> Share
```

### Scale and Ambition

The lab should be described positively as:

- focused;
- agile and iterative;
- clinically grounded;
- open and collaborative;
- technically resourceful;
- connected to education and practice; and
- ambitious about professional and human impact.

Do not frame the lab through apologies, defensive comparisons, or constructions such as
"not a large lab," "we do not...," or "unlike traditional labs...." Scale is communicated
through the specificity and maturity of the work, not through comparison.

## Professional and Intellectual Foundations

The laboratory integrates several complementary traditions. These are foundations for the
work, not claims of organizational endorsement.

| Foundation | Contribution to the HMS Lab |
| --- | --- |
| American Physical Therapy Association | Professional purpose: physical therapists as movement-system experts, improving education, practice, and people's lives through movement |
| American Society of Biomechanics | Movement science: rigorous observation, measurement, analysis, and explanation of human movement |
| Complex adaptive systems and dynamical systems | Scientific perspective: emergence, interaction, adaptation, variability, history, context, nonlinear change, and behavior over time |
| Causal reasoning and critical realism | Epistemic discipline: explicit explanations, inspectable assumptions, practical knowledge, and appropriate limits on inference |
| IEEE Engineering in Medicine and Biology Society | Development orientation: define clinically meaningful problems, design, prototype, test, refine, validate, and translate biomedical technologies |
| Open-source, DIY, hacker, and maker practices | Working culture: accessible tools, hands-on experimentation, repair, adaptation, transparent methods, reproducibility, and shared development |

### Required Nuance

The site should not use "complexity" as a substitute for explanation. Its language should
distinguish among:

- systems that exist in reality;
- emergent behavior produced through interaction;
- complexity as a challenge to observation, knowledge, prediction, and intervention;
- causal explanations proposed for specific questions; and
- the practical limitations of measurements and models.

Movement should be presented as a context-dependent, evolving solution rather than only a
deviation from a presumed ideal. Anatomical and physiological findings remain important,
but they are interpreted as parts of a changing person-task-environment system.

### Historical and Scholarly Basis

The framing is informed by:

- Sean M. Collins, "Complex System Approaches: Could They Enhance the Relevance of
  Clinical Research?" (2005);
- the later reflection
  ["Complex Systems"](https://peripateticpt.substack.com/p/complex-systems);
- Guccione et al., "Optimization of Movement: A Dynamical Systems Approach to Movement
  Systems as Emergent Phenomena" (2019); and
- the related reflection
  ["Optimization of Movement: A Dynamical Systems Approach"](https://peripateticpt.substack.com/p/optimization-of-movement-a-dynamical).

Future critiques or refinements of Guccione et al. are explicitly deferred. Initial site
language may acknowledge the paper's contribution without presenting every claim as the
lab's settled position.

## Editorial Direction

### Message Hierarchy

Public copy should communicate the ideas in this order:

1. **Purpose:** improve physical therapy education and practice, and people's lives through
   movement.
2. **Identity:** a clinically grounded human movement R&D lab.
3. **Subject:** movement as emergent, adaptive behavior in context.
4. **Work:** develop and evaluate accessible tools, methods, models, and workflows.
5. **Method:** combine movement science, systems thinking, causal reasoning, biomedical
   engineering, and open development.
6. **Community:** faculty, students, clinicians, and collaborators learn and build together.

The homepage should emphasize levels 1-3. HMS Lab pages may progressively introduce
levels 4-6 and the fuller intellectual lineage.

### Preferred Language

Use concrete verbs:

- observe;
- question;
- define;
- design;
- build;
- measure;
- model;
- test;
- evaluate;
- refine;
- validate;
- document;
- share;
- teach; and
- translate.

Use these concepts precisely:

- research and development;
- clinically grounded;
- accessible technology;
- open source;
- movement system;
- emergent behavior;
- adaptation;
- variability;
- context;
- causal explanation;
- iterative development;
- measurement;
- modeling;
- practical utility; and
- professional transformation.

### Language to Avoid

- Defensive "not this, but that" positioning
- Generic innovation language without a concrete activity or output
- "Complexity" as a complete explanation
- Claims that all movement is healthy merely because it is adaptive
- Claims that one instrument, platform, or project defines the lab
- Claims that a prototype is validated or clinically useful before evidence supports it
- Claims that the lab currently provides a clinical measurement or diagnostic service
- Language implying APTA, ASB, IEEE, or EMBS endorsement
- Overpromising direct societal transformation from early-stage work

## Page-by-Page Content Plan

### Global Header and Footer

**Surfaces:**

- `src/components/site-header.tsx`
- `src/components/site-footer.tsx`

**Changes:**

- Retain Movement Systems as the parent identity.
- Revise supporting language where needed to accommodate research and development.
- Replace the abstract multicolor header mark with a PSU-aligned treatment.
- Keep HMS Lab visibly associated with Plymouth State University.
- Preserve concise navigation and current mobile behavior.
- Use the HMS Lab logo only where the laboratory is the identified destination or subject.

### Homepage

**Surface:** `src/app/page.tsx`

**Purpose:** Introduce Movement Systems, physical therapy's movement expertise, and HMS
Lab's practical R&D role without overloading the first viewport.

**Changes:**

- Preserve the central claim that clinical inquiry begins with movement.
- Introduce the lab as the R&D expression of Movement Systems.
- Replace language that presents the lab only as an empirical research program.
- Present movement as emergent, adaptive, and situated without making the hero overly
  technical.
- Make the relationship among clinical questions, development, evidence, education, and
  practice visible.
- Retain the person-centered distinction between population knowledge and individual care.
- Replace the current coral/yellow visual accents with the PSU/HMS palette.

### HMS Lab Overview

**Surface:** `src/app/hms-lab/page.tsx`

**Purpose:** Provide the clearest public statement of the laboratory's R&D identity.

**Changes:**

- Integrate the horizontal or stacked HMS Lab logo into the hero or introductory identity
  area.
- Replace "a community of inquiry" as the primary headline with an R&D-forward message.
  Community of inquiry may remain as a supporting cultural statement.
- Introduce the full clinical-question-to-open-development cycle.
- Present current projects as examples of development programs rather than isolated studies.
- Revise destination cards so About, Projects, People, Participate, and Library support the
  new message hierarchy.

### HMS Lab About

**Surface:** `src/app/hms-lab/about/page.tsx`

**Purpose:** Explain why the lab exists, how it understands movement, and how it works.

**Changes:**

- Lead with clinically grounded research and development.
- Add a concise professional and intellectual foundations section.
- Explain movement as emergent, adaptive behavior in context.
- Explain why clinical questions, causal models, measurement, prototyping, and refinement
  belong in one program.
- Describe open-source, maker, DIY, and hacker practices in professional, accessible terms.
- Retain explicit governance and maturity language.
- Reframe foundational work as deliberate R&D infrastructure rather than an apology for
  being early-stage.

### Projects Index

**Surface:** `src/app/hms-lab/projects/page.tsx`

**Purpose:** Show how each project moves through research and development.

**Changes:**

- Describe projects as development programs with questions, prototypes, methods, evidence,
  collaborators, and public records.
- Keep maturity labels prominent.
- Use a shared R&D sequence where accurate.
- Do not imply that every project reaches clinical implementation.

### Project Pages

**Surfaces:**

- `src/app/hms-lab/projects/movesense-opensense/page.tsx`
- `src/app/hms-lab/projects/ventilatory-pump-measurement-mechanics/page.tsx`

**Changes:**

- Clarify the clinical or scientific question motivating development.
- Identify the current development stage and next evidence gate.
- Distinguish prototype creation, technical verification, validation, clinical utility, and
  implementation.
- Emphasize open and accessible development where supported by the project record.
- Preserve current project status and avoid new capability claims.

### People

**Surface:** `src/app/hms-lab/people/page.tsx`

**Changes:**

- Connect participant roles to R&D activities.
- Present expertise across clinical practice, movement science, systems thinking,
  measurement, modeling, and engineering.
- Do not imply memberships, roles, or affiliations beyond verified facts.

### Participate

**Surface:** `src/app/hms-lab/participate/page.tsx`

**Changes:**

- Retain the weekly seminar and community of inquiry.
- Add design, prototyping, open documentation, and method development as participation
  pathways.
- Show that participants can contribute at different stages of the R&D cycle.
- Preserve governance boundaries for students, clinicians, patients, and research
  participants.

### Library

**Surface:** `src/app/hms-lab/library/page.tsx`

**Changes:**

- Present the library as shared infrastructure for research and development.
- Ensure collections support movement science, systems and dynamical theory, causal
  reasoning, measurement, biomedical engineering, open technology, and clinical
  translation.
- Consider a future curated foundational collection containing the Collins and Guccione
  papers after Zotero and citation review.
- Do not hard-code claims about sources that are not yet present in the synchronized
  library.

### Other Site Sections

Review the following for consistency after the primary HMS work:

- `src/app/theory/page.tsx`
- `src/app/research/page.tsx`
- `src/app/clinical-inquiry/page.tsx`
- `src/app/measurement-modeling/page.tsx`
- `src/app/education/page.tsx`
- `src/app/applications/page.tsx`
- `src/app/resources/page.tsx`

Changes should be limited to terminology, cross-links, and visual consistency required by
the new positioning. Broader content additions from the deferred website backlog require
their own review.

## Visual Identity Plan

### Palette

The new HMS logo establishes the primary palette:

| Token role | Color | Intended use |
| --- | --- | --- |
| PSU green | `#135841` | Primary brand fields, actions, headings, links, and HMS identity |
| PSU light green | `#A0B8B0` | Secondary fields, borders, diagrams, and supporting accents |
| Graphite | `#2E2E2E` | Primary typography and monochrome identity |
| Warm white | To be derived and contrast-tested | Primary page background |
| Pale green | To be derived and contrast-tested | Alternate sections and cards |
| Deep green | To be derived and contrast-tested | Dark bands, footer, and high-contrast fields |

Implementation should replace the current coral and yellow accent roles rather than simply
adding more colors. Derived colors must remain visibly related to the three-color identity
and pass WCAG contrast requirements in their actual text/background combinations.

### Logo Assets

Production assets:

- `public/images/branding/hms-lab/hms-logo-horizontal.png`
- `public/images/branding/hms-lab/hms-logo-stacked.png`
- `public/images/branding/hms-lab/hms-logo-horizontal-monochrome.png`
- `public/images/branding/hms-lab/hms-icon.png`

Reference assets:

- `public/images/branding/hms-lab/reference/logo-derivation.png`
- `public/images/branding/hms-lab/reference/logo-clear-space.png`

### Logo Placement

| Surface | Preferred asset | Guidance |
| --- | --- | --- |
| HMS Lab overview | Horizontal or stacked logo | Primary laboratory identification with responsive sizing |
| HMS Lab subnavigation | Icon | Compact identity only if it improves orientation |
| Site header | Movement Systems wordmark treatment | Do not replace the parent identity with the full lab logo |
| Site footer | Horizontal monochrome or text identity | Use only if legible and compatible with the footer background |
| Social/open-graph image | Stacked logo or icon | Future work; generate purpose-specific image dimensions |
| Favicon/app icon | Icon | Future work; create optimized derivatives rather than using the full-size PNG directly |

Respect the clear-space guidance. Do not place the detailed mark at a size where its
network lines and nodes become visual noise. Use text rather than the full logo where the
tagline would be illegible.

### Image Delivery

- Use the installed Next.js image component according to the bundled Next.js 16
  documentation.
- Preserve the current high-resolution PNGs as source assets.
- Set explicit rendered dimensions and responsive `sizes`.
- Avoid downloading full-resolution reference sheets in public page layouts.
- Seek SVG source versions for future optimization if available.
- Create optimized favicon and social derivatives as a separate, reviewable task.

## Implementation Phases

### Phase 1: Establish Message and Tokens

- [x] Finalize core positioning and message hierarchy.
- [x] Map existing CSS variables to the PSU/HMS palette.
- [x] Identify every hard-coded legacy accent color.
- [x] Define accessible light, dark, hover, focus, status, and border variants.
- [x] Confirm logo placements and responsive behavior.

**Gate:** The central R&D identity is clear in plain language, and the palette has
contrast-safe token roles.

### Phase 2: Update Shared Identity

- [x] Update global color tokens and shared component styling.
- [x] Update the site header and footer.
- [x] Review the HMS Lab subnavigation and retain its text treatment for legibility.
- [x] Preserve keyboard, focus, skip-link, and mobile-navigation behavior.

**Gate:** Every route inherits a coherent PSU-aligned visual system without regressions in
navigation or accessibility.

### Phase 3: Revise Core Narrative

- [x] Revise the homepage.
- [x] Revise the HMS Lab overview.
- [x] Revise the HMS Lab About page.
- [x] Review metadata descriptions for R&D consistency.

**Gate:** A reader can identify what the lab is, what it studies, what it develops, why it
matters, and how it works without relying on defensive comparisons.

### Phase 4: Revise Program Surfaces

- [x] Revise the Projects index.
- [x] Revise the two current project pages.
- [x] Revise People and Participate.
- [x] Revise Library framing without inventing collection content.

**Gate:** The program pages demonstrate the R&D identity while preserving accurate maturity
states and governance boundaries.

### Phase 5: Site-Wide Consistency Review

- [x] Review Theory, Research, Clinical Inquiry, Measurement and Modeling, Education,
  Applications, and Resources.
- [x] Correct only conflicts, terminology drift, broken cross-links, and visual
  inconsistencies introduced by the new positioning.
- [x] Confirm that no single instrument or project has become the laboratory identity.

**Gate:** The whole site supports one coherent relationship among Movement Systems, HMS Lab,
clinical inquiry, education, and practice.

### Phase 6: Validate

- [x] Run `npm run lint`.
- [x] Run `npm run build`.
- [x] Review the production export at desktop and mobile widths.
- [x] Check navigation, responsive logo sizing, image loading, and layout stability.
- [x] Check visible focus states and keyboard navigation.
- [x] Check text and interactive-element contrast.
- [x] Review all capability, status, affiliation, and impact claims.
- [x] Confirm metadata and social previews where available.

**Gate:** Lint and build pass, the responsive site is visually coherent, and public claims
remain supportable.

## Acceptance Criteria

The revision is complete when:

1. The homepage identifies HMS Lab as the R&D expression of Movement Systems.
2. The HMS Lab overview clearly states its clinically grounded R&D purpose.
3. Research and development receive comparable emphasis.
4. Movement is described as emergent, adaptive, and contextual without using complexity as
   a vague explanation.
5. The site's account of systems thinking remains compatible with causal reasoning,
   measurement, and mechanistic explanation.
6. Open-source and hands-on development are visible as working practices.
7. The relationship among APTA, ASB, systems science, and IEEE EMBS is understandable
   without implying endorsement.
8. The language is positive and does not define the lab through what it is not.
9. Current project maturity and governance boundaries remain explicit.
10. The global palette is recognizably derived from PSU green, PSU light green, and
    graphite.
11. The HMS logo appears at appropriate laboratory identity points and remains legible at
    all responsive sizes.
12. All affected routes pass lint, production build, accessibility, responsive, and
    content-accuracy review.

## Deferred Work

The following are outside this revision:

- publishing critiques of Guccione et al.;
- creating new organizational-affiliation claims or logo displays;
- claiming new laboratory services or validated capabilities;
- activating patient or research-participant recruitment;
- publishing internal planning, course operations, or needs-assessment data;
- reorganizing Zotero without separate literature review;
- creating SVG artwork without original vector sources;
- comprehensive search-engine or social-media strategy;
- a full information-architecture redesign; and
- deployment without a separate review of the completed changes.

## Decision Log

| Date | Decision |
| --- | --- |
| 2026-10-14 | Use clinically grounded R&D as the HMS Lab's primary public identity. |
| 2026-10-14 | Treat APTA as professional purpose, ASB as movement-science context, complex and dynamical systems as scientific perspective, and IEEE EMBS as engineering-development context. |
| 2026-10-14 | Present open-source, DIY, hacker, and maker practices as an accessible, iterative development culture. |
| 2026-10-14 | Avoid defensive comparisons based on laboratory size. |
| 2026-10-14 | Align the whole site with the PSU/HMS palette while preserving Movement Systems as the parent identity. |
| 2026-10-14 | Integrate HMS logos selectively on laboratory surfaces rather than globally replacing the site identity. |
| 2026-10-14 | Defer publication of critiques of Guccione et al. until those critiques are supplied and reviewed. |
