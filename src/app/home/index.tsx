import React from "react";
import Link from "next/link";
import { getHeroBanners } from "@/lib/strapi";
import HeroBannerComponent from "@/components/HeroBanner";
import HomeAbout from "./About";
import HomeInvest from "./Invest";
import HomeCareer from "./Career";
import Divider from "./Divider";

const HomePage = async () => {
  const heroBanners = await getHeroBanners();
  return (
    <div className="min-h-screen">
      {/* Hero Section - 动态轮播图 */}
      <HeroBannerComponent banners={heroBanners} />
      <HomeAbout />
      <Divider />
      <HomeInvest />
      <HomeCareer />
      {/* Financial Products & Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Financial Products & Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Smart Payments */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  <Link
                    href="/payments"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Smart Payments
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  OTT Pay Inc. provides seamless payments, smart payment
                  platform and payment solutions tailored to businesses. We are
                  a leading service provider of WeChat Pay, Alipay and UnionPay
                  in Canada.
                </p>
                <Link
                  href="/payments"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Foreign Exchange */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  <Link
                    href="/foreign-exchange"
                    className="text-green-600 hover:text-green-800"
                  >
                    Foreign Exchange
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  OTT Financial Inc. is a FINTRAC-registered and AMF-authorized
                  money services business (MSB) providing foreign exchange and
                  remittance services.
                </p>
                <Link
                  href="/foreign-exchange"
                  className="text-green-600 hover:text-green-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Financial Services */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  <Link
                    href="/financial-services"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    Financial Services
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  OTT Financial Group offers financial solutions including
                  account services, funds management support, and cross-border
                  currency settlement. We are committed to providing secure,
                  efficient, and compliant financial services.
                </p>
                <Link
                  href="/financial-services"
                  className="text-purple-600 hover:text-purple-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Careers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Careers at OTT
              </h2>
              <p className="text-gray-600 mb-6">
                At OTT we believe in hiring talent for today and the future. Our
                employees must:
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Have a broad skill set to meet evolving business priorities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Embrace the speed of change
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Share our passion for who we are and what we do
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Share ideas and support their colleagues
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Be positive ambassadors for the OTT brand
                </li>
              </ul>
              <Link
                href="/careers"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Career Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>
      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            In the News
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  February 1, 2022
                </div>
                <h3 className="text-lg font-bold mb-3">
                  <Link
                    href="/news/chinese-mobile-payments-airports"
                    className="text-gray-900 hover:text-blue-600"
                  >
                    Chinese Mobile Payments Now Available at All Canadian
                    International Airports with OTT Pay
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  OTT Pay expands mobile payment solutions across Canadian
                  airports...
                </p>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">May 11, 2021</div>
                <h3 className="text-lg font-bold mb-3">
                  <Link
                    href="/news/best-mobile-payment-companies"
                    className="text-gray-900 hover:text-blue-600"
                  >
                    OTT Pay named one of Canada&apos;s best mobile payment
                    companies in 2021
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Recognition for innovation in mobile payment solutions...
                </p>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">June 2, 2020</div>
                <h3 className="text-lg font-bold mb-3">
                  <Link
                    href="/news/paytechs-canada"
                    className="text-gray-900 hover:text-blue-600"
                  >
                    OTT Pay joins PayTechs of Canada
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Strategic partnership to advance fintech innovation...
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/news"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
