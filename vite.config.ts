import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// import { VitePWA } from "vite-plugin-pwa"; // Временно отключено

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Временно отключено для быстрой проверки изменений
    // VitePWA({
    //   registerType: "autoUpdate",
    //   includeAssets: ["favicon.ico", "robots.txt"],
    //   manifest: {
    //     name: "ArtTime - Транспортно-логистическая компания",
    //     short_name: "ArtTime",
    //     description: "Транспортно-логистическая компания полного цикла с собственным автопарком рефрижераторов",
    //     theme_color: "#1a1a1a",
    //     background_color: "#1a1a1a",
    //     display: "standalone",
    //     orientation: "portrait",
    //     start_url: "/",
    //     scope: "/",
    //     icons: [
    //       {
    //         src: "/pwa-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //         purpose: "any maskable",
    //       },
    //       {
    //         src: "/pwa-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "any maskable",
    //       },
    //     ],
    //   },
    //   workbox: {
    //     globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2}"],
    //     runtimeCaching: [
    //       {
    //         urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
    //         handler: "CacheFirst",
    //         options: {
    //           cacheName: "google-fonts-cache",
    //           expiration: {
    //             maxEntries: 10,
    //             maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
    //           },
    //           cacheableResponse: {
    //             statuses: [0, 200],
    //           },
    //         },
    //       },
    //       {
    //         urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
    //         handler: "CacheFirst",
    //         options: {
    //           cacheName: "gstatic-fonts-cache",
    //           expiration: {
    //             maxEntries: 10,
    //             maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
    //           },
    //           cacheableResponse: {
    //             statuses: [0, 200],
    //           },
    //         },
    //       },
    //     ],
    //   },
    // }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
