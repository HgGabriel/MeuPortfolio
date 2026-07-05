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
const PERIOD_MS = 20000; // one full alternate back-and-forth pulse

const BOOST_RADIUS_VW = 14; // reach of the cursor's influence around each cell
const BOOST_OPACITY = 0.6; // extra opacity added at the cursor's center
const BOOST_SCALE = 0.6; // extra dot/line growth at the cursor's center
const MOUSE_LERP = 0.08; // smoothing for the boost fading in/out

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
    let mouseX = 0;
    let mouseY = 0;
    let mouseActive = false;
    let mouseInfluence = 0;

    const readColor = () => {
      color =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--fg")
          .trim() || color;
    };

    const resize = () => {
      // Canvas is a square centered over the viewport — size it off the
      // larger dimension so it fully covers portrait (mobile) layouts too.
      const dim = Math.max(window.innerWidth, window.innerHeight);
      size = dim + dim / COLS;
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

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseActive = true;
    };
    const onMouseLeave = () => {
      mouseActive = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    let raf = 0;
    let started = false;
    let startTimeoutId: number;

    const draw = (now: number) => {
      const cw = size / COLS;
      const ch = size / ROWS;
      const dotR = ((DOT_VW / 100) * window.innerWidth) / 2;
      const gutter = (GUTTER_VW / 100) * window.innerWidth;
      const lineLenX = Math.max(cw - dotR * 2 - gutter, 0);
      const lineLenY = Math.max(ch - dotR * 2 - gutter, 0);

      mouseInfluence += ((mouseActive ? 1 : 0) - mouseInfluence) * MOUSE_LERP;
      const boostRadius = (BOOST_RADIUS_VW / 100) * window.innerWidth;
      const canvasOffsetX = window.innerWidth / 2 - size / 2;
      const canvasOffsetY = window.innerHeight / 2 - size / 2;
      const mx = mouseX - canvasOffsetX;
      const my = mouseY - canvasOffsetY;

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

        let boost = 0;
        if (mouseInfluence > 0.001) {
          const dx = cx - mx;
          const dy = cy - my;
          const distSq = dx * dx + dy * dy;
          const radiusSq = boostRadius * boostRadius;
          if (distSq < radiusSq) {
            const dist = Math.sqrt(distSq);
            const proximity = Math.max(0, 1 - dist / boostRadius);
            boost = proximity * proximity * mouseInfluence;
          }
        }
        const ampBoost = 1 + boost * BOOST_SCALE;

        ctx.globalAlpha = Math.min(cell.opacity + boost * BOOST_OPACITY, 1);

        if (dotWave > 0.01) {
          ctx.beginPath();
          ctx.arc(x, y, dotR * dotWave * ampBoost, 0, Math.PI * 2);
          ctx.fill();
        }

        if (lineWave > 0.01) {
          ctx.beginPath();
          ctx.arc(cx, cy, dotR * 0.5 * lineWave * ampBoost, 0, Math.PI * 2);
          ctx.fill();
        }

        if (lineLenX > 0) {
          ctx.save();
          ctx.translate(cx, y);
          ctx.rotate((lineWave * Math.PI) / 2);
          const weightX = LINE_WEIGHT * ampBoost;
          ctx.fillRect(-lineLenX / 2, -weightX / 2, lineLenX, weightX);
          ctx.restore();
        }

        if (lineLenY > 0) {
          ctx.save();
          ctx.translate(x, cy);
          ctx.rotate((lineWave * Math.PI) / 2);
          const weightY = LINE_WEIGHT * ampBoost;
          ctx.fillRect(-weightY / 2, -lineLenY / 2, weightY, lineLenY);
          ctx.restore();
        }
      }

      if (!reduceMotion && started) {
        raf = requestAnimationFrame(draw);
      }
    };

    // Draw the static initial state immediately so the page is not blank
    draw(0);

    if (!reduceMotion) {
      startTimeoutId = window.setTimeout(() => {
        started = true;
        raf = requestAnimationFrame(draw);
      }, 1000);
    }

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduceMotion && started) {
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(startTimeoutId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibility);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="gpb-canvas" aria-hidden="true" />;
}
