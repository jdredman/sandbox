# RDS Vuetify Design System Integration

A proof of concept demonstrating the integration of RDS (Ramsey Design System) with Vuetify, featuring custom theming, typography, and component styling.

## Features

### 🎨 Custom Vuetify Theme

- **Colors**: Complete color palette based on RDS design tokens
- **Typography**: Gibson font family integration from Adobe Typekit
- **Spacing**: Consistent spacing system
- **Components**: Themed Vuetify components with RDS styling

### 🛠 Design System Integration

- **Design Tokens**: Comprehensive token system with colors, typography, spacing, and more
- **Composables**: Easy-to-use Vue composables for accessing design tokens
- **Custom Components**: RDS-styled components built on top of Vuetify
- **CSS Variables**: CSS custom properties for dynamic theming

## Getting Started

### Prerequisites

- Node.js 20.19.0 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5174` to view the application.

## Design System Usage

### Using Design Tokens

#### In Vue Components

```vue
<script setup>
import { useRdsTokens } from '@/composables/useRdsTokens'

const { colors, typography, spacing } = useRdsTokens()
</script>

<template>
  <div :style="{ color: colors.primary, padding: spacing.md }">RDS themed content</div>
</template>
```

#### CSS Custom Properties

```css
.my-component {
  color: var(--rds-color-primary);
  font-family: var(--rds-font-family-base);
  padding: var(--rds-spacing-md);
  border-radius: var(--rds-radius-sm);
}
```

### Typography Classes

The system provides utility classes for consistent typography:

```html
<h1 class="rds-heading-xl">Extra Large Heading</h1>
<h2 class="rds-heading-lg">Large Heading</h2>
<h3 class="rds-heading-md">Medium Heading</h3>
<h4 class="rds-heading-sm">Small Heading</h4>
<p class="rds-body">Body text</p>
<p class="rds-body-sm">Small body text</p>
```

### Custom Components

Use the custom RDS components for consistent styling:

```vue
<template>
  <RdsCard title="Success Message" variant="success">
    <p>This is a success message using RDS styling.</p>
    <template #actions>
      <v-btn color="primary">Action</v-btn>
    </template>
  </RdsCard>
</template>
```

## Color Palette

The RDS color system includes:

### Primary Colors

- **Primary**: `#0073b9` - Main brand color
- **Primary Dark**: `#005b98` - Darker variant for interactions

### Semantic Colors

- **Success**: `#1b8533` - Success states
- **Error**: `#cc392f` - Error states
- **Warning**: `#faab19` - Warning states

### Gray Scale

- **Gray 10**: `#f5f7f8` - Lightest gray
- **Gray 90**: `#1f2426` - Darkest gray (text)

### Text Colors

- **Base**: `#1f2426` - Primary text
- **Subdued**: `#495257` - Secondary text
- **Disabled**: `#b6bec2` - Disabled text

## Typography

### Font Family

- **Primary**: Gibson (canada-type-gibson)
- **Fallback**: Arial, sans-serif

### Font Weights

- **Normal**: 400
- **Semibold**: 600
- **Bold**: 700

## File Structure

```
src/
├── components/
│   └── RdsCard.vue              # Custom RDS card component
├── composables/
│   └── useRdsTokens.ts          # Design tokens composable
├── plugins/
│   └── vuetify-theme.ts         # Vuetify theme configuration
├── styles/
│   └── rds-theme.css            # Global RDS styles
└── main.ts                      # Main app configuration
```

## Design Tokens Reference

### Colors

```javascript
const colors = {
  primary: '#0073b9',
  success: '#1b8533',
  error: '#cc392f',
  textBase: '#1f2426',
  backgroundBase: '#f5f7f8',
  // ... and more
}
```

### Spacing

```javascript
const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
}
```

### Border Radius

```javascript
const radius = {
  sm: '4px',
  md: '8px',
  lg: '16px',
}
```

## Building for Production

```bash
npm run build
```

## Contributing

When adding new components or modifying the design system:

1. Follow the RDS design tokens defined in `vuetify-theme.ts`
2. Use the `useRdsTokens` composable for accessing design values
3. Apply consistent typography using the provided CSS classes
4. Test components with different variants and states

## Browser Support

This project supports modern browsers that are compatible with:

- Vue 3
- Vuetify 3
- ES2020+ features
