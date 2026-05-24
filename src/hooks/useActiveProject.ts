import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PROJECT_SELECTOR = "[data-project]";
const THRESHOLD = 0.4;

export default function useActiveProject(isWorkActive: boolean) {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const shouldObserve = isHomepage && isWorkActive;

  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    if (!shouldObserve) {
      setActiveProject(null);
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>(PROJECT_SELECTOR);
    if (elements.length === 0) return;

    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target, entry.intersectionRatio);
        }

        let best: Element | null = null;
        let bestRatio = 0;
        ratios.forEach((ratio, el) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = el;
          }
        });

        if (best && bestRatio > 0) {
          setActiveProject((best as HTMLElement).dataset.project ?? null);
        } else {
          setActiveProject(null);
        }
      },
      { threshold: [0, 0.25, THRESHOLD, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [shouldObserve]);

  return activeProject;
}
