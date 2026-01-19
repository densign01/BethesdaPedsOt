# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Abby Ensign's pediatric occupational therapy practice in Bethesda, MD. Hosted on GitHub Pages at abbyensign.com (DNS via Cloudflare).

## Technology Stack

- Pure HTML/CSS/JavaScript (no build system or framework)
- GitHub Pages hosting with custom domain
- Font Awesome for icons (CDN)

## File Structure

- `index.html` - Main landing page with About, Services, Areas Served, and Contact sections
- `theraputty.html` - Resource page with therapeutic putty activities guide
- `styles.css` - All styling including responsive mobile design with hamburger menu
- `script.js` - Hamburger menu toggle functionality
- `CNAME` - Custom domain configuration for GitHub Pages

## Development

No build step required. Edit files directly and preview in browser.

**Local preview:** Open `index.html` in a browser or use any static file server.

**Deploy:** Push to `main` branch - GitHub Pages automatically deploys.

## Key Patterns

**Navigation:** Fixed top nav bar with hamburger menu on mobile (<600px). Links use anchor scrolling on index.html, full paths from other pages.

**Styling conventions:**
- Primary color: `#3498db` (blue)
- Header background: `#2c3e50` (dark blue-gray)
- Container max-width: 800px
- Mobile breakpoint: 600px
