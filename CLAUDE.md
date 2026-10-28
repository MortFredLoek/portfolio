# Portfolio website

Static site (plain HTML, CSS and JS). Edited in VS Code with Claude Code, pushed to GitHub,
deployed by Netlify.

## Structure

```
portfolio/
├── site/                  ← everything here is published (Netlify publish folder)
│   ├── index.html         front page
│   ├── work/index.html    work page, served at /work/
│   ├── 404.html           not found page
│   └── assets/
│       ├── css/site.css
│       ├── js/site.js
│       ├── fonts/         Times Dot Roman
│       └── images/        one folder per project: images/<project-slug>/01.jpg
├── netlify.toml           Netlify settings (publish folder, headers, redirects)
├── arena-state.json       last known state of the Are.na channel
├── CLAUDE.md              this file
└── README.md
```

Nothing outside `site/` is public. Keep notes, drafts and source files outside it.

## Workflow

- Preview locally: open `site/index.html` with VS Code's Live Server (root is set to `/site`),
  or run `npx serve site`.
- Paths inside `site/` are relative (`assets/...` on the front page, `../assets/...` in `work/`),
  so pages also work when opened locally.
- Work on a branch for bigger changes. Netlify makes a preview URL for every pull request.
- Pushing to `main` deploys the live site automatically.
- Don't push to `main` without the owner's go-ahead.

## Adding a project

1. Copy the project template comment in `site/work/index.html` into a new `<li class="project">`.
2. Put images in `site/assets/images/<project-slug>/`, named `01.jpg`, `02.jpg` and so on.
3. Export images at max 2000 px wide, JPG or WebP, and always write alt text.

## Design rules

- Times Dot Roman for all text. All type lowercase (from the Are.na channel, not yet applied).
- No clock on the site, even though the UNCANNY reference has one.
- No section line between the intro and the work.
- No light/dark toggle: the site follows the visitor's system setting.
- The ambient designer definition sits fixed in the bottom right corner and fades in letter by
  letter. Respect `prefers-reduced-motion`.
- Keep it fast and accessible: semantic HTML, alt text, no build step unless really needed.

## Are.na (optional reference)

The Are.na channel **portfolio** (`portfolio-2b_wdhnprui`,
https://www.are.na/morten-fredslund-lokke/portfolio-2b_wdhnprui) holds the creative direction.
It used to be called "Portfolio Website" (`portfolio-website-kx4azse_7a8`).

When asked to "arena" (sync with Are.na):

1. Read the whole channel with the Are.na MCP (`getChannelContents`, sort `position_asc`).
2. Look at image, video and link blocks themselves, not only their titles.
3. Treat blocks by their prefix (in the title, description or text):
   - `DO:` / `DON'T:` are hard rules.
   - `STYLE:` is a reference for the overall look and feel.
   - `TYPE:`, `COLOUR:`, `MOTION:`, `LAYOUT:`, `CONTENT:` are references for that area.
   - Text blocks without a prefix are general principles.
   - Anything else is loose inspiration.
4. Compare with `arena-state.json` (block id → `updated_at`), apply the changes, update the file.
5. If a change goes against the rules above, say so instead of quietly doing it.
6. Save assets into `site/assets/images/`. Don't hotlink Are.na images.
