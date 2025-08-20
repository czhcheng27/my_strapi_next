import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ExploreMoreProps {
  title?: string;
  link?: string;
}

const ExploreMore = ({
  title = "Explore More",
  link = "/",
}: ExploreMoreProps) => {
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
          {title}
        </div>
      </Link>
    </div>
  );
};

export default ExploreMore;
