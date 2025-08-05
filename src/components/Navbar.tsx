import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Home, User, Briefcase, Mail, MessageCircle, FolderOpen, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "portfolio", label: "Portfolio", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block fixed top-0 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-4 lg:px-6 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl lg:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Satyam
            </motion.div>

            {/* Desktop Navigation Items - Clean Glass Style */}
            <div className="hidden lg:flex items-center space-x-1 bg-glass backdrop-blur-glass border border-white/20 rounded-2xl shadow-glass px-4 py-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium ${
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-lg" 
                        : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                    }`}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            {/* Theme Toggle & CTA */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Mobile Menu Button for tablet */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-full lg:hidden"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                <Sun className="h-4 w-4 lg:h-5 lg:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 lg:h-5 lg:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-primary hover:opacity-90 transition-opacity rounded-full px-3 lg:px-6 text-sm"
                size="sm"
              >
                <MessageCircle className="w-4 h-4 lg:mr-2" />
                <span className="hidden lg:inline">Let's Talk</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay for Tablet */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-lg lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center h-full space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 text-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
            
            {/* Mobile CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-md"
                size="lg"
              >
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Mobile Bottom Navigation - Floating Glass */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:hidden fixed bottom-3 left-[5%] right-[5%] z-50 w-[90%] mx-auto"
      >
        <div className="bg-glass backdrop-blur-glass border border-white/20 rounded-2xl shadow-glass px-2 py-3">
          <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-300 ${
                  isActive ? "bg-primary/10" : ""
                }`}
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`p-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-lg scale-110" 
                    : "text-muted-foreground hover:text-foreground"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                {/* No text for mobile - only icons */}
              </motion.button>
            );
          })}
          
           {/* Theme toggle for mobile */}
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex flex-col items-center space-y-1 p-2 rounded-xl min-w-0"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 rounded-full text-muted-foreground hover:text-foreground relative transition-colors duration-300">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute top-2 left-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
            <span className="text-[10px] font-medium text-muted-foreground">Theme</span>
          </motion.button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};