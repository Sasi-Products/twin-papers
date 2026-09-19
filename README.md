# Twin Paper Products Website

A responsive 5-page React + Vite + TypeScript + Tailwind CSS website using the customer-provided images and videos.

## Pages
- Home
- Products
- About
- Private Label
- Contact with Google Maps embed

## Run locally
```bash
npm install
npm run dev
```

## Build for hosting
```bash
npm run build
```
Upload the generated `dist/` folder to your hosting web root.

## Notes
- Contact details and GSTIN are taken from the provided Twin Paper Products artwork.
- Google Maps uses a query-based embed, so no API key is required for the current implementation.
- Product photos and videos are bundled in `src/assets/`.

## Plesk / Apache routing
A `public/.htaccess` file is included and will be copied into `dist/` so direct URLs such as `/products` and `/contact` continue to work after deployment.
# twin-papers
