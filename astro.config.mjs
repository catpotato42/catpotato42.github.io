import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://catpotato42.github.io',
  redirects: {
    '/portfolio/3-N-Body-Sim': '/projects/n-body-sim',
    '/portfolio/6-Valorant-Overlay': '/projects/valorant-overlay',
    '/portfolio/7-Anderson-Snake': '/projects/anderson-snake',
    '/portfolio/8-Flower-Defense': '/projects/flower-defense',
  },
});
