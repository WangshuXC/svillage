"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Carousel } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Home() {
  const words = `
  乡民们，《我的世界》生存者之乡系列服务器震撼开启!
  公益服纯享原版生存乐趣
  科技服引领未来探索前沿
  模组服拓展无限创意可能
  各具特色，精彩不停，诚邀各位小伙伴加入，一一起在方块世界开启热血冒险之旅!
  `;
  const slideData = [
    {
      title: "生存者原乡",
      button: "了解详情",
      href: '/sur',
      imageSrc: "/sur.jpg",
    },
    {
      title: "生存者科技",
      button: "了解详情",
      href: '/tec',
      imageSrc: "/tec.jpg",
    },
    {
      title: "生存者乐事",
      button: "了解详情",
      href: '/joy',
      imageSrc: "/joy.jpg",
    },
  ];
  return (
    <div className="flex flex-col gap-5 items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <section className="h-screen w-screen bg-[url('/homepage.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
        <motion.div
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, y: -130 }}
          className={cn(
            "text-9xl mb-10 font-bold",
            "bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-yellow-400 to-red-200 [text-shadow:0_0_rgba(0,0,0,0.1)]"
          )}
        >
          生存者之乡
        </motion.div>
        <TextGenerateEffect words={words} />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-10 text-4xl text-white cursor-pointer w-20 h-20"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z" fill="currentColor">
            </path>
          </svg>
        </motion.div>
      </section>
      <section className="h-screen w-screen relative overflow-hidden flex flex-col items-center justify-center">
        {/* 背景层 */}
        <div
          className="absolute inset-0 bg-[url('/homepage.jpg')] bg-cover bg-center blur-sm"
        />
        <Carousel slides={slideData} />
      </section>
    </div>
  );
}
