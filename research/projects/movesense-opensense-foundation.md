# Movesense Acquisition And Single-Sensor Feasibility

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
wearable sensors to governed, reproducible single-sensor recordings before scaling the
system or interpreting orientation and movement outputs?

This is the lab's first setup project because it exercises the infrastructure needed for
later empirical work: equipment inventory, governed storage, acquisition, timing,
software environments, validation fixtures, and clear boundaries between technical
feasibility and scientific or clinical validity.
It also tests the lab's premise that portable, strategically chosen measurements can
support serious movement inquiry without making expensive instrumentation the default.

## Type, task, and scope

This is a methodological and laboratory-readiness project. It begins with non-human
bench recordings from one sensor. A simple one-sensor human feasibility session may
follow only after a documented institutional governance determination and applicable
consent, privacy, and data plans are in place. That session tests attachment, workflow,
tolerability, recording continuity, and data quality; it does not validate a movement
measure or investigate a clinical question.

The implementation scope is:

```text
Movesense raw IMU samples
  -> sensor identity and native timing
  -> verified single-sensor acquisition
  -> governed one-sensor human feasibility
  -> versioned raw-data and provenance contracts
```

## Development plan

1. Inventory exact sensors, identifiers, firmware, accessories, receiving devices, and
   acquisition software.
2. Select and document the initial official acquisition route.
3. Capture a non-human bench recording from one sensor and verify its schema, units,
   timing, sequence information, and integrity indicators.
4. Define acceptance criteria for connection stability, sample continuity, sensor-native
  timing, host receipt timing, malformed records, and recording provenance.
5. Obtain and record the governance determination required before any human session.
6. If permitted, complete one simple one-sensor human feasibility session using a
  low-complexity static or prescribed movement and the same acquisition contract.
7. Compare bench and human-session workflow failures without interpreting the recording
  as a validated measure of human movement.

## Milestones and decision points

- **M1:** Verified hardware inventory and acquisition schema.
- **M2:** Reproducible non-human single-sensor recording with integrity checks.
- **M3:** Documented governance determination for human feasibility activity.
- **M4:** If permitted, completed one-sensor human feasibility session with workflow and
  data-quality findings.
- **Decision:** Advance to HMS-PROJ-002 only when single-sensor acquisition is stable and
  its limits are explicit. A human session is not required when governance does not
  permit or the non-human evidence does not justify it.

## Governance and permissions

Authoritative recordings belong in institution-managed governed storage. Git and SimTK
may contain only software, public configuration, synthetic or explicitly redistributable
fixtures, and permission-cleared validation artifacts. Human-subject work requires a
separate protocol, governance determination, and data plan.

## Planned outputs

- hardware and software inventory records;
- a versioned raw-sample and provenance contract;
- acquisition and inspection software;
- synthetic or redistributable test fixtures;
- a single-sensor bench report; and
- if permitted, a governed one-sensor human-feasibility report.

## Limitations and unsupported interpretations

- Simultaneous BLE collection does not establish synchronized sensing.
- Bench tests do not establish performance during human movement.
- A successful human feasibility session does not establish measurement validity,
  reliability, clinical utility, or readiness for research recruitment.
- No scientific or clinical claim follows from completion of this setup project alone.

## Current conclusion and next step

The project is approved here only as a proposed HMS Lab setup sequence. The next step is
to complete the hardware and firmware inventory and capture the first non-human bench
recording.