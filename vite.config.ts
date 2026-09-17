import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import netlify from "@netlify/vite-plugin";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["offline.html", "images/logo.png", "images/bg.jpg"],
      manifest: {
        short_name: "Weather App",
        name: "Weather App PWA",
        icons: [
          {
            src: "/images/logo.png",
            type: "image/png",
            sizes: "1024x1024",
          },
          {
            src: "/images/logo.png",
            type: "image/png",
            sizes: "1024x1024",
            purpose: "maskable",
          },
        ],
        start_url: ".",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#FFFFFF",
      },
      workbox: {
        navigateFallback: "/offline.html",
        navigateFallbackDenylist: [/^\/api\//],
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,woff2}"],
      },
    }),
    netlify({
      edgeFunctions: { enabled: false },
    }),
  ],
});
