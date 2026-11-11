---
name: Qavio
description: WhatsApp AI chatbot & Flow automation for Turkish SMBs — premium-but-approachable, editorial-warm, WhatsApp-native.
colors:
  orange: "#FF4405"
  orange-deep: "#E53D04"
  forest: "#0D4B34"
  whatsapp-green: "#25D366"
  whatsapp-teal: "#075E54"
  warm-greige: "#E8E4DC"
  pale-greige: "#F5F2EC"
  white: "#FFFFFF"
  ink: "#181D27"
  ink-deep: "#0A0D12"
  slate: "#535862"
  stone: "#717680"
  border: "#D5D7DA"
  border-light: "#E9EAEB"
typography:
  display:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(50px, 5.5vw, 80px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(32px, 4.5vw, 60px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.022em"
  title:
    fontFamily: "'Inter', sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "'Inter', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "'Inter', sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.13em"
  numeral:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "68px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  wordmark:
    fontFamily: "'Bagel Fat One', system-ui"
    fontSize: "60px"
    fontWeight: 400
    letterSpacing: "0.01em"
rounded:
  sm: "10px"
  lg: "20px"
  pill: "100px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "80px"
  section-y: "120px"
  section-x: "44px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "15px 30px"
  button-primary-hover:
    backgroundColor: "{colors.orange-deep}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "9px 20px"
  button-dark-hover:
    backgroundColor: "{colors.orange}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "15px 30px"
  input:
    backgroundColor: "{colors.pale-greige}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "13px 16px"
  input-focus:
    backgroundColor: "{colors.white}"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "40px"
  tag:
    textColor: "{colors.orange}"
    typography: "{typography.label}"
---

# Design System: Qavio

## 1. Overview

**Creative North Star: "The Concierge's Pocket"**

Qavio's interface is built around a single image: a capable assistant living inside the customer's WhatsApp, handling bookings and questions while the owner sleeps. Everything visual reinforces that — the hero is a real hand holding a real phone with an animated chat screen, the deepest, calmest color in the palette (Deep Pine) is the backdrop for that conversation, and the one loud color in the system (Signal Orange) exists only to say "tap here." Cormorant Garamond gives headlines and big numbers an editorial, slightly old-world warmth; Inter keeps everything functional crisp and modern; and the rounded "Bagel Fat One" wordmark adds one deliberate moment of personality to an otherwise restrained system.

This system explicitly rejects the generic AI-SaaS template look: no cream-on-cream near-white backgrounds, no gradient-clipped headline text, no tiny tracked "eyebrow" label sitting above every section, no 01/02/03 numbering applied to content that isn't actually a sequence. It also rejects corporate stiffness — no navy-and-grey enterprise palette, no dense jargon. The audience is a clinic, salon, or restaurant owner; the design should feel like a well-made tool a friend recommended, not a platform an IT department procured.

**Key Characteristics:**
- One accent color (Signal Orange) reserved exclusively for action and the single most important number on screen
- Serif numerals for every standalone stat, price, and step count — never Inter
- WhatsApp's own green/teal appear only inside phone-mockup chrome, signalling "this is really WhatsApp"
- Warm greige neutrals throughout — never cold gray, never a third "paper" tone
- Pill shapes, a custom growing cursor, and `scale(0.97)` press feedback give the whole system a tactile, hand-friendly feel

## 2. Colors

The palette is warm editorial neutrals, anchored by a deep forest green for the "open conversation" moment and ignited by a single decisive orange.

### Primary
- **Signal Orange** (#FF4405): The only "go" color in the system — every primary CTA, active tab/toggle state, section `.tag` label, and feature-icon tint. Hovers deepen to **Ember Hover** (#E53D04) with a soft orange glow (`box-shadow: 0 8px 24px rgba(255,68,5,.3)`). A 8%-alpha tint of this color (`rgba(255,68,5,.08)`) fills feature-icon badges and inline `.pill` highlights.

### Secondary
- **Deep Pine** (#0D4B34): The hero section's signature background — the color of "the conversation is happening." Also the gradient start (`linear-gradient(135deg, #0D4B34 0%, #25D366 100%)`) for the AI-assistant avatar badge, bridging brand green into WhatsApp green.
- **WhatsApp Green** (#25D366) & **WhatsApp Teal** (#075E54): Used *exclusively* inside phone-mockup chrome — chat header bars, avatar circles, online-status dots, Flow confirm buttons, message-confirmation borders. These are literal WhatsApp brand colors, intentionally borrowed to make the demo screens feel like a real WhatsApp conversation rather than a generic illustration.

### Neutral
- **Warm Greige** (#E8E4DC): the page `body` background — the default canvas everything sits on.
- **Pale Greige** (#F5F2EC): alternate section background (`bg2`), and the tint used for form fields and cards-on-dark.
- **White** (#FFFFFF): card, form, and mockup surfaces.
- **Ink** (#181D27): primary text color; also the fill for `.section.dark` and the dark pill CTA/button.
- **Near Black** (#0A0D12): the deepest sections — the AI showcase band and the footer.
- **Slate** (#535862): secondary body copy on light surfaces (`--text2`).
- **Stone** (#717680): tertiary labels and captions (`--text3`) — see the Stone-Text Floor rule below.
- **Border** (#D5D7DA) and **Hairline** (#E9EAEB): card borders, dividers, and the 1px-gap "seamless grid" technique used by the feature and sector grids.

### Named Rules
**The One-Signal Rule.** Signal Orange means "click here" and nothing else. If an element is orange, it is interactive or it is the single most important data point on the screen — it never doubles as ambient decoration.

**The Stone-Text Floor.** Stone (#717680) sits right at the 4.5:1 contrast floor against White and drops to ~4.1:1 on Pale Greige. Use it only for ≥13px uppercase labels on White; for body copy on any tinted surface, step up to Slate (#535862) or Ink.

## 3. Typography

**Display Font:** Cormorant Garamond (serif, Georgia fallback)
**Body Font:** Inter (sans-serif)
**Wordmark Font:** Bagel Fat One (the "Qavio" logotype only — not used for any other text)

**Character:** An editorial serif/sans pairing. Cormorant Garamond carries warmth and a slightly old-world elegance into headlines and every large standalone numeral; Inter handles all functional text — body copy, navigation, forms, labels — with modern, efficient neutrality. The italic Cormorant `em` (weight 300) is the system's one typographic flourish, reserved for landing the emotional word inside a headline ("*Sistem* Halleder", "*saniyeler içinde*").

### Hierarchy
- **Display** (700, `clamp(50px, 5.5vw, 80px)`, line-height 1.05, letter-spacing -0.025em): `h1`, hero headline only.
- **Headline** (700, `clamp(32px, 4.5vw, 60px)`, line-height 1.1, letter-spacing -0.022em): `h2`, every section headline.
- **Title** (600, 17–20px, line-height ~1.25): `h3`/`h4` — card titles, step titles, form success heading uses Display instead.
- **Body** (400, 14–16px, line-height 1.6–1.8, color Slate): paragraphs and descriptions. Capped around 420–540px (`.sec-desc`, `.fav-lead`, `.db-lead`) — roughly 65–75ch.
- **Label** (700, 11–13px, uppercase, letter-spacing 0.1–0.14em): `.tag`, nav links, plan names, footer column titles.
- **Numeral** (300–700, 52–96px, Cormorant Garamond): `.stat-n`, `.plan-amt`, `.how-n`, `.step-big`, `.pipe-step-n` — the serif's second job, turning data into editorial type.
- **Wordmark** (400, 44–62px, Bagel Fat One, letter-spacing 0.01em): "Qavio" across the desktop hero, mobile header, mobile drawer, and footer — sized down progressively (62px → 44px) by context.

### Named Rules
**The Serif-for-Numbers Rule.** Any standalone large numeral — a price, a stat, a step count — renders in Cormorant Garamond, never Inter. It's what gives the pricing table and stats band an editorial feel instead of a spreadsheet feel.

## 4. Elevation

Hybrid system. Repeated content is flat: the feature and sector grids share a 1px Hairline (#E9EAEB) background so adjacent cells read as one seamless grid with thin dividers, with no per-card shadow. Showcase objects — the phone-in-hand hero, the animated WhatsApp demo card, the stacked dashboard screenshots, and the "Growth" pricing card on hover — get large, soft, dramatic shadows that read as floating above the page. Depth is a spotlight, reserved for the handful of things the page most wants you to look at.

### Shadow Vocabulary
- **sm** (`box-shadow: 0 1px 3px rgba(10,13,18,.1), 0 1px 2px rgba(10,13,18,.06)`): minimal separation; rarely used alone.
- **md** (`box-shadow: 0 4px 12px rgba(10,13,18,.1)`): light lift, e.g. the pricing-toggle pill.
- **lg** (`box-shadow: 0 16px 40px rgba(10,13,18,.14)`): the contact form, the hovered pricing card.
- **xl** (`box-shadow: 0 32px 80px rgba(10,13,18,.2)`): reserved for the largest floating surfaces.
- **showcase** (from `0 24px 64px rgba(10,13,18,.12), 0 0 0 1px rgba(10,13,18,.06)` up to `0 40px 100px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,.06)` on dark backgrounds): the phone-in-hand visual, the animated AI chat card, and the dashboard screenshot stack.

### Named Rules
**The Floating-Hero Rule.** Phones, screenshots, and the one pricing card meant to win get a large soft shadow and float. Repeated grid cells stay flat, separated only by a hairline.

## 5. Components

### Buttons
- **Shape:** fully rounded pill (100px) for nav links, the nav/mobile CTA, and sector tabs; a softer rounded rectangle (10px, `--r`) for primary form/hero CTAs.
- **Primary** (`.btn-orange`): Signal Orange fill, white text, `15px 30px` padding, 10px radius. Hover → Ember Hover + orange glow shadow; `:active` → `scale(0.97)`.
- **Ghost** (`.btn-ghost`, on the dark hero): transparent fill, white text, 1px `rgba(255,255,255,.35)` border; hover brightens the border to `rgba(255,255,255,.8)`.
- **Dark pill** (`.nav-cta`, `.cta-dk`): Ink fill, white text, 100px radius, `9px 20px` padding; hover swaps fill to Signal Orange.
- Every button shares the same press feedback: `transform: scale(0.97)` on `:active` — never a color-only click state.

### Chips / Tabs
- **Sector tabs** (hero): pill, `rgba(255,255,255,.06)` fill + `rgba(255,255,255,.14)` border on Deep Pine; active state brightens to `rgba(255,255,255,.14)` fill / `rgba(255,255,255,.45)` border + white text.
- **Tags** (`.tag`): no background — just 11px uppercase Signal Orange label text, `letter-spacing: .13em`.
- **Pills** (`.pill`): inline highlight chip, `rgba(255,68,5,.06)` fill, `rgba(255,68,5,.15)` border, Signal Orange text, 12px.

### Cards / Containers
- **Corner Style:** 20px (`--r-lg`) for feature/sector/pricing cards; 10px (`--r`) for form fields and dashboard screenshot frames.
- **Background:** White on Pale-Greige sections; Pale-Greige tint for cards sitting on dark sections.
- **Shadow Strategy:** see Elevation — grid cards flat with hairline dividers; the "Growth" pricing card adds a subtle orange-tinted gradient wash (`linear-gradient(160deg, rgba(255,68,5,.03) 0%, #fff 50%)`) plus a floating "En Popüler" badge pill.
- **Border:** 1px Hairline (#E9EAEB) on grid cards; 1px Border (#D5D7DA) on pricing cards, swapping to Signal Orange for the popular plan.
- **Internal Padding:** 40–48px for cards/forms, 22–30px for feature/sector/pricing cells.

### Inputs / Fields
- **Style:** Pale Greige fill, 1px Hairline border, 10px radius, `13px 16px` padding, Inter 15px.
- **Focus:** fill brightens to White and border shifts to Signal Orange — the only state change, deliberately quiet (no glow ring).

### Navigation
- **Desktop:** floating White pill (100px radius), fixed top-center, `box-shadow: 0 2px 20px rgba(0,0,0,.12)` deepening to `0 4px 32px rgba(0,0,0,.2)` on scroll. Links are 13px/500 Slate on transparent; hover fills Warm Greige. CTA is the Dark Pill button, hovering to Signal Orange.
- **Mobile:** full-height right-side drawer in Deep Pine (`border-radius: 20px 0 0 20px`), 26px/700 links at 75% opacity rising to 100% + indent on hover, Signal-Orange CTA pinned to the bottom.

### Custom Cursor (signature component)
A two-part cursor — a 9px Signal Orange dot plus a 40px ring — replaces the system pointer on desktop (≥768px). Hovering an interactive element hides the dot and grows the ring to 68px, the page's primary "this is clickable" signal. Disabled entirely below 768px, where the native cursor and default focus/hover states return.

## 6. Do's and Don'ts

### Do:
- **Do** keep Signal Orange (#FF4405) to one meaning: interactive, or the single most important number on screen. (The One-Signal Rule.)
- **Do** render every standalone large numeral — price, stat, step count — in Cormorant Garamond. (The Serif-for-Numbers Rule.)
- **Do** confine WhatsApp Green (#25D366) and WhatsApp Teal (#075E54) to phone-mockup chrome only.
- **Do** float showcase objects (phones, screenshots, the featured price card) with large soft shadows; keep repeated grid cells flat with a hairline divider. (The Floating-Hero Rule.)
- **Do** give every button the same `scale(0.97)` `:active` feedback.
- **Do** ship a `prefers-reduced-motion` fallback for the custom cursor, marquee, hero phone-screen transitions, and `.fu` scroll reveals.
- **Do** keep body copy in Slate (#535862) or darker on tinted surfaces; reserve Stone (#717680) for ≥13px uppercase labels on White.

### Don't:
- **Don't** introduce a second accent color competing with Signal Orange — no gradient-clipped headline text, no rainbow icon set.
- **Don't** add a third "paper"/cream/sand neutral lighter than Pale Greige (#F5F2EC) — Warm Greige and Pale Greige are the system's only warm neutrals.
- **Don't** add a tiny uppercase tracked "eyebrow" label above every section, or apply 01/02/03 numbering to content that isn't a real sequence — `.how-n` (3-step process) and `.pipe-step-n` (4-step pipeline) are the only sanctioned numbered sequences.
- **Don't** use `border-left`/`border-right` accent stripes on cards or list items — use the hairline-grid technique or a full border instead.
- **Don't** use Stone (#717680) for body copy, or for any text on Pale Greige — it falls under the 4.5:1 floor there. (The Stone-Text Floor.)
- **Don't** add glassmorphism or decorative `backdrop-filter: blur()` — the one existing use (mobile overlay) is functional, not decorative.
- **Don't** let Turkish strings (typically 15–25% longer than English) break the pill/button/nav layouts — test both `lang="tr"` and `lang="en"` via the i18n switcher.
