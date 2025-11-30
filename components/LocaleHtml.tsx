"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";

export default function LocaleHtml() {
  const params = useParams();
  const locale = (params?.locale as string) || defaultLocale;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return null;
}

