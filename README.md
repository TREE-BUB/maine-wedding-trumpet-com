# Handoff: Maine Trumpet Lessons — Marketing Website

## Overview
A single-page marketing website for **Maine Trumpet Lessons**, a one-on-one, in-person trumpet
teaching studio run by Jimi Michel in the Deering Center neighborhood of Portland, Maine.

The site has five primary views plus a contact view, rendered as a client-side "router" that
swaps the main content without full page loads:

- **Home** (welcome / hero + testimonials + CTA)
- **Lessons** (teaching philosophy — 3 pillars)
- **Policies** (studio policies — 5 numbered sections)
- **Pricing** (2025–2026 rates, written as prose + a discount note)
- **About** (bio, instruments, links)
- **Contact** (intro + contact details + map + a contact form)

A persistent top **nav** and **footer** wrap every view. A big **CONTACT** button lives in the nav.

## About the Design Files
The files in this bundle are **design references implemented in HTML + inline React (Babel)**.
They are a prototype that demonstrates the intended look, copy, layout, and interactions — they are
**not** meant to be shipped as-is.

The task is to **recreate these designs in a real, production codebase** using its established
patterns and tooling. If no codebase exists yet, the recommended target is a small static site
(e.g. **Astro**, **Next.js static export**, **Vite + React**, or even plain HTML/CSS) since the site
is brochure-style with one interactive piece (the contact form). The current prototype loads React,
ReactDOM, and Babel from a CDN and transpiles JSX in the browser — **do not do this in production**;
use a real build step.

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, copy, and interactions are final and intended
to be reproduced faithfully. Exact tokens are listed below. The one area that is intentionally a
placeholder is the **contact form submission** (see Interactions).

## Tech in the prototype (for reference only)
- React 18 + ReactDOM + Babel standalone (CDN, in-browser transpile) — **replace with a build step**
- `index.html` — design tokens (CSS custom properties), global CSS, font loading, mount point, script tags
- `app.jsx` — nav, footer, the page "router", and the Tweaks panel wiring
- `pages.jsx` — every page/section component
- `tweaks-panel.jsx` — a prototype-only design-tweaking panel (**do NOT port** — see note)
- `assets/jimi-trumpet.jpg` — hero + about portrait (B&W photo of Jimi playing)
- `assets/deering-map.png` — contact-page map of Deering Center with an orange location pin (1120×867)

> **Tweaks panel:** `tweaks-panel.jsx` and the `<TweaksPanel>` block in `app.jsx` are a design-time
> tool for toggling hero variants and the accent color during the design process. **Omit it entirely
> from production.** It is documented here only so you understand the `t.welcome` / `t.accent` reads
> in `app.jsx` can be replaced with the chosen defaults (`welcome: "editorial"`, `accent: "#e0843c"`).

---

## Design Tokens

All defined as CSS custom properties on `:root` in `index.html`.

### Colors
| Token | Hex | Usage |
|---|---|---|
| `--paper` | `#f3f0e9` | Page background (warm off-white) |
| `--paper-2` | `#ece8de` | Placeholder / subtle fill |
| `--card` | `#faf8f3` | Card backgrounds, inputs |
| `--ink` | `#0c2a28` | Primary text (near-black teal) |
| `--teal` | `#0d3b3b` | Dark sections, footer, primary buttons |
| `--teal-2` | `#134a48` | Teal hover |
| `--muted` | `#5c6f6c` | Secondary text, labels |
| `--line` | `#d9d3c6` | Borders / dividers on light bg |
| `--line-dark` | `#234a47` | Borders on teal bg |
| `--accent` | `#e0843c` | Orange accent — CTAs, active states, eyebrows, map pin |
| `--accent-deep` | `#c66a26` | Accent hover / accent text (derived: `color-mix(accent 78%, #4a1f00)`) |

### Typography
- **Primary family (`--sans`)**: `-apple-system, BlinkMacSystemFont, 'Figtree', 'Segoe UI', system-ui, sans-serif`
  - Renders as San Francisco on Apple devices; **Figtree** (Google Fonts) is the cross-platform fallback. Load Figtree weights 300–800 + italic 400.
- **`--mono`**: intentionally points at the SAME sans stack (there is no monospace in the final design). It is used for small uppercase "eyebrow"/label text. You can collapse `--mono` and `--sans` into one token in production.
- Headings: `font-weight: 700; letter-spacing: -0.02em; line-height: 1.04`
- Body lede: `clamp(1.05rem, 1.6vw, 1.3rem)`, line-height 1.55, color `--muted`
- **Eyebrow** (`.eyebrow`): uppercase, `letter-spacing: 0.22em`, color `--accent-deep`, with a 26px×1px accent dash via `::before`.
- **Large eyebrow** (`.eyebrow-lg`, the top label on every page): `font-size: 24px; font-weight: 700; line-height: 1.4; letter-spacing: 0.16em` (combined with `.eyebrow`).

### Spacing / Radii / Layout
- `--radius: 14px` (cards, images, map)
- `--maxw: 1180px` (content container `.wrap`, horizontal padding 40px desktop / 22px mobile)
- Section padding: `.section` 96px vertical (64px ≤820px); `.section-sm` 64px; hero uses `clamp()` values noted per-component.
- Buttons: pill (`border-radius: 999px`). Default `padding: 13px 26px`; `.btn-lg` `17px 34px`.
- Pin/CTA cards on teal use `border-radius: 20px`.

### Buttons
- `.btn-accent`: bg `--accent`, white text, `box-shadow: 0 1px 0 --accent-deep`; hover → `--accent-deep`, lift `translateY(-1px)`, soft shadow.
- `.btn-ink`: bg `--teal`, paper text; hover → `--teal-2` + lift.
- `.btn-ghost`: transparent, `1px solid --line`, ink text; hover → border `--ink`.

---

## Global Chrome

### Nav (`Nav` in app.jsx)
- Sticky top, height 78px, background `--paper` at 86% opacity with `backdrop-filter: blur(12px)`, bottom border `--line`.
- **Left:** wordmark "Maine Trumpet Lessons" (`font-weight: 800; text-transform: uppercase; font-size: clamp(1.08rem,1.6vw,1.4rem); letter-spacing: 0.015em`) with a centered sub-line "Deering Center, Portland" (`font-size: 0.72rem; font-weight: 600; letter-spacing: 0.16em; uppercase; color: --muted; text-align: center`). Clicking the wordmark goes Home.
- **Right:** nav links + a filled **CONTACT** accent pill button.
  - Link order (drives footer too): **Home, Lessons, Policies, Pricing, About**.
  - Link: `font-size: 0.88rem; font-weight: 500; color: --muted; padding: 8px 11px`; hover → `--ink`.
  - **Active** link: color `--ink`, `font-weight: 700`, and a **4px** accent underline via `::after` (`left/right: 11px; bottom: -1px; border-radius: 3px`).
  - CONTACT button: `.btn-accent` + `letter-spacing: 0.05em; font-weight: 700; padding: 11px 20px`.
- **≤820px:** plain nav links hide; only the CONTACT button remains (a real build should add a proper mobile menu).

### Footer (`Footer` in app.jsx)
- Background `--teal`, paper text, padding `70px 0 40px`.
- Top grid (`1.4fr 1fr 1fr`, collapses to 1 col ≤820px):
  - Col 1: wordmark (no mark/icon), a short blurb, and a "Book a trial lesson" accent button.
  - Col 2: "Explore" — the same page links + Contact.
  - Col 3: previously "Follow" — **was removed**; only two columns of links remain in the current build (verify in `Footer`).
- Bottom row: left = `Made with ♥ in Deering Center, Portland` (the ♥ is `--accent`); right = `© <current year> Maine Trumpet Lessons`. Stacks left-aligned ≤820px.

### Page transition
- `.page` is `opacity: 1` by default. On navigation, JS adds `.page.in` which runs a 0.45s fade/translateY(8px) entrance **only** when `document.visibilityState === "visible"` and `prefers-reduced-motion: no-preference`. (This guard exists so paused/hidden iframes and PDF/print never freeze on the hidden start-frame — preserve this behavior.)
- Navigation also smooth-scrolls to top and persists the current page id in `localStorage` under key `mtl_page`.

---

## Screens / Views

### 1. Home (`Welcome` → `HeroEditorial` + `Highlights` + `CTABand`)
The prototype contains 3 hero variants (`editorial`, `centered`, `dark`); **production uses `editorial`**.

**Hero (editorial):**
- Two-column grid `1.05fr 0.95fr`, `gap: 56px`, vertically centered. Stacks on narrow screens.
- Left column:
  - `.eyebrow.eyebrow-lg` reading **"Welcome!"**
  - `<h1>` `font-size: 40px; line-height: 1.14; margin-top: 24px`:
    "Picking up the trumpet for the first time? Returning after a long hiatus? **You're in the right place!**" — the last sentence is wrapped in a span colored `--accent-deep`.
  - Intro paragraph (`.lede`, `font-size: 24px`, full column width): Jimi's ~2-decade teaching intro ending with two `<br/>` and a bold `– Jimi Michel` signature (color `--ink`, weight 600). (Exact copy in `pages.jsx`.)
  - Two buttons: **Get in touch** (`.btn-accent.btn-lg` → contact) and **See pricing** (`.btn-ghost.btn-lg` → pricing).
- Right column: `assets/jimi-trumpet.jpg`, `aspect-ratio: 4/5`, `object-fit: cover; object-position: center 30%`, radius `--radius`, `1px solid --line`.

**Highlights** (`.section`): eyebrow "Why study here" + 3 cards (`repeat(3,1fr)`, gap 28). Each card: padding 30, numbered `01/02/03` in accent-deep, an h3 (1.35rem), and a muted paragraph. Copy: "Built around you", "In-person, in Portland", "Patient & no pressure". *(Confirm against `Highlights` — content may have been edited.)*

**Testimonials** (inside `Highlights` in current build): eyebrow-style label "TESTIMONIALS". A custom grid (`.testimonial-grid`):
- Desktop: `grid-template-columns: repeat(6, 1fr)`, gap 26. Items 1–3 each `span 2` (three across). Items 4–5 `span 2` but explicitly placed `grid-column: 2/span 2` and `4/span 2` so the final two are **centered** beneath the first three.
- ≤980px: 2 columns; the 5th item centers at 50% width. ≤640px: single column.
- Each card: `.card`, padding 30, flex column with a serif open-quote glyph (Georgia, `--accent`, 2.6rem), the quote (`--ink`, 1.02rem), and a footer pinned to the bottom (`margin-top: auto`, top border) with bold author + a small uppercase role line.
- 5 real testimonials (Alexa; Eric Forman; Elizabeth England; Dr. Daniel Bassin; James). Exact text in `pages.jsx`.

**CTABand** (`.section`): teal rounded panel (`border-radius: 20px`, padding `clamp(40px,6vw,76px)`), two-column. Left: accent eyebrow "Ready when you are", h2 "Take the next step on your trumpet journey.", a muted lede about low-pressure lessons. Right: **Book a trial lesson** `.btn-accent.btn-lg` → contact. Stacks on mobile.

### 2. Lessons (`Philosophy`)
- `.section-sm`, `paddingTop: 72`, container `max-width: 880px`.
- `.eyebrow.eyebrow-lg` "LESSONS", h1 "Teaching philosophy.", a lede intro paragraph.
- A list of **3 pillars**, each a row: `grid-template-columns: auto 1fr`, `gap: clamp(24px,4vw,56px)`, `align-items: center`, `padding: 32px 0`, divided by `1px solid --line` top+bottom.
  - **Number** (`01/02/03`): `font-weight: 700; color: --accent-deep; font-size: clamp(2.8rem,7vw,5rem); line-height: 1; font-variant-numeric: tabular-nums`.
  - **Body**: h3 (`clamp(1.3rem,2.4vw,1.85rem)`) + muted paragraph (`1.05rem`, `max-width: 64ch`).
  - Titles: **Developing technique**, **Thinking musically**, **Thinking critically**. Full copy in `pages.jsx`.
- Followed by `CTABand`.

### 3. Policies (`Policies` with `PolicyBlock` + `PolicyList`)
- `.section-sm`, `paddingTop: 72`, container `max-width: 800px`.
- `.eyebrow.eyebrow-lg` "STUDIO POLICIES", h1 "What to expect.", an intro lede.
- 5 `PolicyBlock`s, each: top border + `padding-top: 38; margin-top: 50`, a small accent-deep number (`01`–`05`), an h2 (`clamp(1.5rem,3vw,2.1rem)`), then prose and/or a `PolicyList`.
  - `PolicyList`: borderless `<ul>`, each item a flex row with an accent-deep em-dash bullet.
  - Sections: **01 Practice expectations**, **02 Required materials** (bulleted), **03 Billing and attendance** (prose + bullets), **04 Terminating lessons** (prose + bullets), **05 Switching teachers**. Full copy in `pages.jsx`.
- Followed by `CTABand`.

### 4. Pricing (`Pricing`)
- `.section-sm`, `paddingTop: 72`, container `max-width: 820px`.
- `.eyebrow.eyebrow-lg` "PRICING", h1 "2025–2026 rates."
- Prose pricing (NOT cards): a lede paragraph stating $40 / 30 min, $55 / 45 min, $70 / 60 min, the "I do not raise prices on existing students" promise, and a second paragraph inviting anyone worried about cost to reach out for a discount. Confirm exact wording in `pages.jsx`.
- Followed by `CTABand`.

### 5. About (`About`)
- **Bio** (`.section-sm`, `paddingTop: 72`): `.eyebrow.eyebrow-lg` "ABOUT". Two-column grid `0.85fr 1.15fr`, gap 56, `align-items: start`.
  - Left: `assets/jimi-trumpet.jpg`, `aspect-ratio: 4/5`, cover, `object-position: center 30%`, radius, border, `position: sticky; top: 100px`.
  - Right: h1 "Jimi Michel.", two paragraphs of bio (music career; public-health/tech career). Exact copy in `pages.jsx`. (No stat numbers — they were intentionally removed.)
- **Instruments** (`.section-sm`): eyebrow "INSTRUMENTS", h2 "What I play & teach", a `repeat(2,1fr)` grid (gap 20) of cards. Each card: a small placeholder icon box (76×76) + name + short description. **Note:** instrument copy is still lorem-ipsum placeholder and the icons are striped placeholders — these need real content/art.
- **Links** (`.section-sm`, `paddingBottom: 80`): eyebrow "LINKS", h2 "Listen & follow along", a divided list of large link rows (label + small muted sub-label + a `↗`), with a left-padding hover nudge. Current entries (YouTube, Instagram, SoundCloud, Portland Brass Collective) are **placeholders pointing at `#`** — replace with real URLs or remove.

### 6. Contact (`Contact`)
- `.section-sm`, `paddingTop: 72; paddingBottom: 90`. Two-column grid `0.9fr 1.1fr`, gap 56, `align-items: start`.
- **Left column:**
  - `.eyebrow.eyebrow-lg` "CONTACT", h1 "Let's set up your first lesson.", a lede.
  - A details list (label + value rows): **Email** `hello@mainetrumpetlessons.com`, **Studio** `Deering Center, Portland (ME)`. (An "Hours" row was removed.)
  - The **map**: `assets/deering-map.png` wrapped in an `<a>` to Google Maps (`https://www.google.com/maps/place/Deering+Center,+Portland,+ME`, `target="_blank" rel="noopener"`), `border-radius: --radius`, `overflow: hidden`, `1px solid --line`, image `width: 100%`. The pin in the PNG is already recolored to the accent orange.
- **Right column:** the contact form card (`.card`, padding `clamp(28px,4vw,44px)`).

---

## Interactions & Behavior

### Routing
- Page state is a single `page` string in `App` (`app.jsx`). `go(id)` sets it, writes `localStorage["mtl_page"]`, and smooth-scrolls to top. On load, the initial page is read back from `localStorage` (default `welcome`).
- In production, prefer **real routes/URLs** (`/`, `/lessons`, `/policies`, `/pricing`, `/about`, `/contact`) so pages are linkable and SEO-friendly, instead of a localStorage string. Preserve the smooth-scroll-to-top and the active-link underline behavior.

### Contact form (`Contact`)
Fields: **Your name**, **Email**, **Message** (textarea, 5 rows, vertical resize only).
- Field styling: label is small uppercase muted; input/textarea `1px solid --line`, radius 11px, padding `14px 16px`; focus → border `--accent` + `0 0 0 3px` accent glow; error → red border `#c0392b` + small red message.
- **Client-side validation on submit:** name required; email must match a basic email regex; message must be ≥ 8 characters. Errors render under each field.
- **On success:** the form is replaced with a centered confirmation (checkmark badge, "Thank you, <first name>!", "I'll reply to <email> soon…", and a "Send another" ghost button that resets state).
- ⚠️ **The form does NOT send anything in the prototype** — success is purely local React state. **This is the main thing to implement for real.** Recommended for a static host (GitHub Pages): a no-backend form service such as **Formspree**, **Web3Forms**, or **Formsubmit**, or **Netlify Forms** if hosting on Netlify. Wire the submit to POST to the chosen service (email destination to be provided by the owner — currently shown as `hello@mainetrumpetlessons.com`), keep the existing validation + success UI, and add a real error state for network failures. Consider a honeypot/Turnstile for spam.

### Animations / states
- Page entrance fade (see "Page transition" above) — keep the visibility + reduced-motion guards.
- Button hover lifts and color shifts as specified in tokens.
- Link rows on About nudge their left padding on hover (`paddingLeft 4px→16px`, 0.2s).
- Nav active underline.

### Responsive
- Container padding drops to 22px and section vertical padding to 64px ≤820px.
- Two-column hero/about/contact grids stack on narrow widths (the prototype relies on class breakpoints in `index.html`; confirm/expand for production, and **add a real mobile nav menu** — the prototype just hides links below 820px).

---

## State Management
- `page: string` — current view; persisted to `localStorage["mtl_page"]` (replace with router in prod).
- Contact form: `form {name,email,message}`, `errors {}`, `sent: bool`.
- (Prototype only) Tweaks: `t.welcome`, `t.accent` — **drop in production**, hard-code `editorial` hero and `#e0843c` accent.

## Assets
| File | Description | Notes |
|---|---|---|
| `assets/jimi-trumpet.jpg` | B&W photo of Jimi playing trumpet | Used on Home hero (4:5) and About portrait. Owner-provided. |
| `assets/deering-map.png` | Map of Deering Center, Portland, 1120×867 | Static screenshot with the location pin recolored to accent orange and the top white margin cropped. Links to Google Maps. If you'd rather use a live/interactive map, swap for an embedded map or a styled static-map API and keep the orange marker. |
| Instrument icons (About) | **Missing** | Currently striped placeholders — need real icons/art. |
| Favicon / OG image | **Missing** | Add for production. |

## Outstanding content to finalize (not design issues — real content needed)
- About → **Instruments**: real names + descriptions (currently lorem ipsum) and real icons.
- About → **Links**: real social/recording URLs (currently `#`).
- Confirm Pricing prose wording and Policies copy against the owner's latest.
- Decide the contact form backend + destination email.

## Files in this bundle
- `index.html` — tokens, global CSS, fonts, mount + script tags
- `app.jsx` — nav, footer, router, (prototype) tweaks panel
- `pages.jsx` — all page/section components and copy
- `tweaks-panel.jsx` — prototype-only; do not port
- `assets/jimi-trumpet.jpg`, `assets/deering-map.png`
