# Image Integration Guide

## Overview
This guide explains how to integrate the attached images into the NextGen AI Forum website.

## Required Images

### 1. Conference Banner Logo (`public/images/banner-logo.png`)
- **Location**: Save the first attached image (NextGen AI Forum conference logo) to `public/images/banner-logo.png`
- **Used in**: `components/hero-banner.tsx`
- **Recommended size**: 1200x400px minimum
- **Format**: PNG or SVG preferred for transparency

### 2. Agentic Network Diagram (`public/images/agentic-network-diagram.png`)
- **Location**: Save the second attached image (network architecture diagram) to `public/images/agentic-network-diagram.png`
- **Used in**: `components/sections/agentic-network-diagram.tsx`
- **Recommended size**: 1200x800px minimum
- **Format**: PNG or WEBP

### 3. Additional Images Directory Structure
```
public/
  ├── images/
  │   ├── banner-logo.png          # Main conference banner
  │   ├── agentic-network-diagram.png  # Architecture diagram
  │   ├── conference-venue.jpg     # Venue photos (optional)
  │   └── speakers/                # Speaker photos (optional)
```

## Integration Steps

### Step 1: Create Images Directory
```bash
# Create the images directory if it doesn't exist
mkdir public/images
```

### Step 2: Add Your Images
1. Save the attached conference banner logo as `public/images/banner-logo.png`
2. Save the agentic network diagram as `public/images/agentic-network-diagram.png`
3. Optimize images for web (compress without losing quality)

### Step 3: Uncomment Image Components

#### In `components/hero-banner.tsx`:
Replace the placeholder logo section (around line 27) with:
```tsx
<Image
  src="/images/banner-logo.png"
  alt="NextGen AI Forum Logo"
  width={600}
  height={200}
  className="w-full h-auto"
  priority
/>
```

#### In `components/sections/agentic-network-diagram.tsx`:
Uncomment the Image component (around line 41):
```tsx
<Image
  src="/images/agentic-network-diagram.png"
  alt="Agentic Network Architecture Diagram"
  width={1200}
  height={800}
  className="w-full h-full object-contain"
/>
```

### Step 4: Image Optimization
For optimal performance, consider:
- Using WebP format for better compression
- Adding multiple sizes for responsive images
- Using Next.js Image optimization features

## Notes
- All images in the `public` directory are served from the root URL
- Next.js automatically optimizes images using the `<Image>` component
- Ensure images are properly licensed for use
- Test images on different screen sizes (mobile, tablet, desktop)

## Troubleshooting
- If images don't appear, check the file paths match exactly
- Ensure images are in the correct format (PNG, JPG, WEBP, SVG)
- Check browser console for loading errors
- Verify file permissions allow reading
