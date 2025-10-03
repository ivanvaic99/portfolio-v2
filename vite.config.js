import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the portfolio. The `base` option is critical when
// deploying to GitHub Pages. It ensures that all assets and routes are
// resolved relative to the repository name. Without this, the site would
// look for assets at the root of the domain instead of `/portfolio-v2/`.
export default defineConfig({
  base: '/portfolio-v2/',
  plugins: [react()],
});