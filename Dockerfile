# syntax=docker/dockerfile:1

# ============================================================
# Stage 1: deps — 依存関係のインストール（キャッシュ効率化）
# ============================================================
FROM oven/bun:1.3.5-alpine AS deps
WORKDIR /app

# パッケージマニフェストとロックファイルのみコピー（ソース変更時のキャッシュ維持）
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ============================================================
# Stage 2: builder — Next.js 本番ビルド
# ============================================================
FROM oven/bun:1.3.5-alpine AS builder
WORKDIR /app

# node_modules をキャッシュ済み deps ステージからコピー
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run build

# ============================================================
# Stage 3: runner — 最小限の本番イメージ
# ============================================================
FROM oven/bun:1.3.5-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# スタンドアロン出力をコピー（server.js + 最小限の node_modules が含まれる）
COPY --from=builder --chown=nobody:nobody /app/.next/standalone ./
# 静的アセット（CSS・JS チャンク・Google Fonts）をコピー
COPY --from=builder --chown=nobody:nobody /app/.next/static ./.next/static
# favicon・robots.txt など public/ の静的ファイルをコピー
COPY --from=builder --chown=nobody:nobody /app/public ./public

RUN apk add --no-cache curl

# セキュリティ: Alpine 標準の nobody ユーザー（uid=65534）で実行
USER nobody

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

CMD ["bun", "server.js"]
