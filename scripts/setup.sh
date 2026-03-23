#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

required_files=(
  "README.md"
  "docs/ARCHITECTURE.md"
  "scripts/setup.sh"
  "scripts/test.sh"
  "scripts/package_menu_mischief.sh"
  "web/menu-mischief/index.html"
  "web/menu-mischief/styles.css"
  "web/menu-mischief/game.js"
)

for file in "${required_files[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "[setup] missing required file: $file" >&2
    exit 1
  fi
done

if ! command -v bash >/dev/null 2>&1; then
  echo "[setup] bash is required" >&2
  exit 1
fi

echo "[setup] repository checks passed"
