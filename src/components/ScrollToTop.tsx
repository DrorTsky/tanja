import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const TRANSITION_GUARD_MS = 800;

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (document.body.style.overflow === "hidden") {
      return;
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
