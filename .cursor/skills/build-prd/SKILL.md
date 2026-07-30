---
name: build-prd
description: Build Helpshift Product Overview (PRD/PO) documents using the official PMT template and product best practices. Use when creating a PRD, Product Overview, PO doc, feature requirements, product requirements document, or when the user asks to draft, write, or structure requirements for a feature.
---

# Build PRD (Product Overview)

Create Helpshift **Product Overview (PO)** documents — the team's PRD format — following the official template and discovery best practices.

**Canonical template:** [Template - Product Overview for a feature](https://helpshift.atlassian.net/wiki/spaces/PMT/pages/4427612355/Template+-+Product+Overview+for+a+feature)

**Related:** [Product Research/Discovery template](https://helpshift.atlassian.net/wiki/spaces/PMT/pages/4437803114), [Product Development Playbook](https://helpshift.atlassian.net/wiki/spaces/HE/pages/4711744054)

## When to use

- User asks to create/draft a PRD, PO, Product Overview, or feature requirements
- Discovery needs a structured requirements doc for Quad/Squad
- Turning research, interviews, or a Jira initiative into a PO

## Workflow

Copy and track:

```
PRD Progress:
- [ ] 1. Gather inputs
- [ ] 2. Draft PO sections
- [ ] 3. Add feature + mandatory stories
- [ ] 4. Define metrics, launch, decisions
- [ ] 5. Quality checklist
- [ ] 6. Publish (if requested)
```

### Step 1: Gather inputs

Ask only for what's missing. Prefer parallel search of Confluence/Jira when the feature name or initiative key is known.

Collect:
- Feature/initiative name and Jira initiative link (if any)
- Problem / as-is workflow
- Target users and current behaviors
- Goals, business case, competitive context
- Constraints, assumptions, out-of-scope
- Design / research links (customer interviews, competitor analysis, Figma)
- Approvers (Product Lead, EM, Designer) and alignment/validation stakeholders
- Parent Confluence page (if publishing)

If context is thin, draft with clear `TBD` markers rather than inventing facts.

### Step 2: Draft the PO

Use the section order in [template.md](template.md). Title format:

- `PO: <Feature Name>`
- Or phased: `PO: In#N: <Feature Name>`

**Writing rules:**
- **Summary** — executive overview only; include project type (new feature, enhancement, platform, etc.). No implementation detail.
- **Background** — problem, as-is flow, why now; link customer interview insights.
- **Business case and Goals** — outcomes for customers and for Helpshift; link competitor analysis when relevant.
- **Target Audience** — personas + current workflows/behaviors.
- **High Level Solution** — outcome for the persona; add flow/illustration when useful; list assumptions. Use: `` `<User Type> can <achieve goal> by doing <action>` ``
- **Terminology** — only new terms; keep the list short.
- Prefer evidence links over long prose. Call out **Out of Scope** explicitly.

### Step 3: Requirements (user stories)

1. Add a **Summary** table: User Story # → Priority/Phase.
2. For each feature story, fill the detail table (story, parent/dependency, description, launch phase, design link, acceptance criteria/UAT).
3. **Always include the mandatory cross-cutting stories** from [template.md](template.md) (identity, app permissions, agent access, dashboard/Metabase analytics, DPIA/legal, security, Custom Analytics & AI Analytics). Adapt wording to the feature; do not drop them without an explicit rationale in Out of Scope / Key Decisions.
4. Acceptance criteria must be testable (Given/When/Then or concrete UAT bullets).
5. Phase stories (Phase 1 / 2 / Later) when scope is large.

### Step 4: Metrics, launch, decisions

- **Success Criteria:** feature success ≈ ≥25% overall customer adoption; reports ≈ ≥50% (exceptions case-by-case).
- **Adoption Criteria:** define when a brand counts as regularly using the feature.
- **Launch Strategy:** GTM, roll-out, adoption, pricing.
- **Key Decisions:** date, decision, POC, approval status.
- **Additional Information:** changelog table + supporting links.

### Step 5: Quality checklist

Before delivering, verify [best-practices.md](best-practices.md). Minimum bar:

- [ ] Reader can understand problem + outcome from Summary alone
- [ ] Goals are measurable; success/adoption criteria defined
- [ ] Stories use `As a <user>, I want <capability> so that <reason>`
- [ ] Every in-scope story has acceptance criteria
- [ ] Mandatory platform stories present (or explicitly deferred with reason)
- [ ] Out of scope listed
- [ ] Assumptions and dependencies called out
- [ ] No invented customer quotes, metrics, or stakeholder names — use TBD

### Step 6: Publish (only if asked)

Publish to Confluence space **PMT** (`spaceId` `4388389216` or key `PMT`) via Atlassian MCP `createConfluencePage`.

- Prefer `contentFormat: "markdown"` unless HTML is required for Confluence-specific nodes
- Set `parentId` when the user names a parent; otherwise ask or leave under the agreed feature folder
- After create, return the page URL
- Link the PO from the Jira initiative (`PO Link`) when an initiative exists

Do **not** create Confluence pages unless the user asks to publish.

## Output

Default: full PO markdown matching [template.md](template.md), ready to paste into Confluence.

Also provide a short **open questions** list for anything still TBD.

## Anti-patterns

- Jumping to UI/tech detail before problem, audience, and goals
- Stories without acceptance criteria
- Skipping mandatory identity/permissions/analytics/security/DPIA stories silently
- Vague success metrics ("improve engagement")
- Mixing in-scope and out-of-scope without labeling
- Filling Approvers/Alignment with guessed names
