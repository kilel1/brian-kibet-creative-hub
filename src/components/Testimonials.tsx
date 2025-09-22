import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Solutions",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "Brian is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to solve complex problems makes him invaluable to any team."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "Innovation Labs",
      avatar: "/placeholder.svg", 
      rating: 5,
      content: "Working with Brian was a game-changer for our projects. His technical expertise and creative problem-solving helped us achieve goals we thought were impossible."
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "Creative Studio",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "Brian bridges the gap between design and development beautifully. He understands user experience and translates designs into pixel-perfect, performant applications."
    },
    {
      name: "David Thompson",
      role: "Startup Founder",
      company: "StartupXYZ",
      avatar: "/placeholder.svg",
      rating: 5,
      content: "Brian helped us build our MVP from the ground up. His full-stack expertise and business understanding made the development process smooth and efficient."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="bg-gradient-brand bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-content-secondary max-w-3xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-card backdrop-blur-glass border-border/30 p-8 hover:bg-surface-hover/50 transition-all duration-300 hover:shadow-portfolio-lg hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-brand-primary/30" />
                  
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <blockquote className="text-content-secondary leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                  <Avatar className="w-12 h-12 border-2 border-brand-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-brand text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h4 className="font-semibold text-content-primary group-hover:text-brand-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-content-muted">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-content-secondary mb-6">
            Ready to work together and create something amazing?
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-brand text-white rounded-full hover:shadow-glow transition-all duration-300 cursor-pointer hover:scale-105">
            <span className="font-medium">Let's start your project</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;