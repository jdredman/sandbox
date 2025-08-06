/**
 * Page Initialization Script
 * Loads shared components and initializes theme/navigation managers
 */

async function loadComponent(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Failed to load component from ${url}:`, error);
    return null;
  }
}

async function initializePage() {
  try {
    console.log('🚀 Starting page initialization...');
    console.log('Current pathname:', window.location.pathname);
    
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
    
    console.log('Calculated paths - shared:', sharedPath, 'base:', basePath);
    
    // Load shared header
    const headerContainer = document.getElementById('shared-header');
    console.log('Header container found:', !!headerContainer);
    if (headerContainer) {
      console.log('📝 Loading header from:', sharedPath + 'header.html');
      const headerHtml = await loadComponent(sharedPath + 'header.html');
      console.log('Header HTML loaded:', !!headerHtml);
      if (headerHtml) {
        headerContainer.innerHTML = headerHtml;
        console.log('Header HTML inserted, length:', headerHtml.length);
        
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
    console.log('Sidebar container found:', !!sidebarContainer);
    if (sidebarContainer) {
      console.log('📝 Loading sidebar from:', sharedPath + 'sidebar.html');
      const sidebarHtml = await loadComponent(sharedPath + 'sidebar.html');
      console.log('Sidebar HTML loaded:', !!sidebarHtml);
      if (sidebarHtml) {
        sidebarContainer.innerHTML = sidebarHtml;
        console.log('Sidebar HTML inserted');
        
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
    
    // Wait for DOM content to be fully processed
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Check if critical elements exist after loading
    const themeToggle = document.getElementById('theme-toggle');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    
    console.log('Post-load element check:');
    console.log('- Theme toggle found:', !!themeToggle);
    console.log('- Menu toggle found:', !!menuToggle);
    
    if (themeToggle) {
      console.log('Theme toggle details:', {
        tagName: themeToggle.tagName,
        id: themeToggle.id,
        textContent: themeToggle.textContent
      });
    }
    
    if (menuToggle) {
      console.log('Menu toggle details:', {
        tagName: menuToggle.tagName,
        id: menuToggle.id,
        innerHTML: menuToggle.innerHTML
      });
    }
    
    // Only initialize managers if elements exist
    if (themeToggle || menuToggle) {
      console.log('📦 Importing theme manager...');
      try {
        const { MaterialThemeManager, NavigationManager } = await import('./theme-manager.js');
        console.log('✅ Theme manager imported successfully');
        
        if (themeToggle) {
          console.log('🎨 Initializing MaterialThemeManager...');
          const themeManager = new MaterialThemeManager();
          window.ramseyTheme = themeManager;
          console.log('✅ Theme manager initialized');
        }
        
        if (menuToggle) {
          console.log('📱 Initializing NavigationManager...');
          const navigationManager = new NavigationManager();
          window.ramseyNav = navigationManager;
          console.log('✅ Navigation manager initialized');
        }
        
      } catch (importError) {
        console.error('❌ Failed to import or initialize managers:', importError);
      }
    } else {
      console.warn('⚠️ No critical elements found - skipping manager initialization');
    }
    
    console.log('🎉 Page initialization complete!');
    
  } catch (error) {
    console.error('❌ Error during page initialization:', error);
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePage);
} else {
  initializePage();
}
