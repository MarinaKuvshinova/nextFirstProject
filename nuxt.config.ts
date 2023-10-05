// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     title: "hello",
  //     meta: [
  //       {
  //         name: "description",
  //         content: "hello word",
  //       },
  //     ],
  //   },
  // },
  alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", "@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      // ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
