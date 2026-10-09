# HMS Lab Projects

This directory contains public project records at their stated maturity. A proposed
project is a reviewed plan, not evidence that a method is operational or scientifically
validated.

## Initial sequence

1. [Movesense acquisition and single-sensor feasibility](movesense-opensense-foundation.md)
2. [Movesense multi-sensor timing and scaling](movesense-multisensor-scaling.md)
3. [Movesense calibration and orientation validation](movesense-orientation-validation.md)
4. [Movesense-OpenSense interoperability](movesense-opensense-interoperability.md)
5. [Movesense-OpenSense and OpenCap comparison](movesense-opencap-validation.md)

## Ventilatory pump project

6. [Ventilatory Pump Measurement and Mechanics](ventilatory-pump-measurement-mechanics.md)

This project begins with development and evaluation of an accessible maximal inspiratory
pressure measurement system. Developing directions include synchronized pressure and
chest-wall motion measurement and computational thoracic modeling.

## Required escalation pattern

The sequence advances from one sensor to two sensors and then through staged 3-, 5-,
and 10-sensor configurations. Each new sensor count, task, or processing claim is tested
in a non-human setup before a corresponding human feasibility session is considered.

Human activity requires a documented institutional governance determination and the
applicable consent, privacy, supervision, and data plans. Human feasibility evaluates
workflow, attachment, tolerability, continuity, missingness, and bounded method behavior;
it does not establish validity, reliability, clinical utility, or an operational service.

Each stage has explicit stop/go criteria. Evidence from a lower sensor count or simpler
task does not automatically authorize progression to a higher count or more complex task.

Implementation code and public synthetic fixtures for this sequence belong in the
[`movesense-opensense`](https://github.com/scollinspt/movesense-opensense) repository.
Raw or controlled recordings, participant information, and unapproved analyses belong
in governed research storage outside Git.