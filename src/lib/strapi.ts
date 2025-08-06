// lib/strapi.ts - Strapi API 工具函数

// 环境配置 - 取消注释需要使用的环境
const STRAPI_URL = "http://3.131.240.216:1337"; // 生产环境
// const STRAPI_URL = 'http://localhost:1337';   // 本地环境

export interface StrapiImage {
  id: number;
  name: string;
  url: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: { url: string; width: number; height: number };
    small?: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
    large?: { url: string; width: number; height: number };
  };
}

export interface HeroBanner {
  id: number;
  title: string;
  subtitle?: string;
  description?: Array<{
    type: string;
    children?: Array<{
      type: string;
      text: string;
    }>;
  }>;
  buttonText?: string;
  buttonLink?: string;
  order: number;
  isActive: boolean;
  backgroundImage: unknown; // 简化类型，支持多种 Strapi 数据结构
  createdAt: string;
  updatedAt: string;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function getHeroBanners(): Promise<HeroBanner[]> {
  try {
    const apiUrl = `${STRAPI_URL}/api/hero-banners?populate=backgroundImage&filters[isActive][$eq]=true`;

    const res = await fetch(apiUrl, {
      next: { revalidate: 30 }, // ISR - 30秒重新验证
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error(
        "Failed to fetch hero banners:",
        res.status,
        res.statusText
      );
      return getMockHeroBanners();
    }

    const response: StrapiResponse<HeroBanner[]> = await res.json();
    return response.data || [];
  } catch (error) {
    console.error("Error fetching hero banners:", error);
    return getMockHeroBanners();
  }
}

// 模拟数据作为后备
function getMockHeroBanners(): HeroBanner[] {
  return [
    {
      id: 1,
      title: "Welcome to OTT Canada",
      subtitle: "Your Trusted Financial Partner",
      description: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "Providing comprehensive financial services across Canada with over 25 years of experience.",
            },
          ],
        },
      ],
      buttonText: "Learn More",
      buttonLink: "/company-overview",
      order: 1,
      isActive: true,
      backgroundImage: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Foreign Exchange Solutions",
      subtitle: "Competitive Rates & Expert Service",
      description: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "Get the best exchange rates and personalized service for all your foreign currency needs.",
            },
          ],
        },
      ],
      buttonText: "View Rates",
      buttonLink: "/foreign-exchange",
      order: 2,
      isActive: true,
      backgroundImage: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      title: "Payment Services",
      subtitle: "Fast & Secure Transfers",
      description: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "Send money worldwide with our secure and efficient payment solutions.",
            },
          ],
        },
      ],
      buttonText: "Send Money",
      buttonLink: "/payments",
      order: 3,
      isActive: true,
      backgroundImage: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

// 工具函数：提取 Strapi 图片 URL
export function getStrapiImageUrl(image: unknown): string | null {
  if (!image) return null;

  // 直接是字符串 URL
  if (typeof image === "string") {
    return image.startsWith("http") ? image : `${STRAPI_URL}${image}`;
  }

  // 对象形式
  if (typeof image === "object" && image !== null) {
    const imageObj = image as Record<string, unknown>;

    // 有 data 属性
    if (imageObj.data) {
      const data = imageObj.data;
      const imgData = Array.isArray(data) ? data[0] : data;

      if (imgData && typeof imgData === "object" && imgData !== null) {
        const imgDataObj = imgData as Record<string, unknown>;
        if (typeof imgDataObj.url === "string") {
          return imgDataObj.url.startsWith("http")
            ? imgDataObj.url
            : `${STRAPI_URL}${imgDataObj.url}`;
        }
      }
    }

    // 直接有 url 属性
    if (typeof imageObj.url === "string") {
      return imageObj.url.startsWith("http")
        ? imageObj.url
        : `${STRAPI_URL}${imageObj.url}`;
    }
  }

  return null;
}
