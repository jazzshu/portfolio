
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
  techStack?: string[];
}

const experiences: ExperienceItemProps[] = [
  {
    id: "swiss",
    role: "Cloud Backend Engineer",
    company: "Swiss AviationSoftware",
    date: "2023 - Present",
    location: "Switzerland",
    descriptions: [
      "Design and implement cloud-native solutions using Kubernetes and GKE",
      "Develop and maintain Helm charts for application deployment",
      "Architect CI/CD pipelines using GitLab CI",
      "Work with message brokers like ActiveMQ Artemis",
      "Implement monitoring solutions with Grafana",
    ],
    techStack: [
      "Kubernetes / GKE",
      "Docker",
      "Helm",
      "Linux",
      "GitLab",
      "Spring",
      "ActiveMQ Artemis",
      "Google Cloud Platform",
      "Keycloak",
      "Grafana"
    ],
  },
  {
    id: "accenture",
    role: "Backend Developer",
    company: "Accenture",
    date: "2022 - 2023",
    location: "Milan, Italy",
    descriptions: [
      "Developed backend services using Java and Spring Boot",
      "Worked with MongoDB and SQL Server databases",
      "Implemented monitoring using Dynatrace and ELK stack",
      "Maintained CI/CD pipelines with Jenkins and Azure DevOps",
    ],
    techStack: [
      "Java 8",
      "Spring Boot",
      "Spring MVC",
      "MongoDB",
      "SQL Server",
      "Maven",
      "Hibernate",
      "Dynatrace",
      "ELK stack",
      "Swagger",
      "Mockito",
      "SonarQube",
      "Bitbucket",
      "Jenkins",
      "Jira",
      "Azure DevOps"
    ],
  },
  {
    id: "capgemini",
    role: "Backend Developer",
    company: "Capgemini",
    date: "2021 - 2022",
    location: "Bologna, Italy",
    descriptions: [
      "Developed and maintained Java-based backend services",
      "Worked with Spring Boot and Spring MVC frameworks",
      "Implemented RESTful APIs with Swagger documentation",
      "Managed build processes with Maven and Gradle",
    ],
    techStack: [
      "Java 8",
      "Java 11",
      "JPA",
      "Spring MVC",
      "Spring Boot",
      "Maven",
      "Gradle",
      "Swagger",
      "Hibernate",
      "SonarQube",
      "JavaScript",
      "React JS",
      "Git",
      "Jenkins",
      "Jira",
      "Trello",
      "MySQL"
    ],
  },
  {
    id: "cineca",
    role: "Web Developer",
    company: "Cineca",
    date: "2021",
    location: "Bologna, Italy",
    descriptions: [
      "Developed web applications using PHP",
      "Worked on frontend and backend integration",
      "Collaborated with cross-functional teams",
      "Participated in code reviews and implementation of best practices",
    ],
    techStack: ["PHP", "Web Development"],
  },
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("swiss");

  return (
    <section id="experience" className="py-20 bg-white dark:bg-navy-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="numbered-heading">Work Experience</h2>

        <div className="mt-12">
          <Tabs
            defaultValue="swiss"
            value={activeTab}
            onValueChange={setActiveTab}
            className="max-w-3xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-4">
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

                {exp.techStack && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-navy-dark dark:text-white mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded bg-navy/10 dark:bg-navy text-navy-dark dark:text-slate-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
