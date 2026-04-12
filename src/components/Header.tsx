import { Link } from "react-router-dom";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

const HAMBURGER_LINE_BASE =
  "block h-[2px] w-full bg-text-primary transition-all duration-300 origin-center";

export default function Header({
  isMobileMenuOpen,
  onToggleMobileMenu,
}: HeaderProps) {
  return (
    <header className="w-full max-w-[1280px] mx-auto px-[var(--grid-padding)] lg:px-0 lg:pl-[var(--grid-padding)] py-[5px] md:py-5 lg:py-5 sticky top-0 z-50 flex items-center justify-between lg:block bg-transparent">
      <Link to="/" className="py-3 lg:py-0 block">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Tanya Sherbakov"
          className="w-[26px] h-[26px] text-text-primary transition-colors"
        >
          <path d="M24.029 20.2027C22.1326 24.8132 18.7669 26.6737 13.9318 25.7842C9.09665 24.8947 5.31018 22.5894 2.57237 18.8684C-0.16544 15.1474 -0.190557 11.3701 2.49702 7.53631C5.18459 3.70256 9.03385 1.27828 14.0448 0.263462C19.0557 -0.751354 22.4466 1.16552 24.2174 6.01408C25.9882 10.8626 25.9254 15.5922 24.029 20.2027Z" fill="currentColor"/>
        </svg>
      </Link>
      <button
        className="lg:hidden flex flex-col justify-between w-6 h-[17px]"
        onClick={onToggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`${HAMBURGER_LINE_BASE} ${isMobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""}`}
        />
        <span
          className={`${HAMBURGER_LINE_BASE} ${isMobileMenuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`${HAMBURGER_LINE_BASE} ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`}
        />
      </button>
    </header>
  );
}
