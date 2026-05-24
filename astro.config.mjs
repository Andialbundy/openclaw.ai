import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://openclaw.ai',
  output: 'static',
  integrations: [react()],
  build: {
    assets: 'assets'
  }
});
