# Button Design Specifications

## Border Radius Standards

All buttons in the Ramsey Material Web Design System use **8px border radius** for consistency and brand alignment.

### Button Types Affected

- ✅ **Filled Button** (`md-filled-button`)
- ✅ **Filled Tonal Button** (`md-filled-tonal-button`) 
- ✅ **Outlined Button** (`md-outlined-button`)
- ✅ **Text Button** (`md-text-button`)
- ✅ **Icon Button** (`md-icon-button`)

### FAB (Floating Action Button) Exception

FABs maintain their Material 3 specified rounded corners for optimal visual hierarchy:

- **Small FAB**: 12px border radius
- **Standard FAB**: 16px border radius  
- **Large FAB**: 28px border radius

## Implementation

The border radius is enforced through Material 3 shape tokens in `shared/layout.css`:

```css
/* Button Shape Tokens - 8px Border Radius */
--md-filled-button-container-shape: 8px;
--md-filled-tonal-button-container-shape: 8px;
--md-outlined-button-container-shape: 8px;
--md-text-button-container-shape: 8px;
--md-icon-button-state-layer-shape: 8px;

/* FAB Shape Tokens - Keep Circular */
--md-fab-container-shape: 16px;
--md-fab-small-container-shape: 12px;
--md-fab-large-container-shape: 28px;
```

## Design Rationale

- **Brand Consistency**: 8px radius aligns with Ramsey Design System spacing tokens
- **Visual Hierarchy**: Distinguishes buttons from other UI elements with different radii
- **Material 3 Compliance**: Uses official Material 3 shape token system
- **Accessibility**: Maintains sufficient contrast and interaction targets

## Usage in Code

No additional CSS required - the tokens are automatically applied to all Material Web button components:

```html
<!-- Automatically gets 8px border radius -->
<md-filled-button>Get Started</md-filled-button>
<md-outlined-button>Learn More</md-outlined-button>
<md-text-button>Skip</md-text-button>

<!-- FABs maintain their specified radius -->
<md-fab>add</md-fab>
```

## Testing

To verify the implementation:

1. Visit any component page in the design system
2. Inspect button elements in browser dev tools
3. Confirm `border-radius: 8px` is applied to all standard buttons
4. Confirm FABs maintain their circular/rounded appearance

---

*Last updated: August 6, 2025*  
*CSS Version: 4e33a5dc*
