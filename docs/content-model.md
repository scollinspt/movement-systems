# Public Content Model

## Purpose

This model defines the durable content records used by the Movement Systems repository
and `movementsystems.org`. It keeps theory, research plans, operational capabilities,
methods, and results distinct so that a proposed idea cannot be mistaken for an
established finding.

The model describes content before it prescribes a file format or website framework.
Markdown frontmatter, structured data, and generated pages may implement it later.

## Common Metadata

Every substantial public record should include, when applicable:

- stable identifier and title;
- content type;
- concise summary;
- authors, contributors, and responsible reviewer;
- creation and last-review dates;
- maturity status;
- intended audience;
- relevant population, task, environment, scale, and timescale;
- sources, citations, and provenance;
- ownership, license, and redistribution status;
- related concepts, methods, projects, results, and external resources;
- accessibility status;
- publication status and stable public route; and
- limitations, uncertainty, and review notes.

Allowed maturity states are defined in
[research-architecture.md](research-architecture.md): proposed, in development,
operational, analyzed, established result, and superseded.

## Content Types

### Theory Or Concept

A theory or concept record develops a movement-system idea without presenting it as an
empirical result.

Include:

- definition and scope;
- motivating question or phenomenon;
- system level, spatial scale, and timescale;
- entities, relationships, mechanisms, and boundary conditions;
- observable implications;
- competing definitions or explanations;
- supporting and conflicting evidence;
- measurement and identifiability limits;
- relationship to physiological mechanisms in Physiolog;
- relationship to computational representations; and
- educational simplifications, clearly labeled as such.

Examples include constraints, movement solutions, capacity, performance, variability,
stability, compensation, adaptation, and control.

### Research Question

A research-question record makes an inquiry inspectable before methods or results are
selected.

Include:

- observed phenomenon or motivating problem;
- primary question and why it matters;
- candidate mechanisms and competing explanations;
- hypotheses or discriminating predictions, when appropriate;
- target population, task, and environment;
- observables and candidate measurements;
- required precision and relevant uncertainty;
- feasibility, ethics, privacy, and governance considerations;
- related theory, evidence, methods, and projects; and
- disposition: literature inquiry, method development, pilot, formal study, or closed.

### Method

A method record describes how an observation or derived quantity is produced and where
its interpretation fails.

Include:

- intended purpose and use cases;
- required equipment, software, versions, and licenses;
- setup, calibration, and acquisition procedure;
- synchronization and common-timeline method;
- raw inputs, transformations, derived variables, and units;
- data quality and exclusion rules;
- reliability, validity, sensitivity, and known uncertainty;
- comparison or reference method;
- operational readiness checks;
- privacy, safety, training, and governance requirements;
- reproducibility materials; and
- limitations and prohibited interpretations.

### Capability

A capability record states what the HMS Lab can currently do or is preparing to do. It
is not an equipment inventory or a promise of unrestricted service.

Include:

- task or problem class the capability addresses;
- maturity status;
- verified equipment and software;
- measures and outputs actually available;
- supported environments and deployment constraints;
- synchronization and integration status;
- completed readiness or validation checks;
- personnel or training requirements;
- representative demonstrations;
- known limits, gaps, and unsupported claims; and
- next validation or development step.

Planned capabilities must be labeled **proposed** or **in development**. Only capabilities
that pass documented readiness criteria may be labeled **operational**.

### Project

A project record coordinates a bounded body of research or methodological work.

Include:

- project question and rationale;
- project type and maturity status;
- investigators, collaborators, and roles;
- population, task, setting, and scope;
- related theories, questions, methods, and capabilities;
- study or development plan;
- ethics, data-governance, contracting, and permission status;
- milestones and decision points;
- outputs, datasets, software, presentations, and publications;
- funding and conflicts when disclosure is appropriate; and
- current conclusions and next steps.

Prospective organizations are not collaborators. A collaboration may be named only when
the relationship is established and public disclosure is permitted.

### Result

A result record communicates a specific finding without allowing the project, method, or
laboratory to inherit broader validity than the evidence supports.

Include:

- question and prespecified claim, when applicable;
- linked project, protocol, data version, and analysis revision;
- sample and context;
- variables, units, and analysis method;
- result with uncertainty and relevant negative findings;
- sensitivity, robustness, and assumption checks;
- competing interpretations;
- what the result supports and does not support;
- generalizability and clinical-interpretation limits;
- review, replication, presentation, or publication status; and
- citation and reproducibility resources.

Participant-level data must not be embedded in a public result record unless release is
explicitly authorized and appropriate.

### Model Or Simulation

A model record connects a conceptual or empirical question to an explicit representation.

Include:

- question the model is intended to investigate;
- model class, system boundary, scale, and timescale;
- state variables, parameters, units, and equations or rules;
- assumptions, controller, objective function, and boundary conditions;
- source model and repository revision;
- implementation and execution environment;
- calibration and validation evidence;
- sensitivity and identifiability limits;
- observed quantities used for comparison;
- supported and unsupported interpretations; and
- distinction among research model, educational view, and clinical use.

Technical execution may live in `movement-models-`; this repository owns the public
scientific framing and reviewed interpretation.

### Educational Resource

An educational record deliberately translates scholarship for learners.

Include:

- audience and learning purpose;
- source theories, methods, or results;
- prerequisite knowledge;
- pedagogical simplifications;
- activity, representation, or assessment purpose;
- accessibility alternatives;
- ownership and permission;
- review date; and
- links back to deeper scientific records.

An educational resource is not automatically a research result or a Models4PT
contribution.

## Relationships

Records should link explicitly rather than duplicate one another:

```text
theory or concept
      |
      +--> research question --> project --> result
      |                           |           |
      |                           v           v
      +------------------------> method --> interpretation
      |                           |
      +----------------------> capability
      |
      +--> model or simulation
      |
      +--> educational resource
```

A result may revise a theory, a failed method may narrow a capability, and an educational
activity may generate a new research question. These changes should be represented as
reviewed relationships, not silent overwrites.

## Public And Private Boundary

The public repository may contain project-authored or permission-cleared records,
protocols, code, aggregate outputs, synthetic examples, de-identified results approved
for release, and provenance metadata.

The private course or research environment owns:

- operational course documents and assessments;
- correspondence and third-party teaching materials;
- identifiable student, participant, patient, or partner information;
- consent and recruitment records;
- raw or controlled data;
- unapproved manuscripts, contracts, and intellectual property; and
- material restricted by license, policy, agreement, or research oversight.

Private content may be summarized publicly only when the summary is independently safe,
accurate, permission-cleared, and useful. Public records must not expose private storage
paths or require access to private files to render.

## Publication Readiness

A record may enter the public site only when:

1. its type and maturity are explicit;
2. ownership and permission are resolved;
3. citations and provenance are complete enough for the claim;
4. privacy and research-governance review is satisfied;
5. limitations and uncertainty are visible;
6. accessibility requirements are met;
7. relationships point to stable public records or versioned external sources; and
8. the record appears in an explicit publication manifest or allowlist.
