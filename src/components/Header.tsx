import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FlagES = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" className="rounded-sm">
    <rect width="24" height="18" fill="#c60b1e"/>
    <rect y="4.5" width="24" height="9" fill="#ffc400"/>
  </svg>
);

const FlagEN = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" className="rounded-sm">
    <rect width="24" height="18" fill="#012169"/>
    <path d="M0,0 L24,18 M24,0 L0,18" stroke="#fff" strokeWidth="3"/>
    <path d="M0,0 L24,18 M24,0 L0,18" stroke="#c8102e" strokeWidth="2"/>
    <path d="M12,0 V18 M0,9 H24" stroke="#fff" strokeWidth="5"/>
    <path d="M12,0 V18 M0,9 H24" stroke="#c8102e" strokeWidth="3"/>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
  const menuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { labelKey: "nav.inicio", href: "#inicio" },
    { labelKey: "nav.estudios", href: "#estudios" },
    { labelKey: "nav.experiencia", href: "#trabajos" },
    { labelKey: "nav.habilidades", href: "#habilidades" },
    { labelKey: "nav.proyectos", href: "#proyectos" },
    { labelKey: "nav.contacto", href: "#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4" ref={menuRef}>
        <div className="flex items-center justify-between">
          <a href="#inicio" className="text-xl font-semibold text-gradient" style={{ fontFamily: "var(--font-display)" }}>
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === item.href
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {t(item.labelKey)}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 p-1.5 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Toggle language"
            >
              {language === "es" ? <FlagES /> : <FlagEN />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={20} />
            </button>
            <button
              className="p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg">
            <div className="flex flex-col gap-2 py-4 px-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`transition-colors py-3 ${
                    activeSection === item.href
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(item.labelKey)}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;