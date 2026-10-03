# Movesense-OpenSense And OpenCap Comparison

- **Identifier:** HMS-PROJ-005
- **Content type:** Project
- **Maturity:** Proposed
- **Created:** 2026-09-28
- **Responsible investigator:** Sean M. Collins, PT, ScD
- **Setting:** Human Movement Systems Laboratory, Plymouth State University
- **Depends on:** [HMS-PROJ-004](movesense-opensense-interoperability.md)
- **Implementation repository:**
  [`movesense-opensense`](https://github.com/scollinspt/movesense-opensense)
- **External resource:** [OpenCap](https://www.opencap.ai/)
- **Publication status:** Public planning record; not an operational capability or
  validity claim

## Project question and rationale

For bounded movements and comparable kinematic quantities, how closely do synchronized
Movesense-OpenSense and OpenCap estimates agree, where do they diverge, and which timing,
placement, calibration, visibility, task, and modeling conditions explain the observed
differences?

This project expands the verified wearable/OpenSense pipeline with OpenCap, the HMS Lab's intended
portable video-based movement system. It begins the lab's multimodal validation program
and develops the common-timeline practices needed for later integration across video,
wearables, physiology, ultrasound, and external-force measurements.

## Type, task, and scope

This is a comparative method-development and bounded validation project. It begins with
non-human timing events and prescribed motions, then may progress to a small set of
permission-cleared human movement tasks only after governance requirements are resolved.
Candidate tasks should favor controlled calibration, observable segment motion, and
clearly comparable outputs before expanding to clinically complex movements.

OpenCap is a comparison method with its own assumptions, uncertainty, and failure modes;
it is not treated as ground truth. Agreement between systems does not establish that
either system measures the underlying movement without error.

## Development plan

1. Inventory and verify the exact OpenCap capture devices, software versions, camera
   configuration, calibration process, exports, units, timing information, and licenses.
2. Define quantities that can be compared without conflating coordinate systems, model
   definitions, filtering, or inverse-kinematics assumptions.
3. Establish a shared event or other defensible common-timeline method and quantify its
   alignment uncertainty.
4. Develop a protocol for sensor placement, camera placement, calibration, task
   execution, data quality, and exclusion criteria.
5. Compare prescribed or mechanically constrained motions before human movement.
6. Obtain and record the governance determination required before any human comparison.
7. If permitted, begin with the smallest human sensor configuration already accepted in
   HMS-PROJ-004, then add placements or sensors only after the preceding non-human and
   human stage meets predefined criteria.
8. Compare selected segment orientations and joint kinematics during a small set of
   bounded movement tasks.
9. Analyze agreement, bias, uncertainty, sensitivity, missingness, and task-specific
   failure modes rather than relying on correlation alone.
10. Publish only permission-cleared protocols, aggregate findings, and reproducibility
   materials with explicit interpretation limits.

## Milestones and decision points

- **M1:** Verified OpenCap acquisition and export contract.
- **M2:** Quantified cross-system timing alignment from a shared event.
- **M3:** Prescribed-motion comparison with explicit coordinate and model mappings.
- **M4:** Governance decision for any human movement comparison.
- **M5:** Bounded task comparison with uncertainty and failure-mode analysis.
- **Decision:** Expand to clinically relevant questions only when the selected task,
  measures, uncertainty, and interpretation limits support that transition.

## Governance, collaboration, and permissions

The use of OpenCap does not imply collaboration with its developers or institutional
partners. Any collaboration will be named only after it is established and public
disclosure is permitted. Human recordings, device identifiers, consent materials, and
unapproved analyses belong in governed storage outside Git.

## Planned outputs

- verified OpenCap acquisition and export records;
- a cross-system synchronization protocol and uncertainty report;
- explicit Movesense/OpenSense/OpenCap coordinate and model mappings;
- prescribed-motion and bounded-task comparison protocols;
- aggregate agreement, sensitivity, and failure-mode analyses; and
- a reusable multimodal validation pattern for later HMS Lab methods.

## Limitations and unsupported interpretations

- OpenCap is not assumed to be a criterion-standard measurement system.
- Cross-system agreement is not accuracy unless compared with an appropriate independent
  reference and uncertainty model.
- Results from one task, population, device configuration, or environment do not
  generalize automatically.
- Similar joint-angle outputs may conceal compensating errors in timing, segment
  orientation, model scaling, or inverse kinematics.
- Technical validation does not establish clinical utility.

## Current conclusion and next step

This project was initially proposed as HMS-PROJ-002 on 2026-09-28 and was renumbered
HMS-PROJ-005 on 2026-10-03 when the laboratory made intermediate scaling, orientation,
and OpenSense projects explicit. It remains proposed and depends on HMS-PROJ-004. Its next planning step
is to define the smallest prescribed-motion comparison and determine what timing metadata
is actually available from the selected OpenCap workflow.