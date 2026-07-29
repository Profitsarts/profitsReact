# Half Size Image — macOS Service + Shortcut

Servicio de macOS (Automator) que reduce a la mitad la resolución de las imágenes seleccionadas en el Finder. También se puede usar con un atajo de teclado.

## Componentes

- `half-size-image.sh` — script principal que usa `sips` para redimensionar.
- `Half Size Image.workflow` — servicio de Automator que pasa los archivos seleccionados al script.

## Resultado

Para cada imagen seleccionada se genera una copia con el sufijo `_half`. Por ejemplo:

```
foto.jpg        → foto_half.jpg
imagen.png      → imagen_half.png
```

Para sobrescribir el archivo original en lugar de crear una copia, edita la variable `OVERWRITE_IN_PLACE` en el script:

```bash
OVERWRITE_IN_PLACE="true"
```

## Instalación

### 1. Instalar el script

Copia el script a `/usr/local/bin` y dale permisos de ejecución:

```bash
sudo cp half-size-image.sh /usr/local/bin/
sudo chmod +x /usr/local/bin/half-size-image.sh
```

### 2. Instalar el servicio

Copia el workflow a `~/Library/Services`:

```bash
cp -R "Half Size Image.workflow" ~/Library/Services/
```

### 3. Asignar atajo de teclado

1. Abre **Ajustes del Sistema** → **Teclado** → **Atajos de teclado** → **Funciones rápidas del app**.
2. Pulsa el botón **+**.
3. En **Aplicación** elige **Finder**.
4. En **Título del menú** escribe exactamente: `Half Size Image`
5. Pulsa el atajo que quieras, por ejemplo `⌘ ⇧ M`.
6. Pulsa **Listo**.

> Si no aparece el menú inmediatamente, cierra sesión y vuelve a entrar (o reinicia el Finder con `killall Finder`).

## Uso

- **Desde el Finder**: selecciona una o varias imágenes → clic derecho → **Servicios** → **Half Size Image**.
- **Con atajo**: selecciona imágenes en el Finder y pulsa el atajo que hayas configurado.

## Requisitos

- macOS 10.13 o posterior.
- `sips` (incluido por defecto en macOS).

## Solución de problemas

- **El servicio no aparece**: reinicia Finder (`killall Finder`) o cierra sesión.
- **No se genera el archivo `_half`**: abre `Consola` (`/Applications/Utilities/Console.app`) y filtra por `half-size-image` para ver los mensajes de error.
- **El atajo no funciona**: asegúrate de que el título del menú en Ajustes coincide exactamente con `Half Size Image`.
