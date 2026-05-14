import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Docker コンテナ向けスタンドアロン出力モード
  // .next/standalone/ に自己完結型サーバーが生成される
  output: "standalone",
};

export default nextConfig;
