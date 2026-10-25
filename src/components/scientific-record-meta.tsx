import type { ScientificRecord } from "@/lib/scientific-records";

const evidenceLabels = {
  established: "Established source foundation",
  interpretive: "Interpretive synthesis",
  proposed: "Proposed direction",
} as const;

export function ScientificRecordMeta({ record }: { record: ScientificRecord }) {
  return (
    <dl className="scientific-record-meta">
      <div>
        <dt>Record</dt>
        <dd>{record.id}</dd>
      </div>
      <div>
        <dt>Scientific status</dt>
        <dd>{evidenceLabels[record.evidenceStatus]}</dd>
      </div>
      <div>
        <dt>Maturity</dt>
        <dd>{record.maturity}</dd>
      </div>
      <div>
        <dt>Last reviewed</dt>
        <dd>
          <time dateTime={record.lastReviewed}>October 25, 2026</time>
        </dd>
      </div>
    </dl>
  );
}
