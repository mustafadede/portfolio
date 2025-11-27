import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { JSX } from "react";

function SliderContent({
  item,
}: {
  item: {
    header: JSX.Element | string;
    desc: string;
    githubUrl: string;
    url: string;
  };
}) {
  return (
    <div>
      <div className="flex absolute -bottom-30 md:bottom-0 z-20 w-full flex-col gap-4 mb-4 items-center">
        <motion.div
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          whileInView={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          {item?.header}
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          whileInView={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="text-white italic font-extralight text-xl"
        >
          {item?.desc}
        </motion.p>
        {item?.url && (
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
              filter: "blur(10px)",
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className={clsx("flex", item.githubUrl ? "gap-4" : "")}
          >
            {item.githubUrl && (
              <Link
                href={`${item.githubUrl}`}
                target="_blank"
                className="bg-gray-600/20 flex justify-center py-2 items-center gap-4 px-4 text-white hover:bg-white/10 border-accent/20 rounded-3xl border font-semibold transition-colors duration-150 cursor-pointer backdrop-blur-2xl"
              >
                Github Link
                <Github size={18} color="white" />
              </Link>
            )}
            <Link
              href={`${item.url}`}
              target="_blank"
              className="bg-white/20 flex justify-center py-2 items-center gap-4 px-4 text-white hover:bg-white/10 border-accent/20 rounded-3xl border font-semibold transition-colors duration-150 cursor-pointer backdrop-blur-2xl"
            >
              Siteye git
              <ExternalLink size={18} color="white" />
            </Link>
          </motion.div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent to-black z-10" />
    </div>
  );
}

export default SliderContent;
