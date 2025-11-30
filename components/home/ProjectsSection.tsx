"use client";
import { motion } from "framer-motion";
import { Safari } from "../ui/shadcn-io/safari";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import SliderContent from "./SliderContent";
import PocketLogo from "../logos/PocketLogo";
import SharePalLogo from "../logos/SharePalLogo";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect, useState } from "react";
import { useTranslations } from "@/hooks/use-translations";

function ProjectsSection() {
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { t } = useTranslations();

  const Projects = [
    {
      id: 0,
      header: <SharePalLogo />,
      desc: t("projects.sharepalDesc"),
      url: "https://sharepal.dev/",
      githubUrl: "https://github.com/mustafadede/SharePal",
      urlHeader: "sharepal.dev",
      imgSrc: "/sharepal.png",
    },
    {
      id: 1,
      header: <PocketLogo />,
      desc: t("projects.pocketDesc"),
      url: "https://sharepal.dev/",
      githubUrl: "https://github.com/mustafadede/Pocket",
      urlHeader: "sharepal.dev",
      imgSrc: "/sharepal.png",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="w-full h-fit">
      <motion.div className="flex flex-col justify-center items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-4xl lg:text-5xl font-semibold"
        >
          {t("projects.title")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex relative flex-col items-center mt-10 mb-20"
        >
          {isDesktop && (
            <Carousel
              className="w-full relative max-w-3xl overflow-visible! px-6 mt-4"
              opts={{
                loop: true,
                align: "center",
              }}
            >
              <CarouselContent>
                {Projects.map((item, index) => (
                  <CarouselItem key={index} className="relative">
                    {index === 0 && (
                      <>
                        <Safari
                          url={item.urlHeader}
                          imageSrc={item.imgSrc}
                          className="w-full h-auto"
                        />
                      </>
                    )}
                    {index === 1 && (
                      <div className="h-96 flex justify-center items-center overflow-hidden">
                        <motion.div
                          initial={{ y: 20 }}
                          whileInView={{ y: 0 }}
                          className="w-full h-full absolute z-10 top-0 bg-[url('/phone.png')] bg-center bg-no-repeat"
                        />
                        <Image
                          src="/pocket.png"
                          width={340}
                          height={700}
                          alt="Picture of the author"
                          className="absolute top-7 object-cover"
                        />
                      </div>
                    )}
                    <SliderContent item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex bg-white/20 text-white transition-colors duration-150 cursor-pointer border border-accent/40" />
              <CarouselNext className="hidden lg:flex bg-white/20 text-white transition-colors duration-150 cursor-pointer border border-accent/40" />
            </Carousel>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProjectsSection;
