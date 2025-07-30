# Material Web Best Practices - Custom Instructions for Copilot

## 🎯 **PROJECT CONTEXT**
This project implements Material Design 3 theming using **official Material Web guidelines** from https://github.com/material-components/material-web. The user has specifically requested adherence to these official best practices.

## 📋 **MANDATORY REQUIREMENTS**

### **1. Material Web Component Usage**
- ✅ **ALWAYS** use Material Web components via ESM: `https://esm.run/@material/web/`
- ✅ **ALWAYS** use official component names: `md-filled-button`, `md-outlined-text-field`, etc.
- ✅ **ALWAYS** import typography styles: `import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js'`
- ❌ **NEVER** use custom button/input elements when Material Web equivalents exist

### **2. Design System Integration Requirements**
- ✅ **ALWAYS** define base design tokens first, then map to Material 3 tokens
- ✅ **ALWAYS** use semantic color naming: primary → blue scale, secondary → teal scale, tertiary → purple scale
- ✅ **ALWAYS** maintain your existing color scales and typography hierarchy
- ✅ **ALWAYS** use CSS custom properties for token cascade: `--color-base-* → --md-sys-color-*`
- ❌ **NEVER** hardcode Material 3 colors - always map from your design system

### **3. Theming System Requirements**
- ✅ **ALWAYS** use Material 3 system tokens: `--md-sys-color-*`, `--md-sys-typescale-*`, `--md-sys-shape-*`
- ✅ **ALWAYS** follow official token naming: `primary`, `on-primary`, `surface`, `on-surface`, etc.
- ✅ **ALWAYS** provide both light and dark theme variants using your color scales
- ✅ **ALWAYS** preserve semantic color meanings across themes
- ❌ **NEVER** use custom CSS properties that don't match Material 3 spec
- ❌ **NEVER** hardcode colors - always use design tokens

### **3. Implementation Approach**
- ✅ **PREFER** CSS custom properties with class-based theme switching (`.theme-dark`)
- ✅ **PREFER** constructable stylesheets when supported, fallback to style injection
- ✅ **ALWAYS** provide fallback mechanisms for browser compatibility
- ✅ **ALWAYS** implement proper state persistence (localStorage)
- ❌ **AVOID** complex theme managers unless absolutely necessary

### **4. Code Structure Standards**
- ✅ **ALWAYS** use semantic HTML5 structure
- ✅ **ALWAYS** include proper meta tags for mobile and theming
- ✅ **ALWAYS** implement responsive design patterns
- ✅ **ALWAYS** include comprehensive error handling and logging
- ✅ **ALWAYS** provide debugging utilities and visual feedback

## 🔧 **IMPLEMENTATION PATTERNS**

### **Required File Structure:**
```
material-web/
├── index.html                          # Main application with custom design system integration
├── token-mapping.md                    # Design token mapping documentation
├── DESIGN-SYSTEM-INTEGRATION.md        # Integration guide and architecture
├── MATERIAL-WEB-BEST-PRACTICES.md      # This file - best practices documentation
└── (additional files as needed)
```

### **Required Design Token Pattern:**
```css
:root {
  /* 1. Define your base design tokens */
  --color-base-blue-50: #0073b9;
  --color-base-teal-50: #16a597;
  --font-family-base: 'gibson', 'Roboto', sans-serif;
  
  /* 2. Map to Material 3 system tokens */
  --md-sys-color-primary: var(--color-base-blue-50);
  --md-sys-color-secondary: var(--color-base-teal-50);
}
```

### **Required HTML Pattern:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Material Web Application</title>
  
  <!-- Material Typography -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Material Web Components -->
  <script type="importmap">
    { "imports": { "@material/web/": "https://esm.run/@material/web/" } }
  </script>
  
  <script type="module">
    import '@material/web/all.js';
    import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  </script>
</head>
```

### **Required CSS Token Pattern:**
```css
:root {
  /* Light theme - Material 3 system tokens */
  --md-sys-color-primary: #1976D2;
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-background: #FEFDF8;
  --md-sys-color-surface: #FFFBFE;
  /* ... all required Material 3 tokens */
}

.theme-dark {
  /* Dark theme - Material 3 system tokens */
  --md-sys-color-primary: #A5C9FF;
  --md-sys-color-on-primary: #003258;
  --md-sys-color-background: #0F0F13;
  --md-sys-color-surface: #141218;
  /* ... corresponding dark theme tokens */
  color-scheme: dark;
}
```

## 🚫 **FORBIDDEN PRACTICES**

1. **NO** mixing design systems (no Bootstrap, Tailwind, etc. with Material Web)
2. **NO** custom component styling that breaks Material Design principles
3. **NO** hardcoded colors or dimensions outside of design tokens
4. **NO** ignoring accessibility requirements (always include proper ARIA, focus management)
5. **NO** skipping mobile responsiveness considerations
6. **NO** implementing theming without proper state management

## 🎨 **DESIGN REQUIREMENTS**

### **Color Palette Compliance:**
- ✅ Use Material 3 color roles: primary, secondary, tertiary, error
- ✅ Include surface variants: surface, surface-container, surface-bright, etc.
- ✅ Proper contrast ratios for accessibility
- ✅ Semantic color usage (error for errors, primary for main actions)

### **Typography Requirements:**
- ✅ Use Material 3 typescale: display, headline, title, label, body
- ✅ Apply typography classes: `md-typescale-display-large`, `md-typescale-body-medium`, etc.
- ✅ Maintain proper hierarchy and readability

### **Component Usage Standards:**
- ✅ Use appropriate component variants: filled vs outlined vs text buttons
- ✅ Proper form controls: `md-outlined-text-field`, `md-filled-text-field`
- ✅ Consistent iconography using Material Symbols or SVG in slots

## 🔄 **WORKFLOW REQUIREMENTS**

### **When Making Changes:**
1. **ALWAYS** verify changes against official Material Web documentation
2. **ALWAYS** test both light and dark themes
3. **ALWAYS** check mobile responsiveness
4. **ALWAYS** validate accessibility compliance
5. **ALWAYS** update documentation to reflect changes

### **When Debugging:**
1. **ALWAYS** check browser console for Material Web component errors
2. **ALWAYS** verify theme token application using dev tools
3. **ALWAYS** test theme persistence across page reloads
4. **ALWAYS** provide debugging utilities in development builds

## 📚 **REFERENCE MATERIALS**

### **Official Documentation:**
- Material Web GitHub: https://github.com/material-components/material-web
- Material 3 Design System: https://m3.material.io/
- Component Demos: https://material-web.dev/
- Theming Guide: https://github.com/material-components/material-web/tree/main/docs/theming

### **Required Reading:**
- Material Web component API documentation
- Material 3 color system specification  
- Accessibility guidelines for Material components
- Mobile-first responsive design principles

## ⚡ **QUICK REFERENCE COMMANDS**

### **For Copilot to Remember:**
```
User Priority: Official Material Web best practices compliance
Design System: Material Design 3 only
Component Library: @material/web via ESM
Theming Approach: CSS custom properties + class switching
Browser Support: Modern browsers with fallbacks
Accessibility: WCAG 2.1 AA compliance required
Mobile: Mobile-first responsive design required
```

## 🎯 **SUCCESS CRITERIA**

A successful implementation must:
- ✅ Use only official Material Web components
- ✅ Follow Material 3 design token specifications
- ✅ Implement proper light/dark theme switching
- ✅ Work reliably across modern browsers
- ✅ Maintain accessibility standards
- ✅ Provide excellent mobile experience
- ✅ Include comprehensive error handling
- ✅ Follow semantic HTML best practices

---

**Note for Copilot:** These are the user's explicit requirements for this project. Always prioritize these guidelines when making suggestions or implementing changes. The user values official compliance over custom solutions.
