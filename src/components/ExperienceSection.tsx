import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Comely Enterprises Pvt. Ltd.",
    duration: "Jan 2025 - May 2025",
    location: "Remote",
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
    company: "Digital Xperts",
    duration: "June 2025 - June 2025",
    location: "Remote",
    description: [
      "Developed and integrated an email warm-up feature using Node.js, MongoDB, NodeMailer transporter and cron scheduler",
      "Implemented custom cron jobs to control email sending, volume controls and various management rules",
      "Refactored and cleaned existing backend APIs for scalability, error handling, and maintainability"
    ],
    technologies: ["Node.js", "MongoDB", "NodeMailer", "Cron Jobs", "REST APIs"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made in various organizations
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 border-primary/20 hover:border-primary/40">
                <CardHeader className="bg-gradient-secondary">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-primary">
                        {experience.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    {experience.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
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
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};