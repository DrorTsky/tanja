import { useState, useCallback, useEffect, useMemo } from "react";
import { map, times } from "lodash-es";
import ThemeSlider from "./ThemeSlider";

const ICON_BUTTON_CLASS =
  "size-[35px] md:size-12 rounded-full bg-card-bg backdrop-blur-[4px] flex items-center justify-center hover:bg-card-bg-hover transition-colors";

const ICON_IMG_CLASS = "size-[23px] md:size-8";

const GRID_COLUMN_COLOR = "var(--color-grid-column)";
const COLUMN_TRANSITION_DURATION_MS = 600;
const COLUMN_STAGGER_DELAY_MS = 45;
const MAX_COLUMNS = 12;

function GridColumn({ visible, index, columnCount }: { visible: boolean; index: number; columnCount: number }) {
  const delay = visible
    ? index * COLUMN_STAGGER_DELAY_MS
    : (columnCount - 1 - index) * COLUMN_STAGGER_DELAY_MS;

  return (
    <div
      className="flex-1 h-full"
      style={{
        backgroundColor: GRID_COLUMN_COLOR,
        transform: visible ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top",
        transition: `transform ${COLUMN_TRANSITION_DURATION_MS}ms ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    />
  );
}

function readColumnCount() {
  const cols = getComputedStyle(document.documentElement)
    .getPropertyValue("--grid-columns")
    .trim();
  return Number(cols) || MAX_COLUMNS;
}

const MD_QUERY = "(min-width: 768px)";
const LG_QUERY = "(min-width: 1024px)";

function GridOverlay({ visible }: { visible: boolean }) {
  const [columnCount, setColumnCount] = useState(readColumnCount);

  const containerStyle: React.CSSProperties = useMemo(() => ({
    gap: "var(--grid-gutter)",
    paddingLeft: "var(--grid-padding)",
    paddingRight: "var(--grid-padding)",
    maxWidth: "var(--grid-max-width)",
  }), []);

  useEffect(() => {
    const update = () => setColumnCount(readColumnCount());
    const mdMql = window.matchMedia(MD_QUERY);
    const lgMql = window.matchMedia(LG_QUERY);
    mdMql.addEventListener("change", update);
    lgMql.addEventListener("change", update);
    window.addEventListener("resize", update);
    update();
    return () => {
      mdMql.removeEventListener("change", update);
      lgMql.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      <div className="flex h-full mx-auto" style={containerStyle}>
        {map(times(columnCount), (i) => (
          <GridColumn key={i} visible={visible} index={i} columnCount={columnCount} />
        ))}
      </div>
    </div>
  );
}

export default function StickyIcons() {
  const [showGrid, setShowGrid] = useState(false);
  const toggleGrid = useCallback(() => setShowGrid((prev) => !prev), []);

  return (
    <>
      <GridOverlay visible={showGrid} />
      <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-[1280px] pointer-events-none z-50">
        <div className="absolute bottom-[38px] left-[5px] md:left-[18px] lg:left-[28px] flex flex-col-reverse gap-2 pointer-events-auto items-center">
          <button onClick={toggleGrid} className={ICON_BUTTON_CLASS}>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${ICON_IMG_CLASS} text-text-primary`} aria-label="Toggle grid overlay">
              <path d="M5 28H7V4H5V28ZM10 28H12V4H10V28ZM15 28H17V4H15V28ZM20 28H22V4H20V28ZM25 4V28H27V4H25Z" fill="currentColor"/>
            </svg>
          </button>
          <ThemeSlider />
        </div>
      </div>
    </>
  );
}
