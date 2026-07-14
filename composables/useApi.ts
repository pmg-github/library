import { useNuxtApp } from "nuxt/app";

export function useApi() {
  return useNuxtApp().$api;
}
