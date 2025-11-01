import { Code2, Mail, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="gradient-dark text-primary-foreground pt-16 pb-8 relative">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">WebCraft</span>
            </div>
            <p className="text-primary-foreground/70 mb-4 max-w-md">
              Building modern, responsive, and high-performing websites that drive results for businesses of all sizes.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:indonesiawebcraft@gmail.com" 
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary transition-smooth"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-primary-foreground/70 hover:text-primary transition-smooth">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#strategy" className="text-primary-foreground/70 hover:text-primary transition-smooth">
                  Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>indonesiawebcraft@gmail.com</li>
              <li>+62 858-0060-7444</li>
              <li>Yogyakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 WebCraft. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button (visible after scrolling down) */}
      {showTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          variant="hero"
          className="fixed bottom-8 right-8 rounded-full shadow-glow z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </footer>
  );
};

export default Footer;
