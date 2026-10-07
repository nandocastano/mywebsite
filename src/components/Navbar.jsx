import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { CV_MENU_LABEL, CV_URL } from "@/data/cv";

const navItems = [
  { name: "Home", to: "/", end: true },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Publications", to: "/publications" },
  { name: "Social", to: "/social" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Escape closes the mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  // At the very top of Home the nav sits on the dark hero photo. In light mode its
  // dark text would vanish there, so it turns white (with a soft glow on the name).
  const overHero = pathname === "/" && !isScrolled && !isMenuOpen;

  const linkClass = ({ isActive }) =>
    cn(
      "transition-colors duration-300 hover:text-foreground",
      isActive ? "text-foreground" : "text-foreground/60",
      overHero && (isActive ? "light:text-white" : "light:text-white/75"),
      overHero && "light:hover:text-white"
    );

  const cvClass = cn(
    "text-foreground/60 hover:text-foreground transition-colors duration-300",
    overHero && "light:text-white/75 light:hover:text-white"
  );

  return (
    <nav
      aria-label="Main"
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container mx-auto max-w-5xl flex items-center justify-between">
        <Link
          to="/"
          className={cn(
            "relative z-50 whitespace-nowrap font-serif text-xl font-medium text-foreground tracking-tight transition-colors duration-300",
            overHero &&
              "light:text-white light:[text-shadow:0_0_14px_rgba(255,255,255,0.55),0_0_3px_rgba(255,255,255,0.85)]"
          )}
        >
          Juan Fernando{" "}
          <span className={cn("text-primary", overHero && "light:text-white")}>
            Castaño
          </span>
        </Link>

        <div className="flex items-center gap-6">
          {/* desktop nav */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9 whitespace-nowrap">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={linkClass}
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cvClass}
            >
              {CV_MENU_LABEL}
            </a>
          </div>

          <div className="relative z-50 flex items-center gap-1">
            <ThemeToggle onHero={overHero} />

            {/* mobile menu button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={cn(
                "lg:hidden flex items-center justify-center h-9 w-9 text-foreground",
                overHero && "light:text-white"
              )}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* mobile menu overlay */}
        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 lg:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto visible"
              : "opacity-0 pointer-events-none invisible"
          )}
        >
          <div className="flex flex-col items-center space-y-8 text-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={linkClass}
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors duration-300"
            >
              {CV_MENU_LABEL}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
