# Specification

## Summary
**Goal:** Fix the bouquet illustration in the Virtual Rose Gift section so it reliably loads in production (including when hosted under a non-root base path), and gracefully falls back if the asset can’t be loaded.

**Planned changes:**
- Update the bouquet image `src` construction to use the app’s base URL instead of a hard-coded leading `/` path.
- Add an `onError` (or equivalent) handler to show a non-blocking fallback/placeholder if the bouquet image fails to load, without breaking layout.

**User-visible outcome:** The bouquet image consistently displays on mobile and desktop in production builds (including subpath deployments); if it fails to load, users see a clean fallback instead of a broken image/layout.
