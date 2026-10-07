# Portfolio website

Static site, published with GitHub Pages from the `main` branch root.

## Design authority: Are.na

The Are.na channel **Portfolio Website** (`portfolio-website-kx4azse_7a8`,
https://www.are.na/morten-fredslund-lokke/portfolio-website-kx4azse_7a8) is the
design brief for this site. It overrides personal taste and generic defaults.

Before any design or front-end work:

1. Read the whole channel with the Are.na MCP (`getChannelContents`, sort `position_asc`).
2. Look at image, video and link blocks themselves, not only their titles.
3. Treat blocks by their prefix (in the title or description):
   - `DO:` / `DON'T:` are hard rules.
   - `STYLE:` is a reference for the overall look and feel.
   - `TYPE:`, `COLOUR:`, `MOTION:`, `LAYOUT:`, `CONTENT:` are references for that area.
   - Text blocks without a prefix are general principles.
   - Anything else is loose inspiration.
4. If a change goes against the channel, say so instead of quietly doing it.
5. Assets that end up on the site are saved to `assets/`. Don't hotlink Are.na images.

## Conventions

- Plain HTML, CSS and JS, with no build step unless the channel asks for something that needs one.
- Keep it fast and accessible: semantic HTML, alt text, `prefers-reduced-motion` for animations.

## Tracking changes

`arena-state.json` records the channel as it was at the last check (block id → `updated_at`).
Writing "arena" means: compare the channel with this file, apply the changes, and update the file
(see the shortcut in `~/.claude/CLAUDE.md`).

## Decisions

- No clock on the site, even though the UNCANNY reference has one.
- No section line between the intro and the work.
