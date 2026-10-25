import type { ScientificRecord } from "@/lib/scientific-records";

const evidenceLabels = {
  documented: "Documented source foundation",
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
          <time dateTime={record.lastReviewed}>
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "long",
              timeZone: "UTC",
            }).format(new Date(`${record.lastReviewed}T00:00:00Z`))}
          </time>
        </dd>
      </div>
    </dl>
  );
}
