import { useRef, useEffect } from "react";
import { map } from "lodash-es";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEMS, WORK_SUBMENU_ITEMS } from "../constants";
import useActiveSection from "../hooks/useActiveSection";

const SCROLL_POLL_INTERVAL_MS = 50;
const SCROLL_POLL_MAX_ATTEMPTS = 40;

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectPage = location.pathname.startsWith("/work/");
  const activeSection = useActiveSection();
  const pendingScrollRef = useRef<string | null>(null);

  useEffect(() => {
    const sectionId = pendingScrollRef.current;
    if (!sectionId || location.pathname !== "/") return;

    let attempts = 0;
    const poll = setInterval(() => {
      const el = document.getElementById(sectionId);
      attempts++;
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
        pendingScrollRef.current = null;
        clearInterval(poll);
      } else if (attempts >= SCROLL_POLL_MAX_ATTEMPTS) {
        pendingScrollRef.current = null;
        clearInterval(poll);
      }
    }, SCROLL_POLL_INTERVAL_MS);

    return () => clearInterval(poll);
  }, [location.pathname]);

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    if (!isProjectPage) return;
    e.preventDefault();
    const sectionId = href.replace("#", "");
    pendingScrollRef.current = sectionId;
    navigate("/");
  };

  return (
    <nav className="hidden lg:block shrink-0 pl-[var(--grid-padding)] pt-1 sticky top-[116px] self-start z-10 w-[var(--nav-width)]">
      <ul className="flex flex-col">
        {map(NAV_ITEMS, (item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = sectionId === activeSection;
          const showSubmenu = item.label === "Work" && isProjectPage;

          const linkContent = (
            <span
              className={`flex items-center py-px font-medium text-[15.75px] leading-[20px] transition-colors hover:text-text-primary ${
                isActive ? "text-text-primary" : "text-text-muted"
              }`}
            >
              {item.label}
              {item.hasChevron && (
                <svg className="w-3 h-auto ml-0.5" viewBox="0 0 11.6667 6.66667" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.244078 0.244078C0.569515 -0.0813592 1.09715 -0.0813592 1.42259 0.244078L5.83333 4.65482L10.2441 0.244078C10.5695 -0.0813592 11.0972 -0.0813592 11.4226 0.244078C11.748 0.569515 11.748 1.09715 11.4226 1.42259L6.42259 6.42259C6.09715 6.74803 5.56951 6.74803 5.24408 6.42259L0.244078 1.42259C-0.0813592 1.09715 -0.0813592 0.569515 0.244078 0.244078Z" fill="currentColor" />
                </svg>
              )}
            </span>
          );

          return (
            <li key={item.label}>
              {isProjectPage ? (
                <a
                  href={item.href}
                  onClick={(e) => handleHashClick(e, item.href)}
                >
                  {linkContent}
                </a>
              ) : (
                <a href={item.href}>{linkContent}</a>
              )}

              {showSubmenu && (
                <ul className="flex flex-col pt-2.5 pb-2.5">
                  {map(WORK_SUBMENU_ITEMS, (sub) => {
                    const isSubActive = location.pathname === sub.href;
                    return (
                      <li key={sub.label}>
                        <Link
                          to={sub.href}
                          className={`block px-2.5 py-px font-medium text-[15.875px] leading-[20px] transition-colors hover:text-text-primary ${
                            isSubActive ? "text-text-primary" : "text-text-muted"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
