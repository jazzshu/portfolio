import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-16 relative bg-gradient-to-br from-navy-dark to-navy-light">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-4">
              <p className="font-mono text-accent animate-fade-in-up [animation-delay:0.1s] opacity-0">
                Hi, my name is
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up [animation-delay:0.3s] opacity-0">
                Jason
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-light animate-fade-in-up [animation-delay:0.5s] opacity-0">
                I build cloud infrastructure.
              </h2>
              <p className="text-slate max-w-md animate-fade-in-up [animation-delay:0.7s] opacity-0">
                I'm a <span className="text-accent">Cloud Backend Engineer</span>{" "}
                specializing in building and deploying resilient,
                scalable systems. Currently focused on Kubernetes, cloud-native
                technologies, and infrastructure automation.
              </p>
              <div className="flex space-x-4 pt-4 animate-fade-in-up [animation-delay:0.9s] opacity-0">
                <Button
                  asChild
                  className="bg-accent hover:bg-accent-dark text-navy-dark border-none"
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-accent rounded translate-x-4 translate-y-4 z-0"></div>
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/ghibliphoto.png`}
                alt="Profile"
                className="w-60 h-60 sm:w-72 sm:h-72 object-cover rounded z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-navy-dark dark:text-white"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
