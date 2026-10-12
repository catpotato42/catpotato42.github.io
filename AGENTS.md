## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project conventions

Minimal prose edits. The prose in `src/content/projects/*/index.md` and
`src/pages/about.astro` is Simon's own wording. Do not rephrase, tighten,
reorder, or fix grammar in it without being asked for that specific change.

### Content

Projects are a content collection defined in `src/content.config.ts`. One
directory per project under `src/content/projects/<slug>/`, with `index.md`
holding the frontmatter and body. The directory name is the slug and the URL.

`cover` and `coverAlt` are optional in the schema so a project can exist before
its screenshots do, but a `refine` requires both on any entry that is not
`draft: true`. `order` controls position on the home page. `status` is rendered
after the date range whenever it is not `shipped`.

### Media

Images that Astro should optimize live beside `index.md` in the project
directory and are referenced as relative paths (`cover`, `shots[].src`).

Video lives in `public/media/<slug>/` and is referenced by base filename
through the `clips` array. Each clip needs three files: `<name>.webm`,
`<name>.mp4`, and `<name>-poster.png`. Source GIFs are converted with ffmpeg,
not committed.

### Design

Everforest dark medium only.
Tokens are defined in `src/styles/global.css`; do not add accents outside them.
Monospace throughout, measure capped at 72ch, line-height 1.6.
