export default defineNuxtConfig({
  extends: ["@nuxtjs/plausible"],
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "system",
    fallback: "dark",
  },
  app: {
    head: {
      title: "NUCH - Nuxt Content Helper CLI",
      htmlAttrs: {
        dir: "ltr",
        lang: "en_US",
      },
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
        },
        {
          name: "mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "default",
        },
        {
          name: "apple-mobile-web-app-title",
          content: "Rivethorn's HQ",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          href: "/logo.png",
        },
      ],
    },
  },
});
