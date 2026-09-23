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

## Front view — eye level (reference: Frame A)

Tool: ChatGPT image generation (user's OpenAI subscription, no Higgsfield spend). Attach `assets/source/frame-a-padded.png`, landscape 3:2 (1536×1024 max). Save result as `assets/source/front-view.png`. Feeds a lower-page section.

```
Use the attached image as the exact product reference. Generate a new studio photograph of the SAME VIBRAS headphones: identical shapes, proportions, materials, colours, perforation grid, orange switch, knurled wheel and laser-etched labels. Change only the camera.

Camera: straight-on front elevation at eye level, lens axis perfectly horizontal on the product's centre line, zero tilt, zero roll, 100mm lens, minimal perspective distortion. The headphones stand upright and perfectly symmetrical: headband arc centred at the top, both ear cups hanging vertically left and right, each cup turned about 20 degrees toward the camera so its perforated aluminium grille is partly visible.

Framing: landscape, product centred, occupying about 60 percent of the frame height, generous empty black space on both sides for text.

Background and light: pure black seamless background (#000000), no floor, no reflection. One large soft key light from the upper left, a thin cool rim light from behind tracing both cup silhouettes and the headband, soft falloff into black. Same lighting mood as the reference.

Photorealistic, razor sharp, catalogue precision. No other text, no logos, no exterior screws, no people.
```

## Lifestyle anchor still — model wearing VIBRAS (Stage 1)

Tool: ChatGPT image generation (user's OpenAI subscription). Attach, in this order: `assets/generated/vibras-left-three-quarter-v2.png` (primary product reference), `assets/generated/vibras-front-elevation-big.png` (secondary). Landscape 3:2. Save as `assets/generated/lifestyle-anchor.png`. Feeds Stage 2 (image-to-video).

```
Use the attached images as the exact product reference for the headphones: identical rounded-square bead-blasted aluminium cups, circular perforation grid, braided grey steel-mesh headband, charcoal knit cushions, the safety-orange 3-position switch on the LEFT cup and the knurled wheel on the RIGHT cup. Do not redesign the headphones.

Cinematic low-key portrait photograph for a full-bleed website banner. An adult model in their late twenties wears the headphones properly over both ears. Head in three-quarter profile, turned toward the right edge of the frame, so the LEFT ear cup faces the camera and its orange switch is clearly visible. Eyes closed, calm, absorbed in the sound. Short or tied-back hair that never covers the ear cups or the headband. Plain dark charcoal knit sweater, no logos.

Composition: landscape, model placed on the left third, head and shoulders only, the headphones sharp and prominent. The right half of the frame is empty near-black space for text.

Light: pure black background falling off to #000000. One soft key light from the front left sculpting the face and the aluminium cup, a thin cool rim light from behind tracing the head, headband and cup edge. The orange switch is the only saturated colour in the image.

Photorealistic, 85mm lens, shallow depth of field focused on the ear cup, fine skin texture, no text, no watermark, no other brands.
```

## Lifestyle motion — ArtCraft, Seedance 2.0 image-to-video (Stage 2)

Input: `assets/generated/lifestyle-anchor.png`. 16:9, highest resolution offered (1080p if available), 5 s, audio off.

Prompt:
```
The model slowly opens their eyes and turns the head about ten degrees toward the camera, then holds a calm, distant gaze. Gentle breathing, a very slow camera push-in, subtle movement in a few strands of hair. The headphones stay rigidly attached to the head and keep their exact shape, materials, perforation grid and orange switch in every frame. Pure black background, same lighting throughout. Smooth, cinematic, realistic motion.
```

Negative prompt (if the tool has the field):
```
headphone deformation, melting or morphing parts, changing colours, extra headphones, text, logos, watermark, flicker, camera shake, fast motion, background change
```
