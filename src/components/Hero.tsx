import { Button } from "@/components/ui/button";
import heroImage from "@/assets/brian-hero.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated" />
      
      {/* Content */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Brian Kibet
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-content-secondary">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-content-muted max-w-lg">
              I create beautiful, functional web applications that solve real-world problems. 
              Passionate about clean code, modern design, and exceptional user experiences.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-brand hover:shadow-brand transition-all duration-300 text-lg px-8"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-border hover:bg-surface-hover text-lg px-8"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="relative lg:justify-self-end">
          <div className="relative">
            <img
              src={heroImage}
              alt="Brian Kibet - Full Stack Developer"
              className="rounded-2xl shadow-portfolio-lg max-w-md w-full"
            />
            <div className="absolute inset-0 bg-gradient-brand opacity-10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;