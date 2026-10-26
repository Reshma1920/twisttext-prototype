# TwistText prototype

A clickable prototype of TwistText: add a letter, see what it says in plain words, and check the documents to send. English and Spanish.

This folder is a ready-to-host static website. No build step is needed to publish it.

| File | What it is |
|---|---|
| `index.html` | The page |
| `styles.css` | All the styling |
| `app.js` | The app, already built (React, bundled) |
| `favicon.svg` | Browser tab icon |
| `src/app.js` | Readable source for `app.js` |

## Publish on Vercel

1. Put this folder in a GitHub repo (on github.com: New repository, then "uploading an existing file" and drag these files in).
2. On vercel.com: Add New, Project, import that repo.
3. Framework preset: **Other**. Leave build command empty. Output directory: `./` (the root).
4. Deploy. Vercel gives you a public link.

## Rebuild after editing `src/app.js`

```
npm i react react-dom esbuild
npx esbuild src/app.js --bundle --minify --format=iife --define:process.env.NODE_ENV='"production"' --outfile=app.js
```
