# Spacenet Network — UAV components catalog

Static site for drone parts and microjet engines.

## Contacts
- Telegram: [@g64group](https://t.me/g64group)
- WhatsApp: [+91 80732 93264](https://wa.me/918073293264)

## Deploy on Vercel under `/drones`

This repo is a static site. To serve it at `https://hardagent.one/drones`:

1. Push this repository to `https://github.com/ShieldCubed/drones`.
2. In Vercel, either:
   - Import this repo as its own project and attach it to the `hardagent.one` domain with a rewrite from `/drones` → `/`, **or**
   - Keep it as a standalone project and set the production domain path.

`vercel.json` rewrites `/drones/:path*` to `/:path*` so links work when the site is mounted at that subpath. All page links are relative (`index.html`, `catalog.html`), so they also work at the domain root.

PHP (`send-quote.php`) will not run on Vercel. Use the quote form as a client-side / mailto path, or point the form action at your own backend.
