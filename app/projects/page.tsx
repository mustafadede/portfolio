"use client";
import { motion } from "framer-motion";
import ColorBends from "@/components/ColorBends";
import SharePalLogo from "@/components/logos/SharePalLogo";

function projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-screen relative flex justify-center items-center "
    >
      <ColorBends
        colors={["#3A1479", "#f6339a"]}
        rotation={0}
        autoRotate={0}
        speed={0.3}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={0.8}
        parallax={0.6}
        noise={0.08}
        className="absolute! top-0 z-0"
      />
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: 20, filter: "blur(20px)" }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="relative z-10 flex flex-col gap-4"
      >
        <SharePalLogo />
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 1.2, delay: 1.9 }}
          className="text-white italic font-extralight text-xl"
        >
          Film ve dizi aşıklarına ait bir platform
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default projects;
