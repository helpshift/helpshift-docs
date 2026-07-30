# PRD / Product Overview best practices

Apply these when drafting or reviewing a Helpshift PO. Canonical section order lives in [template.md](template.md).

## Document purpose

The Product Overview is the shared artifact for Quad discovery and Squad delivery. It should let Product, Eng, Design, and QA understand the problem, outcome, scope, and acceptance bar without a meeting.

Progressive elaboration is expected:
- **Inception:** enough for sizing and resource allocation (problem, goals, high-level solution)
- **Discovery:** elaborate personas, flows, stories, UAT, metrics; close open questions
- **Ready for development:** stories with UAT for "Now" epics; designs linked; out of scope clear

## Section quality bar

| Section | Do | Don't |
| --- | --- | --- |
| Summary | One short executive read; state project type | Paste full requirements |
| Background | Problem, as-is, why now, evidence links | Solution disguised as problem |
| Goals | Customer + Helpshift outcomes; measurable where possible | Vague "improve UX" |
| Audience | Personas + current behavior | "All users" with no context |
| High Level Solution | Outcome formula + assumptions + optional flow | API/schema dumps |
| Requirements | Prioritized stories + testable UAT + phases | Orphan wish-list bullets |
| Success Metrics | Adoption thresholds + how measured | Vanity metrics only |
| Launch | GTM, roll-out, adoption, pricing | Empty placeholders left forever without TBD |
| Key Decisions | Dated, owned, statused | Undocumented verbal decisions |

## User story standards

Format:

`As a <user type>, I want <capability> so that <reason>`

Each story detail table should answer:
1. Who benefits?
2. What changes in the product?
3. Why it matters?
4. What "done" means (Acceptance Criteria/UAT)?
5. Which phase / design / dependency applies?

Good acceptance criteria:
- Observable outcomes (UI state, data, permissions, notifications)
- Edge cases that matter (multi-device, reopened issues, missing identity, offline)
- Explicit non-goals for that story when helpful

Weak acceptance criteria:
- "Works as expected"
- "Fast and intuitive"
- Implementation notes with no user-visible check

## Scope control

- Keep a visible **Out of Scope** list (and update the changelog when scope moves)
- Slice large initiatives into phases / epics (Now / Next / Later)
- Prefer fewer sharp stories over many overlapping ones
- Capture RAID items (risks, assumptions, issues, dependencies) in Key Decisions or Additional Information when they affect delivery

## Mandatory cross-cutting stories

The official template requires sample-but-mandatory stories for:
1. User identity behavior
2. App-level permissions
3. Agent-level access
4. Dashboard analytics + Metabase
5. DPIA / legal review
6. Security guidelines
7. Custom Analytics & AI Analytics

Adapt each to the feature. If one does not apply, record that in **Key Decisions** or **Out of Scope** with owner and rationale — do not silently omit.

## Metrics defaults (Helpshift)

- Feature success: aim for ≥25% overall customer adoption unless exception agreed
- Report success: aim for ≥50% adoption unless exception agreed
- Define brand-level **Adoption Criteria** (what usage counts as adopted)

## Evidence and links

Link rather than restate:
- Customer interview insights
- Competitor analysis
- Figma / Whimsical flows
- Jira initiative and related epics
- Prior PO / discovery docs

## Publishing conventions

- Space: **PMT**
- Title: `PO: <Feature Name>` or `PO: In#N: <Feature Name>`
- Keep Approvers / Alignment / Validation tables real; use empty rows or TBD — never invent names
- After publish, attach PO URL on the Jira initiative when one exists

## Example reference

Filled PO pattern (structure and depth): [PO: In#2: End User Experience for Proactive Outbound Support (SDK)](https://helpshift.atlassian.net/wiki/spaces/PMT/pages/4838228032/PO+In+2+End+User+Experience+for+Proactive+Outbound+Support+SDK)

Take from strong examples:
- Clear problem framing in Summary/Background
- Phased stories with concrete behavior in Description
- Explicit Out of Scope and dated scope changes
- Design and flow links next to stories

Avoid copying:
- Placeholder metrics left as TBA without owners
- Unresolved questions buried only in long description text — surface them as Open Questions
