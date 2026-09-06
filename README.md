# PixelForge 🎨✨

> 🚀 **Live Demo**: [https://yhngong.github.io/pixelforge/](https://yhngong.github.io/pixelforge/)

A lightweight, zero-dependency, in-browser **Pixel Art Editor & Sprite Maker** built with pure HTML5 Canvas, modern CSS, and JavaScript. Designed to run 100% client-side and deploy seamlessly to **GitHub Pages**.

![PixelForge Icon](icon.svg)

---

## Features

- 🖌️ **Full Creative Drawing Suite**:
  - **Pencil (P)**: Continuous or single-pixel drawing.
  - **Paint Bucket (F)**: Instant flood fill for connected color regions.
  - **Eraser (E)**: Erase pixels to transparency.
  - **Color Eyedropper (I)**: Pick colors directly from canvas.
  - **Line Tool (L)**: Pixel-perfect Bresenham line drawing with live preview.
  - **Rectangle Tool (R)** & **Circle Tool (C)**: Geometric shapes.
  - **Lighten / Darken Shading Brush (D)**: Adjust lightness on the fly for depth and shadows.
- 📐 **Multiple Canvas Resolutions**:
  - `8×8`, `16×16`, `24×24`, `32×32`, `48×48`, and `64×64`.
- 🎨 **Retro & Themed Palettes**:
  - **Pico-8** (16 iconic fantasy console colors)
  - **Game Boy DMG-01** (4 classic green shades)
  - **NES / Famicom** (16 classic 8-bit colors)
  - **Cyberpunk Neon** (12 vibrant tones)
  - **Pastel Dream** (12 cute aesthetic hues)
  - **Custom Palette**: Save your own swatches to `localStorage`.
- 👁️ **Live Sprite Previews**:
  - Real-time preview rendered at 1x, 2x, and 4x scale with switchable background themes (dark, light, transparent checkerboard).
- 🔄 **Canvas Transforms & History**:
  - Flip Horizontal, Flip Vertical, Rotate 90°, and Invert Colors.
  - Full Undo (`Ctrl+Z`) and Redo (`Ctrl+Y`) history stack.
- 💾 **Crisp Scalable HD Export**:
  - Export PNG with nearest-neighbor scaling (1x, 4x, 8x, 16x, 32x) so pixel art never gets blurry.
  - Copy image directly to clipboard.
  - Save and load `.json` project files to continue editing anytime.
- 📱 **100% Offline & PWA**:
  - Works completely offline without internet or backend server via Service Worker.

---

## Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| `P` / `B` | Pencil Tool |
| `E` | Eraser Tool |
| `F` / `G` | Paint Bucket / Fill Tool |
| `I` | Eyedropper / Color Picker |
| `L` | Line Tool |
| `R` | Rectangle Tool |
| `C` | Circle Tool |
| `D` | Shading (Lighten / Darken) |
| `Ctrl + Z` / `Cmd + Z` | Undo |
| `Ctrl + Y` / `Cmd + Shift + Z` | Redo |

---

## Local Development

Start a local static server using Python:

```bash
cd /Users/yoletgong/Documents/github/pixelforge
python3 -m http.server 8000
```
Open `http://localhost:8000` in your browser.

---

## Deploy to GitHub Pages

1. Create a repository on GitHub named `pixelforge`:
   ```bash
   cd /Users/yoletgong/Documents/github/pixelforge
   git remote add origin git@github.com:yhngong/pixelforge.git
   git push -u origin main
   ```
2. Navigate to **Settings > Pages** in your GitHub repository.
3. Under **Build and deployment > Source**, choose `Deploy from a branch`.
4. Select branch `main` and folder `/ (root)`, then click **Save**.
5. Your live app will be accessible at:
   `https://yhngong.github.io/pixelforge/`

---

## License

Open source under the [MIT License](LICENSE).
