import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-24 right-4 z-[70] lg:bottom-8 lg:right-8"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-glass hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronUp className="w-6 h-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};