# Resize Image — macOS Service + Shortcut

Servicio de macOS para escalar imágenes seleccionadas en Finder. Disponible como servicio de Automator y como atajo moderno de Shortcuts.

## Archivos

- `Resize Image.shortcut` — atajo para la app **Shortcuts** de macOS. Es el recomendado si usas Clop.
- `resize-image.sh` — script con `SCALE=50` configurable.
- `Resize Image.workflow` — servicio de Automator (legacy).

## Importar en Shortcuts (recomendado)

1. Doble clic en `Resize Image.shortcut`.
2. Se abre la app **Shortcuts** y aparece la pantalla de importación.
3. Pulsa **Añadir atajo**.
4. Opcional: añade un atajo de teclado en los ajustes del atajo.

## Uso con Clop

Clop puede importar atajos de Shortcuts. Añade `Resize Image` como acción de recorte/redimensionado en la configuración de Clop.

## Instalación legacy (Automator)

```bash
sudo cp tools/macos-crop-image-service/resize-image.sh /usr/local/bin/
sudo chmod +x /usr/local/bin/resize-image.sh
cp -R "tools/macos-crop-image-service/Resize Image.workflow" ~/Library/Services/
```

Edita `SCALE` en `/usr/local/bin/resize-image.sh` si quieres otro porcentaje.

### Atajo de teclado (legacy)

Ajustes del Sistema → Teclado → Atajos → Funciones rápidas del app → +  
- Aplicación: Finder  
- Título del menú: `Resize Image`  
- Atajo: ej. `⌘ ⇧ R`
