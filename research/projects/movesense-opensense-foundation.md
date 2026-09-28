# Movesense-OpenSense Laboratory Foundation

- **Identifier:** HMS-PROJ-001
- **Content type:** Project
- **Maturity:** Proposed
- **Created:** 2026-09-28
- **Responsible investigator:** Sean M. Collins, PT, ScD
- **Setting:** Human Movement Systems Laboratory, Plymouth State University
- **Implementation repository:**
  [`movesense-opensense`](https://github.com/scollinspt/movesense-opensense)
- **Publication status:** Public planning record; not an operational capability claim

## Project question and rationale

Can the HMS Lab establish an open, reproducible pathway from cost-effective Movesense
wearable sensors to synchronized, convention-documented orientation data suitable for
OpenSense/OpenSim?

This is the lab's first setup project because it exercises the infrastructure needed for
later empirical work: equipment inventory, governed storage, acquisition, timing,
calibration, transformation provenance, software environments, validation fixtures, and
clear boundaries between technical interoperability and scientific or clinical validity.
It also tests the lab's premise that portable, strategically chosen measurements can
support serious movement inquiry without making expensive instrumentation the default.

## Type, task, and scope

This is a methodological and laboratory-readiness project. Initial work uses non-human
bench recordings, prescribed sensor motions, and synthetic or explicitly redistributable
fixtures. It does not initially recruit participants or investigate a clinical question.

The implementation scope is:

```text
Movesense raw IMU samples
  -> sensor identity and native timing
  -> synchronization and resampling
  -> sensor calibration
  -> documented sensor fusion
  -> explicit coordinate transformations
  -> OpenSense-compatible quaternion .sto
  -> IMUPlacer and orientation-based inverse kinematics
```

## Development plan

1. Inventory exact sensors, identifiers, firmware, accessories, receiving devices, and
   acquisition software.
2. Select and document the initial official acquisition route.
3. Capture a non-human bench recording from one sensor and verify its schema, units,
   timing, sequence information, and integrity indicators.
4. Capture a mechanically shared event with two sensors and quantify clock offset,
   drift, packet loss, jitter, and residual alignment error.
5. Select maintained, license-compatible calibration and sensor-fusion methods.
6. Define quaternion order, rotation direction, handedness, frame mappings, magnetic
   handling, and invalid-state behavior.
7. Validate static poses and prescribed rotations before exporting OpenSense input.
8. Complete a bounded two- or three-sensor OpenSense demonstration using released
   OpenSim Python APIs.

## Milestones and decision points

- **M1:** Verified hardware inventory and acquisition schema.
- **M2:** Measured multi-sensor timing performance under representative load.
- **M3:** Documented orientation and coordinate conventions with known-rotation tests.
- **M4:** Reproducible OpenSense calibration and inverse-kinematics acceptance run.
- **Decision:** Advance to Project HMS-PROJ-002 only when timing, orientation, and export
  limits are explicit enough to design a meaningful comparison.

## Governance and permissions

Authoritative recordings belong in institution-managed governed storage. Git and SimTK
may contain only software, public configuration, synthetic or explicitly redistributable
fixtures, and permission-cleared validation artifacts. Human-subject work requires a
separate protocol, governance determination, and data plan.

## Planned outputs

- hardware and software inventory records;
- versioned raw, synchronized, orientation, and OpenSense-export contracts;
- acquisition and inspection software;
- synthetic or redistributable test fixtures;
- timing, orientation, and coordinate-transformation validation reports; and
- a reproducible minimal OpenSense workflow.

## Limitations and unsupported interpretations

- Simultaneous BLE collection does not establish synchronized sensing.
- Successful file export or inverse kinematics establishes interoperability, not
  measurement validity.
- Bench tests do not establish performance during human movement.
- Orientation-only inverse kinematics does not recover global translation.
- No scientific or clinical claim follows from completion of this setup project alone.

## Current conclusion and next step

The project is approved here only as a proposed HMS Lab setup sequence. The next step is
to complete the hardware and firmware inventory and capture the first non-human bench
recording.