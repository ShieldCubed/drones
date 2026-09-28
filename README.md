# Spacenet Network — UAV components catalog

Static site for drone parts and microjet engines.

## Contacts
- Telegram: [@g64group](https://t.me/g64group)
- WhatsApp: [+91 80732 93264](https://wa.me/918073293264)

## Deploy on Vercel under `/drones`

This repo is a static site. To serve it at `https://hardagent.one/drones`:

1. Clone this repo and add the `img/` folder from the site zip (product photos).
2. In Vercel, import `ShieldCubed/drones` and attach `hardagent.one` with a rewrite from `/drones` to `/`.

`vercel.json` rewrites `/drones/:path*` to `/:path*` so the site works on that subpath. Page links are relative.

PHP (`send-quote.php`) does not run on Vercel.
