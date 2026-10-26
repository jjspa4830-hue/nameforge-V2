# NameForge Engineering Constitution

## Purpose
NameForge is a multilingual name-generation web application. Changes must improve the product without regressing existing generators, localization, accessibility, or published-site behavior.

## Principles

### 1. Preserve existing behavior by default
- Inspect the current implementation before changing it.
- Prefer small, reviewable changes over broad rewrites.
- Do not remove a feature, dataset, generator, route, or saved-user-data format without explicit justification and a migration plan.
- Preserve compatibility with the existing React, TypeScript, Vite, and GitHub Pages setup unless a proposal demonstrates a clear benefit.

### 2. Localization is a product requirement
- Treat the 25 supported locales as first-class interfaces, not as a French-first UI with translated headings.
- Localize visible labels, categories, controls, empty/error states, generated-name metadata, dialogs, exports, and accessibility labels where applicable.
- Respect right-to-left direction and locale-specific typography.
- Never silently replace a missing translation with unrelated text. Use an intentional, documented fallback and report coverage gaps.
- Preserve proper names and source-specific facts; do not machine-translate factual etymology or cultural claims without validation.

### 3. Accessibility and responsive design
- Controls must have accessible names, keyboard support, visible focus, and correct semantic roles.
- Dialogs must support keyboard navigation and predictable focus behavior.
- Check narrow/mobile layouts, long translated strings, light/dark themes, and RTL layouts for clipping and overflow.

### 4. Quality gates are evidence-based
- Run the relevant tests and production build for code changes when the environment permits.
- Use existing repository scripts first; do not claim a test passed unless its result was observed.
- Add or update regression tests for fixed defects and important new behavior.
- Record any test that could not be run and why.
- A clean static audit does not by itself prove translation quality or visual correctness.

### 5. SEO and deployment safety
- Preserve correct canonical URLs, metadata, sitemap, robots rules, and GitHub Pages base-path behavior.
- Avoid introducing broken internal links, duplicate page metadata, or untranslated SEO text.
- Do not merge a pull request, change deployment settings, publish a release, or deploy without explicit user authorization.

### 6. Privacy, security, and data integrity
- Minimize collection and persistence of user data.
- Validate and safely handle imported, stored, and user-provided values.
- Preserve saved-name data compatibility; document and test any schema migration.
- Never commit credentials, tokens, private keys, or personal data.

### 7. Reviewable Git workflow
- Make changes on a focused feature or fix branch.
- Keep pull requests scoped, describe risks and validation, and avoid mixing unrelated work.
- Inspect generated files and diffs before accepting tooling changes.
- Do not vendor or copy the Spec Kit tool itself into this application unless there is a deliberate dependency decision.

## Required completion report
For each substantial change, report:
1. What changed and why.
2. Files or areas affected.
3. Tests/build/audits actually run and their observed outcomes.
4. Known gaps, risks, and follow-up work.
5. Whether the change is only on a branch, merged, or deployed.

## Change policy
Amend this constitution only when a principle needs an explicit, reviewed change. A feature specification or implementation plan must not weaken these principles silently.
