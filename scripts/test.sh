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

# Validate downloadable zip packaging.
./scripts/package_menu_mischief.sh

python - <<'PY'
from pathlib import Path
from zipfile import ZipFile

zip_path = Path('dist/menu-mischief.zip')
if not zip_path.is_file():
    raise SystemExit('[test] packaged zip not found: dist/menu-mischief.zip')

with ZipFile(zip_path) as archive:
    names = set(archive.namelist())

required = {'index.html', 'styles.css', 'game.js'}
missing = sorted(required - names)
if missing:
    raise SystemExit(f"[test] packaged zip missing files: {', '.join(missing)}")
PY

echo "[test] all checks passed"
