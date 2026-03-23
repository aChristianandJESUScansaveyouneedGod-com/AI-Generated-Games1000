#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

./scripts/setup.sh

# Validate architecture documentation has required release sections.
required_headers=(
  "# Architecture"
  "## Mission"
  "## Planned Module Topology"
  "## Build Order"
  "## Current State (This Release)"
)

for header in "${required_headers[@]}"; do
  if ! rg -Fq "$header" docs/ARCHITECTURE.md; then
    echo "[test] missing architecture section: $header" >&2
    exit 1
  fi
done

# Validate the browser game's entrypoint wiring.
if ! rg -Fq "<title>Menu Mischief</title>" web/menu-mischief/index.html; then
  echo "[test] menu game title is missing" >&2
  exit 1
fi

if ! rg -Fq "<script src=\"./game.js\" defer></script>" web/menu-mischief/index.html; then
  echo "[test] menu game script link is missing" >&2
  exit 1
fi

echo "[test] all checks passed"
