import type { ThemeDefinition } from 'vuetify'

// Design tokens from RDS design system
export const designTokens = {
  color: {
    background: {
      overlay: 'rgb(31 36 38 / 0.64)',
      base: '#f5f7f8',
      control: {
        _: '#ffffff',
        disabled: '#f5f7f8',
      },
      success: '#1b8533',
      error: '#cc392f',
    },
    base: {
      white: '#ffffff',
      black: '#000000',
      gray: {
        10: '#f5f7f8',
        20: '#e8eced',
        30: '#d5d9db',
        40: '#b6bec2',
        50: '#8e999e',
        60: '#69757a',
        70: '#495257',
        80: '#333a3d',
        90: '#1f2426',
      },
      blue: {
        50: '#0073b9',
        60: '#005b98',
        70: '#004477',
      },
      green: {
        70: '#1b8533',
        80: '#106621',
      },
      red: {
        60: '#cc392f',
        70: '#a62b24',
      },
    },
    border: {
      control: {
        _: '#69757a',
        disabled: '#d5d9db',
        interactive: '#0073b9',
      },
      error: '#cc392f',
    },
    text: {
      base: '#1f2426',
      darkCanvas: '#ffffff',
      subdued: '#495257',
      link: {
        _: '#0073b9',
        interactive: '#005b98',
      },
      error: '#a62b24',
      success: '#106621',
      disabled: '#b6bec2',
    },
    shadow: {
      sm: 'rgb(31 36 38 / 0.1)',
      md: 'rgb(31 36 38 / 0.12)',
      lg: 'rgb(31 36 38 / 0.18)',
    },
  },
  font: {
    family: {
      gibson: 'canada-type-gibson, Arial, sans-serif',
      base: 'canada-type-gibson, Arial, sans-serif',
    },
    weight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
  },
  size: {
    spacing: {
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '48px',
    },
    radius: {
      sm: '4px',
      md: '8px',
      lg: '16px',
    },
  },
}

// Custom RDS theme for Vuetify
export const rdsTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // Primary brand colors
    primary: designTokens.color.base.blue[50],
    'primary-darken-1': designTokens.color.base.blue[60],
    'primary-darken-2': designTokens.color.base.blue[70],

    // Secondary colors
    secondary: designTokens.color.base.gray[60],
    'secondary-darken-1': designTokens.color.base.gray[70],
    'secondary-lighten-1': designTokens.color.base.gray[50],

    // Surface colors
    surface: designTokens.color.base.white,
    'surface-variant': designTokens.color.base.gray[10],
    'surface-bright': designTokens.color.base.white,
    'surface-light': designTokens.color.base.gray[10],

    // Background
    background: designTokens.color.background.base,

    // State colors
    error: designTokens.color.base.red[60],
    'error-darken-1': designTokens.color.base.red[70],
    success: designTokens.color.base.green[70],
    'success-darken-1': designTokens.color.base.green[80],
    warning: '#faab19',
    info: designTokens.color.base.blue[50],

    // Text colors
    'on-surface': designTokens.color.text.base,
    'on-surface-variant': designTokens.color.text.subdued,
    'on-primary': designTokens.color.text.darkCanvas,
    'on-secondary': designTokens.color.text.darkCanvas,
    'on-background': designTokens.color.text.base,
    'on-error': designTokens.color.text.darkCanvas,
    'on-success': designTokens.color.text.darkCanvas,

    // Additional semantic colors
    outline: designTokens.color.border.control._,
    'outline-variant': designTokens.color.border.control.disabled,

    // Custom RDS colors
    'text-subdued': designTokens.color.text.subdued,
    'text-disabled': designTokens.color.text.disabled,
    'border-interactive': designTokens.color.border.control.interactive,
    'shadow-color': designTokens.color.shadow.md,
  },
}

// Custom SCSS variables for additional theming
export const rdsScssVariables = `
// RDS Design System Variables
$rds-font-family-base: ${designTokens.font.family.base};
$rds-font-weight-normal: ${designTokens.font.weight.normal};
$rds-font-weight-semibold: ${designTokens.font.weight.semibold};
$rds-font-weight-bold: ${designTokens.font.weight.bold};

$rds-spacing-xs: ${designTokens.size.spacing.xs};
$rds-spacing-sm: ${designTokens.size.spacing.sm};
$rds-spacing-md: ${designTokens.size.spacing.md};
$rds-spacing-lg: ${designTokens.size.spacing.lg};
$rds-spacing-xl: ${designTokens.size.spacing.xl};

$rds-radius-sm: ${designTokens.size.radius.sm};
$rds-radius-md: ${designTokens.size.radius.md};
$rds-radius-lg: ${designTokens.size.radius.lg};

$rds-shadow-sm: 0 2px 4px 0 ${designTokens.color.shadow.sm};
$rds-shadow-md: 0 4px 16px 0 ${designTokens.color.shadow.md};
$rds-shadow-lg: 0 8px 24px 0 ${designTokens.color.shadow.lg};
`
