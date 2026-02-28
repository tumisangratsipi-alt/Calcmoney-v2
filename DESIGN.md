# Design System: CalcMoney (Aura)

**Project ID:** calcmoney-v4/10m-oled-glass

## 1. Visual Theme & Atmosphere

The $10M SaaS Deep Space Dark Glassmorphism aesthetic is hyper-premium, data-dense yet visually airy, and unapologetically engineered for high-income fintech logic. The atmosphere is stark, void-like, and heavily reliant on volumetric ambient lighting to guide the user's eye instead of harsh structural boxes. It feels like interacting with a futuristic Bloomberg terminal running locally in a pure void.

## 2. Color Palette & Roles

* **OLED Void Black (#090B14)**
  * *Role:* The absolute base layer. Used universally for the `document.body` and deepest component backgrounds to completely erase the edges of monitor screens.
* **Optic White (#FFFFFF)**
  * *Role:* The absolute maximum contrast point. Used strictly for core numerical outputs, mega-headers (`font-black`), and icons to ensure immediate mathematical readability.
* **Diffuse Slate Text (#64748B to #94A3B8)**
  * *Role:* Secondary reading material, input labels, and structural typography. It recedes into the background immediately to prevent eye fatigue.
* **Ghost White Glass (rgba(255, 255, 255, 0.04) to 0.10)**
  * *Role:* Used exclusively for the stroke profiles (`border`) and faint backdrop fills (`bg-white/5`) of card components. This replaces solid lines with a hyper-thin glass refraction effect.
* **Volumetric Terminal Accents (Teal: #14B8A6, Amber: #F59E0B, etc.)**
  * *Role:* Module-specific semantic glows. Emitted via structural CSS `blur-[150px]` elements and used for charting vectors, CTA pulses, and primary action buttons.

## 3. Typography Rules

* **Mega-Headers (Titles):** Sans-serif, extremely heavy (`font-black`), and tightly kerned (`tracking-tighter`). They are treated as architectural blocks rather than text.
* **Terminal Numbers (Data):** Strictly monospace (`font-mono`). Used for all inputs, outputs, charts, and dollar figures to enforce absolute column alignment.
* **Meta Labels (Subtitles):** Explicitly uppercase, extremely small (`text-[10px]`), and heavily spaced out (`tracking-widest`). Used to label inputs and section regions.
* **Narrative Text (Descriptions):** Thin and airy (`font-light`), with highly relaxed line spacing (`leading-relaxed`).

## 4. Component Stylings

* **Aura Panels (Cards/Containers):**
  * *Shape:* Generously rounded corners (`rounded-2xl`).
  * *Texture:* Heavily frosted glass (`backdrop-blur-xl` to `2xl`) sitting on top of the Void Black.
  * *Elevation:* Massive, diffused drop shadows (`shadow-2xl shadow-black/50`) combined with a microscopic inner light-bleed at the top edge (`inset 0 1px 1px rgba(255,255,255,0.2)`). Hover states mechanically push the card down and intensify the glow.
* **Inputs/Forms:**
  * *Shape:* Subtly rounded corners (`rounded-lg`).
  * *Texture:* Hollow or slightly deeper space (`bg-black/40` or `bg-white/5`), wrapped in the uniform 0.04 Ghost White stroke frame.
  * *Focus Behavior:* Focus states trigger a volumetric, colored ring corresponding to the module's accent color (e.g., `focus-visible:ring-teal-500/50`).
* **Buttons:**
  * *Shape:* Structurally matched blocks (`rounded-lg`), bold uppercase typography.
  * *Texture:* Almost completely opaque semantic colors (`bg-teal-600/90`) that cast aggressive, wide-spread neon drop shadows onto the Void Black layer behind them (`shadow-[0_0_20px_rgba(13,148,136,0.2)]`).

## 5. Layout Principles

* **The Blueprint Grid:** The absolute background layer often features a faint 4rem physical structural grid (`[linear-gradient...]`) clipped by a radial shadow mask, mimicking an infinite architect’s drafting table.
* **Terminal Constraints:** Application constraints max out at `max-w-7xl` to maintain scanning density on ultrawide monitors.
* **Guerilla Whitespace:** Component padding is massive (`p-8` to `p-12`), pushing elements heavily apart to allow the raw math to breathe uninterrupted by UI clutter.
* **Asymmetric Data Pillars:** Typical calculator layouts follow a 4-column (Inputs/Parameters) vs 8-column (Outputs/Charts) asymmetrical split grid.
