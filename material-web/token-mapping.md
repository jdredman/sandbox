# Design Token Mapping: Custom System → Material 3

## 🎨 **Token Mapping Strategy**

This document maps your existing design token system to Material 3 design tokens following official Material Web best practices.

## 📊 **Color Token Mapping**

### **Primary Color System**
```css
/* Material 3 Primary ← Your Blue Scale */
--md-sys-color-primary: var(--color-base-blue-50, #0073b9);           /* color.base.blue.50 */
--md-sys-color-on-primary: var(--color-base-white, #ffffff);          /* color.base.white */
--md-sys-color-primary-container: var(--color-base-blue-10, #ade9ff); /* color.base.blue.10 */
--md-sys-color-on-primary-container: var(--color-base-blue-80, #003561); /* color.base.blue.80 */

/* Dark Mode Primary */
.theme-dark {
  --md-sys-color-primary: var(--color-base-blue-30, #00b2f6);         /* color.base.blue.30 */
  --md-sys-color-on-primary: var(--color-base-blue-90, #002342);      /* color.base.blue.90 */
  --md-sys-color-primary-container: var(--color-base-blue-80, #003561); /* color.base.blue.80 */
  --md-sys-color-on-primary-container: var(--color-base-blue-20, #61d5ff); /* color.base.blue.20 */
}
```

### **Secondary Color System**
```css
/* Material 3 Secondary ← Your Teal Scale */
--md-sys-color-secondary: var(--color-base-teal-50, #16a597);         /* color.base.teal.50 */
--md-sys-color-on-secondary: var(--color-base-white, #ffffff);        /* color.base.white */
--md-sys-color-secondary-container: var(--color-base-teal-10, #adfff4); /* color.base.teal.10 */
--md-sys-color-on-secondary-container: var(--color-base-teal-80, #035a4b); /* color.base.teal.80 */

/* Dark Mode Secondary */
.theme-dark {
  --md-sys-color-secondary: var(--color-base-teal-30, #2de0c8);       /* color.base.teal.30 */
  --md-sys-color-on-secondary: var(--color-base-teal-90, #004033);    /* color.base.teal.90 */
  --md-sys-color-secondary-container: var(--color-base-teal-80, #035a4b); /* color.base.teal.80 */
  --md-sys-color-on-secondary-container: var(--color-base-teal-20, #67f5e2); /* color.base.teal.20 */
}
```

### **Tertiary Color System**
```css
/* Material 3 Tertiary ← Your Purple Scale */
--md-sys-color-tertiary: var(--color-base-purple-50, #b34fa0);       /* color.base.purple.50 */
--md-sys-color-on-tertiary: var(--color-base-white, #ffffff);        /* color.base.white */
--md-sys-color-tertiary-container: var(--color-base-purple-10, #ffc7f2); /* color.base.purple.10 */
--md-sys-color-on-tertiary-container: var(--color-base-purple-80, #5b284f); /* color.base.purple.80 */

/* Dark Mode Tertiary */
.theme-dark {
  --md-sys-color-tertiary: var(--color-base-purple-30, #e07ecb);     /* color.base.purple.30 */
  --md-sys-color-on-tertiary: var(--color-base-purple-90, #401c36);  /* color.base.purple.90 */
  --md-sys-color-tertiary-container: var(--color-base-purple-80, #5b284f); /* color.base.purple.80 */
  --md-sys-color-on-tertiary-container: var(--color-base-purple-20, #f59de2); /* color.base.purple.20 */
}
```

### **Error Color System**
```css
/* Material 3 Error ← Your Red Scale */
--md-sys-color-error: var(--color-base-red-60, #cc392f);             /* color.base.red.60 */
--md-sys-color-on-error: var(--color-base-white, #ffffff);           /* color.base.white */
--md-sys-color-error-container: var(--color-base-red-10, #ffc4b8);   /* color.base.red.10 */
--md-sys-color-on-error-container: var(--color-base-red-80, #821d1a); /* color.base.red.80 */

/* Dark Mode Error */
.theme-dark {
  --md-sys-color-error: var(--color-base-red-40, #f26552);           /* color.base.red.40 */
  --md-sys-color-on-error: var(--color-base-red-90, #520d0b);        /* color.base.red.90 */
  --md-sys-color-error-container: var(--color-base-red-80, #821d1a); /* color.base.red.80 */
  --md-sys-color-on-error-container: var(--color-base-red-20, #ff9c8c); /* color.base.red.20 */
}
```

### **Surface Color System**
```css
/* Material 3 Surface ← Your Gray Scale + Background */
--md-sys-color-background: var(--color-background-base, #f5f7f8);    /* color.background.base */
--md-sys-color-on-background: var(--color-text-base, #1f2426);       /* color.text.base */
--md-sys-color-surface: var(--color-background-control, #ffffff);    /* color.background.control._ */
--md-sys-color-on-surface: var(--color-text-base, #1f2426);          /* color.text.base */
--md-sys-color-surface-variant: var(--color-base-gray-20, #e8eced);  /* color.base.gray.20 */
--md-sys-color-on-surface-variant: var(--color-text-subdued, #495257); /* color.text.subdued */

/* Surface Container Levels */
--md-sys-color-surface-container-lowest: var(--color-base-white, #ffffff);
--md-sys-color-surface-container-low: var(--color-base-gray-10, #f5f7f8);
--md-sys-color-surface-container: var(--color-base-gray-20, #e8eced);
--md-sys-color-surface-container-high: var(--color-base-gray-30, #d5d9db);
--md-sys-color-surface-container-highest: var(--color-base-gray-40, #b6bec2);

/* Dark Mode Surface */
.theme-dark {
  --md-sys-color-background: var(--color-base-gray-90, #1f2426);
  --md-sys-color-on-background: var(--color-text-darkCanvas, #ffffff);
  --md-sys-color-surface: var(--color-base-gray-80, #333a3d);
  --md-sys-color-on-surface: var(--color-text-darkCanvas, #ffffff);
  --md-sys-color-surface-variant: var(--color-base-gray-70, #495257);
  --md-sys-color-on-surface-variant: var(--color-base-gray-40, #b6bec2);
  
  --md-sys-color-surface-container-lowest: var(--color-base-gray-90, #1f2426);
  --md-sys-color-surface-container-low: var(--color-base-gray-80, #333a3d);
  --md-sys-color-surface-container: var(--color-base-gray-70, #495257);
  --md-sys-color-surface-container-high: var(--color-base-gray-60, #69757a);
  --md-sys-color-surface-container-highest: var(--color-base-gray-50, #8e999e);
}
```

### **Outline Colors**
```css
/* Material 3 Outline ← Your Border Colors */
--md-sys-color-outline: var(--color-border-control, #69757a);         /* color.border.control._ */
--md-sys-color-outline-variant: var(--color-border-control-disabled, #d5d9db); /* color.border.control.disabled */

/* Dark Mode Outline */
.theme-dark {
  --md-sys-color-outline: var(--color-base-gray-50, #8e999e);
  --md-sys-color-outline-variant: var(--color-base-gray-70, #495257);
}
```

## 🔢 **Shape Token Mapping**

```css
/* Material 3 Shape ← Your Radius System */
--md-sys-shape-corner-none: var(--size-radius-none, 0px);            /* size.radius.none */
--md-sys-shape-corner-extra-small: var(--size-radius-sm, 4px);       /* size.radius.sm */
--md-sys-shape-corner-small: var(--size-radius-md, 8px);             /* size.radius.md */
--md-sys-shape-corner-medium: calc(var(--size-radius-md, 8px) * 1.5); /* size.radius.md * 1.5 = 12px */
--md-sys-shape-corner-large: var(--size-radius-lg, 16px);            /* size.radius.lg */
--md-sys-shape-corner-extra-large: calc(var(--size-radius-lg, 16px) * 1.75); /* size.radius.lg * 1.75 = 28px */
--md-sys-shape-corner-full: var(--size-radius-full, 9999px);         /* size.radius.full */
```

## 📐 **Typography Token Mapping**

```css
/* Material 3 Typography ← Your Font System */
:root {
  /* Font Family */
  --md-sys-typescale-display-large-font: var(--font-family-base, 'canada-type-gibson, Arial, sans-serif');
  --md-sys-typescale-headline-large-font: var(--font-family-base, 'canada-type-gibson, Arial, sans-serif');
  --md-sys-typescale-body-large-font: var(--font-family-base, 'canada-type-gibson, Arial, sans-serif');
  
  /* Font Sizes - Mapping your size.font.* to Material 3 typescale */
  --md-sys-typescale-display-large-size: var(--size-font-12, 72px);   /* size.font.12 */
  --md-sys-typescale-display-medium-size: var(--size-font-11, 60px);  /* size.font.11 */
  --md-sys-typescale-display-small-size: var(--size-font-10, 48px);   /* size.font.10 */
  
  --md-sys-typescale-headline-large-size: var(--size-font-9, 40px);   /* size.font.9 */
  --md-sys-typescale-headline-medium-size: var(--size-font-8, 34px);  /* size.font.8 */
  --md-sys-typescale-headline-small-size: var(--size-font-7, 28px);   /* size.font.7 */
  
  --md-sys-typescale-title-large-size: var(--size-font-6, 24px);      /* size.font.6 */
  --md-sys-typescale-title-medium-size: var(--size-font-5, 20px);     /* size.font.5 */
  --md-sys-typescale-title-small-size: var(--size-font-4, 18px);      /* size.font.4 */
  
  --md-sys-typescale-body-large-size: var(--size-font-3, 16px);       /* size.font.3 */
  --md-sys-typescale-body-medium-size: var(--size-font-2, 14px);      /* size.font.2 */
  --md-sys-typescale-body-small-size: var(--size-font-1, 12px);       /* size.font.1 */
  
  --md-sys-typescale-label-large-size: var(--size-font-2, 14px);      /* size.font.2 */
  --md-sys-typescale-label-medium-size: var(--size-font-1, 12px);     /* size.font.1 */
  --md-sys-typescale-label-small-size: 11px;                          /* Custom small size */
  
  /* Font Weights */
  --md-sys-typescale-display-large-weight: var(--font-weight-normal, 400);    /* font.weight.normal */
  --md-sys-typescale-headline-large-weight: var(--font-weight-semibold, 600); /* font.weight.semibold */
  --md-sys-typescale-title-large-weight: var(--font-weight-semibold, 600);    /* font.weight.semibold */
  --md-sys-typescale-body-large-weight: var(--font-weight-normal, 400);       /* font.weight.normal */
  --md-sys-typescale-label-large-weight: var(--font-weight-semibold, 600);    /* font.weight.semibold */
  
  /* Line Heights */
  --md-sys-typescale-display-large-line-height: var(--size-lineHeight-sm, 1.1);  /* size.lineHeight.sm */
  --md-sys-typescale-headline-large-line-height: var(--size-lineHeight-md, 1.25); /* size.lineHeight.md */
  --md-sys-typescale-body-large-line-height: var(--size-lineHeight-lg, 1.5);     /* size.lineHeight.lg */
}
```

## 🌊 **Elevation Token Mapping**

```css
/* Material 3 Elevation ← Your Shadow System */
--md-sys-elevation-level0: var(--shadow-box-none, none);             /* shadow.box.none */
--md-sys-elevation-level1: var(--shadow-box-sm, 0 2px 4px 0 rgb(31 36 38 / 0.1)); /* shadow.box.sm */
--md-sys-elevation-level2: var(--shadow-box-md, 0 4px 16px 0 rgb(31 36 38 / 0.12)); /* shadow.box.md */
--md-sys-elevation-level3: var(--shadow-box-lg, 0 8px 24px 0 rgb(31 36 38 / 0.18)); /* shadow.box.lg */
--md-sys-elevation-level4: 0 6px 10px 0 var(--color-shadow-md, rgb(31 36 38 / 0.12)), 0 1px 18px 0 var(--color-shadow-sm, rgb(31 36 38 / 0.1));
--md-sys-elevation-level5: 0 8px 12px 0 var(--color-shadow-lg, rgb(31 36 38 / 0.18)), 0 4px 20px 0 var(--color-shadow-md, rgb(31 36 38 / 0.12));
```

## 🎯 **Implementation Strategy**

1. **Create a CSS file with your design tokens**
2. **Map them to Material 3 tokens using CSS custom properties**
3. **Use CSS cascading to override Material Web defaults**
4. **Maintain semantic color meanings**
5. **Ensure accessibility compliance**

## 📝 **Next Steps**

1. Implement the token mapping in your `index.html`
2. Test the color combinations for WCAG compliance
3. Verify that all Material Web components adopt the new tokens
4. Create theme variants (light/dark) using your existing color scales
5. Add debugging utilities to visualize token values
