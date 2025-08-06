#!/usr/bin/env node

/**
 * CSS Versioning Script for Material Web Design System
 * Automatically adds cache-busting parameters to CSS files
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class CSSVersionManager {
  constructor() {
    this.cssFiles = [
      'shared/layout.css'
    ];
    this.htmlFiles = [];
    this.version = this.generateVersion();
  }

  generateVersion() {
    // Generate version based on current timestamp
    return Date.now().toString();
  }

  generateHashVersion(filePath) {
    // Generate version based on file content hash
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return crypto.createHash('md5').update(content).digest('hex').substring(0, 8);
    } catch (error) {
      console.warn(`Could not generate hash for ${filePath}, using timestamp`);
      return this.version;
    }
  }

  findAllHtmlFiles() {
    const findHtmlFiles = (dir) => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.')) {
          findHtmlFiles(filePath);
        } else if (file.endsWith('.html')) {
          this.htmlFiles.push(filePath);
        }
      });
    };

    findHtmlFiles('.');
    return this.htmlFiles;
  }

  updateHtmlFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let updated = false;

      // Update CSS links with version parameters
      this.cssFiles.forEach(cssFile => {
        const cssHash = this.generateHashVersion(cssFile);
        
        // Handle relative paths for different directory levels
        const relativeCssPath = this.getRelativeCssPath(filePath, cssFile);
        
        // Remove existing version parameters
        const oldPattern = new RegExp(`(href=["'])([^"']*${path.basename(cssFile)})[^"']*["']`, 'g');
        
        // Replace with versioned CSS
        content = content.replace(oldPattern, `$1${relativeCssPath}?v=${cssHash}"`);
        
        if (content.includes(`${relativeCssPath}?v=${cssHash}`)) {
          updated = true;
        }
      });

      if (updated) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Updated: ${filePath}`);
      } else {
        console.log(`ℹ️  No changes: ${filePath}`);
      }

    } catch (error) {
      console.error(`❌ Error updating ${filePath}:`, error.message);
    }
  }

  getRelativeCssPath(htmlFilePath, cssFilePath) {
    const htmlDir = path.dirname(htmlFilePath);
    const cssAbsolutePath = path.resolve(cssFilePath);
    const htmlAbsolutePath = path.resolve(htmlDir);
    
    const relativePath = path.relative(htmlAbsolutePath, cssAbsolutePath);
    
    // Normalize path separators for web
    return relativePath.replace(/\\/g, '/');
  }

  updateAllFiles() {
    console.log('🚀 Starting CSS versioning process...\n');
    
    // Find all HTML files
    this.findAllHtmlFiles();
    console.log(`Found ${this.htmlFiles.length} HTML files to update\n`);

    // Update each HTML file
    this.htmlFiles.forEach(htmlFile => {
      this.updateHtmlFile(htmlFile);
    });

    console.log('\n🎉 CSS versioning complete!');
    console.log(`Version timestamp: ${this.version}`);
    
    // Display CSS file hashes
    console.log('\nCSS File Versions:');
    this.cssFiles.forEach(cssFile => {
      const hash = this.generateHashVersion(cssFile);
      console.log(`  ${cssFile}: ${hash}`);
    });
  }

  // Method to add additional CSS files to be versioned
  addCssFile(filePath) {
    if (!this.cssFiles.includes(filePath)) {
      this.cssFiles.push(filePath);
    }
  }
}

// Command line usage
if (require.main === module) {
  const versionManager = new CSSVersionManager();
  
  // Add any additional CSS files if specified via command line
  const additionalFiles = process.argv.slice(2);
  additionalFiles.forEach(file => {
    versionManager.addCssFile(file);
  });
  
  versionManager.updateAllFiles();
}

module.exports = CSSVersionManager;
