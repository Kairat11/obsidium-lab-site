# Obsidium Lab website

Website for Obsidium Lab, a 3D printing service in Astana. Russian and Kazakh, with a language switch.

It's a plain static site with no build step:

- `index.html`: the page
- `assets/styles.css`: colors, fonts and layout (colors are at the top)
- `assets/main.js`: Kazakh texts, the price calculator, the order form
- `assets/favicon.svg`: tab icon

## Before launch

1. Open `assets/main.js` and fill in `CONTACTS` at the top. `whatsapp` is digits only with the country code, for example `77011234567`. Until it's set, the order form tells customers to write on Telegram.
2. Replace the example prices in `index.html` and `assets/main.js` (search for `₸`).
3. Add real product photos.

## Preview

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and go to http://localhost:8000.

## How orders work

The order form opens WhatsApp with a ready-made message: the service, the customer's name, phone and description. The customer attaches the model file or photos in that chat. There is no server or database.
