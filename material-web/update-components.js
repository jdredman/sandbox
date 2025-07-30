#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of component files to update
const componentFiles = [
  'card.html',
  'checkbox.html', 
  'dialog.html',
  'fab.html',
  'icon-button.html',
  'list.html',
  'menu.html',
  'navigation.html',
  'radio.html',
  'slider.html',
  'switch.html',
  'tabs.html',
  'text-field.html'
];

// Foundation files to update
const foundationFiles = [
  'color.html',
  'typography.html',
  'spacing.html',
  'elevation.html',
  'motion.html'
];

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add shared layout CSS after Material Web script
    if (!content.includes('shared/layout.css')) {
      content = content.replace(
        /console\.log\('✅ Material Web components and typography loaded'\);\s*<\/script>/,
        `console.log('✅ Material Web components and typography loaded');
  </script>
  
  <!-- Shared Design System Styles -->
  <link rel="stylesheet" href="../shared/layout.css">`
      );
    }
    
    // Replace body content with shared components
    const bodyMatch = content.match(/<body>(.*?)<main class="main-content">/s);
    if (bodyMatch && !content.includes('shared-header')) {
      content = content.replace(
        /<body>.*?<main class="main-content">/s,
        `<body>
  <!-- Shared Header Container -->
  <div id="shared-header"></div>

  <div class="layout-container">
    <!-- Shared Sidebar Container -->
    <div id="shared-sidebar"></div>
    
    <!-- Main Content -->
    <main class="main-content">`
      );
    }
    
    // Add shared component initialization before closing body
    if (!content.includes('page-init.js')) {
      content = content.replace(
        /<\/body>/,
        `
  <!-- Shared Component Initialization -->
  <script type="module" src="../shared/page-init.js"></script>
</body>`
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated: ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Failed to update ${filePath}:`, error.message);
  }
}

// Update component files
console.log('🚀 Updating component pages...');
componentFiles.forEach(file => {
  const filePath = path.join(__dirname, 'components', file);
  if (fs.existsSync(filePath)) {
    updateFile(filePath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

// Update foundation files
console.log('🚀 Updating foundation pages...');
foundationFiles.forEach(file => {
  const filePath = path.join(__dirname, 'foundations', file);
  if (fs.existsSync(filePath)) {
    updateFile(filePath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log('✅ Batch update complete!');
