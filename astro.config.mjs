// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Change `site` to your own address so the sitemap and social previews use it.
export default defineConfig({
  site: "https://example.com",
  output: "static",
  integrations: [sitemap()],
});
