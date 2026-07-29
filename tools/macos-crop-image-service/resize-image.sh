#!/bin/bash
# resize-image.sh — escala imágenes seleccionadas al tamaño configurado.

SCALE=50  # porcentaje del tamaño original; cambia aquí

for f in "$@"; do
  [ -f "$f" ] || continue
  dir=$(dirname "$f")
  base=$(basename "$f")
  name="${base%.*}"
  ext="${base##*.}"
  out="${dir}/${name}_resized.${ext}"
  sips -Z $(sips -g pixelWidth "$f" | tail -1 | awk '{print int($2*'$SCALE'/100)}') "$f" --out "$out" >/dev/null 2>&1
done
