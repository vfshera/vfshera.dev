// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://vfshera.dev",

  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
  fonts: [
    {
      name: "Space Grotesk",
      cssVariable: "--ff-space-grotesk",
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ["normal"],
    },
  ],
});
