// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://vfshera.dev",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({
    imageService: { build: "compile", runtime: "cloudflare-binding" },
    prerenderEnvironment: "node",
  }),

  fonts: [
    {
      name: "Space Grotesk",
      cssVariable: "--ff-space-grotesk",
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ["normal"],
    },
  ],

  integrations: [mdx()],
});
