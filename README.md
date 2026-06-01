# 🧭 Poppie's Atlas — A Kids' Travel Journal

A single, standalone `index.html` travel app for kids. **No build step, no server** — just
open the file in any modern browser (or double-click it).

Designed in an **"editorial explorer"** style (think a beautiful kids' travel magazine):
a warm paper palette, Fraunces serif headlines paired with Inter, full-bleed photography
with caption overlays, atlas/map motifs, a bottom tab-bar on mobile, animated flight-path
arcs, subtle reveal-on-scroll motion (respecting `prefers-reduced-motion`), and
"Add to Home Screen" PWA polish.

Built using the destinations from the **"Travel – International"** project: home base **Dublin (DUB)**,
the upcoming **Maldives / Kandima** family trip, and past adventures (Lapland, Madagascar, Antarctica).

## What it does

- **🧭 Explore** — pick a destination card, then dive into five sections:
  - ✈️ **Getting There** — flight time, route from Dublin, distance, time zone, best season
  - 🌍 **Country Info** — capital, language, money, plus kid-friendly fun facts
  - 📸 **Photos** — a photo gallery for each place
  - 🏛️ **Main Attractions** — the must-see highlights
  - 🧒 **Cool for Kids** — the best spots for children, each with its **Google Maps star rating,
    review count and a live "Open in Google Maps" link**
- **🗺️ My Map** — an interactive world map (Leaflet) that draws curved **flight paths** from Dublin
  to every city you've visited, with passport-style markers. Shows live stats:
  countries visited, trips taken, km flown and trips coming up.
- **📔 My Trips** — record your own trips (or edit the pre-loaded historic ones), give each a
  star rating and a memory note. Everything is saved in your browser via `localStorage`,
  and instantly appears on the map.

## Destinations included

Maldives (**Kandima resort**), **Rabat (Morocco)**, Rovaniemi / Lapland, Madagascar, Antarctica,
Athens, Rhodes, Tenerife, Porto and Istanbul.

## Tech notes

- One file, vanilla HTML/CSS/JS. Internet is used only for map tiles, photos and Google Fonts;
  if a photo can't load it gracefully falls back to a colourful emoji tile.
- Map: [Leaflet](https://leafletjs.com/) + CARTO Voyager tiles.
- Photos: keyword images via LoremFlickr.
- Google Maps links use the public Maps search URL, so they always resolve.

## Adding more places

Open `index.html` and add an object to the `DESTS` array (copy an existing one as a template).
Each entry holds its flight info, country facts, photo keywords, attractions and kid spots.
