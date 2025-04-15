
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm dark:bg-navy-dark/90"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a
            href="#"
            className="text-xl font-bold text-navy-dark dark:text-white flex items-center"
          >
            <span className="font-mono text-accent mr-1">&lt;</span>
            <span>Marco</span>
            <span className="font-mono text-accent ml-1">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className="group transition-colors duration-300 hover:text-accent text-navy-dark dark:text-slate-light"
              >
                <span className="font-mono text-accent text-sm mr-1">
                  0{i + 1}.
                </span>
                <span>{item.name}</span>
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2 text-navy-dark dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-white dark:bg-navy p-4 flex flex-col justify-center items-center space-y-6 transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navItems.map((item, i) => (
          <a
            key={item.name}
            href={item.href}
            className="text-xl text-navy-dark dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-mono text-accent text-sm mr-2">
              0{i + 1}.
            </span>
            <span>{item.name}</span>
          </a>
        ))}
        <a
          href="/resume.pdf"
          className="mt-4 px-6 py-3 border border-accent text-accent rounded hover:bg-accent/10 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Navbar;
