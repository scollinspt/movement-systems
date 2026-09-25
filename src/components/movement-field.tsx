const factors = [
  { label: "Capacity", className: "factor factor-capacity" },
  { label: "Task", className: "factor factor-task" },
  { label: "Environment", className: "factor factor-environment" },
  { label: "History", className: "factor factor-history" },
];

export function MovementField() {
  return (
    <div className="movement-field" aria-label="A person moving within interacting capacity, task, environment, and history">
      <div className="field-grid" aria-hidden="true" />
      <div className="movement-trace" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="person-node">
        <span className="person-label">one person</span>
        <strong>Movement</strong>
        <small>observed in context</small>
      </div>
      {factors.map((factor) => (
        <div className={factor.className} key={factor.label}>
          {factor.label}
        </div>
      ))}
      <p className="field-caption">The movement is visible. The system that produced it must be inferred.</p>
    </div>
  );
}