import { useEffect, useRef } from "react";
import { map } from "lodash-es";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEMS, WORK_SUBMENU_ITEMS } from "../constants";
import useActiveSection from "../hooks/useActiveSection";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINK_BASE = "font-medium text-[16px] leading-[20px] transition-colors";
const CHEVRON_DOWN_PATH =
  "M0.244078 0.244078C0.569515 -0.0813592 1.09715 -0.0813592 1.42259 0.244078L5.83333 4.65482L10.2441 0.244078C10.5695 -0.0813592 11.0972 -0.0813592 11.4226 0.244078C11.748 0.569515 11.748 1.09715 11.4226 1.42259L6.42259 6.42259C6.09715 6.74803 5.56951 6.74803 5.24408 6.42259L0.244078 1.42259C-0.0813592 1.09715 -0.0813592 0.569515 0.244078 0.244078Z";

const SCROLL_POLL_INTERVAL_MS = 50;
const SCROLL_POLL_MAX_ATTEMPTS = 40;

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const activeSection = useActiveSection();
  const pendingScrollRef = useRef<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

  const handleNavClick = (href: string) => {
    onClose();
    if (href.startsWith("#")) {
      const sectionId = href.replace("#", "");
      if (!isHomePage) {
        pendingScrollRef.current = sectionId;
        navigate("/");
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "instant" });
      }
    }
  };

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-40 bg-bg lg:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <nav className="pl-[15px] md:pl-[30px] w-[223px] pt-[100px]">
        <ul className="flex flex-col">
          {map(NAV_ITEMS, (item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = sectionId === activeSection;

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center py-[10px] ${NAV_LINK_BASE} ${
                    isActive ? "text-text-primary" : "text-text-muted"
                  }`}
                >
                  {item.label}
                  {item.hasChevron && (
                    <svg
                      className="w-5 h-5 ml-0.5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d={CHEVRON_DOWN_PATH}
                        fill="currentColor"
                        transform="translate(4.167, 6.667)"
                      />
                    </svg>
                  )}
                </a>

                {item.label === "Work" && (
                  <ul className="flex flex-col">
                    {map(WORK_SUBMENU_ITEMS, (sub, idx) => {
                      const isSubActive = location.pathname === sub.href;
                      const isFirst = idx === 0;
                      const isLast = idx === WORK_SUBMENU_ITEMS.length - 1;

                      return (
                        <li key={sub.label}>
                          <Link
                            to={sub.href}
                            onClick={onClose}
                            className={`block px-[10px] ${NAV_LINK_BASE} ${
                              isFirst
                                ? "pt-[20px] pb-[10px]"
                                : isLast
                                  ? "pt-[10px] pb-[20px]"
                                  : "py-[10px]"
                            } ${isSubActive ? "text-text-primary" : "text-text-muted"}`}
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
    </div>
  );
}
