"use client";
import { appConstants } from "@/utils/constants/app";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  const pathList = pathname?.split("/") || [];
  const pathName = pathList[pathList.length - 1] ?? "";

  return (
    <div className="flex items-center w-full h-[80px] border-b-[1px] border-borderLight py-[20px] px-[32px] gap-3">
      <h3 className="font-medium text-2xl leading-8">
        {appConstants?.[(pathName ?? "defaultTitle") as string]}
      </h3>
    </div>
  );
};

export default Header;
