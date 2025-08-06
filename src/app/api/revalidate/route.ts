// api/revalidate/route.ts - ISR 重新验证 API
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, paths, secret } = body;

    // 验证密钥（可选，增加安全性）
    if (secret && secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // 支持单个路径或多个路径
    const pathsToRevalidate = paths || [path || "/"];

    // 重新验证所有指定路径
    for (const pathToRevalidate of pathsToRevalidate) {
      revalidatePath(pathToRevalidate);
    }

    return NextResponse.json({
      message: `Paths ${pathsToRevalidate.join(", ")} revalidated successfully`,
      revalidated: true,
      paths: pathsToRevalidate,
      now: Date.now(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// 允许 GET 请求用于测试
export async function GET() {
  return NextResponse.json({
    message: "Revalidation API endpoint",
    usage: 'Send POST request with { "path": "/", "secret": "your-secret" }',
  });
}
