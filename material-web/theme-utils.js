/**
 * Material Theme Utilities - Simplified and Reliable
 * 
 * Simple approach that works reliably across all browsers
 */

/**
 * Applies a theme by injecting CSS into a style element
 */
export function applyMaterialTheme(cssText, styleId = 'material-theme-style') {
  // Remove existing theme style
  const existingStyle = document.getElementById(styleId);
  if (existingStyle) {
    existingStyle.remove();
  }
  
  // Create new style element
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = cssText;
  document.head.appendChild(style);
  
  // Update meta theme-color for browser UI
  updateMetaThemeColor(cssText);
}

/**
 * Updates the browser's theme color meta tag
 */
function updateMetaThemeColor(cssText) {
  const backgroundMatch = cssText.match(/--md-sys-color-background:\s*([^;]+);/);
  if (backgroundMatch) {
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.name = 'theme-color';
      document.head.appendChild(metaTheme);
    }
    metaTheme.content = backgroundMatch[1].trim();
  }
}

/**
 * Generates theme CSS from color values
 */
export function generateThemeFromColors(colors) {
  let css = ':root {\n';
  
  for (const [token, value] of Object.entries(colors)) {
    css += `  --md-sys-color-${token}: ${value};\n`;
  }
  
  css += '}\n';
  return css;
}

/**
 * Simple theme manager class for handling light/dark mode
 */
export class MaterialThemeManager {
  constructor(lightThemeCSS, darkThemeCSS) {
    this.lightThemeCSS = lightThemeCSS;
    this.darkThemeCSS = darkThemeCSS;
    this.currentMode = 'light'; // Start with light mode
    this.isDark = false;
    
    // Listen for system preference changes
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQuery.addEventListener('change', (e) => {
      if (this.currentMode === 'auto') {
        this.isDark = e.matches;
        this.applyTheme(e.matches ? 'dark' : 'light');
        this.updateClassNames();
        this.dispatchChangeEvent();
      }
    });
    
    // Initialize theme
    this.init();
  }
  
  init() {
    // Try to restore from localStorage
    const savedMode = localStorage.getItem('material-theme-mode') || 'light';
    this.setMode(savedMode);
  }
  
  setMode(mode) {
    console.log('🎨 Setting theme mode to:', mode);
    this.currentMode = mode;
    localStorage.setItem('material-theme-mode', mode);
    
    if (mode === 'auto') {
      this.isDark = this.mediaQuery.matches;
    } else {
      this.isDark = mode === 'dark';
    }
    
    this.applyTheme(this.isDark ? 'dark' : 'light');
    this.updateClassNames();
    this.dispatchChangeEvent();
  }
  
  toggle() {
    console.log('🔄 Toggling theme from:', this.currentMode);
    if (this.currentMode === 'auto') {
      // If auto, switch to opposite of current system preference
      this.setMode(this.mediaQuery.matches ? 'light' : 'dark');
    } else {
      // If manual, toggle between light and dark
      this.setMode(this.isDark ? 'light' : 'dark');
    }
  }
  
  applyTheme(theme) {
    console.log('🎯 Applying theme:', theme);
    const css = theme === 'dark' ? this.darkThemeCSS : this.lightThemeCSS;
    applyMaterialTheme(css);
  }
  
  updateClassNames() {
    document.body.classList.toggle('theme-dark', this.isDark);
    document.body.classList.toggle('theme-light', !this.isDark);
    console.log('📝 Updated body classes. Dark mode:', this.isDark);
  }
  
  dispatchChangeEvent() {
    document.dispatchEvent(new CustomEvent('material-theme-changed', {
      detail: { mode: this.currentMode, isDark: this.isDark, isAuto: this.currentMode === 'auto' }
    }));
  }
  
  getCurrentMode() {
    return {
      mode: this.currentMode,
      isDark: this.isDark,
      isAuto: this.currentMode === 'auto'
    };
  }
}

/**
 * Simple theme colors based on Material 3 spec
 */
export const MATERIAL_THEME_COLORS = {
  light: {
    primary: '#1976D2',
    'on-primary': '#FFFFFF',
    'primary-container': '#E3F2FD',
    'on-primary-container': '#0D47A1',
    secondary: '#388E3C',
    'on-secondary': '#FFFFFF',
    'secondary-container': '#E8F5E8',
    'on-secondary-container': '#1B5E20',
    tertiary: '#7B1FA2',
    'on-tertiary': '#FFFFFF',
    'tertiary-container': '#F3E5F5',
    'on-tertiary-container': '#4A148C',
    error: '#D32F2F',
    'on-error': '#FFFFFF',
    'error-container': '#FFEBEE',
    'on-error-container': '#B71C1C',
    background: '#FEFDF8',
    'on-background': '#1C1B1F',
    surface: '#FFFBFE',
    'on-surface': '#1C1B1F',
    'surface-variant': '#E7E0EC',
    'on-surface-variant': '#49454F',
    'surface-container': '#F3EDF7',
    'surface-container-high': '#ECE6F0',
    'surface-container-highest': '#E6E0E9',
    outline: '#79747E',
    'outline-variant': '#CAC4D0',
    'inverse-surface': '#313033',
    'inverse-on-surface': '#F4EFF4',
    'inverse-primary': '#A5C9FF',
    shadow: '#000000',
    scrim: '#000000',
    'surface-tint': '#1976D2'
  },
  dark: {
    primary: '#A5C9FF',
    'on-primary': '#003258',
    'primary-container': '#004881',
    'on-primary-container': '#D1E4FF',
    secondary: '#A8D5AA',
    'on-secondary': '#143518',
    'secondary-container': '#2A4B2D',
    'on-secondary-container': '#C4F1C6',
    tertiary: '#DDB3E0',
    'on-tertiary': '#3E2844',
    'tertiary-container': '#56395C',
    'on-tertiary-container': '#F9CFE8',
    error: '#FFB4AB',
    'on-error': '#690005',
    'error-container': '#93000A',
    'on-error-container': '#FFDAD6',
    background: '#0F0F13',
    'on-background': '#E4E1E6',
    surface: '#141218',
    'on-surface': '#E4E1E6',
    'surface-variant': '#44474F',
    'on-surface-variant': '#C4C7CF',
    'surface-container': '#201F23',
    'surface-container-high': '#2B2930',
    'surface-container-highest': '#36343B',
    outline: '#8E9099',
    'outline-variant': '#44474F',
    'inverse-surface': '#E4E1E6',
    'inverse-on-surface': '#313033',
    'inverse-primary': '#1976D2',
    shadow: '#000000',
    scrim: '#000000',
    'surface-tint': '#A5C9FF'
  }
};

/**
 * Creates a simple theme manager with default colors
 */
export function createDefaultThemeManager() {
  const lightCSS = generateThemeFromColors(MATERIAL_THEME_COLORS.light);
  const darkCSS = generateThemeFromColors(MATERIAL_THEME_COLORS.dark);
  
  return new MaterialThemeManager(lightCSS, darkCSS);
}
