# Publication and Ownership Policy

## Principle

This is a public repository. Every committed file must be suitable for public access,
even when it is not selected for the public website. Repository inclusion and website
publication remain separate review decisions.

## Content Classes

### Public Repository Source

Project-authored or permission-cleared materials approved for open distribution,
including theory, research questions, public methods, capability records, project
records, approved results, software, provenance, educational resources, and reviewed
model exports.

### Published Website Content

Public repository source that has also passed the publication gate and appears in the
site's explicit publication manifest or allowlist. A committed file is not automatically
a published page or an endorsed scientific claim.

### Private development

Operational syllabi, planning notes, instructor notes, unpublished research records,
draft activities, raw data, and project materials awaiting privacy, governance, or
permission review. These belong in approved private course or research storage and must
not be committed merely because they may later inform public work.

### Restricted

Student records, grades, submissions, identifiable educational or participant data,
answer keys requiring controlled access, licensed readings, proprietary resources, and
third-party artifacts without redistribution permission. Restricted material must not be
published and may require storage outside Git entirely.

## External Private Archive

Restricted teaching and research sources are maintained in institution-managed private
storage, separate from the Git repository. Repository documentation may record a
collection's course or project, contributor, date, provenance, permission status,
inventory, and checksums, but must not include personal filesystem paths or private
content.

Copy new collections into the archive and verify their checksums before removing a local
source copy. Cloud synchronization must also be confirmed before that removal. Do not
connect the public repository to the private archive with symlinks or runtime dependencies.

### Generated

Compiled site output, temporary conversions, simulation results, and other reproducible
build products. Generated files should normally be rebuilt from authoritative source and
excluded from version control unless a release process explicitly requires them.

## Instructor Ownership

- Movement Systems presentations developed for this project may be prepared for public
  release after review.
- The future adjunct owns the EP&N PowerPoints they develop. Those presentations remain
  in Canvas unless that instructor explicitly grants permission for public reuse.
- Shared activities should record authorship and permission when they incorporate
  contributions from multiple instructors.
- Public integration does not require common ownership of all course materials.

Operational course development belongs primarily in the private PTH6132 workspace and
Canvas. Public educational resources enter this repository only through deliberate
promotion and review; no course directory is synchronized automatically with Git.

## Canvas Boundary

Canvas owns semester operations and controlled course delivery. The public site does not
contain grades, submissions, announcements, changing schedules, private discussions, or
links back to semester-specific Canvas shells. Canvas points students to the stable
public site.

## Research Governance Boundary

Do not commit identifiable participant or patient information, recruitment or consent
records, raw or controlled research data, confidential partner information, unapproved
contracts, or materials restricted by an IRB, data-use agreement, sponsor, license, or
university policy.

Clinical care, education, and research are separate activities. A clinical observation
may motivate a public research question, but clinical records do not become research data
and patients or students do not become research participants without the required
consent, oversight, and governance.

## Publication Gate

Before an artifact is included in the public build, record or verify:

1. content type and maturity state;
2. author, source, and responsible reviewer;
3. ownership and redistribution permission;
4. intended audience;
5. citation, provenance, and attribution requirements;
6. accessibility review;
7. privacy, research-governance, and answer-key review;
8. limitations, uncertainty, and prohibited interpretations; and
9. stable public location.

The site build should eventually use an explicit publication manifest or equivalent
allowlist. Keeping a file in a nominally public folder is not sufficient approval.
The record structures and maturity states are defined in
[content-model.md](content-model.md) and
[research-architecture.md](research-architecture.md).

## Source Libraries

Only public provenance records, citation metadata, project-authored notes, and
permission-cleared source material belong under `content/source-library/`. Historical,
proprietary, or copyrighted sources that are not approved for redistribution belong in
private institutional storage. Source-specific license, trademark, attribution, and
quotation requirements still apply, and every existing source-library artifact must be
audited against this public-repository boundary.

## Data

Do not commit identifiable student, patient, participant, or restricted institutional
data. Public examples must use synthetic, de-identified, aggregate, or explicitly
authorized data with the transformation, authorization, and remaining disclosure risk
documented. De-identification alone does not establish that a dataset may be released.