import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Home, User, Briefcase, Mail, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About Me", icon: User },
  { id: "portfolio", label: "Portfolio", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation Items - Pill Style */}
            <div className="flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full p-1 border border-border/50">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-background text-foreground shadow-md"
                      : "hover:bg-background/50"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Theme Toggle & CTA */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-primary hover:opacity-90 transition-opacity rounded-full px-6"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border"
      >
        <div className="flex items-center justify-around px-4 py-3">
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
                whileTap={{ scale: 0.95 }}
              >
                <div className={`p-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "text-muted-foreground"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}>
                  {item.id === "home" ? "Home" : 
                   item.id === "about" ? "About" : 
                   item.id === "portfolio" ? "Work" : "Contact"}
                </span>
              </motion.button>
            );
          })}
          
          {/* Theme toggle for mobile */}
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex flex-col items-center space-y-1 p-2 rounded-xl"
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 rounded-full text-muted-foreground">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">Theme</span>
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
};