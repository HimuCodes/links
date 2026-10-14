# links.himu.me

Himanshu Tiwari's small internet calling card. Five curated destinations, contact links, and a permanent résumé URL, on warm paper.

Plain HTML, CSS, and a small deferred JavaScript file. No dependencies, build step, analytics, or third-party runtime requests. Links remain usable with JavaScript disabled. Geist and Newsreader are self-hosted; their SIL Open Font licenses are in `assets/fonts/`.

## Preview

Serve the repository with any static HTTP server. For example, if Python is installed:

```sh
python -m http.server 8080
```

Open `http://localhost:8080`. The site can be deployed directly from the repository root with GitHub Pages or any static host. `CNAME` retains `links.himu.me`; `resume.pdf` retains its canonical path.

## Edit

The site is intentionally small and static. There is no build step or configuration layer to keep in sync.

- `index.html` — edit the identity copy, link destinations, descriptions, contact links, accessibility labels, and social metadata.
- `style.css` — controls the warm-paper palette, typography, layout, responsive behavior, focus states, and restrained hover interactions.
- `script.js` — contains only the live India clock and the small `h.` blue-dot interaction.
- `resume.pdf` — replace this file in place to update the résumé while keeping `https://links.himu.me/resume.pdf` permanent.
- `assets/` — self-hosted fonts and licenses, the favicon, and the social preview image.
- `CNAME` — keeps the GitHub Pages custom domain at `links.himu.me`.
- `DESIGN.md` — documents the visual direction and design decisions behind the current implementation.

When editing links, keep the existing navigation grammar: → for destinations inside the `himu.me` ecosystem and ↗ for external destinations. External links should continue to open in a new tab with the appropriate `rel` attributes; the main `himu.me` link stays in the current tab.

Keep the page lightweight. The primary rows should remain full-width links, keyboard focus should expose the same useful details as hover, and `prefers-reduced-motion` support should be preserved. The page is deliberately light-only and does not need a theme toggle.

## License

[MIT](LICENSE.md). Bundled fonts retain their own licenses.
