import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionToPath: Record<string, string> = {
    home: "/",
    about: "/about",
    projects: "/projects",
    certifications: "/certifications",
    contact: "/contact",
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavigate = (id: string) => {
    const path = sectionToPath[id] ?? "/";
    setLocation(path);
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About me", id: "about" },
    { label: "Project", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact me", id: "contact" },
  ];

  return (
    <>
      {/* Name on top left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-4 sm:left-6 lg:left-8 z-50"
        style={{ position: "fixed" }}
      >
        <h1 className="text-xl sm:text-2xl font-bold text-white font-poppins drop-shadow-lg">
          Mahek Yadav
        </h1>
      </motion.div>

      {/* Navbar on top right */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed z-50 transition-all duration-300 ${
          isScrolled
            ? "top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 rounded-none shadow-lg hover:shadow-xl hover:shadow-white/10"
            : "top-6 right-4 sm:right-6 lg:right-8 bg-black/70 backdrop-blur-md border border-white/10 rounded-full shadow-2xl shadow-white/20 hover:shadow-2xl hover:shadow-white/30 w-auto"
        }`}
      >
        <div className={`${isScrolled ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : "px-4 sm:px-5 py-3"}`}>
          <div className={`flex items-center ${isScrolled ? "justify-end h-16" : "justify-end"}`}>
            <div className="hidden md:flex items-center gap-4 sm:gap-5">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className="text-sm font-medium text-white/80 hover:text-white transition-all duration-300 relative font-space whitespace-nowrap px-3 py-2 rounded-lg hover:shadow-lg hover:shadow-white/20"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{
                    y: -2,
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                  }}
                  data-testid={`link-${link.id}`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden"
              >
                <div className={`pt-2 pb-4 space-y-1 ${isScrolled ? "" : "px-2"}`}>
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleNavigate(link.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-md font-space"
                      data-testid={`link-mobile-${link.id}`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
