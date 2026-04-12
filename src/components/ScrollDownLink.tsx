import { useNavigate } from "react-router-dom";
import { useCallback, type ReactNode, type MouseEvent } from "react";

const EXIT_DURATION_MS = 500;
const ENTER_DURATION_MS = 300;
const CONTENT_ID = "page-content";

interface ScrollDownLinkProps {
  to: string;
  className?: string;
  children: ReactNode;
}

export default function ScrollDownLink({ to, className, children }: ScrollDownLinkProps) {
  const navigate = useNavigate();

  const handleClick = useCallback((e: MouseEvent) => {
    e.preventDefault();
    const content = document.getElementById(CONTENT_ID);
    if (!content) {
      navigate(to);
      return;
    }

    document.body.style.overflow = "hidden";

    content.style.transition = `transform ${EXIT_DURATION_MS}ms ease-in-out`;
    content.style.transform = "translateY(-100vh)";

    setTimeout(() => {
      content.style.opacity = "0";
      content.style.transition = "none";
      content.style.transform = "";

      navigate(to);
      window.scrollTo(0, 0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          content.style.transition = `opacity ${ENTER_DURATION_MS}ms ease-in`;
          content.style.opacity = "1";
          document.body.style.overflow = "";
        });
      });
    }, EXIT_DURATION_MS);
  }, [navigate, to]);

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
