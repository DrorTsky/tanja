import { useState, useCallback, useEffect } from "react";
import { clamp } from "lodash-es";
import { THEME_COUNT, THEME_STORAGE_KEY } from "../constants";

const THEME_ATTR = "data-theme";
const MIN_INDEX = 0;
const MAX_INDEX = THEME_COUNT - 1;

function readStored(): number {
  const raw = localStorage.getItem(THEME_STORAGE_KEY);
  if (raw === null) return MIN_INDEX;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? clamp(parsed, MIN_INDEX, MAX_INDEX) : MIN_INDEX;
}

export default function useTheme() {
  const [activeIndex, setActiveIndex] = useState(readStored);

  useEffect(() => {
    if (activeIndex === MIN_INDEX) {
      document.documentElement.removeAttribute(THEME_ATTR);
    } else {
      document.documentElement.setAttribute(THEME_ATTR, String(activeIndex));
    }
    localStorage.setItem(THEME_STORAGE_KEY, String(activeIndex));
  }, [activeIndex]);

  const setTheme = useCallback(
    (index: number) => setActiveIndex(clamp(index, MIN_INDEX, MAX_INDEX)),
    [],
  );

  return { activeIndex, setTheme } as const;
}
