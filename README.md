# Brew & Bean Coffee Website

A responsive coffee shop landing page built from the supplied design reference.

## Files
- `index.html` — all website sections/HTML
- `style.css` — custom styling and responsive layout
- `script.js` — mobile navigation, FAQ, slider, video modal, forms, scroll effects
- `images/` — coffee/menu/map assets
- `video/hero-video.mp4` — uploaded Hero video

## Tailwind
Tailwind CSS is connected through the CDN in `index.html`.

## Run
Open `index.html` in a browser. For best results, use VS Code + Live Server so the local video plays reliably.

## Main sections
1. Hero
2. Features
3. Menu
4. Pricing
5. Testimonials
6. FAQ
7. Contact
8. Footer

## Local fonts
Fonts are bundled inside `fonts/` so the site does not depend on Google Fonts CDN. The bundled fonts are Noto Sans and DejaVu Serif as local offline-compatible substitutes for the original DM Sans / Playfair Display styling.


## Local icons
All interface and social icons are stored as individual SVG files inside `icons/`. Font Awesome CDN is not required.


## Tailwind + Responsive CSS
- Tailwind CSS Play CDN is connected in `index.html`.
- Tailwind utility classes are used for base layout helpers such as `flex`, `grid`, `items-center`, `justify-between`, `mx-auto`, `w-full`, and `overflow-x-hidden`.
- `style.css` contains the custom coffee-shop styling and the responsive `@media` queries for 900px, 700px, and 420px breakpoints.
- Local fonts, local SVG icons, local images, and the Hero video remain bundled in the project.
