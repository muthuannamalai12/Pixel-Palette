
import { useEffect } from "react";
import PageTransition from "@/components/layouts/PageTransition";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Observer for reveal animations
    const observerOptions = {
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => observer.observe(element));

    // Lazy loading of images
    const lazyLoadImages = () => {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      
      lazyImages.forEach((img) => {
        const parent = img.parentNode;
        if (parent) {
          parent.classList.add('lazy-image-container');
          img.classList.add('lazy-image-loading');
          
          img.addEventListener('load', () => {
            img.classList.remove('lazy-image-loading');
          });
        }
      });
    };

    lazyLoadImages();

    // Clean up
    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <PageTransition>
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Index;
