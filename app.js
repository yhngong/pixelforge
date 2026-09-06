/**
 * PixelForge — In-browser Pixel Art & Sprite Studio
 * Zero-dependency, client-only application.
 */

(() => {
  'use strict';

  // --- Palettes Definition ---
  const PALETTES = {
    pico8: [
      '#000000', '#1D2B53', '#7E2553', '#008751',
      '#AB5236', '#5F574F', '#C2C3C7', '#FFF1E8',
      '#FF004D', '#FFA300', '#FFEC27', '#00E436',
      '#29ADFF', '#83769C', '#FF77A8', '#FFCCAA'
    ],
    gameboy: [
      '#0F380F', '#306230', '#8BAC0F', '#9BBC0F'
    ],
    nes: [
      '#000000', '#FCFCFC', '#7C7C7C', '#BCBCBC',
      '#002288', '#0078F8', '#3CBCFC', '#A4E4FC',
      '#D80058', '#F83800', '#E45C10', '#AC7C00',
      '#006800', '#00A800', '#58D854', '#B8F818'
    ],
    cyberpunk: [
      '#0d0221', '#0f084b', '#26408b', '#a6cfd5',
      '#c2e7d9', '#f72585', '#7209b7', '#3a0ca3',
      '#4361ee', '#4cc9f0', '#ff0055', '#ffe600'
    ],
    pastel: [
      '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf',
      '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff',
      '#fffffc', '#e9edc9', '#d4a373', '#ccd5ae'
    ],
    custom: []
  };

  // --- Sample Sprites ---
  const SAMPLES = {
    heart: {
      size: 16,
      pixels: [
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,"#FF004D","#FF004D",null,null,null,null,"#FF004D","#FF004D",null,null,null,null,null,
        null,null,"#FF004D","#FFF1E8","#FF77A8","#FF004D",null,null,"#FF004D","#FF77A8","#FF77A8","#FF004D",null,null,null,null,
        null,"#FF004D","#FFF1E8","#FFF1E8","#FF77A8","#FF77A8","#FF004D","#FF004D","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF004D",null,null,null,
        null,"#FF004D","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF004D",null,null,null,
        null,"#FF004D","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF004D",null,null,null,
        null,null,"#FF004D","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF004D",null,null,null,null,
        null,null,null,"#FF004D","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF004D",null,null,null,null,null,
        null,null,null,null,"#FF004D","#FF77A8","#FF77A8","#FF77A8","#FF77A8","#FF004D",null,null,null,null,null,null,
        null,null,null,null,null,"#FF004D","#FF77A8","#FF77A8","#FF004D",null,null,null,null,null,null,null,
        null,null,null,null,null,null,"#FF004D","#FF004D",null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null
      ]
    },
    potion: {
      size: 16,
      pixels: [
        null,null,null,null,null,null,"#AB5236","#AB5236","#AB5236","#AB5236",null,null,null,null,null,null,
        null,null,null,null,null,null,null,"#C2C3C7","#C2C3C7",null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,"#C2C3C7","#C2C3C7",null,null,null,null,null,null,null,
        null,null,null,null,null,"#5F574F","#C2C3C7","#C2C3C7","#C2C3C7","#5F574F",null,null,null,null,null,null,
        null,null,null,null,"#5F574F","#29ADFF","#29ADFF","#29ADFF","#29ADFF","#29ADFF","#5F574F",null,null,null,null,null,
        null,null,null,"#5F574F","#29ADFF","#FFF1E8","#29ADFF","#29ADFF","#29ADFF","#29ADFF","#008751","#5F574F",null,null,null,null,
        null,null,"#5F574F","#29ADFF","#FFF1E8","#29ADFF","#29ADFF","#008751","#008751","#008751","#008751","#008751","#5F574F",null,null,null,
        null,null,"#5F574F","#29ADFF","#29ADFF","#29ADFF","#008751","#00E436","#00E436","#008751","#008751","#008751","#5F574F",null,null,null,
        null,null,"#5F574F","#29ADFF","#29ADFF","#008751","#00E436","#FFF1E8","#00E436","#008751","#008751","#008751","#5F574F",null,null,null,
        null,null,"#5F574F","#008751","#008751","#00E436","#00E436","#00E436","#008751","#008751","#008751","#1D2B53","#5F574F",null,null,null,
        null,null,"#5F574F","#008751","#008751","#008751","#008751","#008751","#008751","#1D2B53","#1D2B53","#1D2B53","#5F574F",null,null,null,
        null,null,"#5F574F","#008751","#008751","#008751","#1D2B53","#1D2B53","#1D2B53","#1D2B53","#1D2B53","#1D2B53","#5F574F",null,null,null,
        null,null,null,"#5F574F","#1D2B53","#1D2B53","#1D2B53","#1D2B53","#1D2B53","#1D2B53","#1D2B53","#5F574F",null,null,null,null,
        null,null,null,null,"#5F574F","#5F574F","#5F574F","#5F574F","#5F574F","#5F574F","#5F574F",null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null
      ]
    },
    sword: {
      size: 16,
      pixels: [
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#C2C3C7","#FFF1E8",
        null,null,null,null,null,null,null,null,null,null,null,null,null,"#C2C3C7","#FFF1E8","#C2C3C7",
        null,null,null,null,null,null,null,null,null,null,null,null,"#C2C3C7","#FFF1E8","#C2C3C7",null,
        null,null,null,null,null,null,null,null,null,null,null,"#C2C3C7","#FFF1E8","#C2C3C7",null,null,
        null,null,null,null,null,null,null,null,null,null,"#C2C3C7","#FFF1E8","#C2C3C7",null,null,null,
        null,null,null,null,null,null,null,null,null,"#C2C3C7","#FFF1E8","#C2C3C7",null,null,null,null,
        null,null,null,null,null,null,null,null,"#C2C3C7","#FFF1E8","#C2C3C7",null,null,null,null,null,
        null,null,null,null,null,null,null,"#C2C3C7","#FFF1E8","#C2C3C7",null,null,null,null,null,null,
        null,null,null,null,null,null,"#FFA300","#C2C3C7","#C2C3C7",null,null,null,null,null,null,null,
        null,null,null,null,"#FFA300","#FFA300","#FFA300","#FFA300",null,null,null,null,null,null,null,null,
        null,null,null,"#FFA300","#FFEC27","#FFA300",null,null,null,null,null,null,null,null,null,null,
        null,null,"#AB5236","#FFA300",null,null,null,null,null,null,null,null,null,null,null,null,
        null,"#AB5236","#AB5236",null,null,null,null,null,null,null,null,null,null,null,null,null,
        "#FFA300","#AB5236",null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        "#FFEC27","#FFA300",null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null
      ]
    },
    invader: {
      size: 16,
      pixels: [
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,"#00E436",null,null,null,null,null,null,"#00E436",null,null,null,null,
        null,null,null,null,null,"#00E436",null,null,null,null,"#00E436",null,null,null,null,null,
        null,null,null,null,"#00E436","#00E436","#00E436","#00E436","#00E436","#00E436","#00E436","#00E436",null,null,null,null,
        null,null,null,"#00E436","#00E436","#000000","#00E436","#00E436","#00E436","#000000","#00E436","#00E436",null,null,null,null,
        null,null,"#00E436","#00E436","#00E436","#00E436","#00E436","#00E436","#00E436","#00E436","#00E436","#00E436","#00E436",null,null,null,
        null,null,"#00E436",null,"#00E436","#00E436","#00E436","#00E436","#00E436","#00E436","#00E436",null,"#00E436",null,null,null,
        null,null,"#00E436",null,"#00E436",null,null,null,null,null,"#00E436",null,"#00E436",null,null,null,
        null,null,null,null,null,"#00E436","#00E436",null,null,"#00E436","#00E436",null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null
      ]
    }
  };

  // --- State Variables ---
  let gridSize = 16;
  let pixels = []; // Array of length gridSize * gridSize, each either hex string or null
  let currentTool = 'pencil';
  let currentColor = '#6366F1';
  let isPointerDown = false;
  let strokeStartCoord = null;
  let lastDrawnCoord = null;
  let showGrid = true;
  let zoomLevel = 1.0;
  let customPalette = [];

  // Undo / Redo Stacks
  const undoStack = [];
  const redoStack = [];
  const MAX_HISTORY = 40;

  // --- DOM Elements ---
  const pixelCanvas = document.getElementById('pixelCanvas');
  const pixelCtx = pixelCanvas.getContext('2d');
  const gridOverlayCanvas = document.getElementById('gridOverlayCanvas');
  const gridCtx = gridOverlayCanvas.getContext('2d');
  const gridOverlay = document.getElementById('gridOverlay');
  const pixelHoverBox = document.getElementById('pixelHoverBox');
  const canvasStage = document.getElementById('canvasStage');
  const canvasViewport = document.getElementById('canvasViewport');
  const coordsPill = document.getElementById('coordsPill');

  const selectCanvasSize = document.getElementById('selectCanvasSize');
  const selectSamplePreset = document.getElementById('selectSamplePreset');
  const btnUndo = document.getElementById('btnUndo');
  const btnRedo = document.getElementById('btnRedo');
  const btnToggleGrid = document.getElementById('btnToggleGrid');
  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const zoomLevelIndicator = document.getElementById('zoomLevelIndicator');
  const btnClearCanvas = document.getElementById('btnClearCanvas');

  const toolButtons = document.querySelectorAll('.tool-btn[data-tool]');
  const nativeColorPicker = document.getElementById('nativeColorPicker');
  const currentColorPreview = document.getElementById('currentColorPreview');
  const hexColorInput = document.getElementById('hexColorInput');
  const btnAddSwatch = document.getElementById('btnAddSwatch');
  const selectPalettePreset = document.getElementById('selectPalettePreset');
  const paletteSwatches = document.getElementById('paletteSwatches');

  const previewBox = document.getElementById('previewBox');
  const previewCanvas1x = document.getElementById('previewCanvas1x');
  const previewCtx1x = previewCanvas1x.getContext('2d');
  const previewCanvas2x = document.getElementById('previewCanvas2x');
  const previewCtx2x = previewCanvas2x.getContext('2d');
  const previewCanvas4x = document.getElementById('previewCanvas4x');
  const previewCtx4x = previewCanvas4x.getContext('2d');
  const bgSwitchers = document.querySelectorAll('.bg-switch-dot');

  const btnFlipH = document.getElementById('btnFlipH');
  const btnFlipV = document.getElementById('btnFlipV');
  const btnRotate90 = document.getElementById('btnRotate90');
  const btnInvertColors = document.getElementById('btnInvertColors');

  const btnOpenExportModal = document.getElementById('btnOpenExportModal');
  const exportModal = document.getElementById('exportModal');
  const btnCloseExportModal = document.getElementById('btnCloseExportModal');
  const exportPreviewCanvas = document.getElementById('exportPreviewCanvas');
  const exportPreviewCtx = exportPreviewCanvas.getContext('2d');
  const exportPreviewImg = document.getElementById('exportPreviewImg');
  const btnSharePhotos = document.getElementById('btnSharePhotos');
  const selectExportScale = document.getElementById('selectExportScale');
  const exportDimensionLabel = document.getElementById('exportDimensionLabel');
  const btnDownloadPNG = document.getElementById('btnDownloadPNG');
  const btnCopyPNG = document.getElementById('btnCopyPNG');
  const btnSaveProject = document.getElementById('btnSaveProject');
  const inputFileProject = document.getElementById('inputFileProject');
  const toast = document.getElementById('toast');

  // --- Initialize App ---
  function init() {
    loadSavedCustomPalette();
    initCanvasSize(16);
    setupEventListeners();
    setupKeyboardShortcuts();
    renderPalette('pico8');
    loadSample('potion'); // Preload cool sample
    registerServiceWorker();
  }

  // --- Canvas Setup & Resizing ---
  function initCanvasSize(size) {
    gridSize = size;
    canvasStage.style.setProperty('--grid-size', gridSize);
    pixels = new Array(gridSize * gridSize).fill(null);

    pixelCanvas.width = gridSize;
    pixelCanvas.height = gridSize;
    gridOverlayCanvas.width = gridSize;
    gridOverlayCanvas.height = gridSize;

    previewCanvas1x.width = gridSize;
    previewCanvas1x.height = gridSize;
    previewCanvas2x.width = gridSize * 2;
    previewCanvas2x.height = gridSize * 2;
    previewCanvas4x.width = gridSize * 4;
    previewCanvas4x.height = gridSize * 4;

    undoStack.length = 0;
    redoStack.length = 0;
    updateUndoRedoButtons();

    calculateAutoZoom();
    redrawCanvas();
    redrawGrid();
    updatePreviews();
  }

  function calculateAutoZoom() {
    // Choose nice display pixel scale according to grid size and available viewport
    const vpWidth = canvasViewport ? canvasViewport.clientWidth : window.innerWidth * 0.6;
    const vpHeight = canvasViewport ? canvasViewport.clientHeight : window.innerHeight * 0.6;
    const maxAvailable = Math.min(vpWidth - 36, vpHeight - 36, 520);
    const pixelScale = Math.max(1, Math.floor(maxAvailable / gridSize));
    const targetSize = Math.max(200, gridSize * pixelScale);

    canvasStage.style.width = `${targetSize}px`;
    canvasStage.style.height = `${targetSize}px`;

    zoomLevel = 1.0;
    zoomLevelIndicator.textContent = '100%';
    applyZoom();
  }

  function applyZoom() {
    canvasStage.style.transform = `scale(${zoomLevel})`;
    zoomLevelIndicator.textContent = `${Math.round(zoomLevel * 100)}%`;
  }

  // --- Rendering Functions ---
  function redrawCanvas() {
    pixelCtx.clearRect(0, 0, gridSize, gridSize);
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const color = pixels[y * gridSize + x];
        if (color) {
          pixelCtx.fillStyle = color;
          pixelCtx.fillRect(x, y, 1, 1);
        }
      }
    }
  }

  function redrawGrid() {
    gridCtx.clearRect(0, 0, gridSize, gridSize);
    if (gridOverlay) {
      gridOverlay.style.display = showGrid ? 'block' : 'none';
    }
  }

  function updatePreviews() {
    [previewCtx1x, previewCtx2x, previewCtx4x].forEach((ctx) => {
      ctx.imageSmoothingEnabled = false;
    });

    previewCtx1x.clearRect(0, 0, gridSize, gridSize);
    previewCtx1x.drawImage(pixelCanvas, 0, 0);

    previewCtx2x.clearRect(0, 0, gridSize * 2, gridSize * 2);
    previewCtx2x.drawImage(pixelCanvas, 0, 0, gridSize * 2, gridSize * 2);

    previewCtx4x.clearRect(0, 0, gridSize * 4, gridSize * 4);
    previewCtx4x.drawImage(pixelCanvas, 0, 0, gridSize * 4, gridSize * 4);

    // Hide 4x when canvas is 48 or 64 so previews fit neatly within the sidebar without overflow
    const previewItem4x = document.getElementById('previewItem4x');
    if (previewItem4x) {
      previewItem4x.style.display = gridSize >= 48 ? 'none' : 'flex';
    }
  }

  // --- History (Undo / Redo) ---
  function pushUndo() {
    undoStack.push([...pixels]);
    if (undoStack.length > MAX_HISTORY) undoStack.shift();
    redoStack.length = 0;
    updateUndoRedoButtons();
  }

  function undo() {
    if (undoStack.length === 0) return;
    redoStack.push([...pixels]);
    pixels = undoStack.pop();
    redrawCanvas();
    updatePreviews();
    updateUndoRedoButtons();
    showToast('Undo');
  }

  function redo() {
    if (redoStack.length === 0) return;
    undoStack.push([...pixels]);
    pixels = redoStack.pop();
    redrawCanvas();
    updatePreviews();
    updateUndoRedoButtons();
    showToast('Redo');
  }

  function updateUndoRedoButtons() {
    btnUndo.disabled = undoStack.length === 0;
    btnRedo.disabled = redoStack.length === 0;
  }

  // --- Pixel Manipulation & Tools ---
  function getPixelCoord(e) {
    const rect = canvasStage.getBoundingClientRect();
    let clientX = e.clientX;
    let clientY = e.clientY;

    if (clientX === undefined && e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if (clientX === undefined && e.changedTouches && e.changedTouches.length > 0) {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
    }

    if (clientX === undefined || clientY === undefined || rect.width === 0 || rect.height === 0) {
      return { x: 0, y: 0 };
    }

    const scaleX = gridSize / rect.width;
    const scaleY = gridSize / rect.height;

    const x = Math.floor((clientX - rect.left) * scaleX);
    const y = Math.floor((clientY - rect.top) * scaleY);

    return {
      x: Math.max(0, Math.min(gridSize - 1, x)),
      y: Math.max(0, Math.min(gridSize - 1, y))
    };
  }

  function setPixel(x, y, color) {
    if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) return;
    pixels[y * gridSize + x] = color;
  }

  function getPixel(x, y) {
    if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) return null;
    return pixels[y * gridSize + x];
  }

  function handlePointerDown(e) {
    isPointerDown = true;
    const coord = getPixelCoord(e);
    strokeStartCoord = coord;
    lastDrawnCoord = coord;
    pushUndo();

    if (currentTool === 'pencil') {
      setPixel(coord.x, coord.y, currentColor);
      redrawCanvas();
      updatePreviews();
    } else if (currentTool === 'eraser') {
      setPixel(coord.x, coord.y, null);
      redrawCanvas();
      updatePreviews();
    } else if (currentTool === 'bucket') {
      floodFill(coord.x, coord.y, currentColor);
      redrawCanvas();
      updatePreviews();
    } else if (currentTool === 'eyedropper') {
      const picked = getPixel(coord.x, coord.y);
      if (picked) selectColor(picked);
    } else if (currentTool === 'shade') {
      applyShade(coord.x, coord.y, e.shiftKey ? 1.2 : 0.8);
      redrawCanvas();
      updatePreviews();
    }
  }

  function handlePointerMove(e) {
    const coord = getPixelCoord(e);
    coordsPill.textContent = `X: ${coord.x}, Y: ${coord.y}`;

    if (pixelHoverBox) {
      pixelHoverBox.style.display = 'block';
      pixelHoverBox.style.transform = `translate(${coord.x * 100}%, ${coord.y * 100}%)`;
    }

    if (!isPointerDown) return;

    if (currentTool === 'pencil') {
      if (lastDrawnCoord) {
        const line = getLinePoints(lastDrawnCoord.x, lastDrawnCoord.y, coord.x, coord.y);
        line.forEach((p) => setPixel(p.x, p.y, currentColor));
      } else {
        setPixel(coord.x, coord.y, currentColor);
      }
      lastDrawnCoord = coord;
      redrawCanvas();
      updatePreviews();
    } else if (currentTool === 'eraser') {
      if (lastDrawnCoord) {
        const line = getLinePoints(lastDrawnCoord.x, lastDrawnCoord.y, coord.x, coord.y);
        line.forEach((p) => setPixel(p.x, p.y, null));
      } else {
        setPixel(coord.x, coord.y, null);
      }
      lastDrawnCoord = coord;
      redrawCanvas();
      updatePreviews();
    } else if (['line', 'rect', 'circle'].includes(currentTool)) {
      renderShapePreview(strokeStartCoord, coord, currentTool);
    } else if (currentTool === 'shade') {
      applyShade(coord.x, coord.y, e.shiftKey ? 1.2 : 0.8);
      redrawCanvas();
      updatePreviews();
    }
  }

  function handlePointerUp(e) {
    if (!isPointerDown) return;
    isPointerDown = false;
    lastDrawnCoord = null;

    if (['line', 'rect', 'circle'].includes(currentTool)) {
      const coord = getPixelCoord(e);
      commitShape(strokeStartCoord, coord, currentTool);
      gridCtx.clearRect(0, 0, gridSize, gridSize);
      redrawCanvas();
      updatePreviews();
    }
  }

  // Flood Fill Algorithm
  function floodFill(startX, startY, fillColor) {
    const targetColor = getPixel(startX, startY);
    if (targetColor === fillColor) return;

    const queue = [[startX, startY]];
    const visited = new Uint8Array(gridSize * gridSize);

    while (queue.length > 0) {
      const [cx, cy] = queue.pop();
      const idx = cy * gridSize + cx;

      if (visited[idx]) continue;
      visited[idx] = 1;

      if (getPixel(cx, cy) === targetColor) {
        setPixel(cx, cy, fillColor);

        if (cx > 0) queue.push([cx - 1, cy]);
        if (cx < gridSize - 1) queue.push([cx + 1, cy]);
        if (cy > 0) queue.push([cx, cy - 1]);
        if (cy < gridSize - 1) queue.push([cx, cy + 1]);
      }
    }
  }

  // Shading tool (adjust lightness)
  function applyShade(x, y, factor) {
    const current = getPixel(x, y);
    if (!current) return;
    const rgb = hexToRgb(current);
    if (!rgb) return;

    const newR = Math.min(255, Math.max(0, Math.round(rgb.r * factor)));
    const newG = Math.min(255, Math.max(0, Math.round(rgb.g * factor)));
    const newB = Math.min(255, Math.max(0, Math.round(rgb.b * factor)));

    setPixel(x, y, rgbToHex(newR, newG, newB));
  }

  // Bresenham's line algorithm
  function getLinePoints(x0, y0, x1, y1) {
    const points = [];
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;

    let cx = x0;
    let cy = y0;
    while (true) {
      points.push({ x: cx, y: cy });
      if (cx === x1 && cy === y1) break;
      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        cx += sx;
      }
      if (e2 < dx) {
        err += dx;
        cy += sy;
      }
    }
    return points;
  }

  function renderShapePreview(start, end, shape) {
    gridCtx.clearRect(0, 0, gridSize, gridSize);
    gridCtx.fillStyle = currentColor;

    if (shape === 'line') {
      const points = getLinePoints(start.x, start.y, end.x, end.y);
      points.forEach((p) => gridCtx.fillRect(p.x, p.y, 1, 1));
    } else if (shape === 'rect') {
      const xMin = Math.min(start.x, end.x);
      const xMax = Math.max(start.x, end.x);
      const yMin = Math.min(start.y, end.y);
      const yMax = Math.max(start.y, end.y);

      for (let x = xMin; x <= xMax; x++) {
        gridCtx.fillRect(x, yMin, 1, 1);
        gridCtx.fillRect(x, yMax, 1, 1);
      }
      for (let y = yMin; y <= yMax; y++) {
        gridCtx.fillRect(xMin, y, 1, 1);
        gridCtx.fillRect(xMax, y, 1, 1);
      }
    } else if (shape === 'circle') {
      const radius = Math.round(Math.hypot(end.x - start.x, end.y - start.y));
      for (let y = -radius; y <= radius; y++) {
        for (let x = -radius; x <= radius; x++) {
          if (Math.round(Math.hypot(x, y)) === radius) {
            const px = start.x + x;
            const py = start.y + y;
            if (px >= 0 && px < gridSize && py >= 0 && py < gridSize) {
              gridCtx.fillRect(px, py, 1, 1);
            }
          }
        }
      }
    }
  }

  function commitShape(start, end, shape) {
    if (shape === 'line') {
      const points = getLinePoints(start.x, start.y, end.x, end.y);
      points.forEach((p) => setPixel(p.x, p.y, currentColor));
    } else if (shape === 'rect') {
      const xMin = Math.min(start.x, end.x);
      const xMax = Math.max(start.x, end.x);
      const yMin = Math.min(start.y, end.y);
      const yMax = Math.max(start.y, end.y);

      for (let x = xMin; x <= xMax; x++) {
        setPixel(x, yMin, currentColor);
        setPixel(x, yMax, currentColor);
      }
      for (let y = yMin; y <= yMax; y++) {
        setPixel(xMin, y, currentColor);
        setPixel(xMax, y, currentColor);
      }
    } else if (shape === 'circle') {
      const radius = Math.round(Math.hypot(end.x - start.x, end.y - start.y));
      for (let y = -radius; y <= radius; y++) {
        for (let x = -radius; x <= radius; x++) {
          if (Math.round(Math.hypot(x, y)) === radius) {
            setPixel(start.x + x, start.y + y, currentColor);
          }
        }
      }
    }
  }

  // --- Canvas Transforms ---
  function flipHorizontal() {
    pushUndo();
    const next = new Array(gridSize * gridSize).fill(null);
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        next[y * gridSize + (gridSize - 1 - x)] = pixels[y * gridSize + x];
      }
    }
    pixels = next;
    redrawCanvas();
    updatePreviews();
  }

  function flipVertical() {
    pushUndo();
    const next = new Array(gridSize * gridSize).fill(null);
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        next[(gridSize - 1 - y) * gridSize + x] = pixels[y * gridSize + x];
      }
    }
    pixels = next;
    redrawCanvas();
    updatePreviews();
  }

  function rotate90() {
    pushUndo();
    const next = new Array(gridSize * gridSize).fill(null);
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        next[x * gridSize + (gridSize - 1 - y)] = pixels[y * gridSize + x];
      }
    }
    pixels = next;
    redrawCanvas();
    updatePreviews();
  }

  function invertColors() {
    pushUndo();
    for (let i = 0; i < pixels.length; i++) {
      const color = pixels[i];
      if (color) {
        const rgb = hexToRgb(color);
        if (rgb) {
          pixels[i] = rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b);
        }
      }
    }
    redrawCanvas();
    updatePreviews();
  }

  // --- Color Selection & Palettes ---
  function selectColor(hex) {
    currentColor = hex.toUpperCase();
    nativeColorPicker.value = currentColor;
    currentColorPreview.style.backgroundColor = currentColor;
    hexColorInput.value = currentColor;

    document.querySelectorAll('.swatch').forEach((s) => {
      s.classList.toggle('active', s.dataset.color.toUpperCase() === currentColor);
    });
  }

  function renderPalette(presetKey) {
    paletteSwatches.innerHTML = '';
    const colors = presetKey === 'custom' ? customPalette : (PALETTES[presetKey] || PALETTES.pico8);

    colors.forEach((color) => {
      const swatch = document.createElement('div');
      swatch.className = `swatch ${color.toUpperCase() === currentColor ? 'active' : ''}`;
      swatch.style.backgroundColor = color;
      swatch.dataset.color = color;
      swatch.title = color;

      swatch.addEventListener('click', () => selectColor(color));

      // Right click to remove swatch if in custom mode
      if (presetKey === 'custom') {
        swatch.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          customPalette = customPalette.filter((c) => c !== color);
          saveCustomPalette();
          renderPalette('custom');
        });
      }

      paletteSwatches.appendChild(swatch);
    });
  }

  function saveCustomPalette() {
    try {
      localStorage.setItem('pixelforge_palette', JSON.stringify(customPalette));
    } catch (e) {}
  }

  function loadSavedCustomPalette() {
    try {
      const saved = localStorage.getItem('pixelforge_palette');
      if (saved) customPalette = JSON.parse(saved);
    } catch (e) {
      customPalette = [];
    }
  }

  // --- Sample Sprites Loading ---
  function loadSample(key) {
    const sample = SAMPLES[key];
    if (!sample) return;

    selectCanvasSize.value = sample.size;
    gridSize = sample.size;
    initCanvasSize(sample.size);
    pixels = [...sample.pixels];

    redrawCanvas();
    updatePreviews();
    showToast(`Loaded ${key} sprite`);
  }

  // --- Exporting & Project IO ---
  function openExportModal() {
    exportModal.classList.remove('hidden');
    updateExportPreview();
  }

  function closeExportModal() {
    exportModal.classList.add('hidden');
  }

  function updateExportPreview() {
    const scale = parseInt(selectExportScale.value, 10);
    const targetSize = gridSize * scale;

    exportPreviewCanvas.width = targetSize;
    exportPreviewCanvas.height = targetSize;
    exportPreviewCtx.imageSmoothingEnabled = false;
    exportPreviewCtx.clearRect(0, 0, targetSize, targetSize);
    exportPreviewCtx.drawImage(pixelCanvas, 0, 0, targetSize, targetSize);

    const dataUrl = exportPreviewCanvas.toDataURL('image/png');
    if (exportPreviewImg) {
      exportPreviewImg.src = dataUrl;
    }

    exportDimensionLabel.textContent = `Dimensions: ${targetSize} × ${targetSize} px`;
  }

  async function shareOrSaveToPhotos() {
    const scale = parseInt(selectExportScale.value, 10);
    const targetSize = gridSize * scale;

    const outCanvas = document.createElement('canvas');
    outCanvas.width = targetSize;
    outCanvas.height = targetSize;
    const outCtx = outCanvas.getContext('2d');
    outCtx.imageSmoothingEnabled = false;
    outCtx.drawImage(pixelCanvas, 0, 0, targetSize, targetSize);

    outCanvas.toBlob(async (blob) => {
      if (!blob) {
        showToast('Failed to create image');
        return;
      }

      const filename = `pixelforge-${gridSize}x${gridSize}-${scale}x.png`;
      const file = new File([blob], filename, { type: 'image/png' });

      // If Web Share API with file sharing is supported (iOS 15+, modern mobile & desktop Safari)
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: 'PixelForge Artwork',
            text: `PixelForge artwork (${targetSize}×${targetSize}px)`
          });
          showToast('Opened iOS Share Sheet!');
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.warn('Share error:', err);
            downloadPNG();
          }
        }
      } else {
        // Fallback for browsers lacking Web Share file support
        downloadPNG();
        showToast('PNG Downloaded! (On iOS: touch & hold image to save)');
      }
    }, 'image/png');
  }

  function downloadPNG() {
    const scale = parseInt(selectExportScale.value, 10);
    const targetSize = gridSize * scale;

    const outCanvas = document.createElement('canvas');
    outCanvas.width = targetSize;
    outCanvas.height = targetSize;
    const outCtx = outCanvas.getContext('2d');
    outCtx.imageSmoothingEnabled = false;
    outCtx.drawImage(pixelCanvas, 0, 0, targetSize, targetSize);

    const a = document.createElement('a');
    a.download = `pixelforge-${gridSize}x${gridSize}-${scale}x.png`;
    a.href = outCanvas.toDataURL('image/png');
    a.click();
    showToast('PNG Downloaded!');
  }

  async function copyPNGToClipboard() {
    const scale = parseInt(selectExportScale.value, 10);
    const targetSize = gridSize * scale;

    const outCanvas = document.createElement('canvas');
    outCanvas.width = targetSize;
    outCanvas.height = targetSize;
    const outCtx = outCanvas.getContext('2d');
    outCtx.imageSmoothingEnabled = false;
    outCtx.drawImage(pixelCanvas, 0, 0, targetSize, targetSize);

    try {
      outCanvas.toBlob(async (blob) => {
        if (blob && navigator.clipboard && navigator.clipboard.write) {
          await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
          showToast('Image copied to clipboard!');
        } else {
          showToast('Direct image copy not supported in browser');
        }
      });
    } catch (e) {
      showToast('Clipboard permission denied');
    }
  }

  function saveProjectJSON() {
    const project = {
      app: 'PixelForge',
      version: 1,
      size: gridSize,
      pixels: pixels,
      timestamp: new Date().toISOString()
    };
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(project, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = `pixelforge-project-${gridSize}x${gridSize}.json`;
    a.click();
    showToast('Project JSON Saved!');
  }

  function loadProjectJSON(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const project = JSON.parse(event.target.result);
        if (project && project.pixels && project.size) {
          selectCanvasSize.value = project.size;
          gridSize = project.size;
          initCanvasSize(project.size);
          pixels = project.pixels;
          redrawCanvas();
          updatePreviews();
          closeExportModal();
          showToast('Project loaded successfully!');
        }
      } catch (err) {
        showToast('Invalid project JSON file');
      }
    };
    reader.readAsText(file);
  }

  // --- Event Listeners Setup ---
  function setupEventListeners() {
    // Tool buttons
    toolButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        toolButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentTool = btn.dataset.tool;
      });
    });

    // Canvas Pointer Events
    canvasStage.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    canvasStage.addEventListener('pointerleave', () => {
      if (pixelHoverBox && !isPointerDown) {
        pixelHoverBox.style.display = 'none';
      }
    });

    window.addEventListener('resize', calculateAutoZoom);

    // Canvas Size Select
    selectCanvasSize.addEventListener('change', (e) => {
      const newSize = parseInt(e.target.value, 10);
      if (confirm(`Change canvas to ${newSize}×${newSize}? Current drawing will be cleared.`)) {
        initCanvasSize(newSize);
      } else {
        selectCanvasSize.value = gridSize;
      }
    });

    // Preset Sample Select
    selectSamplePreset.addEventListener('change', (e) => {
      loadSample(e.target.value);
    });

    // Grid toggle
    btnToggleGrid.addEventListener('click', () => {
      showGrid = !showGrid;
      btnToggleGrid.classList.toggle('active', showGrid);
      redrawGrid();
    });

    // Zoom Controls
    btnZoomIn.addEventListener('click', () => {
      if (zoomLevel < 3.0) {
        zoomLevel += 0.2;
        applyZoom();
      }
    });

    btnZoomOut.addEventListener('click', () => {
      if (zoomLevel > 0.5) {
        zoomLevel -= 0.2;
        applyZoom();
      }
    });

    // History buttons
    btnUndo.addEventListener('click', undo);
    btnRedo.addEventListener('click', redo);

    // Clear Canvas
    btnClearCanvas.addEventListener('click', () => {
      if (confirm('Clear entire canvas?')) {
        pushUndo();
        pixels.fill(null);
        redrawCanvas();
        updatePreviews();
      }
    });

    // Color pickers
    nativeColorPicker.addEventListener('input', (e) => selectColor(e.target.value));
    hexColorInput.addEventListener('change', (e) => {
      const val = e.target.value.trim();
      if (/^#[0-9A-F]{6}$/i.test(val)) {
        selectColor(val);
      }
    });

    // Add swatch button
    btnAddSwatch.addEventListener('click', () => {
      if (!customPalette.includes(currentColor)) {
        customPalette.push(currentColor);
        saveCustomPalette();
        selectPalettePreset.value = 'custom';
        renderPalette('custom');
        showToast('Color saved to swatches!');
      }
    });

    selectPalettePreset.addEventListener('change', (e) => {
      renderPalette(e.target.value);
    });

    // Preview background switcher
    bgSwitchers.forEach((btn) => {
      btn.addEventListener('click', () => {
        bgSwitchers.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const bg = btn.dataset.bg;
        previewBox.className = `preview-display-box bg-${bg}`;
      });
    });

    // Transforms
    btnFlipH.addEventListener('click', flipHorizontal);
    btnFlipV.addEventListener('click', flipVertical);
    btnRotate90.addEventListener('click', rotate90);
    btnInvertColors.addEventListener('click', invertColors);

    // Export Modal
    btnOpenExportModal.addEventListener('click', openExportModal);
    btnCloseExportModal.addEventListener('click', closeExportModal);
    exportModal.addEventListener('click', (e) => {
      if (e.target === exportModal) closeExportModal();
    });
    selectExportScale.addEventListener('change', updateExportPreview);
    btnSharePhotos.addEventListener('click', shareOrSaveToPhotos);
    btnDownloadPNG.addEventListener('click', downloadPNG);
    btnCopyPNG.addEventListener('click', copyPNGToClipboard);

    btnSaveProject.addEventListener('click', saveProjectJSON);
    inputFileProject.addEventListener('change', loadProjectJSON);
  }

  // --- Keyboard Shortcuts ---
  function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        redo();
      } else if (e.key.toLowerCase() === 'p' || e.key.toLowerCase() === 'b') {
        setTool('pencil');
      } else if (e.key.toLowerCase() === 'e') {
        setTool('eraser');
      } else if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'g') {
        setTool('bucket');
      } else if (e.key.toLowerCase() === 'i') {
        setTool('eyedropper');
      } else if (e.key.toLowerCase() === 'l') {
        setTool('line');
      } else if (e.key.toLowerCase() === 'r') {
        setTool('rect');
      } else if (e.key.toLowerCase() === 'c') {
        setTool('circle');
      } else if (e.key.toLowerCase() === 'd') {
        setTool('shade');
      }
    });
  }

  function setTool(toolName) {
    const btn = document.querySelector(`.tool-btn[data-tool="${toolName}"]`);
    if (btn) {
      toolButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentTool = toolName;
      showToast(`Tool: ${toolName.toUpperCase()}`);
    }
  }

  // --- Utilities ---
  function hexToRgb(hex) {
    const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return res ? {
      r: parseInt(res[1], 16),
      g: parseInt(res[2], 16),
      b: parseInt(res[3], 16)
    } : null;
  }

  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
  }

  function showToast(msg, duration = 1800) {
    toast.textContent = msg;
    toast.classList.remove('hidden');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.add('hidden');
    }, duration);
  }

  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
      });
    }
  }

  // Run initial setup
  init();
})();
