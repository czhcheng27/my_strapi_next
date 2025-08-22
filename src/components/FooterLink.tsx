import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const FooterLink: React.FC<Props> = ({ href, children, className = "" }) => {
  return (
    <Link
      href={href}
      className={`block text-sm font-normal hover:underline ${className}`}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
