
import React from "react";
import { motion } from "framer-motion";
import { BarChart, LineChart, Workflow, Zap, Users, Lightbulb, Target, BarChart2 } from "lucide-react";

const SkillCategory = ({ title, skills }: { title: string, skills: { name: string, level: number }[] }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4 text-fintech-dark">{title}</h3>
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-fintech-gray">{skill.name}</span>
            <span className="text-sm text-fintech-blue">{skill.level}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-fintech-blue to-fintech-teal"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Expertise = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <motion.div
    className="flex flex-col items-center text-center p-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="w-14 h-14 rounded-full bg-fintech-blue/10 flex items-center justify-center text-fintech-blue mb-3">
      {icon}
    </div>
    <h3 className="text-sm font-medium text-fintech-dark">{title}</h3>
  </motion.div>
);

const Skills = () => {
  const productSkills = [
    { name: "Product Strategy", level: 90 },
    { name: "Wireframing/Prototyping", level: 95 },
    { name: "Postman", level: 85 },
    { name: "Primary & Secondary Research", level: 88 },
    { name: "Brainstorming", level: 92 }
  ];

  const technicalSkills = [
    { name: "API Integration", level: 80 },
    { name: "KPI", level: 85 },
    { name: "Figma", level: 90 },
    { name: "JIRA / Confluence", level: 88 },
    { name: "PRD", level: 92 }
  ];

  const methodologySkills = [
    { name: "Agile & Scrum Methodologies", level: 90 },
    { name: "GTM", level: 85 },
    { name: "Data Analysis", level: 87 },
    { name: "User Story Mapping", level: 93 },
    { name: "User Journey/Roadmap", level: 89 }
  ];

  const keyAchievements = [
    {
      title: "Boosted retention",
      description: "Reimagined the user onboarding journey and funnel analysis that boosted retention by 15% YoY."
    },
    {
      title: "Reducing refund processing errors",
      description: "Developed specifications for automated API integration of refund applications, with UI/UX integration uplifted easily, reducing refund processing time and improving operational efficiency."
    },
    {
      title: "Educational",
      description: "Helped at Business School | Leadership Role From Stanford | Technical Running Champion."
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="chip mb-4">Professional Skills</div>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-fintech-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            My Product Management Expertise
          </motion.h2>
          
          <motion.p
            className="text-lg text-fintech-gray"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A balanced combination of product management skills, technical capabilities, 
            and methodologies that I bring to every project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            className="glass-card rounded-xl p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SkillCategory title="Product Skills" skills={productSkills} />
            <SkillCategory title="Technical Tools" skills={technicalSkills} />
            <SkillCategory title="Methodologies" skills={methodologySkills} />
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-fintech-dark">Key Achievements</h3>
            
            <div className="space-y-6">
              {keyAchievements.map((achievement, index) => (
                <div key={index} className="flex gap-4 items-start border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-fintech-blue/10 flex items-center justify-center flex-shrink-0 text-fintech-blue">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fintech-dark mb-1">{achievement.title}</h4>
                    <p className="text-sm text-fintech-gray">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-fintech-dark">A/B Testing</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "A/B Testing", "Feature Flags", "PRD", 
                  "Agile", "GTM", "API/UX Design", 
                  "User Research", "UX Workflow", "Problem/Solution Fit"
                ].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-fintech-teal/10 text-fintech-blue rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
