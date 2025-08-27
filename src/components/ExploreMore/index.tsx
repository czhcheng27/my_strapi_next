"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ExploreMoreProps {
  title?: string;
  link?: string;
}

const ExploreMore = ({ title, link = "/" }: ExploreMoreProps) => {
  const t = useTranslations("common");

  // 如果没有传入title，使用国际化的默认文本
  const displayTitle = title || t("explore more");

  return (
    <div>
      <Link href={link} className="flex items-center gap-4">
        <Image
          src="/images/icons/GoTo.svg"
          alt="Arrow Right"
          width={36}
          height={36}
        />
        <div className="text-black text-[18px] font-[300] mt-[2px]">
          {displayTitle}
        </div>
      </Link>
    </div>
  );
};

export default ExploreMore;
