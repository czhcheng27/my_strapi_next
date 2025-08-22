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

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/ottpay",
      icon: (
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/ottpay/",
      icon: (
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/ott-financial-group",
      icon: (
        <path
          fillRule="evenodd"
          d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
          clipRule="evenodd"
        />
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ottpay/",
      icon: (
        <path
          fillRule="evenodd"
          d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.329-1.297C4.198 14.895 3.75 13.455 3.75 12c0-1.455.448-2.895 1.37-3.691.881-.807 2.032-1.297 3.329-1.297s2.448.49 3.329 1.297c.922.796 1.37 2.236 1.37 3.691 0 1.455-.448 2.895-1.37 3.691-.881.807-2.032 1.297-3.329 1.297z"
          clipRule="evenodd"
        />
      ),
    },
  ];

  return (
    <footer className="bg-[#4C4D4E] text-white flex flex-col">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-36 3xl:px-0 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 3xl:py-27">
        {/* Main container with responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-2 gap-8 md:gap-12 lg:gap-8">
          {/* Logo section */}
          <div className="md:col-span-1 lg:col-span-2 xl:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logos/logoW.svg"
                alt="Logo"
                width={148}
                height={52}
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </Link>
          </div>

          {/* Links section */}
          <div className="md:col-span-1 lg:col-span-3 xl:col-span-1">
            {/* Mobile layout (< sm) */}
            <div className="sm:hidden space-y-8">
              {/* First row: Quick Links + Contact */}
              <div className="grid grid-cols-2 gap-6">
                {/* Quick Links */}
                <div>
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

                {/* Contact & Support */}
                <div>
                  <Title>Contact & Support</Title>
                  <div className="pl-4">
                    <div className="text-sm space-y-1">
                      <div>1123 Leslie Street</div>
                      <div>North York, ON M3C 2K5</div>
                      <div>Canada</div>
                      <div>+1 416-499-2258</div>
                      <div>info@ott.ca</div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-4">
                      <div className="flex space-x-3">
                        {socialLinks.map((social) => (
                          <a
                            key={social.name}
                            href={social.href}
                            className="text-gray-300 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="sr-only">{social.name}</span>
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              {social.icon}
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second row: Our Services (full width) */}
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
            </div>

            {/* Tablet layout (sm to lg) */}
            <div className="hidden sm:block lg:hidden">
              <div className="grid grid-cols-2 gap-8">
                {/* Left column: Quick Links + Our Services */}
                <div className="space-y-8">
                  <div>
                    <Title>Quick Links</Title>
                    <div className="pl-4 space-y-1">
                      <FooterLink href="/">Home</FooterLink>
                      <FooterLink href="/">About Us</FooterLink>
                      <FooterLink href="/">Investments</FooterLink>
                      <FooterLink href="/">Fintech</FooterLink>
                      <FooterLink href="/">Careers</FooterLink>
                      <FooterLink href="/">Contact Us</FooterLink>
                    </div>
                  </div>

                  <div>
                    <Title>Our Services</Title>
                    <div className="pl-4 space-y-1">
                      <FooterLink href="/">Wealth Management</FooterLink>
                      <FooterLink href="/">Real Estate Investment</FooterLink>
                      <FooterLink href="/">Hospitality Investment</FooterLink>
                      <FooterLink href="/">Payment Solutions</FooterLink>
                      <FooterLink href="/">International Remittance</FooterLink>
                      <FooterLink href="/">
                        Digital Banking & Card Services
                      </FooterLink>
                    </div>
                  </div>
                </div>

                {/* Right column: Contact */}
                <div>
                  <Title>Contact & Support</Title>
                  <div className="pl-4">
                    <div className="space-y-1">
                      <div>1123 Leslie Street</div>
                      <div>North York, ON M3C 2K5</div>
                      <div>Canada</div>
                      <div>+1 416-499-2258</div>
                      <div>info@ott.ca</div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6">
                      <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                          <a
                            key={social.name}
                            href={social.href}
                            className="text-gray-300 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="sr-only">{social.name}</span>
                            <svg
                              className="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              {social.icon}
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout (lg and above) */}
            <div className="hidden lg:grid lg:[grid-template-columns:0.8fr_1.2fr_1.1fr] gap-8 lg:gap-12 xl:gap-16">
              {/* Quick Links */}
              <div>
                <Title>Quick Links</Title>
                <div className="pl-4 space-y-2 lg:space-y-3">
                  <FooterLink href="/">Home</FooterLink>
                  <FooterLink href="/">About Us</FooterLink>
                  <FooterLink href="/">Investments</FooterLink>
                  <FooterLink href="/">Fintech</FooterLink>
                  <FooterLink href="/">Careers</FooterLink>
                  <FooterLink href="/">Contact Us</FooterLink>
                </div>
              </div>

              {/* Our Services */}
              <div className="md:col-span-2 lg:col-span-1">
                <Title>Our Services</Title>
                <div className="pl-4 space-y-2 lg:space-y-3">
                  <FooterLink href="/">Wealth Management</FooterLink>
                  <FooterLink href="/">Real Estate Investment</FooterLink>
                  <FooterLink href="/">Hospitality Investment</FooterLink>
                  <FooterLink href="/">Payment Solutions</FooterLink>
                  <FooterLink href="/">International Remittance</FooterLink>
                  <FooterLink href="/">
                    Digital Banking & Card Services
                  </FooterLink>
                </div>
              </div>

              {/* Contact & Support - spans full width on md, single column on lg+ */}
              <div className="md:col-span-2 lg:col-span-1">
                <Title>Contact & Support</Title>
                <div className="pl-4">
                  <div className="space-y-1 text-sm lg:text-base">
                    <div>1123 Leslie Street</div>
                    <div>North York, ON M3C 2K5</div>
                    <div>Canada</div>
                    <div>+1 416-499-2258</div>
                    <div>info@ott.ca</div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 lg:mt-7">
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          className="text-gray-300 hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">{social.name}</span>
                          <svg
                            className="h-5 w-5 lg:h-6 lg:w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {social.icon}
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with responsive spacing */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 pt-6 sm:pt-8">
          {/* Mobile: Two rows */}
          <div className="sm:hidden space-y-4">
            <div className="text-center text-xs">
              © 2006-2025 OTT Group. All rights reserved.
            </div>
            <div className="text-center text-xs font-medium">
              <div className="flex flex-wrap justify-center gap-x-1 gap-y-2">
                {legalLinks.map((item, idx) => (
                  <React.Fragment key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:underline transition-colors whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                    {idx < legalLinks.length - 1 && (
                      <span className="text-gray-400">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet and Desktop: Side by side */}
          <div className="hidden text-xs sm:flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            <div className="order-2 md:order-1 text-center md:text-left">
              © 2006-2025 OTT Group. All rights reserved.
            </div>
            <div className="font-medium order-1 md:order-2">
              <div className="flex flex-wrap justify-center md:justify-end gap-x-2 lg:gap-x-3 gap-y-2">
                {legalLinks.map((item, idx) => (
                  <React.Fragment key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:underline transition-colors whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                    {idx < legalLinks.length - 1 && (
                      <span className="text-gray-400">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-3 sm:h-4 bg-[#E31F26]" />
    </footer>
  );
};

export default Footer;
