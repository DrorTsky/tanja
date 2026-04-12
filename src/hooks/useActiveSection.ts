import { useState, useEffect } from "react";
import { findLast } from "lodash-es";
import { useLocation } from "react-router-dom";

const SECTION_IDS = ["intro", "work", "about", "contact"] as const;
const DEFAULT_SECTION = "intro";
const SCROLL_THRESHOLD_PX = 200;

export default function useActiveSection() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/work/");
  const [trackedSection, setTrackedSection] = useState(DEFAULT_SECTION);

  useEffect(() => {
    if (isProjectPage) return;

    const NEAR_BOTTOM_PX = 50;

    const computeActive = () => {
      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - NEAR_BOTTOM_PX;

      if (isNearBottom) {
        setTrackedSection("contact");
        return;
      }

      const active = findLast(SECTION_IDS, (id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        return el.getBoundingClientRect().top <= SCROLL_THRESHOLD_PX;
      });

      setTrackedSection(active ?? DEFAULT_SECTION);
    };

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    return () => window.removeEventListener("scroll", computeActive);
  }, [isProjectPage]);

  return isProjectPage ? "work" : trackedSection;
}
