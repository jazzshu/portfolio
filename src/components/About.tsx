
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-navy-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="numbered-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 text-slate dark:text-slate-light space-y-4">
            <p>
              Hello! I'm a Cloud and Backend Engineer who started my professional journey in 2021 after graduating from the <span className="text-accent">University of Bologna</span>. 
              My passion lies in building robust backend systems and infrastructure that power modern applications.
            </p>
            <p>
              Born in 1997, I began my career in Italy, working first in Bologna and later in Milan, before relocating to <span className="text-accent">Switzerland in 2023</span> to 
              further advance my career in cloud technologies.
            </p>
            <p>
              My expertise centers around cloud-native technologies and backend development. I enjoy working with containerized applications, 
              orchestration systems, and building CI/CD pipelines that enable seamless deployment of applications.
            </p>
            <p>
              When I'm not coding or configuring cloud infrastructure, I enjoy contributing to open source projects and 
              staying up-to-date with the latest advancements in cloud technologies by reading technical articles and attending community events.
            </p>
            
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-2 text-navy-dark dark:text-white">
                My journey so far:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Graduated from University of Bologna (2021)</li>
                <li>Started career in Bologna, Italy</li>
                <li>Worked in Milan, Italy</li>
                <li>Relocated to Switzerland (2023)</li>
                <li>Obtained multiple cloud certifications</li>
              </ul>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="w-full aspect-square bg-navy-light rounded-md p-4">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-6xl font-mono opacity-20">
                {"</>"}
              </div>
              <div className="relative z-10 h-full flex flex-col justify-around">
                <div>
                  <p className="text-accent font-mono mb-1 text-sm">// education</p>
                  <p className="text-white font-medium">University of Bologna</p>
                  <p className="text-slate-light text-sm">Computer Science</p>
                </div>
                <div>
                  <p className="text-accent font-mono mb-1 text-sm">// location</p>
                  <p className="text-white font-medium">Switzerland</p>
                  <p className="text-slate-light text-sm">Formerly Italy</p>
                </div>
                <div>
                  <p className="text-accent font-mono mb-1 text-sm">// focus</p>
                  <p className="text-white font-medium">Cloud & Backend</p>
                  <p className="text-slate-light text-sm">Infrastructure & Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
