#!/bin/bash
# Reduce la resolución de las imágenes seleccionadas a la mitad.
# Uso: half-size-image.sh <imagen1> [<imagen2> ...]
#
# Por defecto crea una copia con el sufijo _half (p.ej. foto.jpg -> foto_half.jpg).
# Cambia OVERWRITE_IN_PLACE a "true" para modificar el archivo original.

OVERWRITE_IN_PLACE="false"

for file in "$@"; do
  if [[ ! -f "$file" ]]; then
    echo "No existe: $file" >&2
    continue
  fi

  # Obtener dimensiones actuales con sips
  width=$(sips -g pixelWidth "$file" | tail -n1 | awk '{print $2}')
  height=$(sips -g pixelHeight "$file" | tail -n1 | awk '{print $2}')

  if [[ -z "$width" || -z "$height" ]]; then
    echo "No se pudo leer dimensiones de: $file" >&2
    continue
  fi

  newWidth=$((width / 2))
  newHeight=$((height / 2))

  # Evitar dimensiones 0x0 en imágenes muy pequeñas
  if [[ "$newWidth" -lt 1 || "$newHeight" -lt 1 ]]; then
    echo "Imagen demasiado pequeña: $file (${width}x${height})" >&2
    continue
  fi

  if [[ "$OVERWRITE_IN_PLACE" == "true" ]]; then
    output="$file"
  else
    base="${file%.*}"
    ext="${file##*.}"
    if [[ "$base" == "$file" ]]; then
      output="${file}_half"
    else
      output="${base}_half.${ext}"
    fi
  fi

  sips -z "$newHeight" "$newWidth" "$file" --out "$output" >/dev/null 2>&1

  if [[ $? -eq 0 ]]; then
    echo "OK: $output (${newWidth}x${newHeight})"
  else
    echo "Error al procesar: $file" >&2
  fi
done
