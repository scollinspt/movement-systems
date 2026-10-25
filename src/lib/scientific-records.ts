export type EvidenceStatus = "documented" | "interpretive" | "proposed";

export type ScientificRecordType =
  | "conceptual-framework"
  | "scientific-foundation"
  | "research-approach";

export type ScientificSource = {
  id: string;
  citation: string;
  url?: string;
  contribution: string;
};

export type ScientificRecord = {
  id: string;
  type: ScientificRecordType;
  title: string;
  summary: string;
  evidenceStatus: EvidenceStatus;
  maturity: "source-grounded foundation" | "developing synthesis";
  organizationalScales: string[];
  timescales: string[];
  sources: ScientificSource[];
  limitations: string[];
  relatedRoutes: string[];
  lastReviewed: string;
};

export const researchApproachRecord = {
  id: "HMS-APPROACH-001",
  type: "research-approach",
  title: "Questions, Measurement, and Learning",
  summary:
    "A recursive research approach in which consequential questions guide measurement development, observations support bounded learning, and what is learned refines both the question and the measurement.",
  evidenceStatus: "interpretive",
  maturity: "developing synthesis",
  organizationalScales: [
    "measurement system",
    "scientific construct",
    "movement phenomenon",
    "clinical activity",
  ],
  timescales: ["single observation", "method development", "research program"],
  sources: [
    {
      id: "shoemaker-2020-cpg",
      citation:
        "Shoemaker MJ, Dias KJ, Lefebvre KM, Heick JD, Collins SM. Physical Therapist Clinical Practice Guideline for the Management of Individuals With Heart Failure. Physical Therapy. 2020;100:14-43.",
      url: "https://doi.org/10.1093/ptj/pzz127",
      contribution:
        "Published clinical algorithms connect patient status, task performance, endurance, signs of intolerance, and the next clinical decision.",
    },
    {
      id: "collins-clinical-physiology",
      citation:
        "Collins SM. Clinical Physiology: A Muscle Centered Approach.",
      url: "https://physiolog.org/textbook/",
      contribution:
        "Uses models, measurable objectives, physiological mechanisms, and iterative questions to connect foundational knowledge with clinical reasoning.",
    },
  ],
  limitations: [
    "The cycle organizes inquiry; it does not by itself establish that a measurement is valid or that an explanation is causal.",
    "Learning about a measurement system and learning about the phenomenon are related but distinct outcomes.",
  ],
  relatedRoutes: [
    "/foundations",
    "/foundations/attain-sustain-maintain",
    "/measurement-modeling",
    "/research",
  ],
  lastReviewed: "2026-10-25",
} satisfies ScientificRecord;

export const dynamicSystemsConstraintsRecord = {
  id: "HMS-FOUNDATION-001",
  type: "scientific-foundation",
  title: "Dynamic Systems, Constraints, and Dynamic Resources",
  summary:
    "A foundation for investigating how movement patterns emerge from changing organismic, task, and environmental constraints, and how coordination and available mechanical and physiological resources contribute to those patterns.",
  evidenceStatus: "documented",
  maturity: "source-grounded foundation",
  organizationalScales: [
    "body structure and function",
    "coordination",
    "activity",
    "participation",
  ],
  timescales: [
    "movement cycle",
    "continuous performance",
    "adaptation and rehabilitation",
    "development and disease progression",
  ],
  sources: [
    {
      id: "holt-wagenaar-saltzman-2010",
      citation:
        "Holt KG, Wagenaar RO, Saltzman E. A Dynamic Systems/Constraints Approach to Rehabilitation. Brazilian Journal of Physical Therapy. 2010;14(6):446-463.",
      url: "https://doi.org/10.1590/S1413-35552010000600002",
      contribution:
        "Connects organismic, task, and environmental constraints with coordination dynamics, biomechanical models, dynamic resources, locomotor adaptation, and rehabilitation reasoning.",
    },
  ],
  limitations: [
    "A constraints description does not by itself identify which interaction caused an observed movement pattern.",
    "Coordination dynamics characterize movement organization; biomechanical and physiological models are needed to investigate how a pattern is produced.",
    "A nonstandard movement pattern may be adaptive, but that does not establish that it is harmless, efficient across all timescales, or clinically preferable.",
  ],
  relatedRoutes: [
    "/theory",
    "/foundations/movement-solutions-optimization",
    "/foundations/attain-sustain-maintain",
    "/measurement-modeling",
  ],
  lastReviewed: "2026-10-25",
} satisfies ScientificRecord;

export const movementSolutionsOptimizationRecord = {
  id: "HMS-FOUNDATION-002",
  type: "scientific-foundation",
  title: "Movement Solutions, Optimization, and Physical Therapy Diagnosis",
  summary:
    "A physical therapy foundation for understanding purposeful movement as a changing, context-dependent solution that emerges from interacting organismic resources and constraints, task demands, and environmental conditions.",
  evidenceStatus: "documented",
  maturity: "source-grounded foundation",
  organizationalScales: [
    "body structure and function",
    "movement behavior",
    "activity",
    "participation",
  ],
  timescales: [
    "initial examination",
    "task performance",
    "episode of care",
    "recovery and adaptation",
  ],
  sources: [
    {
      id: "guccione-neville-george-2019",
      citation:
        "Guccione AA, Neville BT, George SZ. Optimization of Movement: A Dynamical Systems Approach to Movement Systems as Emergent Phenomena. Physical Therapy. 2019;99(1):3-9.",
      url: "https://doi.org/10.1093/ptj/pzy116",
      contribution:
        "Frames purposeful movement as an emergent behavioral solution and develops implications for bounded variability, optimization, diagnosis, prognosis, and intervention in physical therapy.",
    },
    {
      id: "holt-wagenaar-saltzman-2010",
      citation:
        "Holt KG, Wagenaar RO, Saltzman E. A Dynamic Systems/Constraints Approach to Rehabilitation. Brazilian Journal of Physical Therapy. 2010;14(6):446-463.",
      url: "https://doi.org/10.1590/S1413-35552010000600002",
      contribution:
        "Provides the dynamic systems, constraints, and dynamic-resources foundation that Guccione and colleagues extend into movement-system expertise and diagnosis.",
    },
  ],
  limitations: [
    "Optimal does not mean normal, ideal, or universally best; criteria must be specified for a person, task, environment, and time.",
    "An initial diagnostic description supplies hypotheses and initial conditions, not a complete or permanent explanation.",
    "Variability can support adaptable performance or reflect limitation; its amount alone does not establish health or skill.",
  ],
  relatedRoutes: [
    "/theory",
    "/foundations/dynamic-systems-constraints",
    "/foundations/attain-sustain-maintain",
    "/clinical-inquiry",
  ],
  lastReviewed: "2026-10-25",
} satisfies ScientificRecord;

export const attainSustainMaintainRecord = {
  id: "HMS-CONCEPT-001",
  type: "conceptual-framework",
  title: "Attain, Sustain, Maintain",
  summary:
    "A hierarchical, scale-dependent framework used with existing approaches to classify constraints and limitations impacting whether a system can reach an objective, continue meeting it, and preserve or adapt the capacity required across repeated demands and longer timescales.",
  evidenceStatus: "interpretive",
  maturity: "developing synthesis",
  organizationalScales: [
    "molecular and cellular",
    "muscle fiber and motor unit",
    "muscle and joint",
    "limb and coordination",
    "whole-person activity",
    "participation",
  ],
  timescales: [
    "milliseconds",
    "seconds",
    "minutes",
    "hours and days",
    "weeks and months",
    "years and lifespan",
  ],
  sources: [
    {
      id: "collins-clinical-physiology-introduction",
      citation:
        "Collins SM. Clinical Physiology: A Muscle Centered Approach. Introduction.",
      url: "https://physiolog.org/textbook/introduction/",
      contribution:
        "Explicitly connects adaptation with the ability of muscle fibers to attain, sustain, and maintain tension.",
    },
    {
      id: "collins-clinical-physiology-fundamentals",
      citation:
        "Collins SM. Clinical Physiology: A Muscle Centered Approach. Fundamentals.",
      url: "https://physiolog.org/textbook/fundamentals/",
      contribution:
        "Distinguishes attaining tension from sustaining tension and relates each to different measurable properties.",
    },
    {
      id: "collins-clinical-physiology-energetics",
      citation:
        "Collins SM. Clinical Physiology: A Muscle Centered Approach. Energetics.",
      url: "https://physiolog.org/textbook/energetics/",
      contribution:
        "Develops rate-capacity tradeoffs, objective and subjective fatigue, recovery, and nested physiological timescales.",
    },
    {
      id: "shoemaker-2020-cpg",
      citation:
        "Shoemaker MJ, Dias KJ, Lefebvre KM, Heick JD, Collins SM. Physical Therapist Clinical Practice Guideline for the Management of Individuals With Heart Failure. Physical Therapy. 2020;100:14-43.",
      url: "https://doi.org/10.1093/ptj/pzz127",
      contribution:
        "Figure 2 asks first whether an activity can be performed and then whether endurance limits it, embedding an attain-sustain clinical decision structure.",
    },
  ],
  limitations: [
    "The unified framework is a developing synthesis; its operational definitions and measures require construct-specific evaluation.",
    "Attain, Sustain, and Maintain are not absolute properties and cannot be interpreted without a scale, objective, workload, duration, context, and success criterion.",
    "The framework does not imply that preserving function requires preserving an identical movement pattern.",
  ],
  relatedRoutes: [
    "/foundations",
    "/research-approach",
    "/measurement-modeling",
    "/research",
  ],
  lastReviewed: "2026-10-25",
} satisfies ScientificRecord;
