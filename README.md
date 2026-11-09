# Island CSS loaded twice

Two `client:load` Solid islands share `Card`, which imports `Card.css`. The islands are imported through the `~/` alias.

```sh
npm install
npm run build
npm run preview
```

Expected: `.shared-card` comes from one stylesheet.

Actual:

- `<head>` links `/_astro/index.*.css` (`.shared-card` + `.island-a`).
- When `IslandA` runs `import("./LazyPanel")`, Vite's preload helper adds `/_astro/Card.*.css` (`.shared-card` again), because `dist/_astro/IslandA.*.js` lists it in `__vite__mapDeps`.
- `dist/_astro/IslandA.*.css` is emitted although `.island-a` is already in `index.*.css`. If `src/pages/index.astro` imports the islands with `../islands/…`, this file goes away, but `Card.*.css` remains.
