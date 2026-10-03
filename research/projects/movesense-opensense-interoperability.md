# Movesense-OpenSense Interoperability

- **Identifier:** HMS-PROJ-004
- **Content type:** Project
- **Maturity:** Proposed
- **Created:** 2026-10-03
- **Responsible investigator:** Sean M. Collins, PT, ScD
- **Setting:** Human Movement Systems Laboratory, Plymouth State University
- **Depends on:** [HMS-PROJ-003](movesense-orientation-validation.md)
- **Implementation repository:**
  [`movesense-opensense`](https://github.com/scollinspt/movesense-opensense)
- **Publication status:** Public planning record; not an operational capability claim

## Project question and rationale

Can validated Movesense orientation streams be transformed into reproducible
OpenSense-compatible inputs and complete bounded calibration and inverse-kinematics runs
without concealing timing, placement, coordinate, or model assumptions?

Successful acquisition and orientation estimation do not establish interoperability
with an OpenSim model. Sensor labels, model IMU frames, calibration pose, heading,
coordinate transformations, and output diagnostics require a distinct acceptance stage.

## Staged progression

1. Round-trip synthetic or known orientation trajectories through the OpenSense file
   contract.
2. Complete a non-human two- or three-sensor mechanical or prescribed-motion acceptance
   run before processing human movement.
3. Obtain and record the governance determination required before a human OpenSense
   feasibility session.
4. If permitted, complete a simple governed human session with two or three established
   placements and a controlled calibration pose.
5. Add placements and sensor counts incrementally only after each configuration has a
   documented mapping, calibration procedure, and acceptance result.

## Milestones and decision points

- **M1:** Versioned OpenSense quaternion `.sto` contract and round-trip checks.
- **M2:** Explicit sensor-to-model frame, heading, and calibration conventions.
- **M3:** Reproducible non-human `IMUPlacer` and `IMUInverseKinematicsTool` acceptance run.
- **M4:** If permitted, bounded two- or three-sensor human feasibility run.
- **M5:** Configuration-driven addition of previously validated sensor placements.
- **Decision:** Advance to HMS-PROJ-005 only when timing, orientation, placement,
  coordinate, and OpenSense output limits are explicit.

## Governance and interpretation boundary

Any human session requires prior institutional determination and applicable consent,
privacy, supervision, and data plans. OpenSense completion establishes technical
interoperability only; it does not establish biomechanical accuracy or clinical utility.

## Planned outputs

- OpenSense input and output contracts;
- sensor-label and model-frame configuration;
- calibration and heading protocol;
- automated acceptance workflow using released OpenSim Python APIs; and
- orientation-error and processing diagnostics.

## Limitations and unsupported interpretations

- Successful inverse kinematics does not establish valid movement estimates.
- Orientation-only inverse kinematics does not recover global translation.
- A validated placement is not evidence for an untested placement or sensor count.
- Human feasibility does not establish scientific or clinical validity.

## Current conclusion and next step

This project remains proposed and depends on convention-documented orientation evidence
from HMS-PROJ-003.