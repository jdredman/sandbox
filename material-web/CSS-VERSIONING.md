# CSS Versioning System

This project includes an automated CSS versioning system to prevent cache issues in production deployments.

## How It Works

The versioning system automatically adds cache-busting parameters to CSS file references in all HTML files. Each CSS file gets a unique hash based on its content, ensuring that browsers always load the latest version when files change.

### Example:
```html
<!-- Before versioning -->
<link rel="stylesheet" href="shared/layout.css">

<!-- After versioning -->
<link rel="stylesheet" href="shared/layout.css?v=fd75db71">
```

## Usage

### Automatic Versioning
Run the versioning script before deploying to production:

```bash
npm run version-css
```

or

```bash
node version-css.js
```

### Development Workflow
```bash
# Start development server
npm run serve

# Before deploying to production
npm run build
```

### Manual Versioning
You can also add additional CSS files to be versioned:

```bash
node version-css.js path/to/additional.css
```

## How the System Works

1. **Content Hashing**: Each CSS file gets a unique 8-character hash based on its content
2. **Path Resolution**: The script automatically handles relative paths for different directory structures
3. **Bulk Updates**: All HTML files in the project are updated in a single run
4. **Cache Busting**: Browsers will automatically download new CSS when content changes

## Files Managed

- `shared/layout.css` - Main design system stylesheet (automatically versioned)
- All HTML files - Updated with versioned CSS references

## Production Deployment

Always run `npm run version-css` before deploying to ensure:
- ✅ No cached CSS issues
- ✅ Latest styles are loaded
- ✅ Consistent versioning across all pages

## Technical Details

- Hash generation: MD5 hash of file content (first 8 characters)
- Fallback: Timestamp-based versioning if file reading fails
- Path handling: Automatic relative path calculation for subdirectories
- Update detection: Only modifies files that contain CSS references
