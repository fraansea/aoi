import { useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    // { name: 'Team', href: '#' },
    // { name: 'Blog', href: '#' }
  ];

  return (
    <header className="font-clash bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-kanit text-xl lg:text-2xl font-light tracking-widest text-black">
              STUDIO.AOI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                onClick={() => navigate({ to: item.href })}
                className="text-gray-700 hover:text-black transition-colors duration-200 text-sm hover:cursor-pointer lg:text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <nav className="py-4 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate({ to: item.href });
                  }}
                  className="block text-gray-700 hover:text-black transition-colors duration-200 text-base font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
