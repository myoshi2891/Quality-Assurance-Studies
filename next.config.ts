import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Netlify環境向けに適切な出力などを設定できる場合がありますが、デフォルトで十分動作します
  // React StrictModeを有効にしています
  reactStrictMode: true,
};

export default nextConfig;
