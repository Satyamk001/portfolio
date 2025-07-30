import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Database, Cloud } from "lucide-react";
import { ResumeButton } from "@/components/ResumeViewer";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    technologies: ["React", "Angular", "AngularJS", "HTML/CSS", "JavaScript"]
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />,
    technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs"]
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    technologies: ["React Native", "Cross-platform", "iOS", "Android", "Firebase"]
  }
];

const stats = [
  { number: "10+", label: "Projects Completed" },
  { number: "2+", label: "Years Experience" },
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            I'm a passionate full-stack developer with 2+ years of experience creating 
            innovative web and mobile applications. Currently pursuing BTech in Electronics 
            and Communication Engineering, I love turning complex problems into simple, 
            beautiful, and intuitive solutions.
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
              My journey began with curiosity about electronics and quickly evolved into 
              software development. I've gained hands-on experience through internships at 
              Comely Enterprises and Digital Xperts, working on scalable applications and 
              backend systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building full-stack applications using technologies like 
              Angular, React Native, Node.js, and various databases. I'm passionate about 
              solving complex problems and constantly learning new technologies to build 
              innovative solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, solving 
              coding challenges on LeetCode, or working on personal projects to expand 
              my skillset.
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
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center p-6 shadow-card border-primary/10 hover:shadow-elegant transition-all duration-300">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full shadow-card hover:shadow-elegant transition-all duration-300 border-primary/10">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-primary rounded-lg text-white mr-3">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-lg">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};