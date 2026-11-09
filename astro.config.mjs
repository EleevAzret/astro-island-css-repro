import solid from "@astrojs/solid-js";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [solid()],
  // Only to make the duplicate easy to see: with "auto" the server copy is inlined into <style> instead
  build: { inlineStylesheets: "never" },
});
