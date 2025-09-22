import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/brian-hero.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface/50 to-surface-elevated" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-brand-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-brand-secondary rounded-full animate-float opacity-40" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-brand-accent rounded-full animate-float opacity-30" style={{animationDelay: '2s'}} />
      
      {/* Content */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-glass rounded-full border border-border/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-content-secondary">Available for work</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                Brian Kibet
              </span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-2xl lg:text-3xl text-content-secondary font-light">
                Full Stack Developer
              </p>
              <p className="text-lg lg:text-xl text-brand-accent">
                & UI/UX Designer
              </p>
            </div>
            
            <p className="text-lg text-content-muted max-w-lg leading-relaxed">
              I craft exceptional digital experiences through clean code, 
              beautiful design, and innovative solutions that solve real-world problems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-brand hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 group"
            >
              View My Work
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/50 hover:bg-surface-hover hover:border-brand-primary text-lg px-8 backdrop-blur-glass"
            >
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:brian.kibet@email.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-elevated/50 backdrop-blur-glass rounded-full border border-border/30 hover:border-brand-primary hover:bg-brand-primary/10 transition-all duration-300 hover:scale-110 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon className="w-5 h-5 text-content-secondary group-hover:text-brand-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="relative lg:justify-self-end animate-scale-in" style={{animationDelay: '0.3s'}}>
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-glow rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* Image Container */}
            <div className="relative">
              <img
                src={heroImage}
                alt="Brian Kibet - Full Stack Developer & UI/UX Designer"
                className="rounded-2xl shadow-portfolio-xl max-w-md w-full relative z-10 group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-brand opacity-5 rounded-2xl z-20 group-hover:opacity-10 transition-opacity duration-500" />
              
              {/* Floating Skills */}
              <div className="absolute -top-4 -right-4 bg-surface-elevated/90 backdrop-blur-glass px-4 py-2 rounded-full border border-border/30 animate-float">
                <span className="text-sm font-medium text-brand-primary">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-surface-elevated/90 backdrop-blur-glass px-4 py-2 rounded-full border border-border/30 animate-float" style={{animationDelay: '1s'}}>
                <span className="text-sm font-medium text-brand-secondary">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 text-content-muted hover:text-brand-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;