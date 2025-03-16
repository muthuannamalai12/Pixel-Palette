
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Brand Identity",
      category: "Branding",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
      link: "#",
    },
    {
      id: 2,
      title: "Ecommerce Website",
      category: "Web Design",
      imageUrl: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
      link: "#",
    },
    {
      id: 3,
      title: "Mobile Application",
      category: "UI/UX Design",
      imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
      link: "#",
    },
    {
      id: 4,
      title: "Product Launch",
      category: "Marketing",
      imageUrl: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
      link: "#",
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

    const observeProjects = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observeSection.observe(sectionRef.current);
    }

    projectRefs.current.forEach((ref) => {
      if (ref) observeProjects.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observeSection.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach((ref) => {
        if (ref) observeProjects.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="page-section bg-secondary"
    >
      <div className="container-custom">
        <div className="mb-16 max-w-xl reveal">
          <span className="inline-block mb-2 text-sm font-medium tracking-wide text-black/60">Our Work</span>
          <h2 className="heading-lg mb-4">Selected Projects</h2>
          <p className="text-lg text-black/70">
            Explore our portfolio of award-winning designs and creative solutions that have helped our clients reach their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="reveal group"
              style={{ transitionDelay: `${0.2 * index}s` }}
            >
              <a href={project.link} className="block image-hover overflow-hidden rounded-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <span className="block text-sm text-black/60 mb-1">{project.category}</span>
                    <h3 className="text-xl font-medium group-hover:text-black transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="p-2 rounded-full bg-white transition-colors">
                    <ArrowUpRight className="h-4 w-4 text-black/60 group-hover:text-black transition-colors" />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <a href="#" className="button-secondary inline-flex items-center space-x-2">
            <span>View All Projects</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
