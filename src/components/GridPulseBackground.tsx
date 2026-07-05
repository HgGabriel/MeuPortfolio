import { useEffect, useRef } from "react";
import "./GridPulseBackground.css";

const COLS = 40;
const ROWS = 40;
const CENTER_ROW = Math.ceil(ROWS / 2);
const CENTER_COL = Math.ceil(COLS / 2);
// Global dimmer so the effect stays a background detail instead of competing with content.
const INTENSITY = 0.22;

const DOT_VW = 0.15;
const GUTTER_VW = 0.47;
const LINE_WEIGHT = 0.5;
const PERIOD_MS = 7000; // one full alternate back-and-forth pulse

interface Cell {
  row: number;
  col: number;
  opacity: number;
  delayMs: number;
}

function buildCells(): Cell[] {
  const cells: Cell[] = [];
  for (let row = 0; row < ROWS; row++) {
    const centerRowPower = (CENTER_ROW - Math.abs(CENTER_ROW - row)) / 4;
    for (let col = 0; col < COLS; col++) {
      const centerColPower =
        (CENTER_COL - Math.abs(CENTER_COL - (col + 1))) / 4;
      const power = centerColPower + centerRowPower;
      cells.push({
        row,
        col,
        opacity: Math.min(power * 0.5, 1) * INTENSITY,
        delayMs: power * -500,
      });
    }
  }
  return cells;
}

const cells = buildCells();

// Smooth 0 -> 1 -> 0 breathing wave, phase in [0, 1)
function wave(phase: number) {
  return 0.5 - 0.5 * Math.cos(phase * Math.PI * 2);
}

export default function GridPulseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let size = 0;
    let color = "#ffffff";

    const readColor = () => {
      color =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--fg")
          .trim() || color;
    };

    const resize = () => {
      size = window.innerWidth + window.innerWidth / COLS;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    readColor();
    resize();
    window.addEventListener("resize", resize);

    const themeObserver = new MutationObserver(readColor);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    let raf = 0;

    const draw = (now: number) => {
      const cw = size / COLS;
      const ch = size / ROWS;
      const dotR = ((DOT_VW / 100) * window.innerWidth) / 2;
      const gutter = (GUTTER_VW / 100) * window.innerWidth;
      const lineLenX = Math.max(cw - dotR * 2 - gutter, 0);
      const lineLenY = Math.max(ch - dotR * 2 - gutter, 0);

      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = color;

      for (const cell of cells) {
        if (cell.opacity <= 0.003) continue;

        const phase =
          ((((now + cell.delayMs) % PERIOD_MS) + PERIOD_MS) % PERIOD_MS) /
          PERIOD_MS;
        const dotWave = wave(phase);
        const lineWave = wave((phase + 0.5) % 1);

        const x = cell.col * cw;
        const y = cell.row * ch;
        const cx = x + cw / 2;
        const cy = y + ch / 2;

        ctx.globalAlpha = cell.opacity;

        if (dotWave > 0.01) {
          ctx.beginPath();
          ctx.arc(x, y, dotR * dotWave, 0, Math.PI * 2);
          ctx.fill();
        }

        if (lineWave > 0.01) {
          ctx.beginPath();
          ctx.arc(cx, cy, dotR * 0.5 * lineWave, 0, Math.PI * 2);
          ctx.fill();
        }

        if (lineLenX > 0) {
          ctx.save();
          ctx.translate(cx, y);
          ctx.rotate((lineWave * Math.PI) / 2);
          ctx.fillRect(-lineLenX / 2, -LINE_WEIGHT / 2, lineLenX, LINE_WEIGHT);
          ctx.restore();
        }

        if (lineLenY > 0) {
          ctx.save();
          ctx.translate(x, cy);
          ctx.rotate((lineWave * Math.PI) / 2);
          ctx.fillRect(-LINE_WEIGHT / 2, -lineLenY / 2, LINE_WEIGHT, lineLenY);
          ctx.restore();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    if (reduceMotion) {
      draw(0);
    } else {
      raf = requestAnimationFrame(draw);
    }

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduceMotion) {
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="gpb-canvas" aria-hidden="true" />;
}
