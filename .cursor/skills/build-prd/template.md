# Product Overview template

Source: [Template - Product Overview for a feature](https://helpshift.atlassian.net/wiki/spaces/PMT/pages/4427612355/Template+-+Product+Overview+for+a+feature)

Copy this structure when drafting. Replace placeholders; remove guidance italics in the final doc.

```markdown
# PO: <Feature Name>

[Jira initiative link if available]

## Approvers

_Product Leads, EM, Designer_

| Approver | Department | Status |
| --- | --- | --- |
|  |  |  |

## Alignment

_Stakeholders who need to be informed_

| POC | Department | Status |
| --- | --- | --- |
|  |  |  |

## Validation

_Stakeholders from whom the project needs validation_

| POC | Department | Validation |
| --- | --- | --- |
|  |  |  |

## Terminology

_New terms only; concise definitions. Prefer fewer new terms._

| Term | Meaning |
| --- | --- |
|  |  |

## Summary

Executive overview: what this project accomplishes and project type (new feature / enhancement / platform / etc.). No deep detail.

## Background

- Problem being solved
- As-is process flow
- Why work on this now
- Link to customer interview insights

## Business case and Goals

- High-level objectives of the product/feature
- Business case (customer value + Helpshift value)
- Link to competitor analysis

## Target Audience

Who the target users are; current workflows and behaviors.

## High Level Solution

Outcome for the target persona. Flow diagram or illustration when useful. List assumptions.

`<User Type> can <achieve goal> by doing <action>`

### Out of Scope

- …

## Requirements

### Summary

| User Story # | Priority/Phase |
| --- | --- |
| US1 | Phase 1 |
| … |  |

### Details

| **User Story#1** | `As a <user type>, I want <feature/interface/functionality> so that <reason>` |
| --- | --- |
| **Parent Story(if any)/Dependency** |  |
| **Description of user story(optional)** |  |
| **Launch Phase** |  |
| **Design Link** |  |
| **Acceptance Criteria/UAT** |  |

<!-- Repeat detail table per feature story -->

### Mandatory stories (adapt to feature; required unless explicitly deferred)

| **User Story#N-1** | `As a HS Product Manager, I want this feature to work <<defined behaviour>> with user identity so that workflows are per expectations` **[Sample Story but mandatory]** |
| --- | --- |
| **Parent Story(if any)/Dependency** |  |
| **Description of user story(optional)** |  |
| **Launch Phase** |  |
| **Design Link** |  |
| **Acceptance Criteria/UAT** |  |

| **User Story#N** | `As a HS Product Manager, I want this feature to have <<defined behaviour>> for App level permission so that access control is per expectations` **[Sample Story but mandatory]** |
| --- | --- |
| **Parent Story(if any)/Dependency** |  |
| **Description of user story(optional)** |  |
| **Launch Phase** |  |
| **Design Link** |  |
| **Acceptance Criteria/UAT** |  |

| **User Story#N+1** | `As a HS Product Manager, I want this feature to have agent level access enabled so that customers can choose which agents should use the feature` **[Sample Story but mandatory]** |
| --- | --- |
| **Parent Story(if any)/Dependency** |  |
| **Description of user story(optional)** |  |
| **Launch Phase** |  |
| **Design Link** |  |
| **Acceptance Criteria/UAT** |  |

| **User Story#N+2** | `As a HS Product Manager, I want this feature to have basic dashboard analytics and Metabase report(s) enabled so that customers can measure impact right from the start` **[Sample Story but mandatory]** |
| --- | --- |
| **Parent Story(if any)/Dependency** |  |
| **Description of user story(optional)** |  |
| **Launch Phase** |  |
| **Design Link** |  |
| **Acceptance Criteria/UAT** |  |

| **User Story#N+3** | `As a HS Product manager, I want this feature to have all aspects covered under DPIA assessment/legal review so that Helpshift is not legally liable` **[Sample Story but mandatory]** |
| --- | --- |
| **Parent Story(if any)/Dependency** |  |
| **Description of user story(optional)** |  |
| **Launch Phase** |  |
| **Design Link** |  |
| **Acceptance Criteria/UAT** |  |

| **User Story#N+4** | `As a HS Product Manager, I want this feature to follow security guidelines so that Helpshift system is not prone to unwanted security attacks` **[Sample Story but mandatory]** |
| --- | --- |
| **Parent Story(if any)/Dependency** |  |
| **Description of user story(optional)** |  |
| **Launch Phase** |  |
| **Design Link** |  |
| **Acceptance Criteria/UAT** |  |

| **User Story#N+5** | `As a HS Product Manager, I want this feature's analytics in Custom Analytics & AI Analytics so that all the data in Helpshift is accessible for further processing.` **[Sample Story but mandatory]** |
| --- | --- |
| **Parent Story(if any)/Dependency** |  |
| **Description of user story(optional)** |  |
| **Launch Phase** |  |
| **Design Link** |  |
| **Acceptance Criteria/UAT** |  |

## Success Metrics

**Success Criteria:** Specific % overall customer adoption that marks the feature successful. Rule of thumb: features ≥25%; reports ≥50%. Exceptions case-by-case.

**Adoption Criteria:** Point at which a brand regularly uses the feature and counts as adopted.

## Launch Strategy

1. GTM plan
2. Roll-out plan
3. Adoption plan
4. Pricing plan

## Key Decisions

| Date | Decision Taken | POC Name | Approval Status |
| --- | --- | --- | --- |
|  |  |  |  |

## Additional Information

| Date | What changed in brief? | Link to section |
| --- | --- | --- |
|  |  |  |
```

## Mandatory story themes (quick map)

| Theme | Intent |
| --- | --- |
| User identity | Correct behavior with Helpshift identity / user identification |
| App-level permission | Access control at app/workzone permission model |
| Agent-level access | Brands can choose which agents can use the feature |
| Dashboard + Metabase | Baseline analytics/reporting from day one |
| DPIA / legal | Privacy/legal review coverage |
| Security | Follow security guidelines; no new attack surface left unaddressed |
| Custom Analytics & AI Analytics | Data available for further processing in analytics products |
