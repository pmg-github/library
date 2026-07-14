import { useNuxtApp } from "nuxt/app";

type ApiClient = (url: string, options?: Record<string, unknown>) => Promise<any>;

export function useApi() {
  return useNuxtApp().$api as ApiClient;
}
