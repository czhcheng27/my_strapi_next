// src/app/page.tsx
import React from "react";
import Image from "next/image";

interface CoverFormat {
  name: string;
  url: string;
  width: number;
  height: number;
}

interface Cover {
  id: number;
  name: string;
  url: string;
  formats?: {
    thumbnail?: CoverFormat;
    medium?: CoverFormat;
    small?: CoverFormat;
  };
}

interface Article {
  id: number;
  title: string;
  content: { type: string; children: { text: string }[] }[]; // 替换 any[]
  cover: Cover[];
  createdAt: string;
}

interface ArticlesResponse {
  data: Article[];
}

async function getArticles(): Promise<ArticlesResponse> {
  const res = await fetch(
    "http://3.131.240.216:1337/api/articles?populate=cover",
    {
      cache: "force-cache", // 启用强缓存用于 SSG
      // cache: "no-store", // SSR
      // next: { revalidate: 10 }, // 10 秒自动重新生成 ISR
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("API Error:", res.status, errorText);
    throw new Error(`Failed to fetch: ${res.status} - ${errorText}`);
  }

  const raw = await res.json();
  console.log(`raw`, raw);

  // 注意：你的接口字段不是 attributes，而是直接扁平化的
  return { data: raw.data };
}

export default async function Page() {
  try {
    const articles = await getArticles();

    return (
      <main style={{ padding: 40 }}>
        <h1>Articles from Strapi</h1>
        {articles.data?.map((article) => (
          <article key={article.id} style={{ marginBottom: 40 }}>
            <h2>{article.title}</h2>

            {article.content?.length > 0 && (
              <div>
                {article.content.map((block, index) => {
                  if (block.type === "paragraph") {
                    return (
                      <p key={index}>
                        {block.children
                          ?.map((child: { text: string }) => child.text)
                          .join("")}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            )}

            {article.cover?.length > 0 && (
              <div style={{ position: 'relative', width: '400px', height: '300px', marginTop: 10 }}>
                <Image
                  src={`http://3.131.240.216:1337${article.cover[0].url}`}
                  alt={article.cover[0].name || 'Article cover'}
                  fill
                  style={{ objectFit: 'cover' }}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            )}
          </article>
        ))}
      </main>
    );
  } catch (error) {
    console.error('Failed to load articles:', error);
    return (
      <main style={{ padding: 40 }}>
        <h1>Error Loading Articles</h1>
        <p>Failed to load articles. Please try again later.</p>
      </main>
    );
  }
}
