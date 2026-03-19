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

echo "[test] all checks passed"
