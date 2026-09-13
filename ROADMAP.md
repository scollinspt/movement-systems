# Movement Systems Roadmap

_Last updated: 2026-09-13_

This roadmap coordinates curriculum development, the public website, the shared
Movement and Exercise Laboratory, and related research across the workspace.

## North Star

Movement Systems and Exercise Prescription & Nutrition provide complementary ways of
understanding, evaluating, and changing human movement:

- **Movement Systems** is part of the Systems Theory sequence. It studies the movement
  system through hierarchy, interaction, constraints, regulation, feedback, variability,
  stability, emergence, and adaptation.
- **Exercise Prescription & Nutrition (EP&N)** is part of Knowledge Foundations. It
  develops the physiological knowledge needed to prescribe exercise and nutrition,
  interpret dose and response, and anticipate adaptation.
- **Shared conceptual work** connects systems, adaptation, and causation across both
  lectures.
- **The shared laboratory** is the principal applied bridge through which students use
  both kinds of theory in preparation for Patient/Client Management (PCM) practice.

The fuller rationale is in
[docs/curriculum-architecture.md](docs/curriculum-architecture.md).

## Course and Enrollment Model

- Movement Systems is a 4-credit registered course whose syllabus includes the shared
  Movement and Exercise Laboratory.
- EP&N is a 3-credit registered course and provides the primary content basis for the
  shared laboratory.
- The same DPT cohort enrolls in both courses for 7 total credits.
- The laboratory is not separately registered and has no separate syllabus. Its shared
  schedule appears in both course syllabi, and the EP&N syllabus references its
  relationship to the laboratory.

## Delivery Model

The repository and website do not replace Canvas.

- Each Canvas course remains the operational system of record for announcements,
  schedules, assignments, submissions, grades, discussions, restricted readings, and
  instructor-specific materials.
- Canvas provides the stable inbound link to the public website. The website does not
  link back to semester-specific Canvas course shells.
- The public site is the durable home for project-authored, permission-cleared resources:
  Movement Systems presentations, shared interactive work, shared laboratory resources,
  curricular context, and selected models and simulations.
- EP&N lecture presentations developed by the future adjunct remain that instructor's
  artifacts and may be delivered through Canvas. They are not presumed to belong in this
  repository or on the public site.

Publication and ownership rules are defined in
[docs/publication-policy.md](docs/publication-policy.md).

## Teaching Transition

### Spring 2027

Sean Collins teaches both courses and retains the shared laboratory. Development can
therefore coordinate outcomes, terminology, cases, interactive activities, and lab work
across the two courses. EP&N may still use the future adjunct's PowerPoints in Canvas.

### Spring 2028 and later

Sean Collins teaches Movement Systems and retains the shared laboratory; the adjunct
teaches the EP&N lecture. Integration persists through shared outcomes, terminology,
interactive resources, cases, and laboratory experiences rather than through duplicated
or centrally owned lecture decks.

## Public Website Scope

The visible identity is **Movement Systems**, with a subtitle that names Movement
Systems, Exercise Prescription & Nutrition, and the shared Movement and Exercise
Laboratory. The project name does not imply ownership of every artifact used in both
courses.

Planned public areas are:

1. **Home**: direct entry to current durable resources, without marketing or a Canvas
   link.
2. **Movement Systems**: modules, presentations, activities, references, and selected
   models.
3. **Integrated Concepts**: systems, adaptation, causation, capacity, performance,
   exercise dose and response, energetics, recovery, and cross-course cases.
4. **Movement and Exercise Laboratory**: preparation, procedures, measurements,
   integrated cases, interpretation, and reflection.
5. **Curricular Context**: Knowledge Foundations, Systems Theory, theory-to-practice
   relationships, and connections to PCM III-V.
6. **Models and Simulations**: accessible educational exports from `movement-models-`
   and links to deeper physiological explanations in Physiolog.
7. **Resources**: glossary, references, public downloads, provenance, reuse terms, and
   accessibility information.

See [docs/site-plan.md](docs/site-plan.md) for the detailed information architecture.

## Phases

### 1. Curriculum architecture

- [ ] Preserve the supplied DPT curriculum concepts document as historical curricular
      evidence when its original file and redistribution status are available.
- [ ] Write a current synthesis of systems, adaptation, causation, theory, and practice.
- [ ] Define course-level roles for Movement Systems and EP&N and the embedded role of
  their shared laboratory.
- [ ] Map prerequisite contributions, PCM III co-requisite applications, and PCM IV-V
      expectations.
- [ ] Define shared terms, including movement, motion, function, capacity, performance,
      dose, response, recovery, and adaptation.
- [ ] Create a concept-to-course-to-practice matrix.
- [ ] As the final Phase 1 step, develop the Spring 2027 Movement Systems and Exercise
  Prescription & Nutrition syllabi as authoritative LaTeX sources, using the shared
  PTH6111 syllabus example as the structural and visual starting point.

**Exit criterion:** every major concept has an instructional home and an explicit
relationship to practice, and both Spring 2027 lecture syllabi express that architecture
in complete LaTeX sources.

### 2. Coordinated course design

- [ ] Establish learning outcomes for each course and the shared laboratory component.
- [ ] Build coordinated module sequences and a Spring 2027 calendar.
- [ ] Identify handoffs between lectures without duplicating instructor-owned artifacts.
- [ ] Design longitudinal cases that enter through interactive work and the laboratory.
- [ ] Align foundational knowledge, systems reasoning, procedural practice, and
      whole-task practice.
- [ ] Refine both course syllabi against the coordinated calendar, assessments, and
  laboratory sequence, keeping the shared lab schedule synchronized in both.
- [ ] Document the Spring 2028 ownership and maintenance handoff.

**Exit criterion:** outcomes, modules, assessments, and laboratory activities align while
each instructor retains clear ownership of their materials.

### 3. Public content model

- [ ] Classify candidate materials as public, private, restricted, or generated.
- [ ] Define reusable content structures for modules, presentations, activities,
      references, glossary terms, and simulations.
- [ ] Establish citation, accessibility, copyright, provenance, and review requirements.
- [ ] Select the public portions of syllabi and laboratory materials.
- [ ] Create an explicit publication manifest so only approved content enters the build.

**Exit criterion:** every public artifact has a source, owner, permission status, review
state, and stable location.

### 4. Website foundation

- [ ] Build a Next.js static-export site in this repository, after consulting the bundled
      Next.js documentation for the installed version.
- [ ] Support the initial GitHub Pages URL at
      `https://scollinspt.github.io/movement-systems/`.
- [ ] Use a manual GitHub Actions deployment so a push does not automatically publish.
- [ ] Configure the base path so a later custom domain does not require content rewrites.
- [ ] Add checks for static builds, broken links, accessibility, and restricted files.
- [ ] Keep the site usable without authentication and without links to Canvas shells.

**Exit criterion:** an approved static build deploys manually to GitHub Pages and remains
stable across semesters.

### 5. Teaching minimum viable site

- [ ] Publish the project orientation and conceptual framework.
- [ ] Publish one complete Movement Systems module with its presentation.
- [ ] Publish one shared interactive activity involving both courses.
- [ ] Publish the corresponding integrated laboratory module.
- [ ] Publish a curriculum map showing the relationship to PCM III-V.
- [ ] Test the full Canvas-to-site student path and mobile accessibility.

**Exit criterion:** students can complete one coordinated learning cycle after following
the stable site link from either Canvas course.

### 6. Computational integration

- [ ] Select a movement question before selecting a canonical model.
- [ ] Create a provenance record and experiment in `movement-models-`.
- [ ] Map relevant movement concepts to physiological mechanisms in Physiolog.
- [ ] Develop a simple educational representation before exposing engine complexity.
- [ ] Use OpenSim for analysis when it answers a defined question.
- [ ] Use SCONE when prediction, control, or optimization is instructionally necessary.
- [ ] Export reviewed, browser-ready artifacts to this repository without making the
      website depend on local engine source trees.

**Exit criterion:** each simulation clarifies a specific concept, is reproducible at its
source, and states its assumptions and limits.

### 7. Scholarship and sustainability

- [ ] Evaluate learning and usability without publishing identifiable data.
- [ ] Version public curricular releases by semester or academic year.
- [ ] Publish content and model provenance appropriate to each artifact.
- [ ] Develop scholarship around the educational synthesis, movement ontology, and
      adaptation model.
- [ ] Reassess a custom domain after the public identity and maintenance pattern stabilize.

**Exit criterion:** the site, curriculum, and research artifacts can be maintained across
faculty and semester transitions without ambiguous ownership.

## Workspace Responsibilities

- `movement-systems`: educational integration, curricula, public website, and approved
  teaching artifacts.
- `physiolog`: authoritative physiological explanations and physiological teaching
  simulations.
- `movement-models-`: movement ontology, model provenance, engine mappings,
  computational experiments, and reviewed educational exports.
- `opensim-core`: forked upstream engine source; modify only for a justified engine
  contribution.
- `scone-core`: forked upstream simulation and optimization source; modify only for a
  justified engine contribution.
- `scollinspt`: professional portfolio and a public pointer to the project when the site
  is ready.

The detailed contract is in
[docs/workspace-integration.md](docs/workspace-integration.md).

## Current Status

The repository has its initial curriculum and source-library scaffold. The roadmap and
governance decisions are documented. Phase 1, Curriculum architecture, is the next work
stage. Resume by refining the current synthesis and shared terminology, then build the
concept-to-course-to-practice matrix and course-level role definitions. Finish Phase 1
by drafting the Spring 2027 Movement Systems and EP&N LaTeX syllabi from
`content/curriculum/syllabi/development/shared/example/PTH6111_Syllabus/template.tex`.

Content classification follows in Phase 3, and site implementation should begin only
after the curriculum architecture and public content model can govern what is built and
published.