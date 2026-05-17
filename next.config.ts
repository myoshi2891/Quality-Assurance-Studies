import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: "standalone" は本番ビルド専用。
  // next dev（開発サーバー）と組み合わせると RSC Flight ペイロードに
  // 404 が混入してハイドレーションが失敗するため、開発時は無効化する。
  ...(process.env.NODE_ENV === "production" && { output: "standalone" }),
};

export default nextConfig;
