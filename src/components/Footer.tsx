
import { Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="pt-16 pb-8 bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-8 border-b border-black/10">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-medium tracking-tight text-black">
              pixie.
            </a>
            <p className="mt-2 text-black/60 max-w-xs">
              Creating beautiful digital experiences since 2018
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-black/80" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-black/80" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-black/80" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "Projects", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {["Web Design", "Mobile Apps", "Branding", "Digital Marketing", "UI/UX Design"].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-black/10">
          <p className="text-sm text-black/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Pixie. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-sm text-black/60 hover:text-black transition-colors"
          >
            <span>Back to top</span>
            <span className="p-1 rounded-full bg-black/5 group-hover:bg-black/10 transition-colors">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
