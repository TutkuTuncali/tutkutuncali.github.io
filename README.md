# Tutku Tuncalı Yaman academic website — v0.4

This is a working **static multi-page prototype**. Open `index.html` in a browser.

## Pages
- `index.html` — original hero, research themes, 7 selected publications, 4 news teasers.
- `projects.html` — **9 documented supported projects**: 8 in the university AVESİS record plus the university-funded PeVRsona ADEP award described in the supplied document. Includes **6 recorded excavations** and **4 research-network or collaboration cards**.
- `news.html` — **13 user-related updates** grounded in the uploaded MAIA activity document, with original images extracted from that same DOCX where available.
- `assets/` — optimized local WebP copies of user-supplied event and publication images.

## Evidence and editorial decisions
- AVESİS projects: https://avesis.marmara.edu.tr/14697/projeler
- TÜBİTAK 1001 project numbers and roles: https://isletme.marmara.edu.tr/bilimsel-faaliyetler/tubitak-destekli-bilimsel-projeler
- User-supplied source: `MAIA_TR_TürkçeİçerikOluşturma (1).docx`. Specific award details for PeVRsona come from source entry 13 (Marmara ADEP Type B, 18 months, TRY 828,000, PI Aydın Erden, Tuncalı Yaman researcher), which does **not** appear in the AVESİS eight-project count.
- DKM membership and inventory workshop: source entry 21.
- MAIA invitations, working group and workshop participation: entries 2, 3, 9, 11.
- Mount Nif presentations and 2026 research publications: entries 4, 5, 7, 8, 10, 12.
- Entries about other organizations or researchers without documented direct user involvement (PRESERVAI, ÇEKÜL, Cappadocia symposium, etc.) were intentionally omitted.
- Dates shown only as 2026 or December 2024 in the supplied record do not claim specific days. Their internal sort positions are editorial ordering placeholders.
- The future Archaeo-Informatics 2026 announcement is marked 'Upcoming', and its participation should be reconfirmed prior to public launch.
- 6 excavation names/seasons stem from previously supplied academic CV information and should be checked again before deployment.
- PeVRsona is an **awarded funded project**, *not* a mere research concept. The proposed MAIA WG3 archaeological AI field assistant is a **concept**, not a funded project or deployed system.
- User-supplied photos have been optimized for the prototype without external hotlinks. Confirm publication permissions for group photos before making website public.

## Functional checks
- HTML is self-contained with relative links, CSS, script and assets.
- Navigation, responsive mobile menu and news category filters were tested in a browser.
- Site is a working prototype, **not yet hosted online**.


## Version 0.5 changes — 21 October 2026

- Removed “Mount Nif (Olympos) Excavation 2019” (BK013514) from the funded projects page as requested. Other Mount Nif projects and excavation experience are retained.
- Added COST Action CA24113 Go2CHANGE (2025–2029), membership in WG4, with a link to the official COST Action.
- Retained MAIA CA23141 separately. COST Actions are international research networks rather than independent research grants.
- Added 17 AVESIS-supported conference records (spanning 2018–2026), including data science, MIS, applied statistics, healthcare, decision systems, and archaeology.
- Added conference and year filters to News. A co-authored paper is not automatically represented as a personally delivered conference talk.
- Audited every HTML page for Turkish uppercase dotted I in English-language content and removed it. Official Turkish lowercase proper-name spelling is retained.
- The archive is selective. It does not claim that all AVESIS conference presentations over the full academic career have been imported.

Data provenance: https://avesis.marmara.edu.tr/14697/yayinlar and https://www.cost.eu/actions/CA24113/; previously supplied MAIA activity file.


## v0.6: News conference links

Replaced generic author-profile links for 23 conference and publication news records with links to individual published papers, DOI records, official proceedings, specific institutional records, author-deposited texts and official programmes. Labels distinguish published work from evidence of presentation. Nothing is linked to an unrelated work. Read `conference_link_audit.csv` for the destination and its source type.

The Baskent conference news description was corrected to remove a separate March 2026 fashion-rental paper, and the Mount Nif 2026 archaeometry contribution page range was corrected.


## v0.7 updates (21 October 2026)
- `ongoing.html`: fifteen approved current research records across five sections.
- `education.html`: six education entries based on the institutional academic record, plus completed degree thesis titles.
- `doctoral-research.html`: current archaeology doctorate at Istanbul University, with a **working research focus** on explainable AI and image analysis of stylistic variation in Attic red-figure vase painting. This is **not** represented as the approved formal thesis title.
- `index.html`: ongoing-research teaser and education links.
- Headers and footers linked to all new pages. No existing News conference links, Projects content, or seven selected publications were intentionally changed.
- Degree dates validated against https://avesis.marmara.edu.tr/14697/egitim .
- Student scholarship items explicitly state application stage, not award.


## Final visual pass v0.8 (21 Oct 2026)
- Approved warm editorial portrait inserted into the home page hero (white blouse, crossed arms).
- Scientific theme illustrations professionally redrawn as conceptual SVGs.
- All inner-page hero illustrations unified into an editorial scientific style.
- Authentic conference/activity imagery kept as documentary photographs, with restrained web presentation.
- Consistent English large I verified. No uppercase dotted Turkish I in HTML, CSS or JS.
- Contents, academic research status, project and news records and outbound references preserved.
- All site pages are static. Open index.html after extracting this archive, or host the folder as a static website.
