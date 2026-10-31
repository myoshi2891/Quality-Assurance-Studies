import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 本番ビルドの型検査は tests/ を除いた設定で行う（tsconfig.build.json 参照）。
  typescript: { tsconfigPath: "tsconfig.build.json" },
  // output: "standalone" は本番ビルド専用。
  // next dev（開発サーバー）と組み合わせると RSC Flight ペイロードに
  // 404 が混入してハイドレーションが失敗するため、開発時は無効化する。
  ...(process.env.NODE_ENV === "production" && { output: "standalone" }),
};

export default nextConfig;
