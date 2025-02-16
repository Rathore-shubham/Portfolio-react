import { defineConfig } from 'vite';

export default defineConfig({
  root: './',  // Make sure the root is set correctly
  build: {
    rollupOptions: {
      input: './index.html',  // Ensure this points to the correct index.html
    },
  },
});
