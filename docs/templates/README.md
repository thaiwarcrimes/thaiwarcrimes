# Templates & Diagrams Index

Use this folder to prep contributions and understand the review workflow. Each file is plain text/CSV/Markdown so it works with GitHub, Google Sheets, or Astro content collections.

## Data Capture Templates

| File | Purpose | Usage Tips |
| --- | --- | --- |
| `event_submission_template.csv` | Row-per-event worksheet covering frontmatter fields (slug, title, dates, confidence, status, draft, etc.). | Duplicate the file or copy into Google Sheets. Sort by `date_iso` + `local_time` to keep chronological order before converting to Markdown. |
| `event_submission_template.md` | Blank Markdown template with placeholders. | Copy/paste for each new event and replace every placeholder. |
| `event_submission_sample_filled.md` | Filled example mirroring the CSV sample row. | Use as a reference to see how a complete entry should read. |

## Workflow Diagrams (Mermaid)

Diagrams now live in `docs/diagrams/`. Render them with Mermaid-enabled tools.

| File | Scope |
| --- | --- |
| `../diagrams/contributor_flow_diagram.md` | Contributor-only state machine showing every step, including when to capture `confidence_level` and `status_label`. |
| `../diagrams/moderator_flow_diagram.md` | Moderator + takedown response state machine from intake to publish/unpublish. |
| `../diagrams/contributor_to_moderator_flow.md` | End-to-end flow chart linking contributor actions to moderator decisions and the report-issue loop. |

## Quick Start

1. Copy the CSV to collect facts and evidence.  
2. Use the sample Markdown to format the event.  
3. Review the contributor flow before opening a PR.  
4. Share the moderator & submission flows when onboarding reviewers.
