// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  //  base: "/E-Commerce-website-", // Adjust base URL as needed
  //  base: '/',
  build: {
    // outDir: 'build', // Specify the output directory
    // outDir: 'dist'
    outDir: 'dist', 
  },
});
