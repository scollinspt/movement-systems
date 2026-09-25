# Professional Profile Integration

## Purpose

This note preserves the handoff from the initial `movementsystems.org` implementation to
the next `scollinspt` update. The professional-profile workspace already includes
`scollinspt`, stats4PT, Physiolog, Models4PT, the Clinical Inference Engine, and
`movement-systems`.

## Repository State Before The Update

On 2026-09-25, the local `scollinspt` `main` branch was four commits behind
`origin/main`. Synchronize it and inspect the incoming changes before editing. Do not
overwrite newer remote work.

## Profile Update

Update `scollinspt` so the integrated professional program reflects these decisions:

- Physical therapists are **human movement system specialists**.
- Movement Systems studies how movement emerges, how it can be measured, and how
  population knowledge about movement becomes useful for one person through clinical
  instantiation.
- The Human Movement Systems Laboratory is the clinically oriented empirical movement
  research program within Movement Systems.
- The HMS Lab turns observations and questions from physical therapy into governed
  measurement, experimentation, mechanistic explanation, modeling, and new clinical
  questions.
- The lab is part of the broader Clinical Inquiry program rather than a conventional
  biomechanics service or an unrelated research identity.
- **Instantiation** is the disciplined application of population evidence, mechanisms,
  and movement knowledge to an inspectable working model of one person. Population
  knowledge informs but does not determine patient-specific conclusions.
- The HMS Lab supports Plymouth State University DPT's clinicians-first, hands-on
  learning philosophy and its relationship to the Pro Bono Clinic. Clinical care,
  education, and research remain distinct and appropriately governed.
- Sean Collins's professional profile should connect this work to his established
  background in physical therapy, physiology, measurement, ergonomics and human factors,
  causal analysis, evidence synthesis, and computational clinical inquiry.

## Ecosystem Position

The profile should present the projects as distinct but connected:

```text
stats4PT evidence + Physiolog mechanisms + Movement Systems knowledge
                              |
                              v
                Models4PT population causal knowledge
                              |
                              v
          Clinical Inference Engine patient-specific instantiation
```

The HMS Lab supplies movement observations, experiments, and empirical questions.
`scollinspt` owns professional identity and discovery; it should link to authoritative
project sites rather than duplicate their content.

## Publication And Deployment Boundary

The Movement Systems source is committed and pushed, but the site has not yet received
its first approved GitHub Pages deployment or DNS activation. Do not describe
`movementsystems.org` as live until that deployment is verified.

Before deploying `scollinspt`:

1. inspect its current GitHub Pages workflow or branch-based publication method;
2. preserve incoming remote changes and the site's established visual language;
3. update the homepage, research/program description, and projects area consistently;
4. verify every Movement Systems link against the actual deployment state;
5. test desktop and mobile rendering, internal links, and metadata; and
6. commit and push only after the public profile is internally consistent.
