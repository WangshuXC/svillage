"use client";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";

export default function Page() {
  const words = `
  生存者之乡是一个纯净服，没有领地插件，无传送玩家功能
  玩家可以自由发挥想象力，创造独属于你的世界
  `
  return (
    <div className="flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <section 
        className="h-screen w-screen bg-[url('/explain01.jpg')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center"
        style={{ backgroundSize: "125%"}}
      >
        <motion.div
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, y: -130 }}
          className={cn(
            "text-9xl mb-10 font-bold",
            "py-4 text-white [text-shadow:_6px_6px_4px_black]"
          )}
        >
          原版荒野中的建筑奇迹
        </motion.div>
        <TextGenerateEffect words={words} />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-10 text-4xl text-white cursor-pointer w-20 h-20"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight + 20, behavior: 'smooth' });
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z" fill="currentColor">
            </path>
          </svg>
        </motion.div>
      </section>
    </div>
  );
}
