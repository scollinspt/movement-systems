# Tilt ECG Measurement And Physiology Review

- **Identifier:** HMS-PROJ-007
- **Content type:** Project
- **Maturity:** In progress — development project
- **Created:** 2026-10-23
- **Responsible investigator:** Sean M. Collins, PT, ScD
- **Setting:** Human Movement Systems Laboratory, Plymouth State University
- **Implementation repository:**
  [`movesense-opensense`](https://github.com/scollinspt/movesense-opensense)
- **Publication status:** Public development record; not a diagnostic, normative, or
  operational service claim

## Project question and rationale

Can the HMS Lab develop a reproducible, de-identified workflow that connects
Movesense ECG and chest-angle acquisition during tilt-table testing with governed
physiology review and reporting?

The project addresses the complete measurement path rather than treating acquisition,
analysis, or report generation as isolated tasks. Native signals and exact events must
remain immutable while calibration, interval review, eligibility decisions, conclusions,
and report approval remain explicit derived provenance.

## Current system

The development implementation includes:

1. live 512 Hz ECG and nominal 26 Hz inertial acquisition from one chest-worn Movesense
   sensor;
2. live ECG, five-beat HR, tilt, quality, phase, symptom, BP, and end-tidal CO2 display;
3. native-rate SQLite recording, a five-second summary, SHA-256 checksums, and a manifest;
4. separate checksum-verified review of corrected table angle, native R–R intervals,
   beat-to-beat HR, BP, end-tidal CO2, symptoms, HRV, and Poincare measures;
5. immutable review provenance; and
6. a de-identified portrait report requiring reviewer approval.

Working software and engineering validation do not establish diagnostic validity,
normative reference values, scientific validity, or readiness for distribution.

## Current development stage

Representative teaching/development and clinical-development workflows are being used
to refine:

- operator sequence and workflow friction;
- event and phase timing;
- ECG and R-wave quality;
- chest-angle and achieved-table-angle calibration;
- review exclusions, overrides, and conclusions;
- clinical physiology presentation; and
- report readability and export.

Clinical-development recordings remain governed clinical data. They do not become
research data merely because they reveal software or workflow improvements.

## Governance and safety

The system does not request or store a participant name, medical record number, date of
birth, address, or other direct identifier. Any authorized connection between a person,
recording ID, and report remains outside the acquisition and processing artifacts.

Approved clinical equipment, supervision, table safety, stopping criteria, emergency
procedures, and clinical documentation remain authoritative. The development system is
not a diagnostic monitor, clinical alarm, medical device, or substitute for those
systems.

Human recordings, derived reviews, reports, symptoms, and clinical observations remain
in governed storage outside Git. Public communication uses diagrams, synthetic data, or
explicitly permission-cleared material.

## Post-refinement directions

### Availability to other qualified users

Distribution requires a defined intended use, supported hardware and software,
installation and update procedures, training, acceptance tests, backup and recovery,
support, incident handling, and the applicable institutional, privacy, licensing,
regulatory, and clinical-governance determinations.

### Active versus passive orthostatic stress

A future prospective study may compare an active orthostatic stress protocol with
passive head-up tilt in people without signs, symptoms, or a diagnosis of dysautonomia.
The study requires prespecified protocols, outcomes, covariates, signal-quality rules,
sample-size rationale, analysis, ethics/governance review, consent, recruitment,
retention, and adverse-event procedures before enrollment.

Tilt angle is a conventional geometric proxy rather than the circulatory load itself.
The stationary chest accelerometer estimates gravity magnitude and direction in its
sensor frame, while the hydrostatic pressure difference depends on gravity and the
vertical distance between relevant vascular locations. A simplified aligned model
therefore depends on an anatomical length and the sine of tilt angle.

The study should test whether HR, BP, end-tidal CO2, symptom, and HRV responses are
better explained by corrected angle, the measured gravity component along a relevant
axis, standing height, direct heart-to-foot or heart-to-head distances, or a
prespecified hydrostatic-load estimate. Standing height is an accessible but coarse
proxy; segment and vascular-column distances may be more physiologically relevant.

The sensor does not directly measure vascular pressure. Active standing also includes
muscle-pump activity, joint configuration, and postural stabilization that must be
distinguished from passive gravitational loading.

Clinical-development recordings will not be included in that research dataset unless
their use is specifically authorized.

## Current conclusion and next step

The system has advanced from initial acquisition feasibility to integrated workflow
refinement. The next step is to review representative teaching and clinical-development
tests across the full acquisition-to-report path, preserve identified limitations, and
refine the method before making distribution or research decisions.
