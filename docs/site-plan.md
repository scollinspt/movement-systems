# Public Website Plan

## Purpose and Audience

The public Movement Systems site is a durable learning environment supporting Movement
Systems, shared concepts with Exercise Prescription & Nutrition, and the shared Movement
and Exercise Laboratory. Its primary audience is DPT students, with public usefulness to
educators and clinicians as a secondary benefit.

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

- Initial host: GitHub Pages at the repository project URL.
- Planned framework: Next.js with static export, using the installed version's bundled
  documentation when implementation begins.
- Deployment: manual GitHub Actions workflow; pushing code does not publish it.
- Routing: compatible with the `/movement-systems` project base path and a later custom
  domain.
- Site output: generated and not treated as authoritative source.

The Physiolog site provides a proven operational pattern for static export and manual
publication, but Movement Systems should have its own visual language and content model.

## Release Units

Public content should be releasable independently as:

- Movement Systems presentations and modules;
- shared conceptual interactives;
- laboratory modules;
- curricular context and glossary updates; and
- model or simulation exports.

Semester logistics must not be embedded in durable URLs. Where dates are necessary,
they should be versioned by academic term rather than silently overwritten.