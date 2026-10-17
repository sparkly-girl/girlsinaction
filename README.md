# Girls in Action site

**Draft for review.** A one-page, informational website for **Girls In Action** featuring **Technovation in Fremont 2027**: information for Fremont-area families about girls teaming up with mentors to build app and AI solutions to real community problems.

Live (GitHub Pages): https://yumyumhotdog.github.io/Girls-in-Action-site/

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | All page content (one page, no build step, no JavaScript) |
| `style.css` | All styles: brand palette, layout, responsive rules |
| `assets/` | Girls In Action 30° blue-petal spark logo (SVG/PNG), favicons, og:image |

Page sections, top to bottom: header nav · hero · mission and "what makes us different" · how it works (Learn, Build, Share, Lead) · topics: **Girls in AI** (featured, Technovation in Fremont 2027 info: what Technovation is, who it's for, how Fremont teams work, timeline, what parents should know), Athletics, Art, Accounting · footer ("Take action around the world", where you'll find us, Draft for review).

## How to edit

1. Open `index.html` in any text editor and change the text directly.
2. Fill in placeholders: search for `[` and `TBD`. They are shown with a dashed gold highlight (`class="placeholder"`). When you replace one with real info, remove the `<span class="placeholder">` wrapper too.
3. Colors live at the top of `style.css` as CSS variables (`--blue`, `--coral`, `--gold`, `--teal`, `--plum`, `--cream`).
4. Preview locally: open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
5. Commit and push to `main`. GitHub Pages republishes automatically in a minute or two.

## Brand

- Colors: blue `#2563EB`, coral `#FF5E5B`, gold `#FFB627`, teal `#0F9D8F`, plum `#2B1640` (text and dark bands), cream `#FFF6EC` (background)
- Fonts: Poppins (headings) and DM Sans (body), loaded from Google Fonts

For official Technovation program details, see https://technovation.org.
