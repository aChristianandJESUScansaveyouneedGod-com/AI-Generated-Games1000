#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

./scripts/setup.sh

echo "[start] AI-Generated-Games1000 scaffold is ready."
echo "[start] Next step: implement orchestrator core modules described in docs/ARCHITECTURE.md"
