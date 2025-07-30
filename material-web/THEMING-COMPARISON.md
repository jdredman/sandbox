# Material Web Theming: System vs Component Tokens

## What's Already Included via ESM Run?

When you import `@material/web` from ESM run, you get:

✅ **Included:**
- All Material Web Components (`<md-button>`, `<md-text-field>`, etc.)
- Component-specific CSS custom properties
- Typography styles (when you import `md-typescale-styles.js`)

❌ **NOT Included:**
- System design tokens (`--md-sys-color-*`, `--md-sys-typescale-*`)
- Default theme values (components use hardcoded fallbacks)
- Automatic dark mode support

## Two Theming Approaches

### Approach 1: System Tokens (Comprehensive)

**Use when:** You want complete design system control and brand consistency

**Files:** Use `theme-tokens.css` and `custom-theme.css`

**Pros:**
- Complete Material 3 design system
- Automatic dark mode
- Consistent theming across all components
- Easy to maintain brand guidelines
- Future-proof (follows Material 3 spec)

**Cons:**
- Larger CSS file
- More complexity

```html
<link rel="stylesheet" href="theme-tokens.css">
<link rel="stylesheet" href="custom-theme.css">
```

### Approach 2: Component Tokens (Simple)

**Use when:** You want quick customization without the full design system

**Files:** Simple CSS in your HTML

**Pros:**
- Minimal setup
- Direct control
- Smaller footprint
- Easy to understand

**Cons:**
- No automatic dark mode
- Inconsistent theming
- More work to maintain
- Limited design system benefits

```css
:root {
  --md-filled-button-container-color: #1976D2;
  --md-outlined-text-field-focus-outline-color: #1976D2;
}
```

## Component Token Examples

Each Material Web component exposes its own customization tokens:

### Buttons
```css
/* Filled Button */
--md-filled-button-container-color: #1976D2;
--md-filled-button-label-text-color: white;
--md-filled-button-container-shape: 12px;

/* Outlined Button */
--md-outlined-button-outline-color: #1976D2;
--md-outlined-button-label-text-color: #1976D2;

/* Text Button */
--md-text-button-label-text-color: #1976D2;
```

### Text Fields
```css
--md-outlined-text-field-focus-outline-color: #1976D2;
--md-outlined-text-field-label-text-color: #666;
--md-outlined-text-field-container-shape: 8px;
```

### Form Controls
```css
/* Checkbox */
--md-checkbox-selected-container-color: #1976D2;
--md-checkbox-outline-color: #999;

/* Radio */
--md-radio-selected-icon-color: #1976D2;
--md-radio-icon-color: #999;
```

## Recommendation

**For most projects:** Start with **Approach 2** (component tokens) for simplicity.

**For design systems/brands:** Use **Approach 1** (system tokens) for complete control.

You can always migrate from Approach 2 to Approach 1 later as your needs grow.

## Finding Component Tokens

Each component's available tokens can be found in the Material Web documentation or by inspecting the component's CSS. Common patterns:

- `--md-{component}-container-color`
- `--md-{component}-label-text-color`
- `--md-{component}-outline-color`
- `--md-{component}-container-shape`

Example: For `<md-filled-button>`, tokens start with `--md-filled-button-*`
