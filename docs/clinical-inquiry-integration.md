# Clinical Inquiry Ecosystem Integration

## Purpose

Physical therapy reasoning requires more than physiological mechanisms. It also requires
knowledge of movement across scales: biomechanics, neuromechanics, neuromuscular control,
motor control, motor learning, task performance, and adaptation. This repository develops
that movement-system perspective for education and contributes reviewed movement-domain
knowledge to the broader Clinical Inquiry Ecosystem.

The repository therefore has two connected roles:

1. prepare learners to use movement-system knowledge in clinical inquiry and
   patient/client management; and
2. make well-scoped movement concepts, mechanisms, models, and educational syntheses
   available for later integration into computable causal knowledge.

These roles reflect physical therapy's professional focus on the movement system without
treating movement expertise as a substitute for physiological, evidential, or
patient-specific reasoning.

## Place In The Ecosystem

```text
stats4PT evidence -------------------------+
                                           |
Physiolog physiological mechanisms --------+-> Models4PT population causal knowledge
                                           |                 |
Movement Systems movement-domain knowledge +                 v
                                                    Clinical Inference Engine
                                                    patient-specific reasoning
```

The flow is conceptual, not an automated data pipeline. The projects remain independently
owned and technically separable.

- **stats4PT** develops critically examined evidence, estimates, uncertainty, and
  candidate causal knowledge through scientific inquiry.
- **Physiolog** develops generative-mechanism knowledge about physiological support,
  response, regulation, and adaptation.
- **Movement Systems** develops movement-domain knowledge about how movement is produced,
  organized, constrained, learned, adapted, observed, and changed.
- **Models4PT** integrates evidence and domain mechanisms with context, provenance,
  uncertainty, and disagreement into curated population-level causal knowledge.
- **Clinical Inference Engine** combines versioned population knowledge with individual
  information for iterative, inspectable patient-specific reasoning.
- **The professional profile** provides public discovery and explains how the projects
  form one scholarly program; it does not duplicate their authoritative content.

## Movement-Domain Contribution

Candidate contributions from this repository may include:

- explicit definitions and relationships among movement-system concepts;
- accounts of biomechanics, neuromechanics, neuromuscular control, motor control, and
  motor learning;
- relationships among capacity, task demands, performance, context, and participation;
- mechanisms and observable consequences of variability, stability, compensation,
  adaptation, and dysfunction;
- measurement interpretations and the limits of observable proxies;
- conceptual and computational models with stated scale, timescale, assumptions, and
  validation status; and
- educational cases that reveal knowledge gaps or motivate research questions.

Course materials are not automatically knowledge-base inputs. A downstream contribution
must separate sourced claims from pedagogical simplifications and retain enough context
for scientific review.

## Contribution Contract

Before a movement-domain artifact is proposed for Models4PT or another ecosystem project,
record when applicable:

- the concept, mechanism, relationship, or claim being proposed;
- the educational or clinical question that motivated it;
- source evidence and competing explanations;
- relevant system level, spatial scale, and timescale;
- population, task, environment, and clinical context;
- definitions, units, assumptions, and boundary conditions;
- observable variables and measurement limitations;
- uncertainty, disagreement, and validation state;
- repository revision and responsible reviewer; and
- whether the artifact is a source claim, synthesis, model, simulation result, or
  pedagogical representation.

Models4PT determines whether and how a reviewed contribution enters canonical population
causal knowledge. Acceptance there does not make it a patient conclusion. The Clinical
Inference Engine remains responsible for combining population knowledge with individual
findings and context.

## Educational Feedback Loop

Integration is bidirectional. Movement Systems can contribute domain knowledge and
questions to Models4PT, then use reviewed model views to help learners inspect causal
structure, assumptions, uncertainty, and disagreement. Cases and laboratory observations
may expose missing mechanisms or poorly specified relationships, but those observations
return as research questions rather than silently changing canonical models.

## Boundaries

- `movement-systems` owns curriculum and public educational synthesis, not the canonical
  Models4PT knowledge base.
- `movement-models-` owns engine-independent movement ontology, computational experiments,
  platform mappings, and reusable educational exports; it is distinct from Models4PT.
- Physiolog remains authoritative for physiological explanations even when those
  mechanisms constrain movement.
- Models and simulations support reasoning; they do not establish clinical validity merely
  because they execute successfully.
- Population knowledge informs but does not determine patient-specific decisions.
- Cross-repository exchange uses reviewed, versioned artifacts rather than runtime
  dependencies or silent synchronization.

## Near-Term Integration Work

1. Add movement-domain fields to the concept-to-course-to-practice matrix.
2. Pilot the contribution contract with one gait concept spanning movement mechanics,
   physiological support, measurement, and clinical interpretation.
3. Identify which parts of the pilot belong in curriculum content, `movement-models-`,
   Physiolog, or a proposed Models4PT record.
4. Publish only the reviewed educational representation in the Movement Systems site.
5. Add the public project to the professional profile after the first approved release.
