import { designTokens } from '@/plugins/vuetify-theme'

/**
 * Composable for accessing RDS design tokens
 * Provides easy access to colors, typography, spacing, and other design system values
 */
export const useRdsTokens = () => {
  // Color tokens
  const colors = {
    primary: designTokens.color.base.blue[50],
    primaryDark: designTokens.color.base.blue[60],
    secondary: designTokens.color.base.gray[60],
    success: designTokens.color.base.green[70],
    error: designTokens.color.base.red[60],
    warning: '#faab19',

    // Text colors
    textBase: designTokens.color.text.base,
    textSubdued: designTokens.color.text.subdued,
    textDisabled: designTokens.color.text.disabled,
    textLink: designTokens.color.text.link._,

    // Background colors
    backgroundBase: designTokens.color.background.base,
    backgroundControl: designTokens.color.background.control._,
    surface: designTokens.color.base.white,

    // Gray scale
    gray: designTokens.color.base.gray,
  }

  // Typography tokens
  const typography = {
    fontFamily: designTokens.font.family.base,
    fontWeight: designTokens.font.weight,
  }

  // Spacing tokens
  const spacing = {
    xs: designTokens.size.spacing.xs,
    sm: designTokens.size.spacing.sm,
    md: designTokens.size.spacing.md,
    lg: designTokens.size.spacing.lg,
    xl: designTokens.size.spacing.xl,
  }

  // Border radius tokens
  const radius = {
    sm: designTokens.size.radius.sm,
    md: designTokens.size.radius.md,
    lg: designTokens.size.radius.lg,
  }

  // Shadow tokens
  const shadows = {
    sm: `0 2px 4px 0 ${designTokens.color.shadow.sm}`,
    md: `0 4px 16px 0 ${designTokens.color.shadow.md}`,
    lg: `0 8px 24px 0 ${designTokens.color.shadow.lg}`,
  }

  return {
    colors,
    typography,
    spacing,
    radius,
    shadows,
    // Expose the full tokens object for advanced usage
    tokens: designTokens,
  }
}

/**
 * Helper function to get CSS custom properties for design tokens
 * Useful for dynamic styling
 */
export const getCssVariables = () => {
  const tokens = useRdsTokens()

  return {
    '--rds-color-primary': tokens.colors.primary,
    '--rds-color-primary-dark': tokens.colors.primaryDark,
    '--rds-color-secondary': tokens.colors.secondary,
    '--rds-color-success': tokens.colors.success,
    '--rds-color-error': tokens.colors.error,
    '--rds-color-text-base': tokens.colors.textBase,
    '--rds-color-text-subdued': tokens.colors.textSubdued,
    '--rds-font-family': tokens.typography.fontFamily,
    '--rds-spacing-sm': tokens.spacing.sm,
    '--rds-spacing-md': tokens.spacing.md,
    '--rds-spacing-lg': tokens.spacing.lg,
  }
}
