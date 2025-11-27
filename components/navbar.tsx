"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

function Navbar() {
  const location = usePathname();
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.7 }}
      className="flex justify-center items-center gap-6 z-50 fixed top-6 w-full"
    >
      <div className="w-fit border items-center backdrop-blur-xl bg-transparent border-accent/20 h-12 rounded-4xl flex gap-6 px-6">
        <Link
          href={"/projects"}
          replace={true}
          className={clsx(
            "hover:bg-white/20 transition-colors duration-150  rounded-2xl px-3 py-1 h-fit flex items-center cursor-pointer hover:text-white text-white",
            location === "/projects" ? "bg-white/20" : ""
          )}
        >
          Projelerim
        </Link>
        <Link
          href={"/"}
          replace={true}
          className={clsx(
            "hover:bg-white/20 transition-colors duration-150  rounded-2xl px-3 py-1 h-fit flex items-center cursor-pointer hover:text-white text-white",
            location === "/" ? "bg-white/20" : ""
          )}
        >
          Ana Sayfa
        </Link>
        <Link
          href={"/about"}
          replace={true}
          className={clsx(
            "hover:bg-white/20 transition-colors duration-150  rounded-2xl px-3 py-1 h-fit flex items-center cursor-pointer hover:text-white text-white",
            location === "/about" ? "bg-white/20" : ""
          )}
        >
          Hakkımda
        </Link>
      </div>
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        exit={{ filter: "blur(10px)", opacity: 0 }}
        transition={{ delay: 2.4, duration: 0.4 }}
        className="w-fit hidden md:flex absolute right-10 border items-center backdrop-blur-xl bg-transparent border-accent/20 h-fit rounded-full "
      >
        <Button
          variant="ghost"
          className="transition-colors bg-transparent hover:bg-transparent duration-150 text-sm rounded-2xl px-4 py-2 h-fit flex items-center cursor-pointer hover:text-white text-white"
        >
          TR
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
