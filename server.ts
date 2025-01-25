import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

// 读取 HTML 文件
const html = await Deno.readTextFile("./index.html");

// 处理请求的函数
function handler(req: Request): Response {
  const headers = new Headers({
    "content-type": "text/html; charset=utf-8",
    "access-control-allow-origin": "*",
  });

  const url = new URL(req.url);
  
  // 返回主页
  if (url.pathname === "/" || url.pathname === "/index.html") {
    return new Response(html, { headers });
  }

  // 处理 404
  return new Response("Not Found", { status: 404 });
}

// 启动服务器
serve(handler); 