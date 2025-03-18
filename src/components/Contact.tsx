
import { useState, useRef, useEffect } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="page-section bg-secondary"
    >
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto reveal">
          <span className="inline-block mb-2 text-sm font-medium tracking-wide text-black/60">Contact Us</span>
          <h2 className="heading-lg mb-4">Get in touch</h2>
          <p className="text-lg text-black/70">
            Have a project in mind or want to know more about our services? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-12 bg-white focus:ring-0 border-black/10 focus-visible:ring-0 focus-visible:border-black/30"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="h-12 bg-white focus:ring-0 border-black/10 focus-visible:ring-0 focus-visible:border-black/30"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  className="min-h-32 bg-white focus:ring-0 border-black/10 focus-visible:ring-0 focus-visible:border-black/30"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="mr-2">Sending</span>
                    <span className="animate-pulse">...</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    <span className="mr-2">Send Message</span>
                    <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          <div className="lg:col-span-1 reveal">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-2">Contact Information</h3>
                <p className="text-black/70">
                  We're available to answer any questions you might have about our services.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-black/60">Email</h4>
                    <a href="mailto:hello@pixiepalette.co" className="text-lg hover:text-primary transition-colors">
                      hello@pixiepalette.co
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-black/60">Phone</h4>
                    <a href="tel:+1234567890" className="text-lg hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-black/60">Location</h4>
                    <p className="text-lg">
                      123 Design Street, Creative City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
