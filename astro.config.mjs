// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import astroExpressiveCode from "astro-expressive-code";
import { defineConfig } from 'astro/config';
import config from "./src/config/site.config.json";

// https://astro.build/config
export default defineConfig({
  site: config.baseUrl ? config.baseUrl : "https://jaycampbell.dev",
  base: config.basePath ? config.basePath : "/members/jaycampbell/",
  trailingSlash: "always",

  markdown: {
    remarkPlugins: [],
  },
  integrations: [
    astroExpressiveCode({
      themes: ["andromeeda"],
    }),
    mdx(),
    sitemap(),
    react()
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});