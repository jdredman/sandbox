#!/bin/bash

# Build Script for Material Web Design System
# Prepares the project for production deployment

echo "🚀 Building Material Web Design System for production..."

# Step 1: Version CSS files for cache busting
echo "📝 Versioning CSS files..."
npm run version-css

if [ $? -eq 0 ]; then
    echo "✅ CSS versioning complete"
else
    echo "❌ CSS versioning failed"
    exit 1
fi

# Step 2: Create deployment info
echo "📊 Creating deployment info..."
cat > deployment-info.json << EOF
{
  "buildTime": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "cssVersion": "$(node -e "const fs=require('fs'); const content=fs.readFileSync('shared/layout.css','utf8'); const crypto=require('crypto'); console.log(crypto.createHash('md5').update(content).digest('hex').substring(0,8));")",
  "deploymentReady": true
}
EOF

echo "✅ Deployment info created"

# Step 3: Display summary
echo ""
echo "🎉 Build complete! Your Material Web Design System is ready for deployment."
echo ""
echo "📋 Deployment Summary:"
echo "  - CSS files versioned with cache-busting parameters"
echo "  - All HTML files updated with versioned CSS references"
echo "  - Build time: $(date)"
echo ""
echo "📁 Files ready for upload:"
echo "  - All .html files"
echo "  - shared/layout.css"
echo "  - shared/ directory (components and scripts)"
echo "  - components/ directory"
echo "  - foundations/ directory"
echo ""
echo "🚀 Deploy these files to your web server!"
