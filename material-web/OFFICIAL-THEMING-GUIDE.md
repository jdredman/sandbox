# Material Web Official Theming Implementation

This project has been refactored to follow the official Material Web theming guidelines and best practices from the [Material Web repository](https://github.com/material-components/material-web).

## 🎨 Architecture Overview

### Core Files

1. **`material-theme.css`** - Official compliant Material 3 theme tokens
2. **`theme-utils.js`** - Theme management utilities following Material Web patterns
3. **`index.html`** - Updated to use constructable stylesheets and official patterns

### Key Changes from Previous Implementation

#### ✅ What's New (Official Approach)
- **Constructable Stylesheets**: Themes applied via `CSSStyleSheet` API (performance & Material Web recommendation)
- **System Token Focus**: Uses `--md-sys-color-*` tokens that Material Web components consume
- **Material Theme Manager**: Class-based theme management with state persistence
- **Automatic & Manual Modes**: Supports `auto` (system preference) + manual light/dark switching
- **Event-Driven Architecture**: Custom events for theme changes
- **Browser Integration**: Updates `meta[name="theme-color"]` for mobile browser UI

#### ❌ What Was Replaced (Legacy Approach)
- **Direct CSS Links**: Replaced link tag approach with programmatic application
- **Mixed Token Systems**: Removed custom tokens that components don't consume
- **Manual Dark Mode Only**: Old system only supported manual toggle

## 🛠️ Technical Implementation

### Theme Management

```javascript
// Initialize theme manager
const themeManager = new MaterialThemeManager(lightCSS, darkCSS);

// Manual theme switching
themeManager.setMode('dark');   // Force dark
themeManager.setMode('light');  // Force light
themeManager.setMode('auto');   // Follow system preference

// Toggle between current modes
themeManager.toggle();

// Get current state
const state = themeManager.getCurrentMode();
// Returns: { mode: 'auto', isDark: true, isAuto: true }
```

### Theme Token System

Following Material 3 specification with proper token categories:

```css
:root {
  /* Color Tokens */
  --md-sys-color-primary: #1976D2;
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-background: #FEFDF8;
  --md-sys-color-surface: #FFFBFE;
  
  /* Typography Tokens */
  --md-sys-typescale-display-large-size: 57px;
  --md-sys-typescale-body-medium-font: 'Roboto';
  
  /* Shape Tokens */
  --md-sys-shape-corner-large: 16px;
  --md-sys-shape-corner-medium: 12px;
}
```

### Component Integration

Material Web components automatically consume system tokens:

```html
<!-- These components use the theme tokens automatically -->
<md-filled-button>Submit</md-filled-button>
<md-outlined-text-field label="Name"></md-outlined-text-field>
<md-checkbox>Subscribe</md-checkbox>
```

## 🎯 Benefits of Official Approach

### Performance
- **Constructable Stylesheets**: Faster than DOM manipulation
- **Single Source**: One stylesheet handles all theme tokens
- **Efficient Updates**: No CSS recalculation on theme change

### Compatibility
- **Material Web v2+**: Full compatibility with latest components
- **Future-Proof**: Follows evolving Material Web standards
- **Token Consistency**: Guaranteed token consumption by components

### Developer Experience
- **Type Safety**: Clear API with documented methods
- **Event System**: React to theme changes anywhere in the app
- **Debug Support**: Built-in console debugging and visual indicators
- **State Persistence**: Remembers user's theme preference

## 🔧 Usage Examples

### Basic Setup

```html
<head>
  <script type="module" src="theme-utils.js"></script>
</head>

<script type="module">
  import { MaterialThemeManager, MATERIAL_THEME_COLORS, generateThemeFromColors } from './theme-utils.js';
  
  const lightCSS = generateThemeFromColors(MATERIAL_THEME_COLORS.light);
  const darkCSS = generateThemeFromColors(MATERIAL_THEME_COLORS.dark);
  
  const themeManager = new MaterialThemeManager(lightCSS, darkCSS);
</script>
```

### Custom Colors

```javascript
// Define your brand colors
const customColors = {
  light: {
    primary: '#6750A4',
    'on-primary': '#FFFFFF',
    background: '#FFFBFE',
    // ... other tokens
  },
  dark: {
    primary: '#D0BCFF',
    'on-primary': '#381E72',
    background: '#141218',
    // ... other tokens
  }
};

// Generate theme CSS
const lightCSS = generateThemeFromColors(customColors.light);
const darkCSS = generateThemeFromColors(customColors.dark);
```

### Listen for Theme Changes

```javascript
document.addEventListener('material-theme-changed', (event) => {
  const { mode, isDark, isAuto } = event.detail;
  console.log(`Theme changed to: ${mode} (dark: ${isDark})`);
  
  // Update your app's state
  updateAppTheme(isDark);
});
```

## 📱 Mobile & Browser Integration

The theme system automatically updates:

- **Theme Color Meta Tag**: Updates browser UI color on mobile
- **Color Scheme**: Sets `color-scheme` CSS property for optimal rendering
- **System Integration**: Respects `prefers-color-scheme` when in auto mode

## 🧪 Debugging

### Debug Panel
The implementation includes a debug panel showing:
- Current theme mode
- Active color tokens
- Theme state information

### Console Access
Access theme manager in browser console:
```javascript
const manager = window.materialTheme();
manager.setMode('dark');
console.log(manager.getCurrentMode());
```

### Visual Indicators
- Theme mode indicator in UI
- Smooth transitions between themes
- Clear visual feedback for theme changes

## 🔄 Migration from Legacy

If upgrading from the previous implementation:

1. **Remove**: `theme-tokens.css` and `custom-theme.css` links
2. **Add**: `theme-utils.js` script import
3. **Update**: JavaScript to use new `MaterialThemeManager`
4. **Verify**: All Material Web components render correctly

## 📋 File Summary

| File | Purpose | Status |
|------|---------|---------|
| `theme-utils.js` | Theme management utilities | ✅ Active |
| `index.html` | Updated demo with official patterns | ✅ Active |
| `OFFICIAL-THEMING-GUIDE.md` | Complete documentation | ✅ Active |

## 🚀 Quick Start

1. **Open the project**: Simply open `index.html` in your browser
2. **Test theming**: Click the toggle button to switch between light/dark modes  
3. **Inspect debug info**: Check the debug panel in the bottom-right corner
4. **Console debugging**: Use `window.materialTheme()` in browser console

This implementation now fully aligns with Material Web's official theming recommendations and provides a robust foundation for Material Design 3 applications.
