
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  color: string;
}

const CertificationCard: React.FC<CertificationProps> = ({
  title,
  issuer,
  date,
  logo,
  color,
}) => {
  return (
    <div className="bg-white dark:bg-navy-light rounded-lg shadow-sm border border-slate-100 dark:border-navy p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-navy-dark dark:text-white">
            {title}
          </h3>
          <p className="text-slate dark:text-slate-light">{issuer}</p>
          <div className="flex items-center mt-2 text-sm text-slate dark:text-slate-light">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
        <div
          className={`rounded-full p-3 flex items-center justify-center ${color}`}
        >
          <Award size={24} className="text-white" />
        </div>
      </div>
      <div className="mt-4">
        <Badge variant="outline" className="bg-slate-50 dark:bg-navy border-slate-200 dark:border-navy-light">
          Verified
        </Badge>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      logo: "kubernetes",
      color: "bg-blue-600",
    },
    {
      title: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      logo: "kubernetes",
      color: "bg-blue-600",
    },
    {
      title: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      date: "2022",
      logo: "gcp",
      color: "bg-red-500",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      logo: "aws",
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="numbered-heading">Certifications</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              logo={cert.logo}
              color={cert.color}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate dark:text-slate-light">
            View all my credentials on{" "}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline inline-flex items-center"
            >
              LinkedIn
              <ExternalLink size={14} className="ml-1" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
