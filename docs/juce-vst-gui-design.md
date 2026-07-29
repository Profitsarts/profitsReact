# Diseño de GUIs para plugins VST con JUCE

## 1. Arquitectura básica de un plugin JUCE

### Estructura típica
- `PluginProcessor` (`AudioProcessor`): maneja audio, parámetros y estado.
- `PluginEditor` (`AudioProcessorEditor`): la GUI, hereda de `juce::AudioProcessorEditor`.
- JUCE genera formatos VST3, AU, AAX, LV2 y standalone desde el mismo código.

### Ciclo de vida
1. Host instancia el `AudioProcessor`.
2. `createEditor()` devuelve el editor (cuando el host abre la ventana).
3. El editor se vincula al `AudioProcessor` (APVTS recomendado para parámetros).
4. `resized()` y `paint()` se llaman en el hilo de mensajes/GUI.

---

## 2. Sistema de parámetros recomendado

### AudioProcessorValueTreeState (APVTS)
```cpp
juce::AudioProcessorValueTreeState apvts;
```
- Centraliza parámetros, estados y presets.
- Soporta `RangedAudioParameter` (`AudioParameterFloat`, `AudioParameterChoice`, etc.).
- Permite vincular controles de UI vía attachments (`SliderAttachment`, `ButtonAttachment`, `ComboBoxAttachment`).

### Ejemplo de attachment
```cpp
std::unique_ptr<juce::AudioProcessorValueTreeState::SliderAttachment> gainAttachment;

// en constructor del editor:
gainAttachment = std::make_unique<SliderAttachment>(apvts, "gain", gainSlider);
```

---

## 3. Componentes de GUI nativos de JUCE

| Componente | Uso típico |
|---|---|
| `juce::Slider` | knobs, faders |
| `juce::ToggleButton` / `TextButton` | bypass, switches |
| `juce::ComboBox` | selección de modo, algoritmo |
| `juce::Label` | textos estáticos y valores |
| `juce::GroupComponent` | agrupar secciones |
| `juce::TabbedComponent` | páginas de configuración |

### LookAndFeel (LnF)
- Personaliza apariencia de componentes nativos.
- Subclase `juce::LookAndFeel_V4` o `juce::LookAndFeel_V2`.
- Útil para darle identidad visual sin dibujar todo desde cero.

---

## 4. GUI custom: `paint()` y `resized()`

### Estrategias
- **Custom painting**: sobrescribir `paint()` en el editor o en componentes personalizados.
- **Imágenes/vectores**: usar `juce::Image`, `juce::Drawable` (SVG) o `juce::Path`.
- **Film strips**: secuencias de imágenes para knobs animados (técnica común en plugins comerciales).

### Rendimiento
- Evitar allocaciones en `paint()` / `resized()`.
- Cachear imágenes y paths.
- Para animaciones, usar `Timer` o `VBlankAttachment` (JUCE moderno) para sincronizar con refresco de pantalla.

---

## 5. Knobs y controles rotary

### Modos de slider rotary
```cpp
slider.setSliderStyle(juce::Slider::RotaryHorizontalVerticalDrag);
slider.setTextBoxStyle(juce::Slider::NoTextBox, false, 0, 0);
```

### Buenas prácticas
- Distancia visual entre control y parámetro.
- Cursor cambia al drag.
- Indicador claro de valor actual (needle + arco).
- Snap a valores por defecto con doble click o Alt.
- Escalado logarítmico para frecuencias, lineal para ganancia/pan.

---

## 6. Diseño responsive / escalado

### Enfoques
1. **Tamaño fijo**: editor con `setSize(w, h)` fijo. Más simple, menos flexible.
2. **Escalado por factor**: detectar `Desktop::getDisplays()` y aplicar `setScaleFactor`.
3. **Layout proporcional**: `juce::Grid`, `juce::FlexBox`, o layout manual basado en bounds relativos.

### HiDPI / retina
- JUCE maneja automáticamente `scaleFactor` en muchos hosts.
- Proporcionar assets a 1x y 2x (o usar SVG).
- Probar en Windows con escalados 125%, 150%, 175%.

---

## 7. Herramientas de diseño visual

| Herramienta | Uso |
|---|---|
| **Figma / Sketch / Illustrator** | mockups, exportar SVG/PNG assets |
| **Plugin GUI Magician (JUCE)** | layout declarativo XML/JSON (experimental) |
| **Blueprint (JUCE)** | UI declarativa con React.js (descontinuado, pero referencia) |
| **SVG directo** | JUCE parsea SVG con `juce::Drawable::createFromSVGData()` |

### Workflow recomendado
1. Mockup completo en Figma.
2. Definir escala base (ej. 1000x600 a 100%).
3. Exportar assets como SVG cuando sea posible.
4. Implementar layout manual o con FlexBox/Grid.
5. Iterar en DAW/host objetivo.

---

## 8. VST3 específico

- JUCE abstrae VST3/AU, pero hay detalles de host:
  - Tamaño mínimo de ventana.
  - Reescalado forzado por host.
  - Persistencia de estado via `getStateInformation` / `setStateInformation`.
- Usar `AudioProcessor::supportsMPE()` / canales correctamente para evitar rechazos en validadores.

---

## 9. Frameworks y librerías adicionales

| Nombre | Descripción |
|---|---|
| **foleys::MagicPluginEditor** (Plugin GUI Magic) | editor visual basado en JSON, muy productivo |
| **react-juce / blueprint** | UI reactiva con React (estado incierto) |
| **SVG++ / lunasvg** | alternativas si se necesita SVG fuera de JUCE |
| **Dear ImGui** | posible integrar, pero no es el camino estándar en JUCE |

---

## 10. Recursos clave

- [JUCE Learn](https://juce.com/learn)
- [JUCE Forum: GUI](https://forum.juce.com/c/gui/8)
- [The Audio Programmer - JUCE tutorials](https://www.youtube.com/c/TheAudioProgrammer)
- [Plugin GUI Magic](https://github.com/ffAudio/PluginGuiMagic)
- [JUCE VST3 examples](https://github.com/juce-framework/JUCE/tree/master/examples/Plugins)

---

## 11. Checklist para empezar un diseño

- [ ] Definir tamaño base y estrategia de escalado.
- [ ] Crear `AudioProcessorValueTreeState` con todos los parámetros.
- [ ] Mockup visual completo antes de codear.
- [ ] Decidir: ¿componentes nativos + LnF, custom painting o híbrido?
- [ ] Preparar assets (SVG preferible).
- [ ] Implementar editor con attachments.
- [ ] Probar en al menos 2 hosts y escalados de pantalla.
- [ ] Validar con `pluginval` o validador oficial.

---

## 12. Próximos pasos sugeridos

1. Elegir el plugin concreto a diseñar (efecto, sintetizador, utility).
2. Crear el proyecto JUCE (Projucer o CMake).
3. Definir el APVTS y parámetros.
4. Diseñar el mockup visual.
5. Implementar el editor paso a paso.

---

*Nota: este documento se creó para continuar la investigación sobre GUIs de plugins VST en JUCE. Se puede ampliar con ejemplos de código, decisiones de diseño específicas o integración con un proyecto concreto.*