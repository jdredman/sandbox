// TypeScript definitions for RDS Design System

export interface RdsColorTokens {
  primary: string
  primaryDark: string
  secondary: string
  success: string
  error: string
  warning: string
  textBase: string
  textSubdued: string
  textDisabled: string
  textLink: string
  backgroundBase: string
  backgroundControl: string
  surface: string
  gray: Record<string, string>
}

export interface RdsTypographyTokens {
  fontFamily: string
  fontWeight: {
    normal: number
    semibold: number
    bold: number
  }
}

export interface RdsSpacingTokens {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

export interface RdsDesignTokens {
  colors: RdsColorTokens
  typography: RdsTypographyTokens
  spacing: RdsSpacingTokens
  radius: {
    sm: string
    md: string
    lg: string
  }
  shadows: {
    sm: string
    md: string
    lg: string
  }
}
