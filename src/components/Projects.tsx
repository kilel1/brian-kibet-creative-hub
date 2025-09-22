import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskappImg from "@/assets/project-taskapp.jpg";
import weatherImg from "@/assets/project-weather.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, full-stack e-commerce solution with advanced features including real-time inventory, payment processing, admin dashboard, and analytics. Built for scalability and performance.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Redis"],
      features: ["Payment Integration", "Real-time Updates", "Admin Dashboard", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      title: "Task Management Suite",
      description: "A collaborative task management application with real-time synchronization, drag-and-drop functionality, team collaboration, and advanced project tracking capabilities.",
      image: taskappImg,
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "SCSS", "JWT"],
      features: ["Real-time Collaboration", "Drag & Drop", "Team Management", "Progress Tracking"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "An intelligent weather application featuring location-based forecasts, interactive maps, detailed analytics, and customizable alerts for weather conditions.",
      image: weatherImg,
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Mapbox"],
      features: ["Interactive Maps", "Weather Alerts", "Historical Data", "Custom Themes"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-brand bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-content-secondary max-w-3xl mx-auto">
            A showcase of recent work demonstrating modern web development techniques and creative problem-solving
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-card backdrop-blur-glass border-border/30 overflow-hidden hover:shadow-portfolio-xl transition-all duration-500 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video lg:aspect-auto lg:h-full relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Live Preview Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="lg"
                        className="bg-gradient-brand hover:shadow-glow transition-all duration-300"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Play className="mr-2 w-5 h-5" />
                          Live Preview
                        </a>
                      </Button>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-surface-elevated/90 backdrop-blur-glass text-brand-primary border-brand-primary/30">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className={`p-8 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-content-primary group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-content-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-content-primary">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                          <span className="text-sm text-content-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-content-primary">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-surface/50 text-content-secondary border-border/30 hover:border-brand-primary hover:bg-brand-primary/10 transition-all duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      className="bg-gradient-brand hover:shadow-glow hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-border/50 hover:bg-surface-hover hover:border-brand-primary backdrop-blur-glass"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* View More Projects */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            size="lg"
            variant="outline"
            className="border-border/50 hover:bg-surface-hover hover:border-brand-primary backdrop-blur-glass px-8"
          >
            <Github className="mr-2 w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;