export type NavItem = {
  title: string;
  href?: string;
  children?: Array<{ title: string; href: string }>;
};

const NAVIGATION: NavItem[] = [
  {
    title: "about us",
    children: [
      { title: "Company Profile", href: "/company-overview" },
      { title: "Mission & Vision", href: "/culture" },
      { title: "History", href: "/history" },
      { title: "Regulatory & Compliance", href: "/accreditation" },
      { title: "Social Responsibility", href: "/payments" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "investments",
    children: [
      { title: "Smart Payments", href: "/payments" },
      { title: "Foreign Exchange", href: "/foreign-exchange" },
      { title: "Financial Services", href: "/financial-services" },
    ],
  },
  { title: "fintech", href: "/news" },
  { title: "careers", href: "/careers" },
];

export default NAVIGATION;
