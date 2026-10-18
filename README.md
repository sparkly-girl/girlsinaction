# Girls In Action website

Live site: https://sparkly-girl.github.io/girlsinaction/

A multi-page static website for **Girls In Action** (Leap Forward): girls and women taking action in every part of the world. Plain HTML and CSS with one shared `style.css`, no build step and no framework. All links are relative, so the site works when you open the files locally and on GitHub Pages.

## Sitemap

| Page | Path | What's on it |
| --- | --- | --- |
| Home | `index.html` | Hero, mission, what makes us different, how it works (Learn, Build, Share, Lead), the four topic cards, where you'll find us |
| Girls in AI | `ai/index.html` | Topic page (blue), plus a Technovation feature |
| Girls in Athletics | `athletics/index.html` | Topic page (coral) |
| Girls in Art | `art/index.html` | Topic page (gold) |
| Girls in Accounting | `accounting/index.html` | Topic page (teal) |
| Technovation (2027, current season) | `ai/technovation/index.html` | 2027 hero, "Get started" buttons (parent / mentor), what Technovation is, about the season, who it's for, divisions & ages, how Fremont teams work, what teams build and submit, Fremont timeline and official 2026–27 dates, judging, prizes, what parents should know, mentors (official facts link to their Technovation source pages), parent sign-up (`#parent-signup`, also `#signup`) and mentor sign-up (`#mentor-signup`) forms, past season cards |
| 2027 (old URL) | `ai/technovation/2027.html` | Redirects to `index.html`, keeping any `#anchor` |
| 2026 / 2025 seasons | `ai/technovation/2026.html`, `2025.html` | Archive pages: summary, teams and projects, highlights, photos |

More detail: [`SITEMAP.md`](SITEMAP.md).

Every topic page uses the same layout: hero in the topic color, what it is (with quick facts), what members do, how to get involved, upcoming, and links to the other topics.

## Files

- `style.css`: all styles. Brand colors are CSS variables at the top: `--blue` (AI), `--coral` (Athletics), `--gold` (Art), `--teal` (Accounting), `--plum` (text and dark bands), `--cream` (background). Fonts: Poppins (headings) and DM Sans (body) from Google Fonts.
- `nav.js`: the mobile "Menu" button only.
- `form.js`: handles every `<form class="js-formsubmit">` (the parent and mentor sign-up forms on the Technovation page). Submissions are emailed via FormSubmit's AJAX endpoint. Each form sets its email subject with `data-subject` (mirrored into a hidden `_subject` input), its own thank-you text with `data-success`, and has its own `.form-status` message area and `_honey` honeypot. Add a real privacy note before promoting the forms widely.
- `assets/`: the Girls In Action spark logo (SVG/PNG), favicons and the social-share image.

## How to edit

1. Open the page's `.html` file in any text editor and change the text. The header, nav and footer are repeated on every page, so if you change one of them, change it on all 9 pages.
2. **Placeholders** look like `[Date TBD]` and appear on the page with a dashed gold highlight (`<span class="ph">`). Search the files for `TBD` to find them all. When you replace one with real info, delete the `<span class="ph">` wrapper too.
3. Only add team names or photos to the archive pages if the families have given permission.
4. To preview, open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
5. Commit and push to `main`. GitHub Pages republishes in a minute or two.

For official Technovation program details, see https://technovation.org.
