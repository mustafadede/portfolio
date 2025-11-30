"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "@/hooks/use-translations";

const techCategories = [
  {
    id: "frontend",
    name: "Frontend",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    techs: [
      "React",
      "Redux/Toolkit",
      "NextJS",
      "Vue",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "MUI",
      "SCSS/SASS",
      "CSS",
      "HTML",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
    techs: ["NestJS", "Laravel", "PrismaORM", "Firebase", "Python"],
  },
  {
    id: "mobile",
    name: "Mobile",
    bgImage: "https://www.svgrepo.com/show/353723/expo-icon.svg",
    techs: ["React Native", "Expo"],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png",
    techs: ["Docker", "Git", "Visual Studio Code", "Linux", "VS Code"],
  },
  {
    id: "design",
    name: "Design",
    bgImage: "https://www.svgrepo.com/show/361494/figma-logo.svg",
    techs: ["Figma", "Adobe XD", "Photoshop"],
  },
  {
    id: "languages",
    name: "Languages",
    bgImage: "https://www.svgrepo.com/show/503404/language-typescript.svg",
    techs: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
];

function TechAndToolsSection() {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-fit py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <motion.div className="flex flex-col justify-center items-center relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 text-center px-4"
        >
          {t("tech.title")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white/60 text-base sm:text-lg mb-8 sm:mb-12 text-center max-w-2xl px-4"
        >
          {t("tech.subtitle")}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full max-w-6xl">
          {techCategories.map((category, index) => {
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 * index,
                }}
                viewport={{ once: true }}
                className="relative group bg-white/10 backdrop-blur-4xl border border-accent/20 rounded-3xl p-4 sm:p-5 md:p-6 overflow-hidden transition-all duration-300 hover:border-accent/40"
              >
                {/* Background image on hover */}
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-contain bg-no-repeat brightness-0 invert"
                  style={{ backgroundImage: `url(${category.bgImage})` }}
                />

                {/* Magical glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  {/* Pulsing glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      background: [
                        "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 70%)",
                        "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                        "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                      ],
                    }}
                  />
                  {/* Shimmer gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      background: [
                        "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                        "linear-gradient(225deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                        "linear-gradient(315deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                        "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                        "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                      ],
                    }}
                  />
                </div>

                <div className="relative z-10 mb-4 sm:mb-5">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">
                    {t(`tech.categories.${category.id}`)}
                  </h3>
                  <div className="h-px w-full border-accent/20 border-b" />
                </div>
                <div className="relative z-10 flex flex-wrap gap-1.5 sm:gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-2.5 sm:px-3 py-1 select-none cursor-pointer sm:py-1.5 text-xs sm:text-sm text-white/90 bg-black/40 border border-accent/20 rounded-2xl backdrop-blur-sm hover:bg-black/60 transition-all duration-150"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default TechAndToolsSection;
