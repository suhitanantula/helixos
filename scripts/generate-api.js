#!/usr/bin/env node

/**
 * generate-api.js
 * Auto-generates /public/api/*.json from MDX content + frontmatter.
 * Run as: node scripts/generate-api.js
 * 
 * This keeps the agent-readable API in sync with MDX source of truth.
 * Add to package.json scripts: "postbuild": "node scripts/generate-api.js"
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const API_DIR = path.join(__dirname, '..', 'public', 'api');

// Ensure API directory exists
if (!fs.existsSync(API_DIR)) {
  fs.mkdirSync(API_DIR, { recursive: true });
}

/**
 * Recursively find all .mdx files under a directory
 */
function findMdxFiles(dir, baseDir = dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMdxFiles(fullPath, baseDir));
    } else if (entry.name.endsWith('.mdx') && entry.name !== 'index.mdx') {
      results.push(fullPath);
    }
  }
  return results;
}

/**
 * Parse frontmatter from MDX file
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  
  const fm = {};
  for (const line of match[1].split('\n')) {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      const value = rest.join(':').trim();
      // Handle arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        fm[key.trim()] = value.slice(1, -1).split(',').map(s => s.trim().replace(/['"]/g, ''));
      } else {
        fm[key.trim()] = value.replace(/^['"]|['"]$/g, '');
      }
    }
  }
  return fm;
}

/**
 * Extract plain text content from MDX (strip JSX, imports, frontmatter)
 */
function extractPlainText(content) {
  return content
    .replace(/^---[\s\S]*?---/, '')           // Remove frontmatter
    .replace(/^import .+$/gm, '')              // Remove imports
    .replace(/<[^>]+>/g, '')                   // Remove JSX tags
    .replace(/\{[^}]+\}/g, '')                // Remove JSX expressions
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // Links → text
    .replace(/#{1,6}\s+/g, '')                // Remove headings
    .replace(/\*\*([^*]+)\*\*/g, '$1')        // Bold → text
    .replace(/\*([^*]+)\*/g, '$1')            // Italic → text
    .replace(/`([^`]+)`/g, '$1')              // Code → text
    .replace(/\n{3,}/g, '\n\n')               // Collapse whitespace
    .trim()
    .slice(0, 500);                           // Truncate for API size
}

/**
 * Build framework entry from MDX files
 */
function buildFrameworkEntry(frameworkDir, frameworkId) {
  const files = findMdxFiles(frameworkDir);
  const pages = [];
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const fm = parseFrontmatter(content);
    const plainText = extractPlainText(content);
    const slug = path.basename(file, '.mdx');
    
    pages.push({
      slug,
      title: fm.title || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      description: fm.description || plainText.slice(0, 200) + '...',
      tags: fm.tags || [],
      url: `/frameworks/${frameworkId}/${slug}`
    });
  }
  
  return { id: frameworkId, pages };
}

/**
 * Generate frameworks.json
 */
function generateFrameworksJson() {
  // Read existing frameworks.json for relationship data (preserved manually)
  const existingPath = path.join(API_DIR, 'frameworks.json');
  let existingData = {};
  if (fs.existsSync(existingPath)) {
    existingData = JSON.parse(fs.readFileSync(existingPath, 'utf-8'));
  }
  
  const frameworksDir = path.join(CONTENT_DIR, 'frameworks');
  const frameworkDirs = fs.readdirSync(frameworksDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && d.name !== 'index.mdx')
    .map(d => d.name);
  
  const frameworks = [];
  for (const fwId of frameworkDirs) {
    const fwDir = path.join(frameworksDir, fwId);
    const entry = buildFrameworkEntry(fwDir, fwId);
    
    // Merge with existing metadata (description, trademarked, question, related)
    const existing = (existingData.frameworks || []).find(f => f.id === fwId);
    if (existing) {
      frameworks.push({
        ...existing,
        pages: entry.pages,
        pageCount: entry.pages.length
      });
    } else {
      frameworks.push({
        id: fwId,
        name: fwId.toUpperCase(),
        url: `/frameworks/${fwId}`,
        pages: entry.pages,
        pageCount: entry.pages.length,
        tags: [],
        related: []
      });
    }
  }
  
  const output = {
    version: existingData.version || '1.0',
    lastUpdated: new Date().toISOString().split('T')[0],
    generatedAt: new Date().toISOString(),
    frameworks,
    unifiedLogic: existingData.unifiedLogic || null
  };
  
  fs.writeFileSync(
    path.join(API_DIR, 'frameworks.json'),
    JSON.stringify(output, null, 2)
  );
  
  console.log(`✅ frameworks.json: ${frameworks.length} frameworks, ${frameworks.reduce((sum, f) => sum + f.pageCount, 0)} pages`);
  return output;
}

/**
 * Generate per-framework JSON files
 */
function generatePerFrameworkJson(frameworksData) {
  for (const fw of frameworksData.frameworks) {
    const filename = `${fw.id}-pages.json`;
    fs.writeFileSync(
      path.join(API_DIR, filename),
      JSON.stringify({ framework: fw.id, pages: fw.pages, generatedAt: new Date().toISOString() }, null, 2)
    );
    console.log(`✅ ${filename}: ${fw.pages.length} pages`);
  }
}

/**
 * Generate glossary from reference content
 */
function generateGlossaryJson() {
  const glossaryPath = path.join(API_DIR, 'glossary.json');
  if (fs.existsSync(glossaryPath)) {
    const existing = JSON.parse(fs.readFileSync(glossaryPath, 'utf-8'));
    existing.lastUpdated = new Date().toISOString().split('T')[0];
    fs.writeFileSync(glossaryPath, JSON.stringify(existing, null, 2));
    console.log(`✅ glossary.json: preserved (${existing.terms?.length || 0} terms)`);
  }
}

// Run
console.log('🔄 Generating API JSON from MDX content...\n');
const data = generateFrameworksJson();
generatePerFrameworkJson(data);
generateGlossaryJson();
console.log('\n✨ Done. API files in public/api/');
