import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { StarBackground } from "./StarBackground";
import { Footer } from "./Footer";

const NAME = "Juan Fernando Castaño";
const TITLES = {
  "/": null,
  "/about": "About",
  "/projects": "Projects",
  "/publications": "Publications",
  "/social": "Social & Engagement",
};

export const Layout = () => {
  const { pathname } = useLocation();

  // Each menu page opens at the top and gets its own browser-tab title
  useEffect(() => {
    window.scrollTo(0, 0);

    const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
    const page = TITLES[path];
    document.title =
      page === undefined
        ? `Page not found — ${NAME}`
        : page
        ? `${page} — ${NAME}`
        : `${NAME} — Mechanical Engineer`;
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-primary-strong focus:text-white"
      >
        Skip to content
      </a>
      <StarBackground />
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
