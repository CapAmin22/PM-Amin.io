
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

type ExperienceItemProps = {
  date: string;
  company: string;
  title: string;
  description: string;
  achievements: string[];
  delay: number;
};

const ExperienceItem = ({ date, company, title, description, achievements, delay }: ExperienceItemProps) => (
  <motion.div
    className="relative pl-8 pb-12 border-l border-gray-200 last:border-0 last:pb-0"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-fintech-blue/20 flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-fintech-blue"></div>
    </div>
    
    <div className="mb-1 text-sm font-medium text-fintech-blue">{date}</div>
    <h3 className="text-xl font-bold text-fintech-dark mb-1">{title}</h3>
    <div className="text-fintech-gray mb-3">{company}</div>
    <p className="text-fintech-gray mb-4">{description}</p>
    
    <div className="space-y-2">
      {achievements.map((achievement, index) => (
        <div key={index} className="flex items-start gap-2">
          <div className="w-5 h-5 mt-0.5 rounded-full bg-fintech-blue/10 flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-fintech-blue"></div>
          </div>
          <span className="text-sm text-fintech-gray">{achievement}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      date: "2020 - Present",
      company: "TechFin Solutions",
      title: "Senior Product Manager",
      description: "Leading product strategy and development for a suite of financial technology products serving over 200,000 users and processing more than $50M in monthly transactions.",
      achievements: [
        "Led the development and launch of a next-generation payment platform that increased transaction volume by 46%",
        "Implemented a user research program that improved customer satisfaction scores by 32 points",
        "Coordinated with engineering, design, and compliance teams to deliver regulatory-compliant financial products",
        "Managed a product team of 5 and collaborated with cross-functional teams of 25+ members"
      ]
    },
    {
      date: "2018 - 2020",
      company: "FinTech Innovations Inc.",
      title: "Product Manager",
      description: "Managed the complete product lifecycle for a digital banking platform serving small to medium-sized businesses.",
      achievements: [
        "Redesigned onboarding flow, reducing account creation time by 68% and increasing conversion rates by 41%",
        "Initiated and led an API strategy that expanded integration capabilities with 15+ additional financial services",
        "Conducted competitive analysis and market research to identify new product opportunities",
        "Developed comprehensive product roadmaps aligned with business objectives and user needs"
      ]
    },
    {
      date: "2016 - 2018",
      company: "Global Financial Systems",
      title: "Associate Product Manager",
      description: "Supported the development of wealth management and investment analysis products for institutional clients.",
      achievements: [
        "Collaborated on the launch of a portfolio optimization tool that became the company's fastest-growing product",
        "Created detailed user stories and acceptance criteria for development teams",
        "Analyzed user feedback and usage data to identify improvement opportunities",
        "Participated in agile development processes, facilitating communication between stakeholders"
      ]
    },
    {
      date: "2014 - 2016",
      company: "Digibank Corporation",
      title: "Business Analyst",
      description: "Analyzed business requirements and translated them into functional specifications for financial products.",
      achievements: [
        "Developed comprehensive requirement specifications for mobile banking features",
        "Conducted user acceptance testing for critical financial transactions",
        "Created dashboard reports to track key performance indicators",
        "Supported the migration from legacy systems to modern cloud-based solutions"
      ]
    }
  ];

  const education = [
    {
      date: "2012 - 2014",
      company: "Stanford University",
      title: "MBA, Technology Management",
      description: "Specialized in financial technology and product innovation, with focus on digital transformation in banking.",
      achievements: [
        "Graduated with distinction, GPA 3.9/4.0",
        "Research project: 'The Future of Digital Banking'",
        "Led student fintech innovation group",
        "Recipient of Technology Leadership Scholarship"
      ]
    },
    {
      date: "2008 - 2012",
      company: "Massachusetts Institute of Technology",
      title: "BSc, Computer Science & Economics",
      description: "Dual major combining technical expertise with financial fundamentals.",
      achievements: [
        "Magna Cum Laude, GPA 3.8/4.0",
        "Thesis: 'Algorithmic Approaches to Financial Market Analysis'",
        "Financial Technology Club President",
        "Internship at Goldman Sachs Technology Division"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="chip mb-4">My Journey</div>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-fintech-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>
          
          <motion.p
            className="text-lg text-fintech-gray"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A timeline of my career journey in financial technology product management, 
            highlighting key roles and achievements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Briefcase className="text-fintech-blue" size={24} />
              <h3 className="text-2xl font-bold text-fintech-dark">Work Experience</h3>
            </motion.div>
            
            <div>
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  date={exp.date}
                  company={exp.company}
                  title={exp.title}
                  description={exp.description}
                  achievements={exp.achievements}
                  delay={index}
                />
              ))}
            </div>
          </div>
          
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Award className="text-fintech-blue" size={24} />
              <h3 className="text-2xl font-bold text-fintech-dark">Education</h3>
            </motion.div>
            
            <div>
              {education.map((edu, index) => (
                <ExperienceItem
                  key={index}
                  date={edu.date}
                  company={edu.company}
                  title={edu.title}
                  description={edu.description}
                  achievements={edu.achievements}
                  delay={index}
                />
              ))}
            </div>
            
            <motion.div
              className="glass-card rounded-xl p-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-fintech-dark">Certifications</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Certified Scrum Product Owner (CSPO)",
                    organization: "Scrum Alliance",
                    year: "2019"
                  },
                  {
                    title: "Product Management Certification",
                    organization: "Product School",
                    year: "2018"
                  },
                  {
                    title: "Financial Technology Professional",
                    organization: "FinTech Institute",
                    year: "2017"
                  },
                  {
                    title: "Data Analysis for Product Managers",
                    organization: "Coursera",
                    year: "2016"
                  }
                ].map((cert, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-fintech-dark">{cert.title}</div>
                      <div className="text-sm text-fintech-gray">{cert.organization}</div>
                    </div>
                    <div className="text-sm text-fintech-blue">{cert.year}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
