# Video to ASCII Converter

A client-side web app that converts any video file into an **ASCII art animation** — rendered entirely in your browser with a retro terminal aesthetic. Drop in a video, tune the resolution and frame rate, and watch it play back as text.

## What it does

- Loads a local video file (drag-and-drop or file picker).
- Decodes frames to an offscreen canvas and maps pixel brightness to ASCII characters, frame by frame, with a progress bar.
- Plays back the result as a terminal-style ASCII animation inside a retro window frame.
- Lets you adjust output **width** (columns) and **fps** before processing.
- Supports exporting/copying the generated ASCII output.

## Features

- Fully client-side — your video never leaves the browser; no uploads, no server
- Retro terminal UI: terminal header, terminal frame chrome, monospace styling
- Adjustable ASCII width and playback frame rate via sliders
- Processing progress indicator for long videos
- Responsive layout for desktop and mobile

## Tech stack

- **Framework:** Next.js 14.2 (App Router), React, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui (button, card, slider)
- **Conversion engine:** HTMLCanvas 2D API for frame sampling + brightness-to-ASCII mapping
- **Observability:** `@vercel/analytics`

## Quick start

Requirements: Node.js 18+.

```bash
npm install          # or: pnpm install
npm run dev          # open http://localhost:3000
```

Production build (static export):

```bash
npm run build        # outputs to out/
npx serve out        # or deploy the out/ directory to any static host
```

## Project structure

```
app/
  page.tsx            # main page: file picker + drop zone + playback UI (client)
  layout.tsx          # root layout, fonts, theme provider
  globals.css         # Tailwind + custom terminal styling
components/
  video-to-ascii-converter.tsx   # frame decoding, ASCII mapping, playback
  terminal-header.tsx            # retro top bar
  terminal-frame.tsx             # terminal window chrome
  ui/                            # shadcn/ui primitives (button, card, slider)
lib/utils.ts          # class-name helpers
public/               # static assets
```

## Deployment

The app is fully static — no API routes, no server actions, no environment variables. `next.config.mjs` sets `output: 'export'`, so `npm run build` produces a deployable `out/` directory that works on GitHub Pages, Vercel, Netlify, or any static host.

**Note:** `basePath: '/video-to-ascii'` is set in `next.config.mjs` because this copy is deployed to GitHub Pages under the repo subpath. If you deploy to a root domain (e.g. Vercel), remove the `basePath` line.

## License

Free to use and adapt.

---
Built by Girish Lade · https://ladestack.in
