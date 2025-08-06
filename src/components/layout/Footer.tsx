// Footer 组件
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="text-gray-300">
              <p>1123 Leslie Street</p>
              <p>North York, ON M3C 2K5</p>
              <p>Canada</p>
              <p className="mt-2">+1 416-499-2258</p>
              <p>info@ott.ca</p>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/company-overview" className="hover:text-white">
                  Company Overview
                </Link>
              </li>
              <li>
                <Link href="/history" className="hover:text-white">
                  History
                </Link>
              </li>
              <li>
                <Link href="/culture" className="hover:text-white">
                  Our Culture
                </Link>
              </li>
              <li>
                <Link href="/accreditation" className="hover:text-white">
                  Accreditation
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* OTT Businesses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">OTT Businesses</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="https://www.ottfinancial.com/"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OTT Financial
                </a>
              </li>
              <li>
                <a
                  href="https://ottpay.com/"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OTT Pay
                </a>
              </li>
              <li>
                <a
                  href="https://www.ottpocket.com/"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OTT Pocket
                </a>
              </li>
              <li>
                <a
                  href="https://ottremit.com/"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OTT Remit
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/ottpay"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ottpay/"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/ott-financial-group"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ottpay/"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.329-1.297C4.198 14.895 3.75 13.455 3.75 12c0-1.455.448-2.895 1.37-3.691.881-.807 2.032-1.297 3.329-1.297s2.448.49 3.329 1.297c.922.796 1.37 2.236 1.37 3.691 0 1.455-.448 2.895-1.37 3.691-.881.807-2.032 1.297-3.329 1.297z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              ©1999-2025 The OTT Group of Companies. All Rights Reserved
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/legal"
                className="text-gray-300 hover:text-white text-sm"
              >
                Legal
              </Link>
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white text-sm"
              >
                Privacy & Policy
              </Link>
              <a
                href="/accessibility.pdf"
                className="text-gray-300 hover:text-white text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
