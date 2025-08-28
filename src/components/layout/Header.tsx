// Header 组件
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import NAVIGATION, { NavItem } from "../../config/navigation";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const t = useTranslations("navigation");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDifference = Math.abs(currentScrollY - lastScrollY);

    // Don't hide header if mobile menu is open
    if (isMobileMenuOpen) {
      setIsVisible(true);
      return;
    }

    // Only react to scroll if user has scrolled enough
    if (scrollDifference < 8) return;

    // Always show header when at the very top
    if (currentScrollY < 100) {
      setIsVisible(true);
    }
    // Hide header when scrolling down significantly
    else if (currentScrollY > lastScrollY && currentScrollY > 150) {
      setIsVisible(false);
    }
    // Show header when scrolling up
    else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  return (
    <header
      className={`
        ${styles.header}
        ${isVisible ? styles.visible : styles.hidden}
        shadow-sm
      `}
    >
      <div className="px-4 sm:px-6 lg:px-30 h-full">
        <div className="flex justify-between items-center sm:items-start h-full">
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
                    {t(item.title)}
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
                {useTranslations()("common.login")}
              </Link>
            </div>

            {/* Translate */}
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                // Force visibility when opening mobile menu
                if (!isMobileMenuOpen) {
                  setIsVisible(true);
                }
              }}
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
          <div className="md:hidden border-t border-gray-200 py-4 mobile-menu-open">
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
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setLastScrollY(window.scrollY);
                            }}
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
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setLastScrollY(window.scrollY);
                    }}
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
