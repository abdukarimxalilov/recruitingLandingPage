# Tim Miller Recruiting – Brand & Visual Direction

## Identity
- **Logo**: Clean wordmark “Tim Miller” paired with an upward arrow / network motif.
  - `logo-horizontal.svg`: primary lockup for header and email signatures.
  - `logo-mark.svg`: square mark for favicon and social avatars.
- **Imagery**: Collaborative team scenes, diverse professionals, or city skylines with cool blue filters. Prefer Unsplash or Pexels sources; maintain consistent tone.
- **Iconography**: Rounded-corner line icons, consistent stroke width, use accent color for highlights.

## Color System
| Token | Role | Hex | Usage |
| --- | --- | --- | --- |
| `brand.navy` | Primary | `#0A2540` | Headers, backgrounds, CTA buttons |
| `brand.sky` | Accent | `#2E8BFF` | Links, highlights, secondary buttons |
| `brand.grayLight` | Surface | `#F5F6FA` | Section backgrounds, cards |
| `brand.charcoal` | Text | `#2C2C2C` | Body copy, paragraph text |
| `brand.lime` | Highlight | `#A3E635` | Optional badges, success states |
| `white` | Neutral | `#FFFFFF` | Backgrounds, inverse text |

- Maintain WCAG AA contrast for text on colored backgrounds.
- Use gradients sparingly: `linear-gradient(135deg, #0A2540 0%, #2E8BFF 100%)` for premium CTAs.

## Typography
- **Headings**: Poppins (600/700). Alternative: Montserrat if Poppins unavailable.
- **Body**: Inter (400/500). Use generous line-height (`1.65`) and letter-spacing (`0.01em`) for readability.
- **Accent**: Playfair Display (600) reserved for hero headline variants or quotes.
- Enforce consistent kerning and uppercase styles for navigation.

## Layout & Spacing
- Grid width: 1120px max with 24px padding on mobile, 40px on desktop.
- Vertical rhythm: base unit `8px`. Section padding `py-16 md:py-24`. Keep white space generous.
- Rounded corners: cards/buttons `rounded-xl` (16px).
- Shadows: soft ambient `0 25px 50px -12px rgba(10, 37, 64, 0.15)`.

## Interaction Guidelines
- Buttons: Fill (primary navy), outline (sky blue border), icon button (transparent). Hover states lighten/darken by ~8%.
- Motion: Subtle fade-up (100ms delay increments). Use Framer Motion or CSS transitions (`transition-all duration-200`).
- Focus states: high-contrast outlines (`outline outline-2 outline-offset-2 outline-brand-sky`).

## Content Voice
- Value proposition: “Connecting freight-driven businesses with proven transportation talent — fast, reliable, and personal.”
- Tone: professional, approachable, confident. Use verbs like *optimize*, *move*, *deliver*, *scale*.
- Audience: Fleet owners, logistics executives, dispatch leaders, safety directors.
- Maintain clarity: short paragraphs, lane-specific proof points, and strong call-to-action language.

## SEO & Metadata Notes
- Primary keywords: “recruiting company USA, “executive search firm USA”, “IT staffing agency”, “hire professionals quickly”, “job placement services”.
- Region focus: Chicago, Illinois, broader Midwest.
- Structured data: `Organization` + `ProfessionalService` schema with service areas and contact data.

## Asset Checklist
- [ ] Export `logo-horizontal.svg`
- [ ] Export `logo-mark.svg`
- [ ] Prepare hero imagery (2400×1600) optimized with Next/Image
- [ ] Curate testimonial headshots / placeholders
- [ ] Collect client logo placeholders (`GlobalTech`, `Medisoft`, `FinServe`, etc.)
- [ ] Set up GA4 + Meta Pixel IDs for deployment

_Last updated: 2024-12-10_
