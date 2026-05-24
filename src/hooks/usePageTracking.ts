import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export default function usePageTracking() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const page = pathname + search;
    ReactGA.send({ hitType: "pageview", page, title: document.title });
  }, [pathname, search]);
}
