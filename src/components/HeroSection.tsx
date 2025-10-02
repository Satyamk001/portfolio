import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'public/satyam_july_res.pdf'; 
    link.download = 'Satyam_Resume.pdf';
    link.click();
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10 pb-24 sm:pb-28 lg:pb-0">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm font-medium text-muted-foreground tracking-wider uppercase"
          >
            ✨ Let's meet!
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Satyam Kumar
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-md lg:max-w-lg leading-relaxed mx-auto lg:mx-0 px-2 sm:px-0"
          >
            Experienced in developing scalable web and mobile applications with robust backend systems. 
            Proficient in MEAN stack, MERN stack, Nest js and MySql.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              My Works
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => handleDownload()}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </motion.div>

          {/* Specialization Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="pt-6"
          >
            <p className="text-sm text-muted-foreground mb-3">Specialization:</p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {["React", "Angular", "Node.js", "React Native", "MongoDB", "MySQL", "Express.js", "REST APIs"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-2xl"
          />
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative z-10"
          >
            <img
              src={profileImage}
              alt="Satyam Kumar"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl object-cover shadow-elegant border-2 border-primary/20"
            />
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-card"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-primary">9 Months+</div>
                <div className="text-xs text-muted-foreground">Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};