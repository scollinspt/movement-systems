# HMS Lab Project Context

## Purpose of this document

This document captures the accumulated context, decisions, constraints,
and working ideas for development of the **Human Movement Systems
Laboratory (HMS Lab)** at Plymouth State University. It is intended to
bootstrap future work in Codex/VS Code without requiring the original
planning conversation.

Treat this as **project context, not a finalized strategic plan**.
Preserve the core architecture, but distinguish established decisions
from ideas that remain exploratory.

------------------------------------------------------------------------

## 1. Professional and intellectual context

The lab is being developed by **Sean M. Collins, PT, ScD**, a physical
therapist, scientist, and educator whose professional background spans:

-   physical therapy;
-   exercise physiology;
-   ergonomics/human factors engineering;
-   clinical and cardiovascular physiology;
-   biomedical engineering education;
-   physiological dynamics and quantitative physiology;
-   causal analysis and evidence synthesis;
-   computational representation of physiological and clinical
    knowledge;
-   clinical reasoning and scientific AI.

The broader professional program is currently represented at
`https://scollinspt.github.io/`.

The existing research identity can be summarized as **clinical inquiry
at the intersection of physiology, evidence, and computation**. The HMS
Lab adds **human movement** as a major empirical and integrative domain.

A possible expanded framing is:

> **Clinical inquiry at the intersection of physiology, human movement,
> evidence, and computation.**

The lab should not be presented as an abrupt transition from
physiology/clinical inquiry into conventional biomechanics. It is better
understood as a convergence of longstanding interests:

**physiology → physiological dynamics → measurement → causal inference →
clinical inquiry → computational representation → human movement
systems**

------------------------------------------------------------------------

## 2. Proposed laboratory identity

### Working name

# Human Movement Systems Laboratory

**HMS Lab**

This is preferred over names centered on "biomechanics" or
"computational" because the intended scope includes movement,
physiology, neuromuscular function, imaging, modeling, rehabilitation,
ergonomics, clinical inquiry, and industry collaboration.

"Systems" is important. Human movement is treated as an emergent
phenomenon arising from interacting physiological, neural, muscular,
mechanical, behavioral, task, and environmental processes.

### Possible descriptor

> **Measurement · Modeling · Rehabilitation · Ergonomics**

### Working mission statement

> The Human Movement Systems Laboratory studies human movement as an
> emergent property of interacting physiological, neuromuscular,
> mechanical, and environmental systems. We develop and apply
> accessible, portable, multimodal approaches to movement measurement
> and computational modeling, with particular emphasis on
> rehabilitation, ergonomics, and human performance.

This language is provisional and may be refined.

------------------------------------------------------------------------

## 3. Core scientific philosophy

The lab should be **mechanistic and generative**, not merely descriptive
or predictive.

The objective is not simply to collect movement data, classify people,
or train algorithms to predict outcomes. A deeper goal is to construct
computational systems in which observed behavior can emerge from
plausible underlying physiological, neuromuscular, mechanical, control,
and environmental mechanisms.

A guiding principle is:

> We do not only want to quantify movement. We want to understand what
> mechanisms are sufficient to generate it.

Experimental measurements provide constraints on mechanistic models.

The conceptual cycle is:

**observe a phenomenon → formulate possible mechanisms → construct/model
the system → generate behavior computationally → compare generated and
observed behavior → revise the model**

This connects the HMS Lab to nonlinear dynamics, complex systems, motor
control, computational physiology, biomechanics, and biological physics.

------------------------------------------------------------------------

## 4. Foundational methodological question

One central methodological question is:

> **How much of the scientifically important structure of human movement
> can we recover from strategically chosen, relatively inexpensive
> measurements?**

This is not merely a response to budget limitations. It can become a
legitimate scientific problem involving:

-   observability;
-   dimensionality;
-   state estimation;
-   sensor fusion;
-   measurement uncertainty;
-   system identification;
-   movement variability;
-   nonlinear dynamics;
-   model identifiability;
-   information content of measurements;
-   relationships between external movement and internal physiological
    state.

The lab should avoid equating scientific sophistication with expensive
instrumentation.

A related principle is:

> **Bring the instrumentation to the movement rather than requiring all
> movement to come to the instrumentation.**

Portability is therefore a scientific and translational feature, not
simply a cost-saving measure.

------------------------------------------------------------------------

## 5. Broader scientific questions

Potential long-term research questions include:

-   How does robust, adaptive movement emerge from coupled neural,
    physiological, musculoskeletal, mechanical, and environmental
    systems?
-   Why and how does the nervous system exploit rather than eliminate
    musculoskeletal complexity?
-   What determines the effective dimensionality of human movement?
-   When is movement variability functional, and when does it indicate
    loss of control or adaptability?
-   How do fatigue and physiological stress deform the organization of
    movement?
-   How do stability, adaptability, energetic cost, accuracy, and speed
    trade off?
-   How do sensory and neural delays affect movement stability and
    control?
-   How do neural, muscular, physiological, and mechanical timescales
    interact?
-   Can transitions between movement regimes be understood as
    bifurcations or other dynamical transitions?
-   How much locomotor and postural behavior self-organizes through
    body-environment dynamics rather than explicit neural control?
-   How does motor learning alter the geometry or dynamics of movement?
-   Can pathology or functional decline be understood partly as
    transitions between dynamical regimes?
-   What information about the underlying movement system is recoverable
    from sparse, inexpensive, wearable, or video-based measurements?
-   How can physiological measurements and movement measurements be
    combined to understand the person as an integrated system?

A broad theoretical framing is:

> **How do robust, adaptive macroscopic behaviors emerge from the
> coupled dynamics of neural, physiological, mechanical, and
> environmental subsystems operating far from equilibrium?**

------------------------------------------------------------------------

## 6. Existing measurement resources

The HMS Lab is **not starting from zero**.

### Video / markerless movement measurement

The intended initial approach is to use older available **iPhones and
iPads on stands with OpenCap**, associated with the OpenSim/SimTK
ecosystem.

This avoids making an expensive traditional marker-based optical
motion-capture system the centerpiece of the laboratory.

Potential advantages include:

-   low cost;
-   portability;
-   relatively small spatial requirements;
-   ability to collect data outside the laboratory;
-   connection to musculoskeletal modeling workflows;
-   compatibility with the lab's philosophy of accessible measurement.

### Wearable inertial sensing

Approximately **8--9 Movesense IMUs** are already available.

These can support distributed wearable measurement of movement and
provide a field-deployable complement to video-based measurement.

Potential research opportunities include development of task-specific
sensor configurations rather than dependence on a proprietary full-body
suit.

### BIOPAC

An existing **BIOPAC MP160** system is available with:

-   two EMG channels;
-   triaxial accelerometry;
-   vibromyography;
-   ECG;
-   several other potentially relevant channels/capabilities.

Two EMG channels are sufficient for targeted mechanistic experiments,
although eventual expansion may be useful if justified by actual
projects.

### Ultrasound

Three **Clarius ultrasound imaging units** are available:

-   two linear-array units;
-   one curvilinear unit.

The exact models, licenses, software capabilities, frame rates, export
options, and research-relevant functionality should be inventoried
before claims are made about quantitative capabilities.

The linear units potentially create opportunities for musculoskeletal
imaging and investigation of muscle/tendon/tissue morphology and
behavior.

### Computational environment

OpenSim/OpenCap and custom computational workflows should form part of
the analysis/modeling layer.

Python and other open computational tools should be preferred where
practical so that the lab retains access to raw data and can develop its
own analysis pipelines.

------------------------------------------------------------------------

## 7. Conceptual measurement stack

The laboratory can be thought of as observing different projections of
the human movement system.

**Whole-body/segment movement**\
OpenCap / video

**Local segment motion**\
Movesense IMUs

**Neuromuscular activity**\
BIOPAC EMG

**Physiological state/load**\
BIOPAC ECG and related physiological channels

**Local mechanical/tissue behavior**\
Clarius ultrasound, where technically and scientifically appropriate

**Environmental interaction / kinetics**\
This is currently an important capability gap.

**System-level interpretation**\
OpenSim + custom computational analysis + mechanistic/dynamical modeling

A major technical objective is eventually to place these heterogeneous
measurements on a common temporal framework.

------------------------------------------------------------------------

## 8. Important capability gaps

### External force / human-environment interaction

The most obvious current measurement gap is external mechanics.

Potential future capabilities could include:

-   portable force plates;
-   load cells;
-   instrumented handles;
-   grip-force measurement;
-   pressure measurement;
-   instrumented ergonomic objects;
-   task-specific force transducers.

Do **not** assume that conventional embedded force plates are
automatically the best first purchase. Selection should follow
representative use cases.

### Synchronization

Multimodal synchronization is a major methodological priority.

Long-term objective:

> **OpenCap + Movesense + BIOPAC + ultrasound + external force
> measurement should be interpretable as observations of the same event
> on a common timeline whenever a study requires it.**

Possible solutions may involve hardware triggers, timestamps,
visible/audible synchronization events, software synchronization, or
post-processing.

The exact capabilities of each system must be investigated rather than
assumed.

### Computing / infrastructure

Potential needs include:

-   capable analysis workstation(s);
-   data storage and backup;
-   sensor charging;
-   mounting systems;
-   tripods;
-   lighting;
-   calibration objects;
-   equipment cases;
-   cabling;
-   portable work surfaces;
-   secure sensor storage;
-   small fabrication/repair capability.

------------------------------------------------------------------------

## 9. Physical space

Available laboratory space is limited.

A realistic configuration is **two separate rooms of approximately 250
square feet each**, rather than one contiguous 500-square-foot
laboratory.

### Room A: movement / experimental space

This room should remain deliberately sparse and reconfigurable.

Priorities:

-   open usable floor area;
-   clean backgrounds;
-   controllable lighting where possible;
-   accessible power;
-   camera/phone stands;
-   ability to rapidly change configurations;
-   minimal permanent floor-consuming equipment.

Potential tasks include:

-   sit-to-stand;
-   balance;
-   reaching;
-   stepping;
-   lifting;
-   repetitive occupational tasks;
-   upper-extremity tasks;
-   assistive-device interactions;
-   targeted rehabilitation experiments.

Large locomotor studies need not occur in this room. Other campus spaces
or field locations can be used.

### Room B: instrumentation / computational / collaboration space

Do not conceptualize this merely as "storage."

Potential functions:

-   computational analysis;
-   equipment preparation;
-   sensor charging;
-   equipment storage;
-   small workbench;
-   meetings;
-   student collaboration;
-   whiteboard/display;
-   data review;
-   portable field-kit preparation.

The lab should be conceived as a **distributed laboratory**. The rooms
provide a home base, controlled testing environment, and
analysis/instrumentation center, while experiments can also occur in
clinics, workplaces, industrial facilities, campus spaces, homes, or
outdoor environments when appropriate.

------------------------------------------------------------------------

## 10. \$25,000 startup constraint

Approximately **\$25,000** is the realistic initial institutional
investment that does not depend on external fundraising, grants, or
contracts.

Because substantial instrumentation already exists, the objective is no
longer to create a laboratory from nothing.

The \$25k should be used to:

1.  make existing equipment into a coherent measurement platform;
2.  fill repeatedly demonstrated capability gaps;
3.  create enough capability for legitimate pilot research;
4.  support student research inquiry;
5.  produce publishable/demonstrable work;
6.  create evidence for future fundraising, grants, and industry
    outreach.

Do **not** spend the full budget merely because it is available.

A possible principle is to initially commit approximately \$18--21k and
retain a reserve for unanticipated needs discovered during actual use.

### Purchasing principle

> **Measurement modality should follow the scientific question.**

Do not buy equipment simply to resemble a conventional biomechanics
laboratory.

Before major purchases, inventory all existing DPT/program/university
resources and map them against representative experiments.

Items that repeatedly prevent important experiments from being conducted
should become purchasing priorities.

------------------------------------------------------------------------

## 11. Representative initial demonstration projects

Early projects should demonstrate range rather than all answering the
same type of question.

Possible categories:

### A. Controlled rehabilitation/movement study

Examples might involve:

-   sit-to-stand;
-   balance;
-   reaching;
-   stepping;
-   fatigue effects;
-   movement variability;
-   task adaptation.

### B. Portable ergonomics/field study

Demonstrate that the measurement system can leave the lab.

Examples:

-   lifting;
-   repetitive work;
-   sustained tasks;
-   fatigue across work;
-   before/after ergonomic intervention;
-   movement adaptation to workstation/task changes.

### C. Computational/methodological study

Use movement data to investigate something beyond conventional summary
metrics, such as:

-   movement variability;
-   coordination;
-   state-space structure;
-   nonlinear dynamics;
-   sensor fusion;
-   dimensionality;
-   state estimation;
-   mechanistic modeling.

These projects can later provide the visual/data material for the
website, industry outreach, fundraising, grants, and presentations.

------------------------------------------------------------------------

## 12. Relationship to the DPT Pro Bono Clinic

The DPT program's **Pro Bono Clinic is a major existing program asset**.
The HMS Lab should be woven into its intellectual and educational
infrastructure rather than developed as an unrelated faculty research
space.

The proposed relationship is:

**Pro Bono Clinic → clinical observations/questions → HMS Lab inquiry →
measurement/research → knowledge → clinical reasoning**

A central educational principle is:

> **Research questions can originate in patients and clinical
> observations, not only in journal articles.**

Students may encounter puzzling patterns in the Pro Bono Clinic and
bring those observations to the lab for consideration from a research
perspective.

The immediate objective is **not** to automatically convert clinic
patients into research participants.

Maintain a deliberate distinction:

> **Clinical question → research inquiry should be easy.**

> **Clinical patient → research participant should be deliberate.**

Any future pathway involving referral for enhanced quantitative
assessment, research recruitment, patient data, or clinical
interpretation must be developed with appropriate distinctions among
clinical care, education, research, consent, IRB oversight, privacy/data
governance, documentation, liability, and relevant university policies.

A second foundational question may be:

> **What additional information about an individual's movement system
> can quantitative measurement provide when routine clinical examination
> leaves important questions unresolved?**

This is exploratory and should not imply that the lab currently provides
a clinical diagnostic service.

------------------------------------------------------------------------

## 13. Student participation

Students with a genuine interest in research inquiry should be able to
**join the HMS Lab** as an additional educational experience.

This need not initially be a formal course or assistantship.

Possible identity:

**HMS Lab Student Investigators**

or simply:

**HMS Lab student members**

Students could participate longitudinally and at different levels.

Possible progression:

1.  attend lab/inquiry meetings;
2.  learn research-question formulation;
3.  learn OpenCap acquisition;
4.  learn Movesense sensor use;
5.  learn basic ultrasound acquisition where appropriate;
6.  learn targeted EMG/physiological acquisition;
7.  learn data management and processing;
8.  assist with ongoing experiments;
9.  bring observations/questions from the Pro Bono Clinic;
10. participate in literature inquiry;
11. develop pilot questions;
12. participate in posters/presentations;
13. contribute to manuscripts when warranted.

Different students can develop different specialties:

-   OpenCap/OpenSim;
-   IMUs;
-   ultrasound;
-   EMG;
-   physiological measurement;
-   Python/data analysis;
-   ergonomics;
-   motor control;
-   clinical measurement.

This creates institutional knowledge that can be transmitted from one
student cohort to another.

### Movement Inquiry Meeting

A possible recurring lab activity is a **Movement Inquiry Meeting**,
perhaps every two or three weeks.

Students, faculty, and potentially clinicians bring observations or
questions.

The process might ask:

-   What exactly was observed?
-   Why might it matter?
-   What mechanisms could explain it?
-   What is already known?
-   Can the phenomenon be operationalized?
-   What measurements would be informative?
-   What competing explanations could be distinguished?
-   Is this a clinical question, educational question, methodological
    question, or research question?
-   Is a study warranted?

Many questions should appropriately terminate at literature review or
discussion. A smaller number become pilot experiments or formal studies.

------------------------------------------------------------------------

## 14. Educational philosophy

The HMS Lab should cultivate **research inquiry**, not simply "student
research productivity."

The desired habit is:

> Encounter something clinically or scientifically puzzling and ask:
> **How could we know more about this?**

A useful statement is:

> **The Human Movement Systems Laboratory provides a place where
> observations from clinical practice can become questions, questions
> can become measurements, and measurements can become new understanding
> of human movement.**

This connects research methods directly to clinical education.

------------------------------------------------------------------------

## 15. Relationship to the existing computational research program

The current professional/research ecosystem includes several existing
projects/concepts.

### stats4PT

Concerned with how observations become evidence and warranted scientific
claims.

### Physiolog

Concerned with generative physiological mechanisms and how/why effects
occur, rather than only observed associations.

### Models4PT

Concerned with integration and computational representation of
causal/clinical knowledge.

### Clinical Inference Engine

Concerned with bringing population knowledge and patient-specific
information into transparent reasoning about individual patients.

### HMS Lab

Adds an empirical engine:

**observation · measurement · experimentation · human movement**

The HMS Lab should therefore be integrated rather than treated as an
unrelated fifth project.

A conceptual architecture is:

**HMS Lab → observations**

↓

**stats4PT → evidence / warranted claims**

↓

**Physiolog → mechanisms**

↓

**Models4PT → integrated causal knowledge**

↓

**Clinical Inference → patient-specific reasoning**

But the system should ultimately be cyclical rather than purely linear.

A stronger formulation is:

# Patient → Question → Measurement → Evidence → Mechanism → Model → Patient

The Pro Bono Clinic and HMS Lab give this architecture a real clinical
and experimental loop.

------------------------------------------------------------------------

## 16. Integration of clinic, lab, computation, and education

A more complete conceptual cycle is:

### Pro Bono Clinic

Students encounter real people, movement problems, rehabilitation
challenges, and clinically puzzling phenomena.

↓

### Clinical Inquiry

What was observed? What might explain it? What is uncertain?

↓

### HMS Lab

Can the phenomenon be observed or measured more carefully?

↓

### stats4PT

What can the resulting observations legitimately support?

↓

### Physiolog

What mechanisms might generate the observed behavior?

↓

### Models4PT

How does the finding integrate with existing causal and mechanistic
knowledge?

↓

### Clinical reasoning / Clinical Inference

What might the population/mechanistic knowledge mean---and not
mean---for an individual?

↓

### Pro Bono Clinic

This is a central conceptual integration and should be preserved when
redesigning the website or explaining the research program.

------------------------------------------------------------------------

## 17. Industry collaboration

The HMS Lab should be intentionally capable of working with companies.

The proposition should **not** be:

> We are a university biomechanics lab looking for biomechanics
> projects.

A better proposition is:

> **We help organizations understand how people move, work, interact
> with products, and adapt to physical demands.**

Potential collaboration domains include:

-   rehabilitation technology;
-   mobility devices;
-   wearable sensors;
-   movement algorithms;
-   medical devices;
-   workplace ergonomics;
-   occupational fatigue;
-   product usability;
-   human-device interaction;
-   assistive technology;
-   movement measurement validation;
-   prototype comparison;
-   human-performance assessment.

Potential services/research capabilities might include:

-   human-subject movement studies;
-   movement characterization;
-   wearable validation;
-   clinically meaningful movement protocols;
-   gait/balance/functional movement analysis;
-   fatigue/adaptation studies;
-   ergonomic field measurement;
-   prototype comparison;
-   movement dataset generation;
-   algorithm validation;
-   multimodal physiological/movement studies.

The lab should emphasize the **human side of the human-device/work
system**, rather than competing with companies' internal engineering
teams.

------------------------------------------------------------------------

## 18. New Hampshire industry prospects already identified

These are leads to investigate, not established partners.

### Simbex --- Lebanon, NH

Potential fit:

-   wearables;
-   movement measurement;
-   gait biomechanics;
-   sensor/algorithm validation;
-   rehabilitation applications;
-   field and clinical studies.

### DEKA Research & Development --- Manchester, NH

Potential fit:

-   mobility;
-   medical devices;
-   human-device interaction;
-   physical demand;
-   movement strategies;
-   adaptation;
-   functional performance.

### Mobius Mobility --- Manchester, NH

Potential fit around iBOT:

-   transfers;
-   upper-extremity demand;
-   postural control;
-   movement during device interaction;
-   caregiver biomechanics;
-   motor learning;
-   fatigue;
-   terrain transitions;
-   functional outcomes.

### Mobius Bionics --- Manchester, NH

Potential fit around advanced upper-limb prosthetics:

-   upper-extremity kinematics;
-   compensatory trunk movement;
-   motor learning;
-   task performance;
-   functional outcomes;
-   rehabilitation.

### Hypertherm Associates --- NH

Potential fit:

-   workplace ergonomics;
-   repetitive movement;
-   material handling;
-   workstation design;
-   cumulative physical exposure;
-   fatigue;
-   movement variability;
-   before/after ergonomic intervention.

### Product-development / human-factors firms

Possible channel partners include NH organizations involved in:

-   product development;
-   medical devices;
-   human factors;
-   ergonomics;
-   usability;
-   prototyping.

The idea is that such organizations might use the HMS Lab for
specialized instrumented human-movement/clinical evaluation without
maintaining that capability internally.

All company information should be re-verified before outreach because
capabilities, locations, personnel, and strategic priorities change.

------------------------------------------------------------------------

## 19. Industry expansion model

The initial lab should demonstrate capability before aggressive
fundraising or company outreach.

Proposed progression:

**\$25k institutional seed**

→ **minimum viable lab**

→ **demonstration research**

→ **visible evidence of capabilities**

→ **industry conversations**

→ **small sponsored projects**

→ **project-funded instrumentation expansion**

→ **larger contracts/grants**

If an industry project requires instrumentation the lab does not
possess, equipment acquisition can potentially become part of the
project budget.

The laboratory should therefore expand in response to demonstrated
scientific and partner needs rather than attempting to purchase every
possible technology at inception.

------------------------------------------------------------------------

## 20. Future promotional/fundraising artifacts

These should be developed **after the minimal laboratory is operational
and has generated authentic examples**.

Potential artifacts:

-   HMS Lab webpage;
-   one-page company-facing capability sheet;
-   short technical capabilities document;
-   short slide deck;
-   photographs of actual laboratory work;
-   short demonstration videos;
-   synchronized movement/sensor visualizations;
-   example analyses;
-   student research profiles;
-   pilot-study results;
-   industry collaboration examples once available.

The strongest company pitch is not:

> Plymouth State is establishing a movement laboratory.

It is:

> **Here is our laboratory. Here is what we can measure. Here is an
> example of the system deployed in the field. Here is the analysis we
> produced. What human-movement problem do you have that we could
> investigate together?**

------------------------------------------------------------------------

## 21. Professional-community positioning

The research direction intersects several professional communities.

### American Society of Biomechanics (ASB)

A particularly relevant professional home for:

-   human movement;
-   biomechanics;
-   neuromechanics;
-   rehabilitation;
-   computational modeling;
-   movement measurement.

An ASB membership application has been submitted and paid; membership
review was reported as taking approximately 4--6 weeks.

### American Physical Society (APS)

Potential intellectual homes include:

-   Division of Biological Physics;
-   Division of Statistical and Nonlinear Physics;
-   Division of Soft Matter where relevant.

Potential publication venues, depending on the work, include:

-   Physical Review E;
-   Physical Review Research;
-   PRX Life;
-   Physical Review Letters for sufficiently general physical results.

The long-term scientific identity could intersect with **nonequilibrium
and nonlinear physics of human movement**, although the HMS Lab itself
should remain accessible to clinical, student, and industry audiences.

------------------------------------------------------------------------

## 22. What the lab should NOT become

Avoid allowing the HMS Lab to drift into any of the following by
default:

### A miniature conventional gait laboratory

Do not spend scarce resources imitating a large marker-based
motion-capture facility merely because that is what a biomechanics lab
is expected to look like.

### An equipment collection

Instrumentation exists to answer questions. Equipment ownership is not
the laboratory's scientific identity.

### A clinical testing service without governance

The Pro Bono Clinic relationship is important, but research, educational
measurement, clinical care, and diagnostic services must remain
appropriately distinguished.

### A faculty-only research project

Student inquiry and integration with the DPT program are central to the
concept.

### A purely computational lab

Computation is central, but the empirical connection to actual movement,
physiology, rehabilitation, and work is equally important.

### A purely rehabilitation lab

Rehabilitation is central, but occupational ergonomics, human
performance, movement science, device interaction, and industry
collaboration should remain within scope.

### A low-cost lab defined by what it cannot afford

Low-cost, portable measurement should be framed as a methodological and
translational strength.

------------------------------------------------------------------------

## 23. Distinctive value proposition

The laboratory's distinctive asset is not its cameras or sensors.

A useful formulation is:

> **The HMS Lab turns human-movement problems into rigorous questions,
> determines what needs to be measured, integrates multimodal
> observations, and uses computational approaches to understand the
> system that produced them.**

For industry:

> **Bring us a problem involving people moving, working, or physically
> interacting with a product, and we will help determine how to measure
> and study it.**

For students:

> **Bring us something about human movement that you do not understand,
> and we will ask how it could be investigated.**

For the DPT program:

> **The lab creates a bridge between clinical observation, research
> inquiry, quantitative measurement, and scientific reasoning.**

------------------------------------------------------------------------

## 24. Potential website architecture

Do not implement automatically. This is a design direction for later
consideration.

The professional site could present two complementary but intersecting
domains.

### Computational Clinical Inquiry

-   stats4PT
-   Physiolog
-   Models4PT
-   Clinical Inference Engine

### Human Movement Systems Laboratory

-   measurement;
-   experimentation;
-   modeling;
-   rehabilitation;
-   ergonomics;
-   student inquiry;
-   industry/community collaboration.

These are not separate research identities.

They intersect around:

-   observation;
-   uncertainty;
-   mechanisms;
-   causal knowledge;
-   computational representation;
-   patient-specific reasoning.

The HMS Lab provides an empirical/experimental counterpart to the
computational clinical-inquiry program.

------------------------------------------------------------------------

## 25. Possible overarching professional statement

A working statement that merges the existing and emerging programs is:

> **Clinical inquiry begins with observation. My work examines how
> observations---from research, physiology, human movement, and clinical
> encounters---can be measured, interrogated, explained mechanistically,
> represented computationally, and ultimately used to support better
> reasoning about individual patients.**

This is provisional but captures the intended integration.

------------------------------------------------------------------------

## 26. Important implementation principle for Codex

When modifying the professional website or related project materials:

1.  **Inspect the existing repository before making changes.**
2.  Preserve the existing intellectual architecture unless explicitly
    asked to revise it.
3.  Do not treat HMS Lab as a replacement for stats4PT, Physiolog,
    Models4PT, or the Clinical Inference Engine.
4.  Integrate HMS as the empirical human-movement/measurement component
    of the broader clinical-inquiry program.
5.  Keep claims about current laboratory capabilities conservative until
    equipment models, software, synchronization, protocols, governance,
    and validation are verified.
6.  Distinguish current capabilities from planned capabilities.
7.  Do not imply existing company partnerships where none exist.
8.  Do not imply that Pro Bono Clinic patients are automatically
    research participants or that HMS currently provides clinical
    diagnostic testing.
9.  Preserve the distinction between a **vision**, an **implemented
    capability**, and an **established research result**.
10. Favor clear scientific language over promotional language.

------------------------------------------------------------------------

## 27. Immediate next steps

Likely near-term work includes:

### Laboratory inventory

Create a detailed inventory of:

-   exact Movesense models;
-   BIOPAC modules/transducers;
-   exact Clarius models and software/licenses;
-   available iPhones/iPads;
-   computers;
-   stands/tripods;
-   clinical equipment;
-   dynamometers;
-   scales;
-   balance equipment;
-   treadmills;
-   rehabilitation equipment;
-   other DPT program resources;
-   potentially shareable equipment elsewhere at the university.

### Technical capability specification

Define:

-   movements/tasks that must be measurable;
-   indoor/outdoor requirements;
-   field-deployment requirements;
-   sampling requirements;
-   synchronization requirements;
-   raw-data access;
-   export formats;
-   APIs/SDKs;
-   portability;
-   number of sensors/subjects;
-   storage/computing requirements;
-   explicit things version 1 will not attempt.

### Representative experiment matrix

Develop approximately 10 representative experiments spanning:

-   rehabilitation;
-   ergonomics;
-   wearable validation;
-   product/device evaluation;
-   physiological-movement integration;
-   fundamental movement science.

Map existing equipment against each experiment and identify repeated
gaps.

### \$25k purchasing plan

Only after the inventory and experiment matrix.

Likely categories include:

-   external force/contact measurement;
-   synchronization infrastructure;
-   computing;
-   mounts/stands;
-   lighting;
-   equipment cases;
-   attachment systems;
-   calibration;
-   storage;
-   targeted BIOPAC expansion;
-   task-specific instrumentation.

### Governance

Clarify:

-   relationship to Pro Bono Clinic;
-   student participation;
-   research vs clinical activity;
-   IRB processes;
-   data governance;
-   ultrasound use/training;
-   faculty supervision;
-   industry-sponsored research procedures;
-   university contracting/IP processes where relevant.

### Pilot studies

Select a small number of projects that demonstrate:

-   controlled movement measurement;
-   portable/field measurement;
-   computational/methodological sophistication.

### Public-facing materials

Develop only once authentic laboratory work can be shown.

------------------------------------------------------------------------

## 28. Working one-sentence summaries

### Scientific

> **The HMS Lab studies how human movement emerges from interacting
> physiological, neuromuscular, mechanical, and environmental systems
> using accessible multimodal measurement and computational modeling.**

### Educational

> **The HMS Lab gives DPT students a place to turn observations and
> questions from clinical experience into structured scientific
> inquiry.**

### Clinical-program relationship

> **The HMS Lab connects clinical observation in the Pro Bono Clinic
> with quantitative measurement, research inquiry, and scientific
> reasoning.**

### Industry

> **The HMS Lab partners with organizations to measure and understand
> how people move, work, interact with products, and adapt to physical
> demands.**

### Methodological

> **How much of the scientifically important structure of human movement
> can we recover from strategically chosen, relatively inexpensive
> measurements?**

------------------------------------------------------------------------

## 29. Core idea to preserve

The laboratory is not fundamentally about owning motion-analysis
equipment.

It is about building an infrastructure in which:

**observations become questions;**

**questions become measurements;**

**measurements become evidence;**

**evidence is connected to mechanisms;**

**mechanisms become computational models;**

**and those models ultimately improve how we reason about human movement
and individual patients.**

That is the conceptual bridge between the Human Movement Systems
Laboratory, the DPT program, the Pro Bono Clinic, the existing
computational research program, and future industry collaboration.
