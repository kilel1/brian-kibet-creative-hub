import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      number: "3+",
      label: "Years Experience",
      description: "Building web applications"
    },
    {
      number: "50+",
      label: "Projects Completed",
      description: "From concept to deployment"
    },
    {
      number: "15+",
      label: "Happy Clients",
      description: "Satisfied with results"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-brand bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-content-secondary max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a keen eye for design and a love for creating 
            digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-content-secondary leading-relaxed">
              With over 3 years of experience in web development, I specialize in creating modern, 
              responsive applications using cutting-edge technologies. My journey started with a 
              curiosity about how websites work, and it has evolved into a passion for crafting 
              exceptional digital experiences.
            </p>
            
            <p className="text-lg text-content-secondary leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive user interfaces 
              that not only look great but also provide seamless functionality. My approach combines 
              technical expertise with creative problem-solving to deliver solutions that exceed 
              expectations.
            </p>
            
            <p className="text-lg text-content-secondary leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-surface-elevated p-6 text-center hover:bg-surface-hover transition-colors">
                <div className="text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-2">
                  {highlight.number}
                </div>
                <div className="text-lg font-semibold text-content-primary mb-1">
                  {highlight.label}
                </div>
                <div className="text-sm text-content-muted">
                  {highlight.description}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;