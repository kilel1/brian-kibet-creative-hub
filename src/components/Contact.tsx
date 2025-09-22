import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  const contactInfo = [
    {
      label: "Email",
      value: "brian.kibet@email.com",
      href: "mailto:brian.kibet@email.com"
    },
    {
      label: "Phone",
      value: "+254 700 000 000",
      href: "tel:+254700000000"
    },
    {
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-brand bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-content-secondary max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-content-primary mb-4">
                Let's work together
              </h3>
              <p className="text-content-secondary leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Whether you have a specific project in mind 
                or just want to connect, feel free to reach out.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-gradient-brand rounded-full"></div>
                  <div>
                    <span className="text-content-muted text-sm">{info.label}</span>
                    <a
                      href={info.href}
                      className="block text-content-primary hover:text-brand-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="bg-surface-elevated p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-content-secondary mb-2 block">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    required
                    className="bg-surface border-border focus:border-brand-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-content-secondary mb-2 block">
                    Last Name
                  </label>
                  <Input
                    placeholder="Doe"
                    required
                    className="bg-surface border-border focus:border-brand-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-content-secondary mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-surface border-border focus:border-brand-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-content-secondary mb-2 block">
                  Subject
                </label>
                <Input
                  placeholder="Project Inquiry"
                  required
                  className="bg-surface border-border focus:border-brand-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-content-secondary mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-surface border-border focus:border-brand-primary resize-none"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-brand hover:shadow-brand transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;