
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 lg:px-10",
          isScrolled
            ? "py-4 backdrop-blur-md bg-white/70 border-b border-black/5"
            : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a 
            href="#" 
            className="text-xl font-medium tracking-tight text-black animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            pixie.
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Home", href: "#home" },
              { name: "Projects", href: "#projects" },
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Contact", href: "#contact" }
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-black/80 hover:text-black transition-colors link-hover animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {[
            { name: "Home", href: "#home" },
            { name: "Projects", href: "#projects" },
            { name: "Services", href: "#services" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" }
          ].map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-light tracking-tight text-black hover:text-black/70 transition-colors"
              onClick={closeMobileMenu}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 0.1}s` : "0s",
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
