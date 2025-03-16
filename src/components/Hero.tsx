
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0,rgba(0,0,0,0)_100%)]"></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <span 
            className="inline-block mb-4 px-3 py-1 rounded-full bg-black/5 text-sm font-medium tracking-wide animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Digital Design Studio
          </span>
          
          <h1 className="heading-xl mb-6 reveal active" style={{ transitionDelay: "0.4s" }}>
            Creating <span className="text-gradient">beautiful</span> digital experiences that engage
          </h1>
          
          <p 
            className="text-lg md:text-xl text-black/70 mb-10 max-w-2xl mx-auto reveal"
            style={{ transitionDelay: "0.6s" }}
          >
            We craft minimal and beautiful digital experiences that connect brands with their audience through thoughtful design and strategic development.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 reveal"
            style={{ transitionDelay: "0.8s" }}
          >
            <a 
              href="#projects" 
              className="button-primary px-8 py-3 rounded-full w-full sm:w-auto"
            >
              View Our Work
            </a>
            <a 
              href="#contact" 
              className="button-secondary px-8 py-3 rounded-full w-full sm:w-auto"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-gentle">
        <a href="#projects" className="text-sm font-medium text-black/60 mb-2">Scroll Down</a>
        <ArrowDown className="h-4 w-4 text-black/60" />
      </div>
    </section>
  );
};

export default Hero;
