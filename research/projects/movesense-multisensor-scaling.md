# Movesense Multi-Sensor Timing And Scaling

- **Identifier:** HMS-PROJ-002
- **Content type:** Project
- **Maturity:** Proposed
- **Created:** 2026-10-03
- **Responsible investigator:** Sean M. Collins, PT, ScD
- **Setting:** Human Movement Systems Laboratory, Plymouth State University
- **Depends on:** [HMS-PROJ-001](movesense-opensense-foundation.md)
- **Implementation repository:**
  [`movesense-opensense`](https://github.com/scollinspt/movesense-opensense)
- **Publication status:** Public planning record; not an operational capability claim

## Project question and rationale

How does Movesense acquisition performance change as the HMS Lab progresses from two
sensors to the full ten-device inventory, and when can adding or removing a sensor become
a configuration change rather than a software change?

One-sensor success does not establish multi-sensor timing, BLE capacity, host scheduling,
or recording integrity. This project makes scaling an empirical question and separates
software configurability from demonstrated performance at a specific sensor count,
sample rate, receiver, and environment.

## Staged progression

1. Capture a mechanically shared event with two sensors in a non-human setup.
2. Quantify clock offset, drift, packet loss, jitter, start and stop behavior, and
   residual alignment error.
3. Repeat non-human load tests with 3, 5, and 10 sensors at the intended IMU stream and
   sample rate. A stage may be skipped only with a recorded rationale.
4. Make sensor count configuration-driven through a versioned device list rather than
   code changes.
5. Obtain and record the governance determination required before multi-sensor human
   feasibility activity.
6. If permitted, complete a simple two-sensor human feasibility session.
7. Advance human feasibility through 3, 5, and 10 sensors only after the corresponding
   non-human load stage and the preceding human stage satisfy predefined stop/go criteria.

Human sessions test placement workflow, attachment, tolerability, connection continuity,
missingness, and synchronized recording under simple prescribed activity. They do not
establish biomechanical accuracy or clinical utility.

## Milestones and decision points

- **M1:** Two-sensor non-human timing and integrity report.
- **M2:** Non-human 3-, 5-, and 10-sensor load envelope.
- **M3:** Configuration-driven acquisition for an arbitrary approved device list.
- **M4:** Documented governance determination for multi-sensor human feasibility.
- **M5:** If permitted, staged 2-, 3-, 5-, and 10-sensor human feasibility reports.
- **Decision:** Advance a sensor count only when the prior stage meets predefined
  connection, missingness, timing, and safety criteria.

## Governance and stop criteria

Human-participant activity requires a documented institutional determination and the
applicable consent, privacy, supervision, and data-management procedures. Stop or step
back when there is unplanned disconnection, unacceptable missingness or timing error,
attachment failure, participant discomfort, protocol deviation, or loss of provenance.

## Planned outputs

- versioned multi-sensor acquisition configuration;
- sensor-count-specific timing, packet-loss, and missingness reports;
- receiver and software load limits;
- non-human and, if permitted, human feasibility protocols; and
- an evidence-based maximum supported sensor count for the tested configuration.

## Limitations and unsupported interpretations

- A configuration option does not prove that a sensor count performs acceptably.
- Simultaneous BLE receipt does not establish synchronized sensing.
- Passing a ten-sensor load test does not validate placement or movement estimates.
- Human feasibility does not establish validity, reliability, or clinical utility.

## Current conclusion and next step

This project remains proposed and begins only after HMS-PROJ-001 establishes stable
single-sensor acquisition. Its first test is a two-sensor non-human shared event.