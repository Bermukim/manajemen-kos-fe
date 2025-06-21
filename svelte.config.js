import adapter from '@sveltejs/adapter-auto';
import path from 'path';

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $lib: path.resolve('./src/lib'),
      $components: path.resolve('./src/lib/components'),
      $css: path.resolve('./src/app.css')
    }
  },
};

export default config;
