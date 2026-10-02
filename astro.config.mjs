// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
// Cloudflare Pages expone CF_PAGES_URL durante el build, así que el dominio
// real se detecta solo. Fallback local: npm run build fuera de CF.
export default defineConfig({
  site: process.env.CF_PAGES_URL || "https://gana4.pages.dev",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
