// Footer 组件
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterLink from "../FooterLink";

const Title = ({ children }: { children: string }) => {
  return (
    <div className="flex items-center mb-2">
      <span className="w-1 h-1 bg-white rounded-full mr-3" aria-hidden="true" />
      <div className="font-medium">{children}</div>
    </div>
  );
};

const Footer: React.FC = () => {
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Accessibility", href: "/accessibility" },
  ];

  return (
    <footer className="bg-[#4C4D4E] text-white flex flex-col">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-36 3xl:px-0 py-12 lg:py-27">
        {/* logo + divider */}
        {/* <div className="flex items-center space-x-4 mb-11">
          <Link href="/">
            <Image
              src="/images/logos/logoW.svg"
              alt="Logo"
              width={148}
              height={52}
              className="h-12 w-auto"
            />
          </Link>
          <div className="h-[52px] flex-grow border-b border-[#E31F26]" />
        </div> */}

        {/* bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <Link href="/">
              <Image
                src="/images/logos/logoW.svg"
                alt="Logo"
                width={148}
                height={52}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div>
            {/* text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:0.8fr_1.2fr_1.1fr] gap-8 lg:gap-16 mb-8">
              {/* Quick Links */}
              <div className="">
                <Title>Quick Links</Title>
                <div className="pl-4">
                  <FooterLink className="mt-2" href="/">
                    Home
                  </FooterLink>
                  <FooterLink className="mt-2" href="/">
                    About Us
                  </FooterLink>
                  <FooterLink className="mt-2" href="/">
                    Investments
                  </FooterLink>
                  <FooterLink className="mt-2" href="/">
                    Fintech
                  </FooterLink>
                  <FooterLink className="mt-2" href="/">
                    Careers
                  </FooterLink>
                  <FooterLink className="mt-2" href="/">
                    Contact Us
                  </FooterLink>
                </div>
              </div>

              {/* Our Services */}
              <div>
                <Title>Our Services</Title>
                <div className="pl-4">
                  <FooterLink className="mt-2" href="/">
                    Wealth Management
                  </FooterLink>
                  <FooterLink className="mt-2" href="/">
                    Real Estate Investment
                  </FooterLink>
                  <FooterLink className="mt-2" href="/">
                    Hospitality Investment
                  </FooterLink>
                  <FooterLink className="mt-2" href="/">
                    Payment Solutions
                  </FooterLink>
                  <FooterLink className="mt-2" href="/">
                    International Remittance
                  </FooterLink>
                  <FooterLink className="mt-2" href="/">
                    Digital Banking & Card Services
                  </FooterLink>
                </div>
              </div>

              {/* Contact & Support */}
              <div>
                <Title>Contact & Support</Title>
                <div className="pl-4">
                  <div>1123 Leslie Street</div>
                  <div>North York, ON M3C 2K5</div>
                  <div>Canada</div>
                  <div>+1 416-499-2258</div>
                  <div>info@ott.ca</div>

                  {/* Social Links */}
                  <div className="mt-7">
                    <div className="flex space-x-4">
                      {/* <a
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
                      </a> */}
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
                      {/* <a
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
                    </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* trademark */}
            <div className="flex justify-between text-[12px] font-normal mt-36">
              <div className="">
                © 2006-2025 OTT Group. All rights reserved.
              </div>
              <div className="font-medium">
                {legalLinks.map((item, idx) => (
                  <React.Fragment key={item.href}>
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                    {idx < legalLinks.length - 1 && (
                      <span className="mx-2 text-white">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-4 bg-[#E31F26]" />
    </footer>
  );
};

export default Footer;
