
import { useEffect, useRef } from "react";
import { ArrowRight, Layout, Smartphone, Globe, PenTool } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const services: Service[] = [
    {
      id: 1,
      title: "Web Design",
      description: "We create beautiful, responsive websites that engage visitors and drive conversions.",
      icon: <Layout className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Custom mobile applications designed to provide seamless experiences across all devices.",
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Branding",
      description: "Strategic brand identity development that connects with your target audience.",
      icon: <PenTool className="h-6 w-6" />,
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Results-driven digital marketing strategies to grow your online presence.",
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  useEffect(() => {
    const observeSection = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const observeServices = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observeSection.observe(sectionRef.current);
    }

    serviceRefs.current.forEach((ref) => {
      if (ref) observeServices.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observeSection.unobserve(sectionRef.current);
      }
      serviceRefs.current.forEach((ref) => {
        if (ref) observeServices.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="page-section"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <span className="inline-block mb-2 text-sm font-medium tracking-wide text-black/60">Our Services</span>
            <h2 className="heading-lg mb-4">Expertise that drives results</h2>
            <p className="text-lg text-black/70 mb-8">
              We offer a comprehensive range of design and development services to help your business
              stand out in the digital landscape. Our approach combines creativity with strategy to deliver
              exceptional results.
            </p>
            <a href="#contact" className="button-primary inline-flex items-center space-x-2">
              <span>Work With Us</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (serviceRefs.current[index] = el)}
                className="reveal p-6 rounded-lg hover:bg-secondary transition-colors duration-300 border border-transparent hover:border-black/5"
                style={{ transitionDelay: `${0.2 * index}s` }}
              >
                <div className="p-3 rounded-lg bg-primary/5 inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-black/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
