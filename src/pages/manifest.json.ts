import type { APIRoute } from "astro";
import { site } from "~/constants/config";

export const GET: APIRoute = (async () => {
  return new Response(
    JSON.stringify({
      $schema: "https://json.schemastore.org/web-manifest-combined.json",
      name: site.meta.title,
      short_name: site.shortName,
      start_url: ".",
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      display: "standalone",
      background_color: "#fff",
      description: site.meta.description,
    }),
  );
}) satisfies APIRoute;
