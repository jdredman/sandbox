// RDS Vuetify Theme Package - Main Export
// This file exports everything needed to use RDS theme in any Vue app

import type { ThemeDefinition } from 'vuetify'
import { rdsTheme, designTokens, rdsScssVariables } from './vuetify-theme'

// Main exports
export { rdsTheme, designTokens, rdsScssVariables }
export { useRdsTokens, getCssVariables } from '../composables/useRdsTokens'

/**
 * Get RDS Vuetify theme configuration
 * Use this when you want to configure Vuetify manually
 */
export function getRdsVuetifyConfig() {
  return {
    theme: {
      defaultTheme: 'rds',
      themes: {
        rds: rdsTheme as ThemeDefinition,
      },
    },
    defaults: {
      VBtn: {
        style: [
          { fontFamily: 'canada-type-gibson, Arial, sans-serif' },
          { fontWeight: 600 },
          { borderRadius: '4px' },
        ],
      },
      VCard: {
        style: [{ fontFamily: 'canada-type-gibson, Arial, sans-serif' }, { borderRadius: '8px' }],
      },
      VTextField: {
        style: [{ fontFamily: 'canada-type-gibson, Arial, sans-serif' }],
      },
      VAppBar: {
        style: [{ fontFamily: 'canada-type-gibson, Arial, sans-serif' }, { fontWeight: 600 }],
      },
    },
  }
}

/**
 * Get the CSS import statement for RDS global styles
 * Use this in your main.ts or component style imports
 */
export const RDS_GLOBAL_STYLES_IMPORT = '../styles/rds-theme.css'

/**
 * Instructions for implementing RDS theme in a new Vue app
 */
export const IMPLEMENTATION_GUIDE = {
  steps: [
    '1. Install dependencies: npm install vuetify vue@^3.0.0',
    '2. Add Gibson font to your HTML head: <link rel="stylesheet" href="https://use.typekit.net/euz0vgw.css">',
    '3. Copy the RDS theme files to your project',
    '4. Import and configure in your main.ts',
    '5. Import global CSS styles',
  ],
  files: [
    'src/plugins/vuetify-theme.ts',
    'src/styles/rds-theme.css',
    'src/composables/useRdsTokens.ts',
    'src/plugins/types.ts',
  ],
}
