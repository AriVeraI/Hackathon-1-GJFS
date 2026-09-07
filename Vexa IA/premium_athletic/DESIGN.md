---
name: Premium Athletic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#1a1a1a'
  on-primary-container: '#848282'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#b7d334'
  on-tertiary: '#2b3400'
  tertiary-container: '#171d00'
  on-tertiary-container: '#778c00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#d2ef50'
  tertiary-fixed-dim: '#b7d334'
  on-tertiary-fixed: '#181e00'
  on-tertiary-fixed-variant: '#404c00'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '900'
    lineHeight: 72px
    letterSpacing: 0.05em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '900'
    lineHeight: 44px
    letterSpacing: 0.05em
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: 0.03em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 36px
    letterSpacing: 0.03em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system embodies the high-performance intersection of sports technology and luxury. It targets elite athletes and tech-conscious fitness enthusiasts who value precision, speed, and sophistication. 

The aesthetic is a hybrid of **High-Contrast Bold** and **Minimalism**, utilizing a "dark-mode first" architecture to evoke a sense of power and exclusivity. The visual narrative is driven by aggressive contrast, expansive negative space, and intentional kinetic energy. Design elements should feel engineered rather than decorated, using sharp geometric forms and dynamic slants to imply forward motion and technological superiority.

## Colors

The palette is built on extreme tension between void and light. 

- **Primary (Onyx Black):** Used as the foundational canvas to create a deep, immersive environment.
- **Secondary (Snow White):** Used for primary typography and structural "panels" that require high readability.
- **Accent (Volt Neon):** A high-visibility kinetic color used exclusively for calls-to-action, active states, and critical performance data.
- **Neutral:** Mid-tones are used sparingly to define surface boundaries without breaking the high-contrast aesthetic. 

Color application must follow a 90/7/3 ratio (Onyx/Snow/Volt) to maintain a premium, understated feel while ensuring interactive elements remain unmistakable.

## Typography

The typographic system utilizes **Montserrat** for all high-level messaging to provide a heavy, geometric, and athletic presence. Headlines must always be uppercase with increased letter-spacing to emphasize the premium positioning.

**Inter** is utilized for body copy and UI labels to ensure maximum legibility and a technical, systematic feel. Avoid using Montserrat for long-form text; its role is purely directional and impactful. Use "Label-Bold" for small metadata to maintain the athletic character even at micro-scales.

## Layout & Spacing

This design system employs a **Fluid Grid** model based on an 8px base unit. 

- **Desktop:** 12-column grid with generous 64px outer margins to create a "gallery" feel for product and performance imagery.
- **Mobile:** 4-column grid with 20px margins. 
- **Rhythm:** Use large vertical gaps (Section-Gap) between content blocks to maintain a sense of luxury and focus. 

Layouts should occasionally break the grid with "kinetic slants"—diagonal clips on image containers or background sections (suggested 5-degree angle) to reinforce the "fast" brand personality.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows. 

1. **Base:** Onyx Black (#1A1A1A).
2. **Surface:** Dark Grey (#2A2A2A) used for cards and inset sections.
3. **Detail:** 1px solid borders in #333333 to define boundaries without adding visual weight.

Avoid soft ambient shadows. If depth is required for a floating element (like a modal), use a sharp, 100% opaque offset stroke in Snow White or Volt Neon to maintain the technical, "glass-etched" look.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every UI element—from buttons to input fields to cards—must feature 90-degree corners. This reinforces the "technological" and "engineered" brand pillars. To introduce variety, use diagonal cuts (chamfers) on the corners of buttons or containers rather than rounding them.

## Components

- **Buttons:** Primary buttons use a solid Volt Neon fill with Onyx Black text, set in Montserrat Bold. Hover states should invert the colors or shift to a White fill. Secondary buttons are Ghost-style with a White 1px border.
- **Chips/Badges:** Small, sharp-edged rectangles. Use Volt Neon for "Live" or "Active" status, and Grey for "Locked" or "Upcoming."
- **Input Fields:** Bottom-border only or 1px solid Grey border. Labels should use "Label-Bold" style positioned above the field. Focus state triggers a Volt Neon bottom border.
- **Cards:** Flat Onyx or Dark Grey surfaces with no shadows. Use high-quality photography as the background where possible, with a gradient overlay to ensure text legibility.
- **Progress Bars:** Thin, 2px lines. The "filled" portion should be Volt Neon, creating a "laser" effect against the dark background.
- **Data Visualization:** Use sharp polyline graphs. Avoid curved splines; use straight lines between data points to emphasize precision.