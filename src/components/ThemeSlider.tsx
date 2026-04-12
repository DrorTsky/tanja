import { useState, useCallback, useRef, useEffect, type RefCallback, type PointerEvent as ReactPointerEvent } from "react";
import { times, map, clamp } from "lodash-es";
import { THEME_COUNT } from "../constants";
import useTheme from "../hooks/useTheme";

const SunSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M17 2H15V8H17V2ZM16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10ZM16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20ZM15 30H17V24H15V30ZM11.0503 9.63605L6.80762 5.39337L5.39337 6.80762L9.63605 11.0503L11.0503 9.63605ZM20.9498 22.364L25.1924 26.6066L26.6066 25.1924L22.364 20.9497L20.9498 22.364ZM8 15H2V17H8V15ZM24 15V17H30V15H24ZM5.39337 25.1924L6.80762 26.6066L11.0503 22.364L9.63605 20.9497L5.39337 25.1924ZM26.6066 6.80762L25.1924 5.39337L20.9497 9.63605L22.364 11.0502L26.6066 6.80762Z" fill="currentColor"/>
  </svg>
);

const ICON_SIZE_CLASS = "size-[35px] md:size-12";
const SUN_IMG_CLASS = "size-[23px] md:size-8";
const DOT_SIZE_CLASS = "size-[5px] md:size-[6px]";

const HOVER_CLOSE_DELAY_MS = 400;
const EXPAND_MS = 300;
const COLLAPSE_MS = 380;
const COLLAPSE_PILL_DELAY_MS = 120;
const DOT_FADE_MS = 180;
const DOT_STAGGER_MS = 40;

const ICON_PX = 35;
const ICON_MD_PX = 48;
const DOT_PX = 5;
const DOT_MD_PX = 6;
const GAP_PX = 20;
const GAP_MD_PX = 24;

function trackHeight(icon: number, dot: number, gap: number) {
  return icon + (THEME_COUNT - 1) * (dot + gap);
}

const TRACK_H = trackHeight(ICON_PX, DOT_PX, GAP_PX);
const TRACK_H_MD = trackHeight(ICON_MD_PX, DOT_MD_PX, GAP_MD_PX);

const LAST_INDEX = THEME_COUNT - 1;

const CLOSED_BG = "var(--color-card-bg)";
const OPEN_BG = "var(--color-card-bg-hover)";

export default function ThemeSlider() {
  const { activeIndex, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trackElRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);

  const clearTimer = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  useEffect(() => () => clearTimer(), [clearTimer]);

  const handleMouseEnter = useCallback(() => {
    clearTimer();
    setIsOpen(true);
  }, [clearTimer]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging.current) return;
    clearTimer();
    timer.current = setTimeout(() => setIsOpen(false), HOVER_CLOSE_DELAY_MS);
  }, [clearTimer]);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      if (prev) clearTimer();
      return !prev;
    });
  }, [clearTimer]);

  const indexFromPointerY = useCallback((clientY: number): number => {
    const el = trackElRef.current;
    if (!el) return activeIndex;
    const rect = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const iconH = parseFloat(cs.getPropertyValue("--sl-icon"));
    const dotH = parseFloat(cs.getPropertyValue("--sl-dot"));
    const gapH = parseFloat(cs.getPropertyValue("--sl-gap"));
    const step = dotH + gapH;
    const firstCenter = rect.top + iconH / 2;
    const relY = clientY - firstCenter;
    const fromTop = Math.round(relY / step);
    return clamp(fromTop, 0, LAST_INDEX);
  }, [activeIndex]);

  const handlePointerDown = useCallback((e: ReactPointerEvent) => {
    if (!isOpen) return;
    isDragging.current = true;
    clearTimer();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    const idx = indexFromPointerY(e.clientY);
    setTheme(idx);
  }, [isOpen, clearTimer, indexFromPointerY, setTheme]);

  const handlePointerMove = useCallback((e: ReactPointerEvent) => {
    if (!isDragging.current) return;
    const idx = indexFromPointerY(e.clientY);
    setTheme(idx);
  }, [indexFromPointerY, setTheme]);

  const handlePointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
  }, []);

  const setTrackRef = useCallback<RefCallback<HTMLDivElement>>((node) => {
    trackElRef.current = node;
  }, []);

  const sunTop = isOpen
    ? `calc(${activeIndex} * (var(--sl-dot) + var(--sl-gap)))`
    : "0px";


  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Pill background — overflow-hidden so the rounded shape clips during height animation */}
      <div
        ref={setTrackRef}
        className="relative backdrop-blur-[4px] rounded-full overflow-hidden touch-none cursor-pointer"
        style={{
          width: "var(--sl-icon)",
          height: isOpen ? "var(--sl-track)" : "var(--sl-icon)",
          backgroundColor: isOpen ? OPEN_BG : CLOSED_BG,
          transition: isOpen
            ? `height ${EXPAND_MS}ms ease, background-color ${EXPAND_MS}ms ease`
            : `height ${COLLAPSE_MS}ms ease ${COLLAPSE_PILL_DELAY_MS}ms, background-color ${COLLAPSE_MS}ms ease ${COLLAPSE_PILL_DELAY_MS}ms`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <button
          onClick={toggle}
          className={`absolute left-1/2 -translate-x-1/2 ${ICON_SIZE_CLASS} rounded-full flex items-center justify-center cursor-pointer`}
          style={{
            top: sunTop,
            transition: isOpen
              ? `top ${EXPAND_MS}ms ease`
              : `top ${COLLAPSE_MS}ms ease ${COLLAPSE_PILL_DELAY_MS}ms`,
          }}
          aria-label={isOpen ? "Close theme slider" : "Open theme slider"}
        >
          <SunSvg className={`${SUN_IMG_CLASS} text-text-primary`} />
        </button>
      </div>

      {/* Dots layer — NOT clipped, fixed positions, pure opacity fade */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{ width: "var(--sl-icon)", height: "var(--sl-track)" }}
        aria-hidden="true"
      >
        {map(times(THEME_COUNT), (i) => {
          const expandDelay = (LAST_INDEX - i) * DOT_STAGGER_MS;
          const collapseDelay = i * DOT_STAGGER_MS;
          return (
            <div
              key={i}
              className={`
                absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
                ${DOT_SIZE_CLASS}
                ${i % 2 === 0 ? "bg-text-primary" : "bg-text-primary/25"}
              `}
              style={{
                top: `calc(var(--sl-icon) / 2 + ${i} * (var(--sl-dot) + var(--sl-gap)))`,
                opacity: isOpen ? 1 : 0,
                transition: `opacity ${DOT_FADE_MS}ms ease`,
                transitionDelay: `${isOpen ? expandDelay : collapseDelay}ms`,
              }}
            />
          );
        })}
      </div>

      <style>{`
        :root {
          --sl-icon: ${ICON_PX}px;
          --sl-dot: ${DOT_PX}px;
          --sl-gap: ${GAP_PX}px;
          --sl-track: ${TRACK_H}px;
        }
        @media (min-width: 768px) {
          :root {
            --sl-icon: ${ICON_MD_PX}px;
            --sl-dot: ${DOT_MD_PX}px;
            --sl-gap: ${GAP_MD_PX}px;
            --sl-track: ${TRACK_H_MD}px;
          }
        }
      `}</style>
    </div>
  );
}
