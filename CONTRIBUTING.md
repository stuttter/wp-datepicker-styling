# Contributing

Thanks for helping maintain WP Datepicker Styling.

## Before changing behavior

Describe the observable styling change, affected datepicker states, color
schemes, browser expectations, and acceptance criteria in a GitHub issue.
Report suspected vulnerabilities privately through
[GitHub Security Advisories](https://github.com/stuttter/wp-datepicker-styling/security/advisories/new).

## Pull requests

- Keep each pull request focused and reversible.
- Update the source files under `src/`; do not edit generated CSS by hand.
- Add regression coverage for selector or packaging changes.
- Check every supported WordPress and bbPress administration color scheme.
- Identify responsive, right-to-left, inline, and multiple-month implications.
- Do not commit credentials, dependency directories, build caches, or package archives.
- Run `npm ci --ignore-scripts`, `npm audit`, and `npm run check` before requesting review.
- Wait for every required check and resolve review conversations before merge.

AI-assisted contributions are welcome, but the contributor remains responsible
for understanding and validating the result.

## Development requirements

The build uses Node.js 22.22.3, 24.15.0, or 26.0.0 and newer, with npm 10 or
newer. The exact dependency graph is recorded in `package-lock.json`.
