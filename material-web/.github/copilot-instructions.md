# Copilot Instructions: Material Web Design System

## Project Architecture

This is a **Material Design 3 design system** implementation that bridges a custom "Ramsey" design token system with Google's official Material Web components. The project demonstrates enterprise-level design system integration while maintaining strict Material 3 compliance.

### Core Architecture Patterns

**Token Cascade System**: Custom design tokens → Material 3 system tokens → Material Web components
```css
--color-base-blue-50: #0073b9;           /* Custom token */
--md-sys-color-primary: var(--color-base-blue-50);  /* Material 3 mapping */
/* Material Web components automatically consume --md-sys-color-* tokens */
```

**Multi-Scale Color System**: 10-step color scales (5, 10, 20, 30, 40, 50, 60, 70, 80, 90) across Blue, Teal, Purple, Red, Green, Gray families with semantic role mapping.

**Theme Management**: Class-based switching (`.theme-dark`) with localStorage persistence, system preference detection, and browser meta tag integration.

## Development Workflows

### Essential Commands
- **Local Development**: Open `index.html` directly in browser (no build step required)
- **Component Testing**: Navigate to `components/{component}.html` for individual component demos
- **Theme Testing**: Use browser console `window.ramseyTheme.toggle()` for programmatic theme switching

### File Organization Patterns
```
material-web/
├── index.html                    # Main showcase with token integration
├── shared/
│   ├── layout.css               # Global Material 3 tokens & responsive layout
│   ├── theme-manager.js         # Theme switching & navigation logic
│   ├── header.html / sidebar.html  # Shared UI components
├── components/                   # Individual component demos
├── foundations/                  # Design system foundations (color, typography, etc.)
```

## Critical Integration Patterns

### Material Web Component Usage
**ALWAYS** use official ESM imports: `https://esm.run/@material/web/`
**ALWAYS** import typography styles: `import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js'`
**ALWAYS** apply via: `document.adoptedStyleSheets.push(typescaleStyles.styleSheet)`

### Typography Customization
Override Material Web typography tokens to use Gibson font:
```css
--md-ref-typeface-brand: var(--font-family-gibson);
--md-sys-typescale-headline-large-font: var(--font-family-gibson);
```

### Component Styling Approach
Use CSS custom properties to style Material Web components while preserving encapsulation:
```css
md-filled-button {
  --md-filled-button-container-shape: var(--size-radius-md);
  --md-filled-button-label-text-font: var(--font-family-base);
}
```

## Project-Specific Conventions

### Color Scale Naming
- **Blue**: Primary actions, links, brand
- **Teal**: Secondary actions, success states  
- **Purple**: Tertiary actions, highlights
- **Red**: Errors, warnings, destructive actions
- **Gray**: Surfaces, text, borders

### Responsive Breakpoint Strategy
Mobile-first approach with component-specific responsive patterns rather than global breakpoint classes.

### Theme Token Organization
1. Define base custom tokens (--color-base-*, --size-*, --font-*)
2. Map to Material 3 system tokens (--md-sys-color-*, --md-sys-shape-*)
3. Components automatically inherit correct tokens

## Integration Points & Dependencies

### External Dependencies
- **TypeKit**: Gibson font loading via `https://use.typekit.net/euz0vgw.css`
- **Material Icons**: Google Fonts icon resources
- **Material Web**: Official ESM component library

### Cross-Component Communication
Theme changes propagate via CSS custom property cascade and `MaterialThemeManager` class with custom events (`material-theme-changed`).

### Performance Considerations
- Uses constructable stylesheets for typography (performance optimization)
- ESM imports reduce bundle size vs. bundled approaches
- Theme switching via CSS classes (faster than DOM manipulation)

## Key Files for Understanding Architecture

- `index.html`: Complete token integration example with all patterns
- `shared/layout.css`: Core Material 3 token definitions and responsive layout
- `shared/theme-manager.js`: Theme switching, navigation, and component loading logic
- `MATERIAL-WEB-BEST-PRACTICES.md`: Comprehensive implementation guidelines
- `components/index.html`: Component showcase with Material Web integration patterns

## Anti-Patterns to Avoid

- **Never** mix other design systems (Bootstrap, Tailwind) with Material Web
- **Never** hardcode colors outside the token system
- **Never** use custom HTML elements when Material Web equivalents exist
- **Never** break component encapsulation with external CSS that targets internals
- **Never** skip responsive design considerations (mobile-first approach required)

When working on this codebase, prioritize **Material 3 specification compliance** over custom solutions, and always maintain the token cascade integrity that enables the design system integration.
