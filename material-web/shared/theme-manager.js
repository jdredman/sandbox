/**
 * Ramsey Design System Theme Manager
 * Handles dark/light mode switching with localStorage persistence
 */
class MaterialThemeManager {
  constructor() {
    this.currentMode = 'auto'; // 'light', 'dark', 'auto'
    this.isDark = false;
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initialize
    this.init();
    
    // Listen for system preference changes
    this.mediaQuery.addEventListener('change', (e) => {
      if (this.currentMode === 'auto') {
        this.updateTheme(e.matches);
      }
    });
  }
  
  init() {
    const saved = localStorage.getItem('ramsey-theme-mode') || 'auto';
    this.setMode(saved);
  }
  
  setMode(mode) {
    this.currentMode = mode;
    localStorage.setItem('ramsey-theme-mode', mode);
    
    if (mode === 'auto') {
      this.updateTheme(this.mediaQuery.matches);
    } else {
      this.updateTheme(mode === 'dark');
    }
  }
  
  toggle() {
    if (this.currentMode === 'auto') {
      // Switch to manual mode opposite of current system preference
      this.setMode(this.mediaQuery.matches ? 'light' : 'dark');
    } else {
      // Toggle between light and dark
      this.setMode(this.isDark ? 'light' : 'dark');
    }
  }
  
  updateTheme(isDark) {
    this.isDark = isDark;
    const root = document.documentElement;
    
    // Update data attribute for theming (Material 3 standard)
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    
    // Update DOM classes for backward compatibility
    document.body.classList.toggle('theme-dark', isDark);
    
    // Update color scheme meta
    root.style.colorScheme = isDark ? 'dark' : 'light';
    
    // Update meta theme-color
    const metaThemeLight = document.querySelector('meta[name="theme-color"][media*="light"]');
    const metaThemeDark = document.querySelector('meta[name="theme-color"][media*="dark"]');
    
    if (metaThemeLight) {
      metaThemeLight.content = '#0073b9';
    }
    if (metaThemeDark) {
      metaThemeDark.content = '#A5C9FF';
    }
    
    // Update UI
    this.updateUI();
    
    console.log(`🎯 Theme updated: ${this.currentMode} (${isDark ? 'dark' : 'light'})`);
  }
  
  updateUI() {
    const toggle = document.getElementById('theme-toggle');
    
    if (toggle) {
      toggle.textContent = this.isDark ? '☀️' : '🌙';
      toggle.setAttribute('aria-label', 
        this.isDark ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }
  
  getCurrentState() {
    return {
      mode: this.currentMode,
      isDark: this.isDark,
      isAuto: this.currentMode === 'auto'
    };
  }
}

/**
 * Navigation Manager for handling active states and dynamic paths
 */
class NavigationManager {
  constructor() {
    this.init();
  }
  
  init() {
    // Update navigation paths based on current location
    this.updateNavigationPaths();
    
    // Set active navigation states
    this.setActiveNavigation();
  }
  
  updateNavigationPaths() {
    const currentPath = window.location.pathname;
    let basePath = './';
    
    // Determine if we're in a subdirectory
    if (currentPath.includes('/foundations/') || currentPath.includes('/components/')) {
      basePath = '../';
    }
    
    // Update header navigation links
    const logoLink = document.getElementById('logo-link');
    const overviewLink = document.getElementById('nav-overview');
    const foundationsLink = document.getElementById('nav-foundations');
    const componentsLink = document.getElementById('nav-components');
    
    if (logoLink) {
      logoLink.href = basePath + 'index.html';
    }
    if (overviewLink) {
      const parentElement = overviewLink.parentElement;
      if (parentElement) parentElement.href = basePath + 'index.html';
    }
    if (foundationsLink) {
      const parentElement = foundationsLink.parentElement;
      if (parentElement) parentElement.href = basePath + 'foundations/index.html';
    }
    if (componentsLink) {
      const parentElement = componentsLink.parentElement;
      if (parentElement) parentElement.href = basePath + 'components/index.html';
    }
  }
  
  setActiveNavigation() {
    const currentPath = window.location.pathname;
    
    // Remove all active classes first
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('current');
    });
    
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Set active states based on current path
    if (currentPath.includes('/foundations/')) {
      const foundationsNav = document.getElementById('nav-foundations');
      if (foundationsNav) foundationsNav.querySelector('md-text-button').classList.add('current');
      
      // Set specific foundation page active in sidebar
      const foundationFile = currentPath.split('/').pop();
      document.querySelectorAll('.nav-item').forEach(item => {
        if (item.href && item.href.includes(foundationFile)) {
          item.classList.add('active');
        }
      });
    } else if (currentPath.includes('/components/')) {
      const componentsNav = document.getElementById('nav-components');
      if (componentsNav) componentsNav.querySelector('md-text-button').classList.add('current');
      
      // Set specific component page active in sidebar
      const componentFile = currentPath.split('/').pop();
      document.querySelectorAll('.nav-item').forEach(item => {
        if (item.href && item.href.includes(componentFile)) {
          item.classList.add('active');
        }
      });
    } else {
      // Main page
      const overviewNav = document.getElementById('nav-overview');
      if (overviewNav) overviewNav.querySelector('md-text-button').classList.add('current');
    }
  }
}

/**
 * Component Loader
 * Loads shared HTML components into pages
 */
class ComponentLoader {
  static async loadComponent(elementId, componentPath) {
    try {
      const response = await fetch(componentPath);
      if (!response.ok) {
        throw new Error(`Failed to load component: ${response.statusText}`);
      }
      
      const html = await response.text();
      const element = document.getElementById(elementId);
      
      if (element) {
        element.innerHTML = html;
        return true;
      } else {
        console.warn(`Element with ID '${elementId}' not found`);
        return false;
      }
    } catch (error) {
      console.error(`Error loading component ${componentPath}:`, error);
      return false;
    }
  }
  
  static async loadHeader() {
    return await this.loadComponent('shared-header', '/material-web/shared/header.html');
  }
  
  static async loadSidebar() {
    return await this.loadComponent('shared-sidebar', '/material-web/shared/sidebar.html');
  }
}

/**
 * Initialize the design system
 */
function initRamseyDesignSystem() {
  console.log('🚀 Initializing Ramsey Material Web Design System...');
  
  try {
    // Create theme manager
    const themeManager = new MaterialThemeManager();
    
    // Create navigation manager
    const navigationManager = new NavigationManager();
    
    // Set up theme toggle button
    const setupThemeToggle = () => {
      const toggleButton = document.getElementById('theme-toggle');
      if (toggleButton) {
        toggleButton.addEventListener('click', () => {
          themeManager.toggle();
        });
      }
    };
    
    // If components are already loaded, set up immediately
    setupThemeToggle();
    
    // Also set up after components load (for dynamic loading)
    document.addEventListener('componentsLoaded', () => {
      setupThemeToggle();
      navigationManager.updateActiveStates();
    });
    
    // Make managers globally available for debugging
    window.ramseyTheme = themeManager;
    window.ramseyNav = navigationManager;
    
    console.log('✅ Design system initialized successfully');
    
  } catch (error) {
    console.error('❌ Failed to initialize design system:', error);
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRamseyDesignSystem);
} else {
  initRamseyDesignSystem();
}
