// api/proxy-image/route.ts - 图片代理 API
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl.searchParams.get("url");

    if (!url) {
      return NextResponse.json(
        { error: "Missing url parameter" },
        { status: 400 }
      );
    }

    // 验证 URL 是否来自我们的 Strapi 服务器
    if (!url.includes("3.131.240.216:1337")) {
      return NextResponse.json(
        { error: "Invalid image source" },
        { status: 403 }
      );
    }

    // 获取图片
    const imageResponse = await fetch(url);

    if (!imageResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch image" },
        { status: imageResponse.status }
      );
    }

    // 获取图片数据
    const imageBuffer = await imageResponse.arrayBuffer();
    const contentType =
      imageResponse.headers.get("content-type") || "image/jpeg";

    // 返回图片
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400", // 缓存1天
      },
    });
  } catch (error) {
    console.error("Image proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
