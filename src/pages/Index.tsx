
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-dark">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
