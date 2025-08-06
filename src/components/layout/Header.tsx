// Header 组件
"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm border-b relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              OTT
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600">
                About Us
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link
                  href="/company-overview"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Company Overview
                </Link>
                <Link
                  href="/history"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  History
                </Link>
                <Link
                  href="/culture"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Our Culture
                </Link>
                <Link
                  href="/accreditation"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Accreditation
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link
                  href="/payments"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Smart Payments
                </Link>
                <Link
                  href="/foreign-exchange"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Foreign Exchange
                </Link>
                <Link
                  href="/financial-services"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Financial Services
                </Link>
              </div>
            </div>
            <Link href="/careers" className="text-gray-700 hover:text-blue-600">
              Careers
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-blue-600">
              News
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
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
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="/company-overview"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Company Overview
              </Link>
              <Link
                href="/payments"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Smart Payments
              </Link>
              <Link
                href="/foreign-exchange"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Foreign Exchange
              </Link>
              <Link
                href="/financial-services"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Financial Services
              </Link>
              <Link
                href="/careers"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Careers
              </Link>
              <Link
                href="/news"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
