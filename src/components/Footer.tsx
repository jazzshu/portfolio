import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold flex items-center">
              <span className="font-mono text-accent mr-1">&lt;</span>
              <span>Jason</span>
              <span className="font-mono text-accent ml-1">/&gt;</span>
            </a>
            <p className="text-slate-light mt-2 max-w-xs">
              Cloud Backend Engineer specializing in Kubernetes, Java, and cloud infrastructure.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 items-center">
            <div className="flex space-x-6 text-slate-light mb-6 md:mb-0">
              <a 
                href="https://github.com/jazzshu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jasonshuyinta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:jasonshuyinta@gmail.com"
                className="hover:text-accent transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy mt-8 pt-8 text-center text-slate-light text-sm">
          <p>© {new Date().getFullYear()} Jason. All rights reserved.</p>
          <p className="mt-1">
            Built with{" "}
            <span className="text-accent">React</span> &{" "}
            <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
