// Header 组件
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import NAVIGATION, { NavItem } from "../../config/navigation";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const t = useTranslations();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`shadow-sm relative z-40 h-30 ${styles.header}`}>
      <div className="px-4 sm:px-6 lg:px-30 h-full">
        <div className="flex justify-between items-start h-full">
          {/* Logo */}
          <div className="flex-shrink-0 pt-[40px]">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              <Image
                src="/images/logos/logo.svg"
                alt="Logo"
                width={136}
                height={48}
              />
            </Link>
          </div>

          {/* Navigation (rendered from config) */}
          <nav className="hidden md:flex items-start h-15 mt-15">
            {NAVIGATION.map((item: NavItem) => {
              const baseClass =
                "text-gray-700 hover:text-blue-600 hover:cursor-pointer";
              const style: React.CSSProperties = {
                color: "#4C4D4E",
                fontFamily: '"Noto Sans"',
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: 400,
                height: 24,
                lineHeight: "24px",
              };

              return (
                <div
                  key={item.title}
                  className={`relative group ml-21 ${styles.navItemContainer}`}
                >
                  <button style={style} className={baseClass}>
                    {t("home." + item.title)}
                  </button>
                  <div className="absolute left-0 top-15 w-[248px] bg-[#F8F7F5] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {item?.children?.map(
                      (child: { title: string; href?: string }) => (
                        <Link
                          key={child.title}
                          href={child.href || "#"}
                          className="flex items-center h-12 px-[17px] py-[8px] text-[#4C4D4E] font-normal hover:bg-white"
                        >
                          {child.title}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              );
            })}

            {/* Login Btn */}
            <div className="bg-[#E31F26] hover:bg-[#BAB6B5] hover:cursor-pointer transition-colors text-white text-xs flex items-center justify-center ml-31 mr-10 w-14 h-7">
              <Link href="/login" className="transition-colors">
                {t("common.login")}
              </Link>
            </div>

            {/* Translate */}
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {NAVIGATION.map((item: NavItem) => {
                if (item.children && item.children.length > 0) {
                  return (
                    <div key={item.title}>
                      <div className="block px-4 py-2 text-gray-700 font-medium">
                        {item.title}
                      </div>
                      {item.children.map(
                        (child: { title: string; href?: string }) => (
                          <Link
                            key={child.title}
                            href={child.href || "#"}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-6 py-2 text-gray-700 hover:text-blue-600"
                          >
                            {child.title}
                          </Link>
                        )
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    href={item.href || "#"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
