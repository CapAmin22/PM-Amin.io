
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap } from "lucide-react";

type ExperienceItemProps = {
  date: string;
  company: string;
  location: string;
  title: string;
  description: string[];
  delay: number;
};

const ExperienceItem = ({ date, company, location, title, description, delay }: ExperienceItemProps) => (
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
    <div className="text-fintech-gray mb-3">{company} • {location}</div>
    
    <div className="space-y-2">
      {description.map((achievement, index) => (
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
      date: "10/2021 - Present",
      company: "223Poultry",
      location: "Bangalore, India",
      title: "Founder",
      description: [
        "Strategic leadership for initiatives focusing on Agribusiness Assistance.",
        "Training and Education, Networking for Sustainability.",
        "Industry News and Information Sharing, Digital Collaborations."
      ]
    },
    {
      date: "05/2018 - 05/2020",
      company: "Kotak Online New Accounts",
      location: "Bangalore, India",
      title: "Product Analyst Intern",
      description: [
        "Developed and monitored KPIs such tools like Google Analytics, Mixpanel, and Crazy Egg optimize the platforms.",
        "Implemented strategies based on customer insights to implement more robust funnel tracking, enhancing user engagement and conversion rates."
      ]
    },
    {
      date: "06/2020 - 04/2021",
      company: "ThinkReduce",
      location: "Delhi, India",
      title: "Product Management Intern",
      description: [
        "Assisted in creating detailed IRP wireframes and prototypes with Figma, ensuring rapid iteration and user-centric improvements, integrating feedback and research documents.",
        "Helped in the development of Information Repository and Document Management Systems—library documents—to enhance profile matching, sorting, filtering, and prioritization."
      ]
    },
    {
      date: "08/2022 - 04/2023", 
      company: "Bauzer Technologies",
      location: "Bangalore, India",
      title: "Associate Product Analyst",
      description: [
        "Worked on automated KPI tracking systems to monitor feature usage, track defects by gathering requirements, creating wireframes, client management.",
        "Managed and executed competitive analyses of Slack, Notion, Miro, Jira and other technologies in the CMS-Content Management System."
      ]
    },
    {
      date: "08/2021 - 02/2022",
      company: "Helpy Meta",
      location: "Delhi, India",
      title: "Product Integration Specialist",
      description: [
        "Developed and managed APIs for Helpy Meta.",
        "Implemented features for SaaS APIs and automated API testing using Postman/Newman for business data flow and rapid feature deployment.",
        "Integrated third-party services (Razorpay, Q-Nexus API, Streamlining) using ReactJS, improving product efficiency and scalability, enhancing developer efficiency and user experience."
      ]
    }
  ];

  const education = [
    {
      date: "11/2023 - 04/2024",
      company: "Savitribai Phule Pune University",
      location: "Pune, India",
      title: "Bachelor of Science in Computer Science",
      description: []
    }
  ];

  const certifications = [
    {
      title: "AltMBA Certification",
      organization: "Emphasized by skills in identifying ideal customers, focusing on existing demand, providing new value, adopting strategies that match user and market needs, and designing effective customer service and measuring customer satisfaction.",
      year: ""
    },
    {
      title: "Project management & Business Analysis Certification",
      organization: "These Certifications in BA, PM, Communication, and Microsoft PowerApps provide me overall knowledge and experience in Requirement Gathering, stakeholder management, communication, requirement defining, data analysis, and design and prototyping.",
      year: ""
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
            A timeline of my career journey in product management and business analysis,
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
                  location={exp.location}
                  title={exp.title}
                  description={exp.description}
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
              <GraduationCap className="text-fintech-blue" size={24} />
              <h3 className="text-2xl font-bold text-fintech-dark">Education</h3>
            </motion.div>
            
            <div>
              {education.map((edu, index) => (
                <ExperienceItem
                  key={index}
                  date={edu.date}
                  company={edu.company}
                  location={edu.location}
                  title={edu.title}
                  description={edu.description}
                  delay={index}
                />
              ))}
            </div>
            
            <motion.div
              className="flex items-center gap-3 mb-8 mt-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Award className="text-fintech-blue" size={24} />
              <h3 className="text-2xl font-bold text-fintech-dark">Certifications</h3>
            </motion.div>
            
            <motion.div
              className="glass-card rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                    <div className="font-medium text-lg text-fintech-dark mb-2">{cert.title}</div>
                    <div className="text-sm text-fintech-gray">{cert.organization}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="glass-card rounded-xl p-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-fintech-dark">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Tech/AI", "Blockchain", "Football", "Poetry",
                  "Love Technology & AI", "Like to do Business and Entrepreneur", "like to Read Philosophy", "Crazy About History"
                ].map((interest, index) => (
                  <span key={index} className="px-3 py-1 bg-fintech-teal/10 text-fintech-blue rounded-full text-sm">
                    {interest}
                  </span>
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
