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

- `index.html` — identity, destinations, accessible link labels, and social metadata.
- `style.css` — palette, local fonts, responsive spacing, hover/focus details, and reduced-motion support.
- `script.js` — the India clock and the small blue-dot interaction.
- `assets/` — font files and licenses, favicon, and social preview image.
- `DESIGN.md` — the supplied redesign brief.

The Sound row uses the existing `https://soundcloud.com/himumusic` destination because `https://himu.me/sound` returned 404 when verified on 15 October 2026. When that page launches, change the row's URL, accessible name, new-tab attributes, and arrow together. Ecosystem destinations use → and external destinations use ↗. The email address was checked against `himu.me`: `tiwari.himanshu@proton.me`.

External profiles and the résumé open in a new tab, with an accessible description. The primary home link stays in the same tab. All primary rows are full-width anchors; hover details also appear on keyboard focus. Motion stops when reduced motion is requested, and the clock pauses while the page is hidden.

The original résumé and custom domain are preserved. The previous starfield, background animations, unused configuration, and avatar have been retired.

## License

[MIT](LICENSE.md). Bundled fonts retain their own licenses.
