# Contributing to the Repo

Thank you for contributing to this archive.

Think of this project as a giant public scrapbook for real events.
We are a public, non-profit civic archive, so everything must stay **neutral, evidence-first, and legally safe**.

* We only glue in facts we can prove.
* We always say where the fact came from.
* We never paste news photos or opinions.

It is **not** a place to shout slogans or pick sides. Opinions can’t be checked, make people fight, and create legal trouble.

**Simple example**

- Acceptable: “According to Cambodian officials on 15 Jan 2025, Thai artillery hit near Preah Vihear; Thai spokespeople denied ordering the attack.”
  (Tells who said it, when, where, and that the sides disagree.)

- Unacceptable: “Thailand brutally bombed Cambodia again.”
  (Sounds angry, no source, no proof.)

By contributing, you help create a **verifiable historical record**.

---

## Who This Document Is For

This document defines the **rules and responsibilities** for *all* contributors.

* If you are new → read this once, then see **Contributor Onboarding**
* If you are experienced → use this as your reference
* If you are a moderator → this is your baseline, not your checklist

---

## 1. What You Can Contribute

You may contribute:

* Crisis or conflict **event entries**
* **Updates or corrections** to existing events
* **Evidence additions** (sources, confirmations, context)
* **Clarifications** or neutral background information
* **Translations** (faithful, non-interpretive)

You may **not** contribute:

* Opinions, commentary, or calls to action
* Propaganda, slogans, or inflammatory language
* Full articles, transcripts, or long excerpts
* Re-hosted images, videos, PDFs, or documents
* Speculation presented as fact

**Example**

- Acceptable: Add a new entry summarizing the 12 Jan 2025 Thai–Cambodian border clash with links to Reuters and Khmer Times.
- Unacceptable: Submit “Thailand is evil and must be punished,” even if the incident is real. That is advocacy, not documentation.

Why we reject opinionated content:

- Opinions cannot be verified, so moderators cannot review them.
- Emotional claims invite defamation or legal takedowns.
- Advocacy undermines this archive’s mission as a neutral resource and erodes trust in the entire repository.

---

## 2. Core Principles (Non-Negotiable)

These four rules exist because they keep the archive factual, avoid legal exposure, and make reviews fast. If any of them are broken, moderators will reject the PR immediately.

### 1. Evidence First

Every factual claim must be supported by:

* A source link, or
* A clearly labeled explanation of uncertainty

Unverifiable claims must be marked as such.

**Example**

- Acceptable: “According to Reuters on 5 Jan 2025, officials reported artillery fire near the Thai–Cambodian border.” (Has date, location, source, attribution)
- Unacceptable: “Someone online said there was fighting.” (No link or label)

---

### 2. Original Writing Only

Facts may be reused.
**Wording may not.**

You must:

* Write in your own words
* Avoid copying headlines or structure
* Use short quotes only when necessary

**Example**

- Acceptable: Summarize: “Thai officials said artillery was exchanged near the border on 5 Jan 2025.” (Own words)
- Unacceptable: Copy: “Thai troops strike Cambodian village” (pasted headline)

---

### 3. No Media Re-Hosting

You must **never upload**:

* Images
* Videos
* Screenshots
* PDFs

Use **links or embeds only**.

**Example**

- Acceptable: Link: `Watch eyewitness video on YouTube (embed only)` 
- Unacceptable: Upload: `docs/media/attack.mp4`

---

### 4. Neutrality

Contributions must:

* Use factual, non-emotional language
* Attribute claims clearly (“according to…”, “reported by…”)
* Label disputed or unclear information

**Example**

- Acceptable: “According to Cambodian officials on 15 Jan 2025, Thai jets flew near Preah Vihear; Thai spokespeople denied ordering strikes.” (States both sides, cites who said what)
- Unacceptable: “The brutal attackers struck again in Chiang Rai!” (Emotional, one-sided, no attribution)

---

## 3. Event Quality Standard

Every event entry should clearly answer:

| Question         | Requirement                       |
| ---------------- | --------------------------------- |
| What happened?   | Factual description               |
| When?            | Date / time (or range)            |
| Where?           | Location                          |
| Who is involved? | Named actors                      |
| Evidence         | Source links                      |
| Status           | Confirmed / disputed / unverified |

If information is incomplete, **say so explicitly**.

**Example**

- Acceptable: “On 12 Jan 2025, Thai and Cambodian forces exchanged artillery fire near Preah Vihear. Sources: Reuters, Khmer Times. Status: Disputed (Thai officials deny firing first).”
- Unacceptable: “There was probably fighting last week somewhere near the border.” (No answers to what/when/where/evidence)

---

## 4. Sources & Evidence

### Preferred Sources

* Official government or institutional statements
* Reputable regional or international media
* Independent investigations or reports

### Use With Caution

* Social media posts
* Anonymous or unverifiable sources

When using weak sources:

* Label them clearly
* Do not present them as confirmed fact

**Example**

- Acceptable: “According to an unverified Facebook post (link), locals reported smoke near the checkpoint; no official confirmation yet.”
- Unacceptable: “Locals said there was a bombing” (no link, no label that it’s unverified).

---

## 5. Copyright & Legal Safety

You **must not**:

* Copy or reuse headlines verbatim
* Include long excerpts (>1–2 sentences)
* Upload downloaded media
* Reproduce full articles or transcripts
* Closely mirror original wording or structure

You **should**:

* Write original summaries
* Attribute sources clearly
* Link to original material
* Keep quotes minimal

Failure to follow these rules may result in:

* PR rejection
* Content removal
* Loss of contribution privileges

**Example**

- Acceptable: Quote a single sentence from an official statement, link to the full release, and summarize in your own words.
- Unacceptable: Paste three paragraphs from a Thai news article or upload the accompanying photograph.

---

## 6. Contribution Workflow (High Level)

1. **Check existing events**
   Avoid duplicates. Update if already present.

2. **Draft your contribution**
   Write originally, add sources, label uncertainty. Use `docs/templates/event_submission_template.csv` if you want a row-per-event worksheet before drafting Markdown.

3. **Open a Pull Request**
   Use the project PR template and complete all checklists.

4. **Review & moderation**
   Moderators may request changes or clarification.

5. **Merge & archive**
   Approved contributions become part of the public record.

**Example workflow**

1. Search for “2025-01-12” to confirm no existing entry.
2. Draft a short summary citing Reuters + Khmer Times.
3. Open a PR, fill the template, and note the confidence level.
4. Respond to moderator comments, then merge when approved.

---

## 7. Automation & Enforcement

This project uses automated checks to:

* Block missing checklists
* Detect risky content patterns
* Prevent media re-hosting
* Enforce required fields
PRs that fail these checks **will not merge**.

**Example**

- Acceptable: PR passes because all template boxes are checked, files stay within allowed folders, and no media is uploaded.
- Unacceptable: PR fails because the checklist was left blank or because a `docs/media/image.png` file was added.

---

## 8. Related Guides

For details, see:

* **Contributor Onboarding**
  `/docs/contributors/ONBOARDING.md`

* **Moderation Hub**  
  `/docs/moderation/README.md`

* **Confidence Levels & Verification Standards**
  `/docs/standards/CONFIDENCE_LEVELS.md`

* **Moderator Review Checklist**
  `/docs/moderation/MODERATOR_CHECKLIST.md`

**Example usage**

- Before your first PR, read Contributor Onboarding + Confidence Levels.
- If you are moderating, start in the Moderation Hub, then reference the checklist.

---

## Contributor Responsibility

By submitting a contribution, you confirm that:

* You understand this is a public civic archive
* Your contribution is factual and original
* You accept moderation decisions made in good faith
* Misleading or unsafe content may be reverted

**Example**

- Acceptable: You submit an original summary with sources and accept a downgrade request from a moderator.
- Unacceptable: You argue that plagiarism “is fine” or re-upload the rejected content without changes.

---

## Platform Responsibility

This project maintains a public historical record, which means maintainers will:

* Remove or revert contributions that violate neutrality, copyright, or legal standards
* Document moderation decisions for transparency
* Pause publishing when evidence is unclear or disputed
* Escalate high-risk content to legal advisers if needed

Contributors share this responsibility by following the rules above—unsafe entries endanger the entire archive.

---

## Final Principle

> **Accuracy protects people.
> Evidence protects truth.
> Neutrality protects this archive.**
