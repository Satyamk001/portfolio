import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Database, Cloud } from "lucide-react";
import { ResumeButton } from "@/components/ResumeViewer";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    technologies: ["React", "Angular", "AngularJS", "HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap"]
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />,
    technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs", "JWT", "Mongoose", "Bcrypt"]
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    technologies: ["React Native", "Cross-platform", "iOS", "Android", "Firebase", "Expo"]
  },
  {
    category: "Cloud & Tools",
    icon: <Cloud className="w-6 h-6" />,
    technologies: ["Git", "GitHub", "VS Code", "Postman", "npm", "Firebase", "Deployment"]
  }
];

const stats = [ 
  { number: "20+", label: "Projects Completed" },
  { number: "1 Year+", label: "Experience" },
  { number: "600+", label: "LeetCode Problems" },
  { number: "7.9", label: "CGPA" }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 px-4 sm:px-0">
            I'm a passionate full-stack and mobile app developer with 9 months of experience creating 
            innovative applications.I specialize in Angular, React, Node, Express , Nestjs, MySql and Mongodb. 
            I love turning complex problems into simple, scalable, and intuitive solutions.
          </p>
          
          <div className="flex justify-center">
            <ResumeButton />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
           <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey started with a degree in Electronics Engineering and has now evolved into full-stack development. 
              I have gained hands-on experience building scalable web applications, mobile apps, and robust backend systems 
              through internships at Comely Enterprises and Digital Guruji.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I work as an Associate Software Engineer at MapmyIndia, specializing in full-stack development with 
              Angular, React, Node.js, Express.js, NestJS, PostgreSQL, and MySQL. I am passionate about creating efficient REST APIs, 
              implementing secure authentication, and building responsive, user-friendly interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I enjoy tackling challenging projects that combine technical excellence with innovative solutions, continuously 
              learning new technologies, and staying ahead in the ever-evolving tech landscape.
            </p>

          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }
                }}
              >
                <Card className="text-center p-6 shadow-card border-primary/10 hover:shadow-elegant hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-center mb-12">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    y: 60,
                    scale: 0.9
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.03,
                    transition: { 
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }
                  }}
                  className="h-full"
                >
                  <Card className="p-4 sm:p-6 h-full shadow-card hover:shadow-elegant transition-all duration-300 border-primary/10 flex flex-col">
                    <CardContent className="p-0 flex-1 flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="p-2 sm:p-3 bg-gradient-primary rounded-lg text-white mr-3 flex-shrink-0">
                          {skill.icon}
                        </div>
                        <h4 className="font-semibold text-base sm:text-lg">{skill.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 flex-1">
                        {skill.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
