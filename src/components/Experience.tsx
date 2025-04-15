
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItemProps {
  id: string;
  role: string;
  company: string;
  date: string;
  location: string;
  descriptions: string[];
}

const experiences: ExperienceItemProps[] = [
  {
    id: "switzerland",
    role: "Senior Cloud Engineer",
    company: "Swiss Tech Company",
    date: "2023 - Present",
    location: "Switzerland",
    descriptions: [
      "Design and implement scalable Kubernetes clusters for enterprise applications",
      "Develop and maintain Helm charts for streamlined application deployment",
      "Architect CI/CD pipelines using GitLab CI for automated testing and deployment",
      "Lead infrastructure-as-code initiatives using Terraform and AWS CloudFormation",
      "Implement observability solutions with Prometheus, Grafana, and ELK stack",
    ],
  },
  {
    id: "milan",
    role: "Cloud Backend Developer",
    company: "Milan Tech",
    date: "2022 - 2023",
    location: "Milan, Italy",
    descriptions: [
      "Developed and maintained microservices using Spring Boot and Java",
      "Containerized applications with Docker and deployed to Kubernetes",
      "Implemented CI/CD pipelines with GitLab CI",
      "Collaborated with cross-functional teams to design and deploy cloud-native applications",
      "Managed AWS cloud resources including EC2, S3, and RDS",
    ],
  },
  {
    id: "bologna",
    role: "Junior Backend Developer",
    company: "Bologna Systems",
    date: "2021 - 2022",
    location: "Bologna, Italy",
    descriptions: [
      "Developed REST APIs using Java Spring Boot",
      "Collaborated on the design and implementation of microservices",
      "Participated in code reviews and implemented best practices",
      "Worked with Docker containers for local development",
      "Assisted in maintaining CI/CD pipelines",
    ],
  },
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("switzerland");

  return (
    <section id="experience" className="py-20 bg-white dark:bg-navy-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="numbered-heading">Work Experience</h2>

        <div className="mt-12">
          <Tabs
            defaultValue="switzerland"
            value={activeTab}
            onValueChange={setActiveTab}
            className="max-w-3xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-3">
              {experiences.map((exp) => (
                <TabsTrigger key={exp.id} value={exp.id}>
                  {exp.company}
                </TabsTrigger>
              ))}
            </TabsList>

            {experiences.map((exp) => (
              <TabsContent
                key={exp.id}
                value={exp.id}
                className="mt-6 p-6 bg-slate-50 dark:bg-navy-light rounded-lg border border-slate-100 dark:border-navy"
              >
                <h3 className="text-xl font-semibold text-navy-dark dark:text-white">
                  {exp.role}{" "}
                  <span className="text-accent">@ {exp.company}</span>
                </h3>
                
                <div className="flex items-center space-x-6 mt-2 text-slate dark:text-slate-light">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {exp.descriptions.map((desc, i) => (
                    <li key={i} className="flex text-slate dark:text-slate-light">
                      <span className="text-accent mr-2">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
