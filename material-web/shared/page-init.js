/**
 * Ramsey Design System Page Initializer
 * Simple function to load shared components and initialize the page
 */

async function loadComponent(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`❌ Error loading component from ${url}:`, error);
    return null;
  }
}

async function initializePage() {
  try {
    console.log('🚀 Initializing page components...');
    
    // Determine base path for shared components and navigation links
    const currentPath = window.location.pathname;
    
    // Calculate paths based on current location
    let sharedPath, basePath;
    
    if (currentPath.includes('/foundations/') || currentPath.includes('/components/')) {
      // We're in a subdirectory
      sharedPath = '../shared/';
      basePath = '../';
    } else {
      // We're in the root directory
      sharedPath = './shared/';
      basePath = './';
    }
    
    // Load shared header
    const headerContainer = document.getElementById('shared-header');
    if (headerContainer) {
      console.log('📝 Loading header from:', sharedPath + 'header.html');
      const headerHtml = await loadComponent(sharedPath + 'header.html');
      if (headerHtml) {
        headerContainer.innerHTML = headerHtml;
        
        // Fix navigation links in header based on current page location
        const navLinks = headerContainer.querySelectorAll('a[href]');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href.startsWith('./')) {
            link.setAttribute('href', basePath + href.substring(2));
          }
        });
        
        console.log('✅ Header loaded and links fixed');
      }
    }
    
    // Load shared sidebar
    const sidebarContainer = document.getElementById('shared-sidebar');
    if (sidebarContainer) {
      console.log('📝 Loading sidebar from:', sharedPath + 'sidebar.html');
      const sidebarHtml = await loadComponent(sharedPath + 'sidebar.html');
      if (sidebarHtml) {
        sidebarContainer.innerHTML = sidebarHtml;
        
        // Fix navigation links in sidebar based on current page location
        const navLinks = sidebarContainer.querySelectorAll('a[href]');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href.startsWith('./')) {
            link.setAttribute('href', basePath + href.substring(2));
          }
        });
        
        console.log('✅ Sidebar loaded and links fixed');
      }
    }
    
    // Import and initialize theme manager
    const { MaterialThemeManager, NavigationManager } = await import(sharedPath + 'theme-manager.js');
    
    // Initialize theme management
    const themeManager = new MaterialThemeManager();
    
    // Initialize navigation management (after components are loaded)
    const navManager = new NavigationManager();
    
    // Set up toggle button
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        themeManager.toggle();
      });
    }
    
    // Dispatch event to signal components are loaded
    document.dispatchEvent(new CustomEvent('componentsLoaded'));
    
    console.log('✅ Page initialization complete');
    
  } catch (error) {
    console.error('❌ Failed to initialize page:', error);
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePage);
} else {
  initializePage();
}
