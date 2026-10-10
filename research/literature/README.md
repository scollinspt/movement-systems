# HMS Lab Literature and Evidence Plan

The [HMS Lab Zotero group library](https://www.zotero.org/groups/6710776/human_movement_system_lab)
is the laboratory's shared evidence base. It supports project planning, method
development, seminar discussion, interpretation of results, and public scholarship.

This plan connects three layers of the lab's work:

1. **Zotero** organizes the literature and records each paper's scientific roles,
   subject areas, and project relationships.
2. **Research records** connect evidence to questions, methods, decisions, limitations,
   and developing outputs.
3. **The HMS Lab website** presents selected reading lists, project bibliographies, and
   evidence-informed explanations for public use.

Zotero remains the source of truth for bibliographic metadata and collection membership.
The repository should store reviewed interpretations and generated public outputs rather
than a second manually maintained bibliography.

## Current foundation

The library has been reorganized into six main areas:

1. Foundations and Theory
2. Measurement Science
3. Modeling and Simulation
4. Clinical and Applied Movement
5. HMS Lab Projects
6. HMS Lab Seminar

The library currently contains 128 unique top-level works. Every work belongs to at
least one scientific collection, and membership in a lower-level collection is repeated
explicitly at each ancestor level. Papers can belong to multiple scientific and project
collections when appropriate.

Controlled tags identify how an item contributes:

- `hms:role/theory`
- `hms:role/method`
- `hms:role/validation`
- `hms:role/dataset`
- `hms:role/model`
- `hms:role/application`
- `hms:project/movesense-opensense`
- `hms:project/ventilatory-pump`

The professional collection **The Movement System in Physical Therapy: Identity,
Expertise, and Diagnosis** provides a focused home for literature about the movement
system as the profession's identity, area of expertise, framework for diagnosis, and
basis for practice.

## How the library should support the lab

### Project evidence maps

Each active project should have an evidence map connecting its major questions and
decisions to relevant literature. An evidence map should identify:

- the claim, question, or design decision;
- supporting, conflicting, and limiting evidence;
- each source's role in the project;
- what remains uncertain;
- the next measurement, analysis, or literature search needed.

The first evidence maps should cover Movesense-OpenSense Integration and Ventilatory
Pump Measurement and Mechanics.

### Method matrices

Method-focused collections can support comparison tables for sensors, protocols,
calibration procedures, reference measures, sample characteristics, outcomes, and
reported validity or reliability. These matrices should turn a set of papers into
actionable design criteria without treating publication as proof that a method is
appropriate for the lab's intended use.

Initial matrices should address:

- IMU calibration, orientation, synchronization, and validation;
- wearable-to-OpenSense workflows;
- maximal inspiratory pressure devices, protocols, and reference standards;
- chest-wall motion measurement;
- thoracic and rib-cage modeling approaches.

### Claim and source checks

Public project records and website explanations should trace substantive scientific
claims to Zotero items. Before publication, each page should be checked for:

- a source for each important factual or methodological claim;
- language that matches the strength and scope of the evidence;
- unresolved disagreement or uncertainty;
- current links and complete citation metadata.

### Gap detection and planning

Collection and tag coverage can reveal weak areas in a project. Examples include a
project collection with many application papers but little validation evidence, or a
method decision supported by only one measurement context. These gaps should inform
targeted searches, seminar selections, pilot work, and project priorities.

### HMS Lab Seminar

The seminar collections should support a simple reading workflow:

1. **Candidate Readings** holds papers proposed for future discussion.
2. **Reading Queue** holds the selected upcoming readings.
3. **Discussed** records completed seminar readings.

Each selected paper should have a short discussion record containing the date, the
question that motivated selection, key claims, methodological strengths and limits,
connections to lab projects, and resulting action items. These records can later support
reading paths and synthesis pages without publishing informal notes automatically.

### Website publications

The website can use selected Zotero data to provide:

- project-specific bibliographies;
- current and past seminar readings;
- foundational reading paths;
- method and evidence summaries;
- direct links to public Zotero collections and items;
- visible update dates for generated literature content.

The website should remain selective. The full library belongs in Zotero; website pages
should help readers understand why a body of literature matters to a project or idea.

## What the website can provide

Zotero's public API makes it possible to display the library's content on the HMS Lab
website without requiring visitors to have a Zotero account. The API can return
bibliographic metadata as JSON or CSL JSON, an Atom feed, individual formatted
citations, or a formatted bibliography in a selected citation style.

The recommended website experience is a set of useful views of the library rather than
an embedded copy of Zotero's full web interface:

### Library overview

The HMS Lab Library page can show the six main literature areas, a short explanation of
each area, its current number of papers, and a direct link to the corresponding public
Zotero collection. This gives visitors a clear path into the library while Zotero
continues to provide the complete collection-management interface.

### Project literature

Each project page can show a selected bibliography generated from its Zotero project
collection. Entries can include title, authors, year, journal, DOI or URL, evidence-role
tags, and a link to the Zotero item. A short project evidence map can explain how
particular sources inform theory, methods, validation, models, datasets, or
applications.

### Seminar readings

The Participate or Seminar area can show the current reading, upcoming readings, and a
dated archive of discussed papers. Each entry can link to its Zotero record and, when
available, a reviewed seminar discussion record in the repository.

### Curated reading paths

Topic pages can turn collections into guided introductions rather than undifferentiated
lists. Initial reading paths should include:

- foundations of human movement systems;
- the movement system in physical therapy;
- wearable sensing and OpenSense;
- measurement validity, reliability, calibration, and uncertainty;
- ventilatory pump measurement and mechanics.

Each path should explain why a paper is included and suggest a useful reading sequence.

### Recently added and updated literature

A small recent-additions view can make the ongoing work of the lab visible. It should
show only reviewed items and link back to Zotero rather than presenting every library
change as a formal lab conclusion.

### Recommended presentation model

The site should generate these views during development or deployment and serve them as
static pages. This provides fast and accessible pages, avoids exposing credentials,
prevents Zotero availability from breaking page loads, and fits the site's static
GitHub Pages deployment. Each generated view should display its last synchronization
date and provide an **Open in Zotero** link.

A live client-side API view is technically possible, and Zotero also provides formatted
bibliography and Atom outputs. Those options are useful for prototypes and feeds. Static
synchronization is the preferred production approach because it gives the site control
over organization, explanatory context, error handling, accessibility, and visual
design.

## Technical integration approach

The Zotero group ID is `6710776`. Public metadata can be read without authentication
from:

```text
https://api.zotero.org/groups/6710776
```

Useful read endpoints include:

```text
/groups/6710776/collections
/groups/6710776/items/top
/groups/6710776/collections/{collectionKey}/items/top
```

Zotero can also produce a formatted collection bibliography:

```text
/groups/6710776/collections/{collectionKey}/items/top?format=bib&style=apa&linkwrap=1
```

The integration should use JSON for the primary website data so that presentation and
context remain under site control. Zotero's formatted bibliography output can be used
for comparison, exports, or simple prototypes.

A read-only synchronization tool should:

1. fetch top-level bibliographic items and collection metadata from the public API;
2. follow pagination and respect Zotero API rate limits;
3. normalize the fields needed by the site;
4. map stable collection and item keys to project or seminar outputs;
5. validate required fields, duplicate DOIs, collection hierarchy closure, and links;
6. generate deterministic JSON or TypeScript data for the static website;
7. record the retrieval date and fail clearly when generation is incomplete.

Static generation keeps the website independent of Zotero availability at page-load time.
Generated files should state that they are generated and should not be edited manually.
Routine reads require no API key. Any future write automation must use a temporary key
limited to read/write access for the HMS Lab group, never personal-library access; the
key must not be committed.

## Work plan

### Phase 1: Establish the integration

- [ ] Document a short intake and curation checklist for newly added papers.
- [ ] Record stable Zotero collection keys in one clearly named configuration file.
- [ ] Build a read-only script that fetches public group collections and top-level items.
- [ ] Add pagination, deterministic output, retrieval dates, and explicit API errors.
- [ ] Add validation for duplicate DOIs, unfiled items, and incomplete ancestor membership.
- [ ] Add a repository command that regenerates and checks the literature data.
- [ ] Generate a library overview containing the six primary areas and their item counts.
- [ ] Generate selected bibliography data for the two current HMS Lab projects.
- [ ] Link the two project pages directly to their Zotero project collections.
- [ ] Add last-synchronized dates and **Open in Zotero** links to generated views.
- [ ] Add a visible link from the HMS Lab Library page to this plan.

### Phase 2: Create project evidence products

- [ ] Define a reusable evidence-map format linked by Zotero item key.
- [ ] Build the Movesense-OpenSense project evidence map.
- [ ] Build the Ventilatory Pump Measurement and Mechanics evidence map.
- [ ] Create the IMU and OpenSense methods matrix.
- [ ] Create the maximal inspiratory pressure methods matrix.
- [ ] Begin chest-wall measurement and thoracic-modeling matrices as those directions
      become active.
- [ ] Add evidence gaps and targeted literature searches to each project record.

### Phase 3: Support the weekly seminar

- [ ] Define a seminar discussion-record template.
- [ ] Select the first readings and move them into Reading Queue.
- [ ] Record seminar dates and move completed readings into Discussed.
- [ ] Connect seminar action items to project records or new research questions.
- [ ] Generate a current reading list and a discussed-readings archive for the website.

### Phase 4: Publish useful pathways through the literature

- [ ] Add selected project bibliographies to each HMS Lab project page.
- [ ] Create a foundational reading path for human movement systems.
- [ ] Create a focused reading path for movement-system identity, expertise, and diagnosis
      in physical therapy.
- [ ] Publish reviewed method summaries where they support active lab work.
- [ ] Show when generated bibliographies and reading lists were last updated.
- [ ] Add clear links from public summaries to the relevant Zotero collection or item.

### Phase 5: Maintain quality

- [ ] Run literature validation whenever generated data changes.
- [ ] Review unfiled items, duplicate identifiers, missing abstracts, and broken links.
- [ ] Confirm that new lower-level memberships also include every ancestor collection.
- [ ] Review controlled tags and project memberships as projects evolve.
- [ ] Periodically review Candidate Readings and remove items that no longer serve a
      current question.
- [ ] Decide whether a scheduled update check is useful after the manual workflow is
      stable.

## Recommended next session

Start with Phase 1. Implement the read-only fetch and validation script, then use its
generated data to add direct Zotero collection links to the two project pages. This
establishes one reliable path from curated literature to the website before creating
larger evidence maps and seminar outputs.
