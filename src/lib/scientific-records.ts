export type EvidenceStatus = "established" | "interpretive" | "proposed";

export type ScientificRecordType =
  | "conceptual-framework"
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
  maturity: "developing synthesis";
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

export const attainSustainMaintainRecord = {
  id: "HMS-CONCEPT-001",
  type: "conceptual-framework",
  title: "Attain, Sustain, Maintain",
  summary:
    "A hierarchical, scale-indexed framework for specifying whether a system can reach an objective, continue meeting it, and preserve or adapt the capacity required across repeated demands and longer timescales.",
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
