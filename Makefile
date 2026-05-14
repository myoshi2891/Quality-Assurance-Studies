SHELL := /bin/bash
.DEFAULT_GOAL := help

COMPOSE_FILE     := docker-compose.yml
COMPOSE_DEV_FILE := docker-compose.dev.yml

# ============================================================
# ヘルプ
# ============================================================
.PHONY: help
help:
	@echo "QA Studies — Docker 操作コマンド一覧"
	@echo ""
	@echo "  make build      本番イメージをビルドする"
	@echo "  make up         本番コンテナを起動する（バックグラウンド）"
	@echo "  make down       本番コンテナを停止・削除する"
	@echo "  make logs       本番コンテナのログをストリーム表示する"
	@echo "  make shell      本番コンテナ内でシェルを起動する"
	@echo "  make dev        開発コンテナを起動する（HMR 有効・フォアグラウンド）"
	@echo "  make dev-up     開発コンテナをバックグラウンドで起動する"
	@echo "  make dev-down   開発コンテナを停止・削除する"
	@echo "  make dev-logs   開発コンテナのログをストリーム表示する"
	@echo "  make dev-shell  開発コンテナ内でシェルを起動する"
	@echo "  make clean      停止済みコンテナ・未使用イメージを削除する"
	@echo "  make clean-all  全リソース（ボリューム含む）を削除する（⚠ データ消失注意）"

# ============================================================
# 本番環境
# ============================================================
.PHONY: build
build:
	@echo "本番イメージをビルドしています..."
	docker compose -f $(COMPOSE_FILE) build

.PHONY: up
up:
	@echo "本番コンテナを起動しています（http://localhost:3000）..."
	docker compose -f $(COMPOSE_FILE) up -d

.PHONY: down
down:
	docker compose -f $(COMPOSE_FILE) down

.PHONY: logs
logs:
	docker compose -f $(COMPOSE_FILE) logs -f

.PHONY: shell
shell:
	docker compose -f $(COMPOSE_FILE) exec app sh

# ============================================================
# 開発環境
# ============================================================
.PHONY: dev
dev:
	@echo "開発コンテナを起動しています（HMR 有効、http://localhost:3000）..."
	docker compose -f $(COMPOSE_DEV_FILE) up

.PHONY: dev-up
dev-up:
	docker compose -f $(COMPOSE_DEV_FILE) up -d

.PHONY: dev-down
dev-down:
	docker compose -f $(COMPOSE_DEV_FILE) down

.PHONY: dev-logs
dev-logs:
	docker compose -f $(COMPOSE_DEV_FILE) logs -f

.PHONY: dev-shell
dev-shell:
	docker compose -f $(COMPOSE_DEV_FILE) exec app sh

# ============================================================
# クリーンアップ
# ============================================================
.PHONY: clean
clean:
	docker compose -f $(COMPOSE_FILE) down --rmi local
	docker compose -f $(COMPOSE_DEV_FILE) down
	docker image prune -f

.PHONY: clean-all
clean-all:
	@echo "警告: すべての Docker リソース（ボリューム含む）を削除します"
	@read -p "続行しますか？ [y/N]: " confirm && [ "$${confirm}" = "y" ] || exit 1
	docker compose -f $(COMPOSE_FILE) down -v --rmi all
	docker compose -f $(COMPOSE_DEV_FILE) down -v
	docker system prune -f
