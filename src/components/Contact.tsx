import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to a backend service in a real application
    console.log("Form submitted!");
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-navy-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="numbered-heading">Contact Me</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="text-center mb-8">
            <p className="text-slate dark:text-slate-light">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  required
                  className="bg-slate-50 dark:bg-navy-light border-slate-200 dark:border-navy"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-slate-50 dark:bg-navy-light border-slate-200 dark:border-navy"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  required
                  className="bg-slate-50 dark:bg-navy-light border-slate-200 dark:border-navy"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  required
                  className="min-h-[120px] bg-slate-50 dark:bg-navy-light border-slate-200 dark:border-navy"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-navy-dark"
              >
                Send Message
              </Button>
            </form>
            
            <div className="bg-navy-light rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-slate-light mb-6">
                  Feel free to reach out through any of these platforms. I'm always interested in new projects and opportunities.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:jasonshuyinta@gmail.com"
                    className="flex items-center text-slate-light hover:text-accent transition-colors"
                  >
                    <Mail size={20} className="mr-3" />
                    <span>jasonshuyinta@gmail.com</span>
                  </a>
                  <a
                    href="https://github.com/jazzshu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-light hover:text-accent transition-colors"
                  >
                    <Github size={20} className="mr-3" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jasonshuyinta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-light hover:text-accent transition-colors"
                  >
                    <Linkedin size={20} className="mr-3" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-navy">
                <p className="text-slate-light text-sm">
                  Based in <span className="text-accent">Switzerland</span> — 
                  Available for remote opportunities worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
