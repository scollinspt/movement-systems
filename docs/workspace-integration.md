# Workspace Integration

## Repository Contract

### movement-systems

Owns curriculum architecture, Movement Systems presentations, shared conceptual
activities, shared laboratory materials, public educational integration, and the static
website. It decides whether an educational artifact is ready to publish.

### physiolog

Owns authoritative physiological explanations, textbook material, and physiological
teaching simulations. Movement Systems should link to stable public Physiolog resources
instead of copying chapters or maintaining divergent explanations.

### movement-models-

Owns the engine-independent movement ontology, provenance, model transformations,
platform mappings, scenarios, and computational experiments. It produces reviewed
educational exports; `movement-systems` supplies the teaching context and publishes
approved copies or generated artifacts.

Every export should retain:

- source model or concept identifier;
- source repository revision or release;
- generation procedure;
- assumptions and units;
- validation state;
- license and attribution; and
- date exported.

### opensim-core and scone-core

These are forked upstream source repositories and engine references. Ordinary teaching
work must not be implemented as engine patches. Fork changes require a defined research
need, focused validation, and a plan to contribute generally useful changes upstream.

The public website must not build against local OpenSim or SCONE source trees. Compute
offline, then export browser-compatible data or educational representations.

### scollinspt

Owns professional identity and project discovery. Add a link to the public Movement
Systems site after its first approved release; do not duplicate course content there.

## Transfer Pattern

```text
Physiolog concepts and mechanisms --------+
                                          |
movement-models- experiments and exports -+-> movement-systems review -> public site
                                          |
OpenSim and SCONE execution ---------------+
```

The transfer is deliberate rather than live. Cross-repository content is pinned or
exported at reviewed revisions so a change elsewhere cannot silently alter a published
course resource.

## Initial Integration Sequence

1. Define the educational question in `movement-systems`.
2. Identify physiological explanations in Physiolog and link rather than duplicate.
3. If computation is necessary, define the ontology mapping, provenance, and experiment
   in `movement-models-`.
4. Use OpenSim or SCONE only when its capabilities match the question.
5. Validate the source experiment.
6. Export a compact educational artifact with provenance.
7. Review accessibility, ownership, and instructional fit in `movement-systems`.
8. Include the approved artifact in a manual public-site release.

## What Is Not Integrated

- Git submodules between project repositories
- Runtime dependence on sibling workspace folders
- Automatic publication when another repository changes
- Duplication of Physiolog chapters or adjunct-owned presentations
- Engine-specific terminology as the organizing structure of the curriculum