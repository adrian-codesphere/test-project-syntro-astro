import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  site: "https://yoursite.com",
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-sans",
        weights: [400, 500],
      }
    ],
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: ['1544164-3000.dev.5.codesphere.com']
  }
});
