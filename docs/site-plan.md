# Public Website Plan

## Purpose and Audience

The public Movement Systems site is a durable learning environment supporting Movement
Systems, shared concepts with Exercise Prescription & Nutrition, and the shared Movement
and Exercise Laboratory. Its primary audience is the single DPT cohort enrolled in both
courses, with public usefulness to educators and clinicians as a secondary benefit.

The site is not a complete mirror of either course and is not the learning management
system.

## Public Content Candidates

Subject to ownership, accessibility, and publication review, the primary public
candidates are:

- Movement Systems presentations;
- shared interactive work connecting both lectures;
- shared Movement and Exercise Laboratory resources;
- curricular context and common terminology; and
- reviewed educational models and simulations.

Adjunct-owned EP&N PowerPoints, semester operations, controlled assessments, and
restricted resources are not public candidates by default.

## Navigation Direction

Students enter the site from a stable link in each Canvas course. The public site does
not link back to Canvas because Canvas course-shell URLs may change by semester and are
not useful to unauthenticated visitors.

This gives one durable direction:

```text
semester-specific Canvas course -> stable public site
```

## Planned Information Architecture

### Home

A direct course hub with routes to Movement Systems, integrated concepts, laboratory
work, models, and resources. It should not be a marketing landing page.

### Movement Systems

- Modules and learning questions
- Public presentations
- Activities and cases
- Models and simulations
- References and further study

### Integrated Concepts

- Systems
- Adaptation
- Causation
- Capacity, performance, and context
- Exercise dose and response
- Energetics, nutrition, and recovery
- Shared interactive cases

This area represents EP&N where concepts are purposefully integrated. It is not a public
archive of the adjunct's lecture PowerPoints.

### Movement and Exercise Laboratory

- Preparation
- Procedures and measurement resources
- Integrated movement and exercise cases
- Interpretation and reflection
- Accessible alternatives where an activity depends on equipment or physical access

### Curricular Context

- Knowledge Foundations and Systems Theory
- Theory-to-practice relationship
- Prerequisite and co-requisite connections
- Transfer to PCM III-V

### Models and Simulations

- Simple, inspectable teaching representations
- Reviewed educational exports from `movement-models-`
- Links to deeper mechanisms in Physiolog
- Assumptions, provenance, validation status, and limitations

### Resources

- Glossary
- References
- Public downloads
- Attribution and reuse terms
- Accessibility statement
- Version and update information

## Technology and Hosting

- Canonical public URL: `https://movementsystems.org`.
- Host: GitHub Pages, configured with the registered custom domain.
- Planned framework: Next.js with static export, using the installed version's bundled
  documentation when implementation begins.
- Deployment: manual GitHub Actions workflow; pushing code does not publish it.
- Routing: served from the domain root without a `/movement-systems` base path.
- Domain configuration: configure DNS and GitHub Pages together when the first release
  is approved, following the deployment method's current requirements.
- Site output: generated and not treated as authoritative source.

## Physiolog As A Technical Reference

Physiolog provides a proven reference implementation for:

- Next.js and TypeScript project configuration;
- static export and GitHub Pages deployment;
- manual publication workflows;
- book-source processing and page generation;
- navigation, accessibility, metadata, and link-checking patterns; and
- separation of authoritative source content from generated site output.

Implementation should inspect the current Physiolog source and the installed Next.js
documentation before adopting those patterns. Versions and framework conventions may
change before website work begins.

Physiolog is a reference, not a runtime or filesystem dependency. A standalone clone of
`movement-systems` must contain everything required to install, build, validate, and
deploy its site. No build step may require a sibling `physiolog` checkout.

The existing curriculum, course-development, source-library, laboratory, research, and
governance files remain authoritative inputs to the project. Website scaffolding should
be added alongside them rather than replacing or reorganizing them merely to resemble
Physiolog. Movement Systems should also retain its own visual language, information
architecture, and movement-domain content model.

## Release Units

Public content should be releasable independently as:

- Movement Systems presentations and modules;
- shared conceptual interactives;
- laboratory modules;
- curricular context and glossary updates; and
- model or simulation exports.

Semester logistics must not be embedded in durable URLs. Where dates are necessary,
they should be versioned by academic term rather than silently overwritten.