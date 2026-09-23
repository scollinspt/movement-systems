# Spring 2026 Canvas Export Inventory

## Source And Integrity

- Course: PTH 6132.01 Movement Systems, Spring 2026
- Canvas course ID: 23255
- Canvas host: `mycourses.plymouth.edu`
- Export added: 2026-09-23
- Format: IMS Common Cartridge with Canvas extensions
- Original archive:
  `pth-6132-dot-01-movement-systems-spring-2026-export.imscc`
- SHA-256: `101b5adc436561029b382404652d6cef2931e6c09503c1b5a08b5f5bbae9d478`
- Archive integrity: passed before and after extraction
- Archive entries: 813
- Durable location: external private teaching archive

The original archive was not altered during extraction. The manifest and all internal
archive paths passed traversal and symlink safety checks.

The archive contains two filename pairs that collide on the default case-insensitive
macOS filesystem. The initially omitted members were recovered under unique filenames in
the private archive, with their exact original paths, sizes, CRC32 values, and SHA-256
checksums recorded beside them:

- `web_resources/Gait Lab IV More Analyses and Stairs.docx`
- `web_resources/results.jpg`

## Course Organization

The export preserves ten Canvas modules:

| Order | Module | Items |
| --- | --- | ---: |
| 1 | Administrative Items | 4 |
| 2 | Tickets to Class | 18 |
| 3 | Module I: Foundational Concepts for Understanding and Improving Motor Function | 20 |
| 4 | Lab - Module I | 27 |
| 5 | Module II: Applications | 50 |
| 6 | Lab - Module II | 23 |
| 7 | Videos | 28 |
| 8 | Skill Acquisition Project | 14 |
| 9 | Functional Movement Screening and Project | 10 |
| 10 | Exam 3 | 4 |

The modules contain approximately 118 file attachments, 21 assignments, 29 wiki-page
items, 26 section headers, eight direct external links, and one Canvas quiz. Nine
assignment groups preserve the course's grading structure.

## Extracted Content

The archive contains 776 declared files and 737 manifest resources. Major file types
include:

| Type | Count | Typical contents |
| --- | ---: | --- |
| PowerPoint (`.pptx`) | 167 | Lectures, student versions, instructor versions, and historical variants |
| Word (`.docx`) | 164 | Laboratories, assignments, cases, handouts, and answer materials |
| XML | 139 | Canvas settings, assignments, assessments, and resource metadata |
| Video (`.mp4`) | 107 | FMS demonstrations, gait tasks, and movement examples |
| HTML | 81 | Canvas pages and preserved page content |
| PDF | 30 | Readings, assessment tools, clinical forms, and reference documents |
| QTI | 28 | Canvas-native assessment exports |
| PNG | 25 | Course and instructional images |
| JPG | 23 | Course and instructional images |

Human-readable uploaded filenames are preserved primarily under the private extraction's
`web_resources/` directory. Canvas identifiers and relationships are resolved through
`imsmanifest.xml` and the metadata under `course_settings/`. Static Canvas pages are under
`wiki_content/`.

The export includes substantial historical versioning from approximately 2021-2026.
Repeated topics often have year, platform, student, instructor, or revision suffixes.
These are preserved as historical evidence and should not be deduplicated until their
content and instructional role have been compared.

## External Dependencies

The export preserves references but cannot guarantee continued access to external
services. Known dependencies include:

- Kaltura and other LTI resources;
- YouTube videos;
- two Google Sheets used for gait data;
- Functional Movement Systems and Physiopedia pages;
- the University of Utah neurologic gait examples; and
- an Otago Exercise Program link wrapped by Microsoft Safe Links.

LTI links will not function as standalone files. Google sharing permissions, external
pages, and streaming media may change or disappear. Recover important instructor-owned
originals into `../separately-supplied/`; do not copy third-party content without
permission.

## Privacy And Publication Review

The package appears to be a standard course-content export rather than an export of
enrollments, grades, submissions, or student records. No student emails, grades, quiz
responses, or message archives were identified in the manifest or course settings.

Some filenames use first names, including DGI answer sheets for S1, S2, and S3. Those
files require inspection and anonymization before any broader sharing. Instructor answer
materials, assessment questions, copyrighted readings, and all other extracted content
remain private by default.

## Storage Decision

The Canvas archive is approximately 4.98 GB, and ten files in the archive/extraction are
larger than 100 MiB. A normal GitHub push cannot carry this material, even though the
repository is private. Git LFS is not currently installed for this repository, and the
original archive is larger than common Git LFS per-file limits.

The original archive, extraction, recovered collision members, and source materials are
therefore maintained in institution-managed private storage with a validated SHA-256
manifest. They must not be staged in Git. This non-sensitive inventory remains versioned
as the public provenance record.
