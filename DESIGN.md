---
name: Cinematic Narrative Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#96d0d9'
  on-secondary: '#00363c'
  secondary-container: '#0d5159'
  on-secondary-container: '#88c2cb'
  tertiary: '#fcf5ff'
  on-tertiary: '#3c0090'
  tertiary-container: '#e3d4ff'
  on-tertiary-container: '#7318ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#b2ecf6'
  secondary-fixed-dim: '#96d0d9'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#094e56'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d1bcff'
  on-tertiary-fixed: '#23005b'
  on-tertiary-fixed-variant: '#5700c9'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: clamp(3rem, 8vw, 6rem)
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: clamp(2rem, 5vw, 3.5rem)
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: clamp(1.5rem, 3vw, 2.25rem)
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: Geist
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  safe-margin: clamp(1.5rem, 5vw, 4rem)
  section-gap: clamp(4rem, 10vh, 8rem)
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
---

## Brand & Style
This design system is built for a high-end, experimental IT portfolio that treats technical projects as cinematic episodes. The brand personality is "Technical Noir"—sophisticated, mysterious, and hyper-precise. It targets premium tech recruiters and creative directors who value both engineering rigor and aesthetic storytelling.

The visual style is a fusion of **Minimalism** and **Glassmorphism**, heavily influenced by high-end streaming platforms. It utilizes deep blacks, high-fidelity motion, and sharp typography to create an immersive, theater-like experience. The UI should feel like a premium OS or an interactive documentary, where information is revealed through intent and interaction rather than static density.

## Colors
The palette is rooted in deep obsidian tones to provide maximum contrast for the electric cyan accents. The primary color, **Electric Cyan (#00f2ff)**, is used sparingly for critical interactive elements and status indicators, mimicking a "hud" or "terminal" glow.

- **Background:** Deepest black to ensure OLED-perfect immersion.
- **Surface:** Subtle dark greys used for containers that need to "float" above the abyss.
- **On-Surface:** Dimmed typography for secondary information to maintain visual hierarchy and reduce eye strain.
- **Gradients:** Subtle, directional gradients that move from pure black to a deep teal, creating a sense of three-dimensional space and atmospheric depth.

## Typography
The typography system uses **Inter** for its clean, Swiss-inspired legibility and **Geist** for technical metadata. The system relies on `clamp()` for fluid scaling, ensuring that headlines feel massive on desktop and appropriately bold on mobile without breaking the narrative flow.

- **Display Styles:** Reserved for section intros. They should be tight-leaded and slightly tracked in to feel like cinematic titles.
- **Body Text:** Generous line height (1.6) is used to maintain readability against dark backgrounds.
- **Labels:** Monospaced fonts are used for "System Data," such as tech stacks, dates, and version numbers, adding to the IT/engineering aesthetic.

## Layout & Spacing
This design system avoids traditional grids in favor of a **Narrative Flow** model. 

- **Desktop (1024px+):** Employs a full-screen (100vh) snap-scroll mechanism. Elements are positioned using CSS Flexbox and Grid to center content or align it to the "Golden Ratio" focal points. 
- **Mobile (<768px):** Reflows into a vertical stacked narrative. The 100vh constraint is relaxed to allow for natural scrolling, but key "Hero" moments maintain their full-screen presence.
- **Margins:** Uses fluid `safe-margin` tokens to ensure content never touches the bezel, maintaining a premium, "aired-out" look.

## Elevation & Depth
Depth is created through light and blur rather than shadows. 

1.  **Backdrop Blurs:** Use `backdrop-filter: blur(20px)` on all floating surfaces (modals, navigation bars) to create a frosted glass effect that hints at the content beneath.
2.  **Luminous Glows:** Interactive elements (like buttons or active chips) should emit a soft, localized outer glow using the `glow_cyan` token.
3.  **Z-Index Layers:** 
    - **Layer 0 (Background):** The deep charcoal gradient.
    - **Layer 1 (Content):** Typography and primary imagery.
    - **Layer 2 (Overlays):** Glassmorphic cards and navigation.
    - **Layer 3 (Modals/Interactions):** High-contrast elements with intense blurs.

## Shapes
The shape language is "Precision-Soft." While the overall vibe is technical and sharp, a subtle `0.25rem` (Soft) radius is applied to all UI elements to mimic modern high-end hardware (like the corners of an iPhone or a MacBook). 

- **Containers:** 0.5rem (rounded-lg) for secondary cards.
- **Buttons:** 0.25rem for a sharp, professional tool-like feel.
- **Interactive States:** Use a transition from the default radius to a slightly more rounded state on hover to signify "squishy" interactivity.

## Components
- **Cinematic Buttons:** Primary buttons should be solid `primary_color_hex` with black text. Secondary buttons are "ghost" style with a 1px cyan border and a subtle background glow on hover.
- **Narrative Cards:** Edge-to-edge imagery with a glassmorphic footer containing the project title. Hovering should trigger a slight zoom in the background image.
- **Interactive Chips:** Used for tech stacks. Small, monospaced text inside a dark grey surface with a subtle 1px border.
- **Progress Indicators:** A thin, cyan line at the top of the viewport indicating how far the user has traveled through the "story."
- **Terminal Input:** For the contact form, use a stylized terminal input field: a single cyan line with a blinking underscore cursor to lean into the IT student identity.
- **Project Switcher:** Netflix-style horizontal carousels with high-quality posters and "Up Next" transitions between sections.