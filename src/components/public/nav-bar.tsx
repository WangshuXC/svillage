"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 w-screen mx-auto z-50 flex flex-row items-center justify-between h-20 px-10 bg-gray-500 bg-opacity-55 text-white text-lg",
        className
      )}
    >
      <Link
        href={"/"}
        className="flex p-2 items-center justify-start text-4xl rounded-md hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] transition duration-200 ease-linear"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="mr-4"
        />
        生存者之乡
      </Link>
      <Menu setActive={setActive} className=" absolute left-1/2 -translate-x-1/2">
        <MenuItem setActive={setActive} active={active} item="首页">
          <div onClick={() => setActive(null)}>
            <ProductItem
              title="首页"
              href="/"
              src="/homepage.jpg"
              description="生存者之乡服务器"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="生存者服务器">
          <div
            className="text-sm grid grid-cols-2 gap-10 p-4"
            onClick={() => setActive(null)}
          >
            <ProductItem
              title="原乡"
              href="/sur"
              src="/sur.jpg"
              description="原版荒野中的建筑奇迹"
            />
            <ProductItem
              title="科技"
              href="/tec"
              src="/tec.jpg"
              description="畅享红石科技与生存的独特乐趣"
            />
            <ProductItem
              title="乐事"
              href="/joy"
              src="/joy.jpg"
              description="乐事挑战亦畅行，冒险之乐伴君程"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="实验性功能">
          <div
            className="flex flex-col space-y-4 text-sm"
            onClick={() => setActive(null)}
          >
            <HoveredLink href="/">生存者商店</HoveredLink>
            <HoveredLink href="/">玩家社区</HoveredLink>
            <HoveredLink href="/">喝杯咖啡</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
        登陆/注册
      </button>
    </div>
  );
}

export default Navbar;
