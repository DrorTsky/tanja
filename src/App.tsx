import { useState, useCallback, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MobileMenu from "./components/MobileMenu";
import IntroSection from "./components/IntroSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import StickyIcons from "./components/StickyIcons";
import MarketlogPage from "./components/MarketlogPage";
import KillBillsPage from "./components/KillBillsPage";
import IchiPage from "./components/IchiPage";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return (
    <main className="flex flex-col items-end">
      <IntroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

function ProjectPageLayout() {
  return (
    <main className="flex flex-col items-end">
      <Routes>
        <Route path="marketlog" element={<MarketlogPage />} />
        <Route path="killbills" element={<KillBillsPage />} />
        <Route path="ichi" element={<IchiPage />} />
      </Routes>
    </main>
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((prev) => !prev),
    [],
  );
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const { pathname } = useLocation();

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <div id="page-root" className="bg-bg min-h-screen rounded-[30px] flex flex-col items-center relative">
      <ScrollToTop />
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
      />

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      <div className="flex w-full lg:py-[50px] lg:gap-[var(--grid-gutter)] lg:max-w-[1280px] lg:mx-auto">
        <Nav />

        <div id="page-content" className="flex-1 min-w-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/*" element={<ProjectPageLayout />} />
          </Routes>
        </div>
      </div>

      <StickyIcons />
    </div>
  );
}
