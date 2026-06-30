# Angelo Games Studio Website

This is a static website ready for GitHub Pages, Cloudflare Pages, Netlify, or any standard hosting.

## Files

- `index.html` — main landing page
- `privacy.html` — full privacy policy
- `styles.css` — all visual styling
- `script.js` — navigation, animations and contact form behavior
- `assets/screenshots/` — game screenshots

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Click **uploading an existing file**.
3. Upload all files and folders from this project, not the ZIP itself.
4. Click **Commit changes**.
5. Open **Settings → Pages**.
6. Select branch `main` and folder `/ (root)`.
7. Click **Save**.

## Contact form

The contact form is prepared for Formspree. Replace this line in `index.html`:

```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

with your real Formspree endpoint.
