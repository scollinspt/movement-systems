import { ArrowUpRight, BookMarked } from "lucide-react";
import type { ZoteroCollection } from "@/lib/zotero";
import { formatSynchronizationDate } from "@/lib/zotero";

type ProjectLiteratureProps = {
  collection: ZoteroCollection;
  description: string;
  synchronizedAt: string;
};

export function ProjectLiterature({
  collection,
  description,
  synchronizedAt,
}: ProjectLiteratureProps) {
  const itemLabel = collection.itemCount === 1 ? "paper" : "papers";

  return (
    <section className="project-literature">
      <div className="section-shell">
        <div className="project-literature-heading">
          <BookMarked aria-hidden="true" />
          <div>
            <p className="section-label">Project literature</p>
            <h2>{collection.name}</h2>
          </div>
        </div>
        <div className="project-literature-copy">
          <strong>
            {collection.itemCount} {itemLabel}
          </strong>
          <p>{description}</p>
          <a href={collection.url}>
            Browse this collection in Zotero <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <small>
            Synchronized with Zotero {formatSynchronizationDate(synchronizedAt)}
          </small>
        </div>
      </div>
    </section>
  );
}
