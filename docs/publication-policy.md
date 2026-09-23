# Publication and Ownership Policy

## Principle

Repository access and website publication are separate decisions. A file may be useful
for private curriculum development without being suitable for public distribution.

## Content Classes

### Public

Project-authored or permission-cleared materials approved for open distribution,
including Movement Systems presentations, shared interactives, selected laboratory
resources, curricular explanations, and reviewed model exports.

### Private development

Draft syllabi, planning notes, instructor notes, unpublished research, draft activities,
and project-authored materials awaiting review or permission. These must not enter the
public build. Third-party teaching materials and correspondence belong in the external
private archive rather than Git.

### Restricted

Student records, grades, submissions, identifiable educational or participant data,
answer keys requiring controlled access, licensed readings, proprietary resources, and
third-party artifacts without redistribution permission. Restricted material must not be
published and may require storage outside Git entirely.

## External Private Archive

Restricted teaching sources are maintained in institution-managed private storage,
separate from the Git repository. Repository documentation may record a collection's
course, contributor, term, provenance, permission status, inventory, and checksums, but
must not include personal filesystem paths or private content.

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

## Canvas Boundary

Canvas owns semester operations and controlled course delivery. The public site does not
contain grades, submissions, announcements, changing schedules, private discussions, or
links back to semester-specific Canvas shells. Canvas points students to the stable
public site.

## Publication Gate

Before an artifact is included in the public build, record or verify:

1. author or source;
2. ownership and redistribution permission;
3. intended audience;
4. citation and attribution requirements;
5. accessibility review;
6. privacy and answer-key review;
7. maturity or review state; and
8. stable public location.

The site build should eventually use an explicit publication manifest or equivalent
allowlist. Keeping a file in a nominally public folder is not sufficient approval.

## Source Libraries

Historical and proprietary materials under `content/source-library/` are nonpublic by
default. They may inform new work, but only newly authored or permission-cleared
derivatives may move into the public content pipeline. Source-specific license,
trademark, attribution, and quotation requirements still apply. Copyrighted source PDFs
belong in the external private archive; version control retains citation metadata and
project-authored notes or syntheses.

## Data

Do not commit identifiable student, patient, participant, or restricted institutional
data. Public examples must use synthetic, de-identified, or explicitly authorized data
with the transformation and permission documented.