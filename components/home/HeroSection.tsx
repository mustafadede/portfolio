"use client";
import { motion } from "framer-motion";
import { Mouse } from "lucide-react";
import LightRays from "@/components/LightRays";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect, useState } from "react";

function HeroSection() {
  const isDesktop = useMediaQuery("(min-width: 720px)");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col max-h-fit mb-40 items-center relative">
      <LightRays
        raysOrigin="top-center"
        raysColor="#fff"
        raysSpeed={1.5}
        lightSpread={isDesktop ? 0.7 : 1}
        rayLength={isDesktop ? 0.4 : 2.5}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays absolute! top-0"
      />
      <motion.div className="flex mt-20 flex-col gap-4 items-center relative top-14">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-white text-5xl select-none"
        >
          Mustafa Dede
        </motion.h1>
        <div>
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-white text-3xl select-none text-center"
          >
            Software Developer
          </motion.h2>
        </div>
      </motion.div>
      <div className="relative w-full h-full md:h-[380px] -bottom-24">
        <video
          width="100%"
          height="100%"
          muted={true}
          autoPlay={true}
          playsInline={true}
          className="object-contain w-full h-full"
        >
          <source src="/homepage-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent to-black/80 md:to-black/30 z-10" />

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 0 }}
          animate={
            scrolled
              ? { opacity: 0, filter: "blur(10px)", y: -10 }
              : { opacity: 1, filter: "blur(0)", y: 0 }
          }
          exit={{ opacity: 0, filter: "blur(10px)", y: 0 }}
          transition={{
            duration: 1,
            delay: !scrolled && !mounted ? 2.4 : 0,
          }}
          className="flex z-20 absolute bottom-10 w-full justify-center items-center gap-4 text-white"
        >
          <Mouse size={21} />
          <motion.p>Aşağı kaydır</motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
