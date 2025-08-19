export type NavItem = {
  title: string;
  href?: string;
  children?: Array<{ title: string; href: string }>;
};

const NAVIGATION: NavItem[] = [
  {
    title: "About Us",
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
    title: "Investment",
    children: [
      { title: "Smart Payments", href: "/payments" },
      { title: "Foreign Exchange", href: "/foreign-exchange" },
      { title: "Financial Services", href: "/financial-services" },
    ],
  },
  { title: "Fintech", href: "/news" },
  { title: "Careers", href: "/careers" },
];

export default NAVIGATION;
