# Girls In Action website: sitemap

Plain HTML/CSS, one shared `style.css`, minimal JS (`nav.js` for the mobile menu, `form.js` for the 2027 sign-up form only). All links are relative, so the site works when opened locally and when hosted under `/girlsinaction/` (https://yumyumhotdog.github.io/girlsinaction/) on GitHub Pages.

## Global (every page)
- **Header:** spark logo + "Girls In Action"; nav: Home · Girls in AI (submenu: Girls in AI overview, Technovation, 2027 season) · Athletics · Art · Accounting. Current page marked with `aria-current`. Mobile: a "Menu" toggle button.
- **Breadcrumbs:** on every subpage (e.g. Home › Girls in AI › Technovation › 2027).
- **Footer:** "Take action around the world" / "Start where you are: one person, one local need, one sub-project." / "[website / link TBD]" · "Open to ages 13+" / topic links.
- **Brand:** 30° blue-petal spark logo; plum `#2B1640` ink and dark bands; cream `#FFF6EC` background; topic colors: AI blue `#2563EB`, Athletics coral `#FF5E5B`, Art gold `#FFB627`, Accounting teal `#0F9D8F`; Poppins headings, DM Sans body.
- **Facts policy:** no invented dates, places, fees, names, results or stats. Unknowns are shown as `[... TBD]` placeholders.

## 1. Home (`index.html`)
**Purpose:** introduce Girls In Action (not Technovation) and route visitors to a topic.
- Hero (plum): kicker "GIRLS & WOMEN RISING TOGETHER · AGES 13+", "Girls In Action", "Leap Forward"; buttons to Topics and How it works.
- Our mission: "Girls and women taking action in every part of the world."
- What makes us different: "Girls and women learning from each other across many fields."
- How it works: Learn (coral) → Build (gold) → Share (teal) → Lead (blue), plus "Then every leader helps the next learner, and the circle grows."
- Pick a sub-project: 4 cards (Girls in AI, Athletics, Art, Accounting) → landing pages; small Technovation teaser link inside the AI card only; "+ More topics coming as more members join in."
- Where you'll find us: Websites · Bots (added over time) · Videos · Community chats · Member-led action.

## 2. Topic landing pages (shared template)
`ai/index.html` (blue) · `athletics/index.html` (coral) · `art/index.html` (gold) · `accounting/index.html` (teal)
**Purpose:** explain one sub-project and how to join it.
- Hero in the topic color: "GIRLS IN" kicker, topic name, the infographic tile line.
- What it is · What members do (Learn/Build/Share/Lead applied to the topic) · How to get involved (steps + placeholders) · Upcoming (placeholder events) · Back to home / other topics.
- AI page also has a featured **Technovation** panel → `ai/technovation/`.

## 3. Technovation area (within Girls in AI), organized by season year
- **`ai/technovation/index.html` (overview):** what Technovation is (general facts from technovation.org, linked); how it fits in Girls in AI; season cards: **2027 (current)**, 2026 (archive), 2025 (archive).
- **`ai/technovation/2027.html` (current season):** about the season · who it's for · how Fremont teams work (form a team, find a mentor, build, submit) · timeline with [Date TBD] entries · what parents should know · **sign-up form** (`#signup`) for parent/guardian name, email, phone, recommended friends and notes; it is not connected yet and shows an inline "This form isn't connected yet." note; `form.js` has a commented hook for a future backend/Google Form.
- **`ai/technovation/2026.html`, `2025.html` (archive template):** season summary · teams · projects · highlights · photos, all placeholders like "[Team/project details TBD]".
