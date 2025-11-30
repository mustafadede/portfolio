import en from "@/messages/en.json";
import tr from "@/messages/tr.json";

export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export const translations = {
  en,
  tr,
} as const;

export type TranslationKey = keyof typeof en;

