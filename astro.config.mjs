import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio-hakim90.vercel.app",
  trailingSlash: "ignore",
  integrations: [react(), tailwind({ applyBaseStyles: false })],
});
