# Girls In Action website

Live site: https://yumyumhotdog.github.io/girlsinaction/

A multi-page static website for **Girls In Action** (Leap Forward): girls and women taking action in every part of the world. Plain HTML and CSS with one shared `style.css`, no build step and no framework. All links are relative, so the site works when you open the files locally and on GitHub Pages.

## Sitemap

| Page | Path | What's on it |
| --- | --- | --- |
| Home | `index.html` | Hero, mission, what makes us different, how it works (Learn, Build, Share, Lead), the four topic cards, where you'll find us |
| Girls in AI | `ai/index.html` | Topic page (blue), plus a Technovation feature |
| Girls in Athletics | `athletics/index.html` | Topic page (coral) |
| Girls in Art | `art/index.html` | Topic page (gold) |
| Girls in Accounting | `accounting/index.html` | Topic page (teal) |
| Technovation | `ai/technovation/index.html` | What Technovation is, how it fits in Girls in AI, season cards |
| 2027 season (current) | `ai/technovation/2027.html` | About the season, who it's for, how Fremont teams work, timeline, what parents should know, sign-up form (`#signup`) |
| 2026 / 2025 seasons | `ai/technovation/2026.html`, `2025.html` | Archive pages: summary, teams and projects, highlights, photos |

More detail: [`SITEMAP.md`](SITEMAP.md).

Every topic page uses the same layout: hero in the topic color, what it is (with quick facts), what members do, how to get involved, upcoming, and links to the other topics.

## Files

- `style.css`: all styles. Brand colors are CSS variables at the top: `--blue` (AI), `--coral` (Athletics), `--gold` (Art), `--teal` (Accounting), `--plum` (text and dark bands), `--cream` (background). Fonts: Poppins (headings) and DM Sans (body) from Google Fonts.
- `nav.js`: the mobile "Menu" button only.
- `form.js`: the 2027 sign-up form. It is **not connected**: when someone submits, nothing is sent and the page shows "This form isn't connected yet." To connect it later, set `CONFIG.enabled = true` and fill in `sendSubmission()` (see the comments in the file). Add a real privacy note on the 2027 page before you do.
- `assets/`: the Girls In Action spark logo (SVG/PNG), favicons and the social-share image.

## How to edit

1. Open the page's `.html` file in any text editor and change the text. The header, nav and footer are repeated on every page, so if you change one of them, change it on all 9 pages.
2. **Placeholders** look like `[Date TBD]` and appear on the page with a dashed gold highlight (`<span class="ph">`). Search the files for `TBD` to find them all. When you replace one with real info, delete the `<span class="ph">` wrapper too.
3. Only add team names or photos to the archive pages if the families have given permission.
4. To preview, open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
5. Commit and push to `main`. GitHub Pages republishes in a minute or two.

For official Technovation program details, see https://technovation.org.
