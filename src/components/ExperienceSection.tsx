import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Comely Enterprises Pvt. Ltd.",
    duration: "Jan 2025 - May 2025",
    description: [
      "Built and maintained scalable cross-platform applications using Angular, AngularJS, React Native, Express.js, and MySQL",
      "Contributing to a 25% increase in development efficiency through modular code practices",
      "Engineered and deployed secure RESTful APIs with Express.js and Node.js, reducing response time by 30%",
      "Drove performance optimization efforts on both frontend and backend, leading to a 40% improvement in page load speed"
    ],
    technologies: ["Angular", "AngularJS", "React Native", "Express.js", "MySQL", "Node.js"]
  },
  {
    title: "Backend Developer Intern",
    company: "Digital Guruji",
    duration: "June 2025 - June 2025",
    description: [
      "Developed and integrated an email warm-up feature using Node.js, MongoDB, NodeMailer transporter and cron scheduler",
      "Implemented custom cron jobs to control email sending, volume controls and various management rules",
      "Refactored and cleaned existing backend APIs for scalability, error handling, and maintainability"
    ],
    technologies: ["Node.js", "MongoDB", "NodeMailer", "Cron Jobs", "REST APIs"]
  }
];

const TimelineCard = ({ experience, index, totalCards }: { experience: typeof experiences[0], index: number, totalCards: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "0px 0px -200px 0px"
  });

  const isEven = index % 2 === 0;
  const isLast = index === totalCards - 1;

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-primary/60 via-primary/40 to-primary/20 transform -translate-x-1/2 hidden lg:block" />
      
      {/* Timeline Node */}
      <motion.div 
        className="absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-x-1/2 z-10 hidden lg:block"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      />

      {/* Card Container */}
      <motion.div
        ref={ref}
        initial={{ 
          opacity: 0, 
          y: 100,
          x: isEven ? -100 : 100,
          scale: 0.8
        }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0,
          x: 0,
          scale: 1
        } : {
          opacity: 0, 
          y: 100,
          x: isEven ? -100 : 100,
          scale: 0.8
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.25, 0, 1],
          delay: 0.1
        }}
        className={`relative w-full lg:w-1/2 ${isEven ? 'lg:pr-8' : 'lg:pl-8 lg:ml-auto'} mb-8 sm:mb-12 lg:mb-32`}
      >
        {/* Connection Line to Timeline */}
        <motion.div 
          className={`absolute top-8 w-8 h-0.5 bg-gradient-to-r from-primary/60 to-primary hidden lg:block ${
            isEven ? 'right-0' : 'left-0'
          }`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        {/* Experience Card */}
        <Card className="relative overflow-hidden hover:shadow-elegant transition-all duration-500 border-primary/20 hover:border-primary/40 group">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <CardHeader className="bg-gradient-secondary relative z-10">
            <div className="flex flex-col gap-4">
              <div>
                <CardTitle className="text-xl md:text-2xl font-bold text-primary mb-2">
                  {experience.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span className="font-medium">{experience.company}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.duration}</span>
                </div>
                
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 relative z-10">
            <ul className="space-y-3 mb-6">
              {experience.description.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.5 + itemIndex * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.7 + techIndex * 0.05 }}
                >
                  <Badge variant="secondary" className="text-xs hover:scale-105 transition-transform duration-200">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made in various organizations
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineCard 
              key={index} 
              experience={experience} 
              index={index} 
              totalCards={experiences.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};