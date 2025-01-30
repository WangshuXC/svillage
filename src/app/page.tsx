"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

export default function Home() {
  const words = `
  乡民们，《我的世界》生存者之乡系列服务器震撼开启!
  公益服纯享原版生存乐趣
  科技服引领未来探索前沿
  模组服拓展无限创意可能
  各具特色，精彩不停，诚邀各位小伙伴加入，一一起在方块世界开启热血冒险之旅!
  `;
  return (
    <div className="flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <section className="h-screen w-screen bg-[url('/homepage.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
        <motion.div
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        className=" text-9xl text-[#ffaa00] [text-shadow:_6px_6px_4px_black] mb-10"
        >
          生存者之乡
        </motion.div>
        <TextGenerateEffect words={words} />
      </section>
    </div>
  );
}
