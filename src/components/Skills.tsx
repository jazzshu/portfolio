
import React from "react";
import {
  Code,
  GraduationCap,
  Container,
  CircleDollarSign,
  Code2,
  Server,
  Terminal,
  Github,
  Cloud,
  MessageSquare,
} from "lucide-react";

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon, title, skills }) => {
  return (
    <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-sm border border-slate-100 dark:border-navy transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="mr-3 text-accent">{icon}</div>
        <h3 className="text-lg font-semibold text-navy-dark dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <span key={index} className="tech-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code2 size={24} />,
      title: "Programming Languages",
      skills: ["Java", "Go", "Python", "Bash", "SQL"],
    },
    {
      icon: <Container size={24} />,
      title: "Containerization & Orchestration",
      skills: ["Docker", "Kubernetes", "Helm", "Docker Compose"],
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Platforms",
      skills: ["AWS", "Google Cloud", "Azure", "Terraform"],
    },
    {
      icon: <Server size={24} />,
      title: "Backend & Infrastructure",
      skills: ["Spring Boot", "Microservices", "REST APIs", "RabbitMQ", "Kafka"],
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Message Brokers & Streaming",
      skills: ["Apache Artemis", "Apache Pulsar", "Apache Kafka", "Distributed Messaging"],
    },
    {
      icon: <Github size={24} />,
      title: "CI/CD & Version Control",
      skills: ["GitLab CI/CD", "GitHub Actions", "Jenkins", "Git"],
    },
    {
      icon: <Terminal size={24} />,
      title: "Operating Systems & Tools",
      skills: ["Linux", "Unix", "Shell Scripting", "Monitoring", "Prometheus", "Grafana"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="numbered-heading">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
