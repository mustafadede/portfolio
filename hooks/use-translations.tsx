"use client";

import { useParams } from "next/navigation";
import { translations, type Locale } from "@/lib/i18n";

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as Locale) || "tr";

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[locale];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t, locale };
}

