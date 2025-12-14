// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://thaiwarcrimes.org',
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  integrations: [
    mdx({
      shikiConfig: {
        theme: 'github-dark',
      },
    }),
  ],
});
