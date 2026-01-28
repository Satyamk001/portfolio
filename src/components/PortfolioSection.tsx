import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import rozgars from "@/assets/rozgars.jpeg";
import isketcher from "@/assets/isketcher.png";
import fitnest from "@/assets/fitnest.png";
import chatapp from "@/assets/chat-app.png";
const projects = [
  {
    id: 1,
    title: "Rozgars - Job Portal Platform",
    description: "A full-stack job portal website that connects candidates with employers. Developed using Angular, AngularJS, React Native, Express.js, and MySQL with secure user authentication and role-based access for job seekers and employers.",
    image: rozgars,
    technologies: ["Angular", "Node.js", "MySQL", "Express.js", "JWT"],
    liveUrl: "https://www.rozgars.com/",
    //githubUrl: "https://www.rozgars.com/",
    featured: true
  },
  {
    id: 2,
    title: "Fitness: Multi-Gym Management System",
    description: "A scalable web application for multi-gym operations built with Angular, Node.js, and MySQL. Features include attendance tracking, salary calculation, membership plan purchases, and flexible installment-based payment options.",
    image: fitnest,
    technologies: ["Angular", "Node.js", "MySQL", "Express.js", "Payment Gateway"],
    liveUrl: "hosted on IIS server",
    //githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "AI Diagram Creator - Mermaid Sketcher",
    description: "An intelligent diagram creation tool that combines Mermaid syntax with AI assistance. Features real-time diagram generation, AI-powered prompts for creating flowcharts, and export functionality with clean, intuitive interface.",
    image: isketcher,
    technologies: ["React", "TypeScript", "AI Integration", "Mermaid", "Tailwind CSS"],
    liveUrl: "https://isketcher.netlify.app/",
    featured: true
  },
  {
    id: 4,
    title: "Social Media Microservice",
    description: "Developed a social media microservice using Node.js and MongoDB, enabling users to create profiles, post updates, follow others, and engage through likes and comments. Implemented RESTful APIs for seamless integration with larger applications.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    technologies: ["Node.js", "MongoDB", "Express.js", "REST APIs"],
    liveUrl: "#",
    githubUrl: "https://github.com/Satyamk001/social-media-microservices",
    featured: false
  },
  {
    // chat feature and thread (meta) like feature to connect and interact with users
    id: 5,
    title: "KUKU FUN",
    description: "Chat application for connecting and interacting with users",
    image: chatapp,
    technologies: ["Node.js", "Next.js", "Express.js", "WebSocket", "PostgreSQL", "Tailwind CSS", "Socket.io", "Redis"],
    liveUrl: "https://kuku-fun.vercel.app/",
    githubUrl: "https://github.com/Satyamk001/kuku_fun",
    featured: true
  }
];

export const PortfolioSection = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
            in full-stack development, from concept to deployment.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8 flex items-center"
          >
            <span className="w-2 h-8 bg-gradient-primary rounded-full mr-3"></span>
            Featured Projects
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }
                }}
                className="group"
              >
                <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 border-primary/10">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >

                          {project.id != 2 ? <ExternalLink className="w-4 h-4 mr-2" /> : ''}
                          {project.id == 2 ? project.liveUrl : 'Live Demo'}
                        </Button>
                        {/* <Button
                          size="sm"
                          variant="secondary"
                          className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button> */}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
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
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <Button onClick={() => window.open("https://github.com/satyamk001", "_blank")}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
