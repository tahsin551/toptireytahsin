# TopTire site — file guide

Same look and behavior as before, just split into separate pages so it's
easier to edit and publish. Open `index.html` in a browser (or upload the
whole folder to any static host) — everything works with no build step.

## Pages
- `index.html` — Home
- `shop.html` — All products
- `product.html` — Product detail (reads `?id=` from the URL, e.g. `product.html?id=tt-tee-blk`)
- `cart.html` — Cart
- `checkout.html` — Checkout
- `order-confirmation.html` — Order confirmation
- `about.html` — About
- `contact.html` — Contact

## Where things live
- `css/styles.css` — all styling (unchanged design/colors/fonts)
- `js/products.js` — **edit this to add/remove products, change prices, or set images**
- `js/cart.js` — cart logic (uses the browser's localStorage so the cart follows you across pages)
- `js/common.js` — shared header/nav behavior + product card markup
- `images/` — put your product photos here

## Changing product images
1. Add your image file to the `images/` folder, e.g. `images/tt-tee-blk.jpg`.
2. Open `js/products.js`, find that product, and change:
   `image: null` → `image: 'images/tt-tee-blk.jpg'`
3. Save and refresh. If `image` is left as `null`, the original color-swatch
   design is used automatically — nothing breaks if you don't add a photo yet.

## Adding a new product
Copy one line in `js/products.js`, give it a unique `id`, and it will
automatically show up on the Home (if in the first 4) and Shop pages, and
get its own product page at `product.html?id=your-new-id`.

## Publishing
This is a static site — no server-side code, no build step. Upload the
whole `toptire-site` folder (keeping the folder structure) to any static
host (Netlify, Vercel, GitHub Pages, cPanel, etc.) and it will work as-is.
