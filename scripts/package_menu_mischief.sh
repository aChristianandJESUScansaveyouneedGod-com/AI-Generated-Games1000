#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_DIR="$ROOT_DIR/web/menu-mischief"
DIST_DIR="$ROOT_DIR/dist"
OUTPUT_ZIP="$DIST_DIR/menu-mischief.zip"

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "[package] source directory not found: $SOURCE_DIR" >&2
  exit 1
fi

if ! command -v zip >/dev/null 2>&1; then
  echo "[package] zip is required" >&2
  exit 1
fi

mkdir -p "$DIST_DIR"
rm -f "$OUTPUT_ZIP"

(
  cd "$SOURCE_DIR"
  zip -q -r "$OUTPUT_ZIP" .
)

echo "[package] created: $OUTPUT_ZIP"
