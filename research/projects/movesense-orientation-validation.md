# Movesense Calibration And Orientation Validation

- **Identifier:** HMS-PROJ-003
- **Content type:** Project
- **Maturity:** Proposed
- **Created:** 2026-10-03
- **Responsible investigator:** Sean M. Collins, PT, ScD
- **Setting:** Human Movement Systems Laboratory, Plymouth State University
- **Depends on:** [HMS-PROJ-002](movesense-multisensor-scaling.md)
- **Implementation repository:**
  [`movesense-opensense`](https://github.com/scollinspt/movesense-opensense)
- **Publication status:** Public planning record; not a validity claim

## Project question and rationale

Can the lab produce convention-documented, quality-controlled orientation estimates from
Movesense IMU data, and under which static, prescribed-motion, magnetic, placement, and
sensor-count conditions do those estimates remain usable?

Raw multi-sensor acquisition is not equivalent to orientation measurement. Calibration,
sensor fusion, coordinate conventions, initialization, magnetic handling, and failure
states require their own evidence before OpenSense integration.

## Staged progression

1. Validate calibration and orientation behavior with one sensor in non-human static
   poses and prescribed rotations.
2. If governed human feasibility is permitted, repeat bounded one-sensor static and
   prescribed movements without making validity claims.
3. Repeat non-human orientation tests first with two sensors, then at the sensor counts
   supported by HMS-PROJ-002.
4. If permitted, repeat simple human feasibility sessions first with two sensors and
   then through the justified sensor-count progression.
5. Advance only when quaternion, coordinate, continuity, drift, magnetic-sensitivity,
   and invalid-state acceptance criteria are satisfied at the preceding stage.

## Milestones and decision points

- **M1:** Selected, versioned calibration and sensor-fusion methods.
- **M2:** Explicit quaternion order, rotation direction, handedness, frame mappings,
  magnetic handling, initialization, and invalid-state behavior.
- **M3:** One-sensor non-human static and prescribed-rotation report.
- **M4:** Multi-sensor non-human orientation report across supported sensor counts.
- **M5:** If permitted, staged human feasibility reports with placement and data-quality
  findings.
- **Decision:** Advance to HMS-PROJ-004 only when orientation and coordinate limits are
  explicit enough to interpret an OpenSense acceptance run.

## Governance and interpretation boundary

Human feasibility activity requires a prior documented institutional governance determination and applicable
consent, privacy, supervision, and data plans. Human motion is used to test workflow and
bounded method behavior, not to establish clinical meaning or population performance.

## Planned outputs

- calibration and orientation data contracts;
- convention and coordinate-frame documentation;
- static, prescribed-rotation, drift, and magnetic-sensitivity reports;
- sensor-count-specific orientation quality limits; and
- permission-cleared or synthetic acceptance fixtures.

## Limitations and unsupported interpretations

- Normalized quaternions can still be wrong in direction, frame, heading, or timing.
- Prescribed-motion performance does not generalize automatically to free human motion.
- Human feasibility does not establish validity, reliability, or clinical utility.

## Current conclusion and next step

This project remains proposed and depends on the timing and scaling envelope established
by HMS-PROJ-002.