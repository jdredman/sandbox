# Material 3 Theme Tokens Documentation

## Overview
This document explains how to use the comprehensive Material 3 theme tokens provided in `theme-tokens.css` to customize your Material Design application.

## Files Structure
- `theme-tokens.css` - Complete set of Material 3 design tokens
- `custom-theme.css` - Example customizations showing how to override tokens
- `index.html` - Your main application file

## How to Use

### 1. Include the Theme Tokens
Add the theme tokens CSS file to your HTML:
```html
<link rel="stylesheet" href="theme-tokens.css">
```

### 2. Override Tokens for Customization
Create your own CSS file or use the provided `custom-theme.css` to override specific tokens:
```html
<link rel="stylesheet" href="custom-theme.css">
```

## Token Categories

### Color Tokens
These control all color aspects of your Material 3 theme:

#### Primary Colors
- `--md-sys-color-primary` - Main brand color
- `--md-sys-color-on-primary` - Text/icons on primary color
- `--md-sys-color-primary-container` - Containers using primary color
- `--md-sys-color-on-primary-container` - Text/icons on primary containers

#### Secondary Colors
- `--md-sys-color-secondary` - Accent color
- `--md-sys-color-on-secondary` - Text/icons on secondary color
- `--md-sys-color-secondary-container` - Containers using secondary color
- `--md-sys-color-on-secondary-container` - Text/icons on secondary containers

#### Surface Colors
- `--md-sys-color-surface` - Default surface color
- `--md-sys-color-on-surface` - Text/icons on surfaces
- `--md-sys-color-surface-variant` - Alternative surface color
- `--md-sys-color-surface-container` - Container surfaces
- `--md-sys-color-surface-container-low/high/highest` - Various container levels

#### Error Colors
- `--md-sys-color-error` - Error state color
- `--md-sys-color-on-error` - Text/icons on error color
- `--md-sys-color-error-container` - Error container color

### Typography Tokens
Control font properties for all text scales:

#### Display Text (Largest)
- `--md-sys-typescale-display-large-*` - Hero text, main headings
- `--md-sys-typescale-display-medium-*` - Large headings
- `--md-sys-typescale-display-small-*` - Section headings

#### Headlines
- `--md-sys-typescale-headline-large-*` - Page titles
- `--md-sys-typescale-headline-medium-*` - Card titles
- `--md-sys-typescale-headline-small-*` - Component titles

#### Body Text
- `--md-sys-typescale-body-large-*` - Main body text
- `--md-sys-typescale-body-medium-*` - Default body text
- `--md-sys-typescale-body-small-*` - Small body text

#### Labels
- `--md-sys-typescale-label-large-*` - Button text
- `--md-sys-typescale-label-medium-*` - Tab labels
- `--md-sys-typescale-label-small-*` - Captions

Each typography token includes:
- `font-family-name` - Font family
- `font-weight` - Font weight (400, 500, 700)
- `font-size` - Size in pixels
- `line-height` - Line height in pixels
- `letter-spacing` - Letter spacing in pixels

### Shape Tokens
Control border radius and corner styles:
- `--md-sys-shape-corner-none` - 0px (sharp corners)
- `--md-sys-shape-corner-extra-small` - 4px
- `--md-sys-shape-corner-small` - 8px
- `--md-sys-shape-corner-medium` - 12px
- `--md-sys-shape-corner-large` - 16px
- `--md-sys-shape-corner-extra-large` - 28px
- `--md-sys-shape-corner-full` - 50% (fully rounded)

### Elevation Tokens
Control shadow and depth:
- `--md-sys-elevation-level0` - No shadow (flat)
- `--md-sys-elevation-level1` - Subtle shadow
- `--md-sys-elevation-level2` - Small shadow
- `--md-sys-elevation-level3` - Medium shadow
- `--md-sys-elevation-level4` - Large shadow
- `--md-sys-elevation-level5` - Extra large shadow

### Motion Tokens
Control animations and transitions:

#### Easing Functions
- `--md-sys-motion-easing-linear` - Constant speed
- `--md-sys-motion-easing-standard` - Default easing
- `--md-sys-motion-easing-emphasized` - More pronounced easing

#### Duration
- `--md-sys-motion-duration-short1-4` - 50ms - 200ms
- `--md-sys-motion-duration-medium1-4` - 250ms - 400ms
- `--md-sys-motion-duration-long1-4` - 450ms - 600ms
- `--md-sys-motion-duration-extra-long1-4` - 700ms - 1000ms

### State Tokens
Control interaction states:
- `--md-sys-state-hover-state-layer-opacity` - 0.08
- `--md-sys-state-focus-state-layer-opacity` - 0.12
- `--md-sys-state-pressed-state-layer-opacity` - 0.12
- `--md-sys-state-disabled-container-opacity` - 0.12
- `--md-sys-state-disabled-content-opacity` - 0.38

## Dark Mode Support

### Automatic Dark Mode
The tokens automatically switch to dark mode when the user's system preference is set to dark:
```css
@media (prefers-color-scheme: dark) {
  /* Dark theme tokens are automatically applied */
}
```

### Manual Dark Mode Toggle
Add the `.theme-dark` class to your body element to manually enable dark mode:
```javascript
document.body.classList.toggle('theme-dark');
```

## Customization Examples

### Change Brand Colors
```css
:root {
  --md-sys-color-primary: #1976D2;
  --md-sys-color-primary-container: #E3F2FD;
  --md-sys-color-on-primary-container: #0D47A1;
}
```

### Use Different Font
```css
:root {
  --md-sys-typescale-body-medium-font-family-name: 'Inter';
  --md-sys-typescale-headline-large-font-family-name: 'Inter';
}
```

### More Rounded Corners
```css
:root {
  --md-sys-shape-corner-medium: 16px;
  --md-sys-shape-corner-large: 24px;
}
```

### Faster Animations
```css
:root {
  --md-sys-motion-duration-medium1: 200ms;
  --md-sys-motion-duration-short2: 80ms;
}
```

## Component-Specific Customization

### Buttons
```css
md-filled-button {
  --md-filled-button-container-color: var(--md-sys-color-primary);
  --md-filled-button-container-shape: var(--md-sys-shape-corner-medium);
}
```

### Text Fields
```css
md-outlined-text-field {
  --md-outlined-text-field-container-shape: var(--md-sys-shape-corner-small);
  --md-outlined-text-field-focus-outline-color: var(--md-sys-color-primary);
}
```

### Cards
```css
.custom-card {
  background-color: var(--md-sys-color-surface-container);
  border-radius: var(--md-sys-shape-corner-large);
  box-shadow: var(--md-sys-elevation-level2);
}
```

## Best Practices

1. **Start with System Tokens**: Always use the `--md-sys-*` tokens rather than hardcoded values
2. **Test Both Themes**: Ensure your customizations work in both light and dark modes
3. **Maintain Contrast**: Keep accessibility in mind when changing colors
4. **Use Semantic Colors**: Prefer semantic tokens (primary, secondary) over specific colors
5. **Override Minimally**: Only change the tokens you need to customize

## Material 3 Resources

- [Material Design 3](https://m3.material.io/)
- [Material Web Components](https://github.com/material-components/material-web)
- [Material Theme Builder](https://m3.material.io/theme-builder)
- [Color System](https://m3.material.io/styles/color/system)
- [Typography](https://m3.material.io/styles/typography)
