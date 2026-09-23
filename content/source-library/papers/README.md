# Papers For Course And Book Development

Use this collection for papers being considered for Movement Systems course development,
research synthesis, and citation in the planned book.

## Workflow

1. Add the paper's PDF to the external private paper archive for local reading.
2. Add its complete BibTeX record to `references.bib`.
3. Name the PDF after the BibTeX citation key when practical, for example
   `newellConstraintsDevelopment1986.pdf`.
4. Record the DOI or stable source URL in the BibTeX entry.
5. Verify the citation against the publisher record before using it in course or book
   content.

`references.bib` is the versioned bibliography and should remain usable by the future
book build. Avoid maintaining a second manually synchronized bibliography for the book;
the build should consume this file directly or generate its bibliography from it.

## PDF Boundary

Files in `pdfs/` are not versioned and should not be used as the durable paper archive.
Copyrighted source PDFs belong in institution-managed private storage unless redistribution
permission explicitly allows publication. BibTeX records, project-authored reading notes,
and project-authored syntheses may be versioned.

Do not place student, patient, participant, or other restricted records here. A citation
does not grant permission to redistribute its source PDF, figures, tables, or text.
