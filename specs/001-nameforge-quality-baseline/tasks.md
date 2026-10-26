# Tasks: NameForge Quality Baseline

## T001 — Establish project guardrails
- [x] Add the engineering constitution.
- [x] Cover localization, RTL, accessibility, tests, SEO, data safety, and deployment authorization.

## T002 — Specify the adoption slice
- [x] Record the problem, goals, scope, out-of-scope items, requirements, acceptance criteria, risks, and definition of done.

## T003 — Plan a low-risk integration
- [x] Keep the first slice documentation-only.
- [x] Keep official CLI installation separate from application runtime dependencies.
- [x] Document a rollback path.

## T004 — Document local Spec Kit setup
- [x] Add Windows PowerShell commands and safety warnings.
- [x] Explain how to continue work through ChatGPT and GitHub after initialization.

## T005 — Review the pull request
- [ ] Inspect all changed files and ensure no application source or dependency files changed.
- [ ] Confirm the adoption branch is separate from the localization PR.
- [ ] Review and approve the pull request before merging.

## T006 — Initialize official Spec Kit locally (user's computer)
- [ ] Ensure the local checkout has no uncommitted work, or commit/stash it.
- [ ] Install/verify Python 3.11+ and uv.
- [ ] Install specify-cli and run `specify version`.
- [ ] Run initialization using the chosen integration.
- [ ] Review the generated diff and resolve any conflicts.
- [ ] Commit the reviewed official scaffolding to a branch and push it.
- [ ] Re-check CI after the generated files are proposed.

## T007 — Prove the workflow on one bounded feature
- [ ] Create one feature specification with measurable acceptance criteria.
- [ ] Create its plan and task list.
- [ ] Implement only the agreed scope.
- [ ] Run relevant tests/build and record observed results.
