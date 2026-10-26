# GitHub Spec Kit with ChatGPT and GitHub

This guide is for maintaining NameForge primarily through ChatGPT and the GitHub repository, without requiring GitHub Copilot as the everyday coding agent.

## Important distinction

The files in `.specify/memory/` and `specs/` in this pull request are a **Spec Kit-style project baseline**, not proof that the official Spec Kit CLI has been installed. The official CLI must be run from a local checkout to generate its managed templates, scripts, and selected agent integration. Do not describe the official integration as complete until those files and local checks have been reviewed.

Official project:
- Repository: https://github.com/github/spec-kit
- Existing-project guide: https://github.com/github/spec-kit/blob/main/docs/guides/existing-projects.md
- Installation guide: https://github.github.io/spec-kit/installation.html

## Recommended workflow with ChatGPT

1. Ask ChatGPT to inspect the relevant repository files and current pull requests before proposing a change.
2. Create a dedicated branch for one bounded change.
3. Write or update `specs/<id>-<short-name>/spec.md` with user stories and testable acceptance criteria.
4. Record implementation decisions in `plan.md` and break the work into `tasks.md`.
5. Implement small changes on the branch. Keep unrelated fixes out of the same pull request.
6. Run the existing validation scripts where an execution environment is available:
   - `npm run lint`
   - `npm test`
   - `npm run build`
   - `npm run test:visual` when browser tooling is available
7. Review the diff and CI results. Report tests as unverified if they were not actually run.
8. Keep the pull request open for review. Merge or deploy only after explicit authorization.

ChatGPT can help draft specifications, inspect files, make supported GitHub repository changes, and review CI results visible through GitHub. A GitHub file edit does not itself run local commands. For tests that need a local environment, use the repository's CI or run them in a local checkout and share the observed results.

## Windows PowerShell: official CLI setup

### Prerequisites

- Python 3.11 or newer.
- `uv` installed and available in PowerShell.
- A local clone of NameForge.
- Choose an integration key for an agent you actually use. Do not select Copilot merely because it is the default if you do not use it.

### 1. Open the repository and check the working tree

```powershell
cd path\to\nameforge-V2
git status --short
git switch -c setup/github-spec-kit-local
```

If the working tree has changes you need, commit or stash them before proceeding. If the branch already exists, switch to it instead of creating it again.

### 2. Install and verify the CLI

```powershell
uv tool install specify-cli
specify version
```

### 3. Initialize only after reviewing the baseline

The official documentation recommends initializing an existing project in place and reviewing the generated diff. The `--force` option allows merging into a non-empty directory and can overwrite conflicting Spec Kit-managed files, so do not run it casually.

For an agent integration you actually use, substitute the appropriate key:

```powershell
specify init --here --force --non-interactive --integration <integration-key> --script ps
```

If you do not use a supported local coding agent and want to prepare the scaffolding only, consult the current official docs for `--ignore-agent-tools` and supported integration choices before running the command. Do not guess an integration key.

### 4. Review and verify the generated files

```powershell
git status --short
git diff --stat
git diff
```

Check that no source files, dependency manifests, workflows, or existing user work changed unexpectedly. Run `specify check` if supported by the installed version, then run the applicable NameForge checks:

```powershell
npm ci
npm run lint
npm test
npm run build
```

Run `npm run test:visual` only where its browser requirements are installed and available. Record any failures; do not bypass them just to merge.

### 5. Push the reviewed branch

```powershell
git add .specify specs .github
git commit -m "chore: initialize GitHub Spec Kit"
git push -u origin setup/github-spec-kit-local
```

Before running `git add`, inspect `git status --short` and stage only the files you intentionally reviewed. If the chosen integration writes files outside those folders, stage those specific reviewed paths too. Then open a pull request and review CI.

## How to work with this repository from ChatGPT

When asking for a change, provide:
- The intended user outcome.
- The affected page/generator/locale, if known.
- Any non-negotiable constraints.
- The expected acceptance criteria.

Ask for a concise report of changed paths, test evidence, limitations, and merge/deployment status. Keep each substantial change in its own reviewable branch or pull request.

## Safety rules

- Do not commit secrets or credentials.
- Do not merge or deploy without explicit approval.
- Do not claim all 25 translations are perfect based only on automated coverage.
- Keep saved-name storage and GitHub Pages behavior compatible unless a migration is explicitly specified.
