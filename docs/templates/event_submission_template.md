# Event Markdown Template

This structure matches an Astro content entry (YAML front matter + Markdown body). Replace every placeholder before submitting.

```
---
title: "Neutral factual title"
slug: your-event-slug
date: YYYY-MM-DD
updated: YYYY-MM-DD (optional)
local_time: HH:MM (24h local time)
location: "City / region"
confidence: CONFIRMED|HIGH|MEDIUM|LOW|DISPUTED|UNVERIFIED
status_label: Confirmed|Disputed|Archived etc.
high_risk: true|false
sources:
  - title: "Source title #1"
    url: "https://example.com/source"
    reliability: "Why this source is acceptable"
  - title: "Source title #2"
    url: "https://example.com/source2"
    reliability: "Short note on reliability"
disputed_details: "Summarize disagreements or unknowns"
high_risk_reason: "If high_risk=true, explain why"
draft: false
---

## Summary
Briefly explain what happened, when, where, and who was involved. Attribute claims (“according to…”) and label uncertainty.

## Timeline
- **HH:MM local (Date)** – Describe key moments chronologically.
- Add more bullet points as needed.

## Actors Involved
- Actor or organization #1
- Actor or organization #2

## Evidence
1. [Source title #1](https://example.com/source) — Short description of what the source confirms.
2. [Source title #2](https://example.com/source2) — Describe corroboration or disputes.

## Confidence & Risk Notes
- **Confidence level:** Explain why you chose it (e.g., conflicting statements, single weak source).  
- **High-risk factors:** Note war-crime accusations, named individuals, etc.  
- **Disputed details:** Describe any competing narratives.  
- **Moderator notes:** Leave blank. Moderators fill this in.

## Next Steps
- List follow-up actions (e.g., monitor official statements, seek independent verification).
```
