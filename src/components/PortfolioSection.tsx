import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import rozgars from "@/assets/rozgars.jpeg";
import isketcher from "@/assets/isketcher.png";
import fitnest from "@/assets/fitnest.png";
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
  // {
  //   id: 3,
  //   title: "User Authentication & Role-based Access",
  //   description: "Implemented comprehensive user authentication system with role-based access control for job seekers and employers. Features secure login, registration, and permission management with JWT tokens.",
  //   image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  //   technologies: ["Node.js", "JWT", "bcrypt", "Express.js", "MySQL"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false
  // },
  // {
  //   id: 4,
  //   title: "Razorpay Payment Integration",
  //   description: "Integrated Razorpay payment gateway for purchasing courses, subscription plans, and referral earnings. Designed responsive UI for job searching, application tracking, and employer job postings.",
  //   image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop",
  //   technologies: ["Razorpay", "JavaScript", "HTML/CSS", "Payment API"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false
  // },
  // {
  //   id: 5,
  //   title: "Email Warm-up System",
  //   description: "Developed and integrated an email warm-up feature using Node.js, MongoDB, NodeMailer transporter and cron scheduler to automate reputation-building email flows and ensure consistent deliverability.",
  //   image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop",
  //   technologies: ["Node.js", "MongoDB", "NodeMailer", "Cron Jobs"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: true
  // },
  // {
  //   id: 6,
  //   title: "IIS Server Deployment",
  //   description: "Deployed complete web application on IIS server ensuring stable hosting, seamless routing, and secure access across multiple gym branches with real-time monitoring and scalable architecture.",
  //   image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  //   technologies: ["IIS Server", "Windows Server", "Deployment", "Monitoring"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false
  // }
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

        {/* Other Projects */}
        {/* <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8 flex items-center"
          >
            <span className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full mr-3"></span>
            Other Projects
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 border-primary/10 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity delay-150">
                          <Github className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div> */}

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
