"use client";

import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { Button } from "./ui/button";
import { useTranslations } from "@/hooks/use-translations";
import { locales, type Locale } from "@/lib/i18n";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const { t, locale } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    const currentPath = pathname.replace(`/${locale}`, "");
    const newPath = `/${newLocale}${currentPath}`;

    // Set cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    router.push(newPath);
  };

  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.7 }}
      className="flex justify-center items-center gap-6 z-50 fixed top-6 w-full"
    >
      <div className="w-fit border items-center backdrop-blur-xl bg-transparent border-accent/20 h-12 rounded-4xl flex gap-6 px-6">
        <Link
          href={getLocalizedPath("/projects")}
          replace={true}
          className={clsx(
            "hover:bg-white/20 transition-colors duration-150  rounded-2xl px-3 py-1 h-fit flex items-center cursor-pointer hover:text-white text-white",
            pathname?.includes("/projects") ? "bg-white/20" : ""
          )}
        >
          {t("nav.projects")}
        </Link>
        <Link
          href={getLocalizedPath("/")}
          replace={true}
          className={clsx(
            "hover:bg-white/20 transition-colors duration-150  rounded-2xl px-3 py-1 h-fit flex items-center cursor-pointer hover:text-white text-white",
            pathname === `/${locale}` || pathname === `/${locale}/`
              ? "bg-white/20"
              : ""
          )}
        >
          {t("nav.home")}
        </Link>
        <Link
          href={getLocalizedPath("/about")}
          replace={true}
          className={clsx(
            "hover:bg-white/20 transition-colors duration-150  rounded-2xl px-3 py-1 h-fit flex items-center cursor-pointer hover:text-white text-white",
            pathname?.includes("/about") ? "bg-white/20" : ""
          )}
        >
          {t("nav.about")}
        </Link>
      </div>
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        exit={{ filter: "blur(10px)", opacity: 0 }}
        transition={{ delay: 2.4, duration: 0.4 }}
        className="w-fit hidden md:flex absolute right-10 border items-center backdrop-blur-xl bg-transparent border-accent/20 h-fit rounded-4xl"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="relative">
          {/* Current language - always visible, clickable to toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-white/20 transition-colors duration-150 rounded-2xl px-3 py-1 h-fit flex items-center cursor-pointer hover:text-white text-white"
          >
            {locale.toUpperCase()}
          </button>

          {/* Dropdown menu - appears below on hover/click */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 right-0 border backdrop-blur-xl bg-transparent border-accent/20 rounded-2xl overflow-hidden"
              >
                {locales
                  .filter((loc) => loc !== locale)
                  .map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        switchLocale(loc);
                        setIsOpen(false);
                      }}
                      className="w-full hover:bg-white/20 transition-colors duration-150 rounded-2xl h-fit flex items-center px-3 py-1 justify-center cursor-pointer hover:text-white text-white"
                    >
                      {loc.toUpperCase()}
                    </button>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
