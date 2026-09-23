# Vibras — generation prompts (Paso 3)

Source synthesis: docs/references/01–07 (Teenage Engineering). References are text-only input; they are NOT uploaded to the generator, to avoid reproducing TE marks ("teenage engineering", K.O. II, TP-7).

## Material synthesis

| Ref | Material taken | Where it lands on Vibras |
|---|---|---|
| 02 TX-6, 05 TP-7 | Bead-blasted solid aluminium, CNC chamfers, diamond knurling | Cup shells, control wheel |
| 01 K.O. II, 03 FREKVENS | Mathematical dot-grid perforation, block-module coupling | Outer cup grille, modules read as coupled blocks |
| 06 CM-15 back | 3-position slide switch "0 I II", orange knob | ANC selector, the only saturated colour |
| 07 CM-15 side | Braided grey steel mesh, pill-shaped recessed ports | Headband inner sheath, USB-C recess |
| 04 Sidekick | Tall lever proportions, silkscreen micro-labels | MOD-01…04 laser labels |
| — (dropped) | Visible Torx screws (07) | Contradicts "tool-free". Only allowed inside the PCB module, never on user-swappable joints |

Model: `gpt_image_2_5`, `--aspect_ratio 16:9`, `--resolution 2k`. Frame B passes Frame A as `--image` to lock camera, light and background.

## Frame A — closed

```
Studio product photograph of the VIBRAS over-ear headphones, fully assembled and closed. Three-quarter front view rotated 30 degrees from the left, camera at ear-cup height, 85mm lens, product centred with generous empty margin on all sides. Pure black seamless background (#000000), no floor line, no environment reflections.

Lighting: one large softbox key light from the upper left, a thin cool rim light from behind right tracing the silhouette, soft shadow falling into black.

Design: utilitarian industrial design. Ear cups are rounded-square shells machined from solid bead-blasted aluminium, light silver-grey, with crisp CNC chamfered edges and a fine circular bayonet seam with two small index notches. The outer face of each cup is a precise grid of small circular perforations. The headband is a flat aluminium arc with a braided grey steel-mesh sheath along its inner edge. Left cup edge: a small 3-position slide switch marked "0 I II" with a safety-orange knob, the only saturated colour in the image. Right cup edge: a cylindrical diamond-knurled aluminium control wheel and a pill-shaped recessed USB-C port. A slim battery cartridge sits flush in the base of the right cup with a small pull tab. Ear cushions: matte charcoal knit fabric over memory foam.

Laser-etched micro labels in tiny black sans-serif capitals: "VIBRAS" on the headband, "MOD-01" and "MOD-03" on the cups, "MOD-02" on the cartridge, "MOD-04" on the headband yoke, with fine tick marks.

Photorealistic, razor sharp, catalogue precision. No other text, no other brand logos, no exterior screws.
```

## Frame B — exploded (reference: Frame A)

```
The SAME VIBRAS headphones as the reference image, with the SAME camera angle, lens, framing, lighting and pure black background. Now shown as a precise exploded view: every module separated along its own axis and floating in mid-air, perfectly aligned, evenly spaced, nothing touching, no motion blur.

Left cup, separated outward along the ear axis in this order: perforated aluminium grille plate, bayonet locking ring, 40mm dynamic driver with visible cone and copper voice coil, inner aluminium acoustic chamber, magnetic knit ear cushion.
Right cup: the same stack, plus the slim battery cartridge slid straight down out of its bay, and a matte black circuit board with one square chip and a thin flex ribbon, lifted out between chamber and cushion.
Headband: the aluminium arc lifted straight up, braided steel-mesh sheath separated just below it, the orange 3-position switch and the knurled control wheel pulled slightly out of their seats.

Every part keeps its exact material, colour and laser-etched label (MOD-01 to MOD-04). The whole assembly stays centred and fits the frame with margin. Photorealistic, razor sharp, catalogue precision.
```

## Colourway — Graphite (reference: Frame A)

Model: `marketing_studio_image`, 16:9, 2k, `--image assets/source/frame-a.png`. Feeds the colour selector (swap with Frame A = "Natural").

```
The SAME VIBRAS headphones as the reference image, with the SAME camera angle, lens, framing, lighting and pure black background. Change only the finish: ear cups, headband and knurled control wheel are now graphite anodised aluminium, a deep charcoal grey with fine bead-blasted texture and crisp lighter chamfer highlights. Laser-etched labels (VIBRAS, MOD-01 to MOD-04, tick marks) are now light grey. The braided mesh sheath is dark grey. Keep the safety-orange switch knob, the charcoal knit cushions, the perforation grid and every shape exactly identical. Photorealistic, razor sharp, catalogue precision.
```

## Materials macro (no reference)

Model: `marketing_studio_image`, 4:5, 2k. Feeds the Materials section.

```
Macro studio photograph, extreme close-up of the edge of a bead-blasted silver aluminium headphone ear cup. In focus: a cylindrical diamond-knurled aluminium control wheel with crisp pyramidal knurling, and next to it a small 3-position slide switch marked "0 I II" in tiny black laser-etched characters, with a safety-orange knob, the only saturated colour. A fine laser-etched label "MOD-03" and precise tick marks on the chamfered edge. Pure black background, one hard key light from the upper left raking across the knurling, shallow depth of field, razor sharp at the knurl. Photorealistic industrial product photography. No other text, no logos.
```
