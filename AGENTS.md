# WP Datepicker Styling contributor guidance

## Compatibility

- This repository distributes CSS, not a WordPress plugin.
- Preserve existing selectors, public asset names, color schemes, inline and
  multiple-month layouts, right-to-left behavior, and browser support unless a
  dedicated pull request documents the compatibility change.
- Treat generated CSS, source maps, broad selectors, and date-state rules as
  elevated-risk behavior.

## Tests and assets

- Change source files under `src/`; do not edit generated CSS by hand.
- Keep `datepicker.css`, `datepicker.css.map`, and `datepicker.min.css`
  synchronized with the source and locked build toolchain.
- Add regression coverage before changing observable selectors or packaging.
- Run `npm ci --ignore-scripts`, `npm audit`, and `npm run check` before review.

## Automation

Follow the organization-level safety boundaries. AI-authored implementation
must remain a draft pull request and cannot modify workflows, dependency or
release policy, ownership, security policy, or this file without explicit
maintainer authorization. Releases must use an exact commit from `master`.
