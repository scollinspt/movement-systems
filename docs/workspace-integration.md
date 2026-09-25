# Workspace Integration

## Repository Contract

### movement-systems

Owns public movement-systems theory and synthesis, the HMS Lab's public research agenda,
public questions, methods, capability records, approved results, educational
translations, and the static website. It decides whether its public scholarly and
educational records are ready to publish, but it does not own private course operations,
the canonical Models4PT knowledge base, or patient-specific inference.

Operational PTH6132 development belongs primarily in institution-managed private course
storage and Canvas. Public concepts and resources move into this repository only through
deliberate promotion and review.

### syllabus-template

Owns the reusable LaTeX syllabus class, neutral template source, required license and
attribution, generic assets, compile instructions, and release identifiers. The current
baseline derives from the PTH6111 syllabus and is not yet a generic release.

Course repositories or private course workspaces consume copied, self-contained release
snapshots. They do not use symlinks, personal absolute paths, or build-time dependencies
on the template workspace. Each course copy records its template release and checksums,
then evolves independently unless an upstream change is deliberately adopted.

### physiolog

Owns authoritative physiological explanations, textbook material, and physiological
teaching simulations. Movement Systems should link to stable public Physiolog resources
instead of copying chapters or maintaining divergent explanations.

### movement-models-

Owns the engine-independent movement ontology, provenance, model transformations,
platform mappings, scenarios, and computational experiments. It produces reviewed
research and educational exports; `movement-systems` supplies the scientific or teaching
context and publishes approved interpretations or generated artifacts.

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

Owns professional identity and project discovery. It should explain HMS Lab as the
empirical human-movement component of the broader Clinical Inquiry program and link to
the authoritative Movement Systems site without duplicating its research or course
content.

The implementation handoff for the next professional-profile update is recorded in
[professional-profile-integration.md](professional-profile-integration.md).

### Models4PT and Clinical Inference Engine

Models4PT is distinct from `movement-models-`. Models4PT owns integration of evidence and
domain mechanisms into curated population-level causal knowledge, including provenance,
context, uncertainty, and disagreement. Movement Systems may propose reviewed
movement-domain contributions but does not write directly into that canonical knowledge.

The Clinical Inference Engine is downstream of Models4PT and owns patient-specific,
iterative reasoning. Neither a Movement Systems teaching artifact nor a population model
is itself a patient conclusion.

## Transfer Pattern

```text
HMS Lab observations and experiments -------+
                                             |
stats4PT evidence ---------------------------+
                                             |
Physiolog mechanisms ------------------------+-> movement-systems scientific review
                                             |                |              |
movement-models- experiments and exports ----+                |              v
                                                              |         public site
                                                              v
reviewed movement-domain contributions ------------------> Models4PT
                                                              |
                                                              v
                                                   Clinical Inference Engine
```

The transfer is deliberate rather than live. Cross-repository content is pinned or
exported at reviewed revisions so a change elsewhere cannot silently alter a published
research or educational record.

## Initial Integration Sequence

1. Define the scientific, methodological, clinical, or educational question in
   `movement-systems`.
2. Identify physiological explanations in Physiolog and link rather than duplicate.
3. If computation is necessary, define the ontology mapping, provenance, and experiment
   in `movement-models-`.
4. Use OpenSim or SCONE only when its capabilities match the question.
5. Validate the source experiment.
6. Export the smallest reproducible artifact needed to support the public claim.
7. Review scientific interpretation, accessibility, ownership, privacy, and intended
   audience in `movement-systems`.
8. Create the appropriate theory, method, capability, project, result, model, or
   educational record using [content-model.md](content-model.md).
9. Include the approved record in a manual public-site release.

When work also contributes to the Clinical Inquiry Ecosystem:

10. Separate source claims and model assumptions from pedagogical simplifications.
11. Package the reviewed movement-domain contribution using the contract in
   [clinical-inquiry-integration.md](clinical-inquiry-integration.md).
12. Propose it to Models4PT for independent curation; do not treat transfer as acceptance.
13. Preserve the boundary between population knowledge and patient-specific inference.

## What Is Not Integrated

- Git submodules between project repositories
- Runtime dependence on sibling workspace folders
- Automatic publication when another repository changes
- Automatic synchronization from private course or research storage
- Live syllabus dependencies on the `syllabus-template` workspace
- Duplication of Physiolog chapters or adjunct-owned presentations
- Engine-specific terminology as the organizing structure of the curriculum
- Direct mutation of Models4PT canonical knowledge from course content
- Patient-specific recommendations generated by the public educational site