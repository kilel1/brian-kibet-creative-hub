import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "2022 - Present",
      description: "Led development of enterprise web applications serving 50K+ users. Architected scalable microservices and implemented modern React applications with TypeScript.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Innovation Labs",
      location: "Nairobi, Kenya",
      period: "2021 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.",
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Docker"],
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced bug reports by 35%",
        "Mentored 3 junior developers"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Nairobi, Kenya", 
      period: "2020 - 2021",
      description: "Built responsive web applications and collaborated with UX designers to create intuitive user experiences. Focused on performance optimization and accessibility.",
      technologies: ["JavaScript", "React", "SCSS", "Webpack", "Jest"],
      achievements: [
        "Improved mobile performance by 50%",
        "Achieved 98% accessibility score",
        "Implemented design system used across 10+ projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-brand bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-content-secondary max-w-3xl mx-auto">
            My professional journey in creating exceptional digital experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-brand"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-brand rounded-full border-4 border-background"></div>
                  
                  {/* Content */}
                  <div className="ml-20">
                    <Card className="bg-gradient-card backdrop-blur-glass border-border/30 p-8 hover:bg-surface-hover/50 transition-all duration-300 hover:shadow-portfolio-lg group">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-bold text-content-primary group-hover:text-brand-primary transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-xl text-brand-accent font-medium">
                              {exp.company}
                            </p>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2 text-sm text-content-muted">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-content-secondary leading-relaxed">
                          {exp.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-surface/50 text-content-secondary border-border/30 hover:border-brand-primary transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Achievements */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-content-primary">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-content-secondary text-sm">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;