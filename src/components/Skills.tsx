
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
    { name: "Product Strategy", level: 95 },
    { name: "Roadmap Planning", level: 90 },
    { name: "User Story Mapping", level: 92 },
    { name: "Agile Methodologies", level: 88 },
    { name: "Go-to-Market Strategy", level: 85 }
  ];

  const technicalSkills = [
    { name: "API Integration", level: 80 },
    { name: "Data Analytics", level: 87 },
    { name: "SQL", level: 75 },
    { name: "Financial Modeling", level: 82 },
    { name: "Compliance & Security", level: 85 }
  ];

  const expertiseAreas = [
    { icon: <BarChart size={24} />, title: "Financial Analysis" },
    { icon: <LineChart size={24} />, title: "Market Trends" },
    { icon: <Workflow size={24} />, title: "Process Optimization" },
    { icon: <Zap size={24} />, title: "Fast Iteration" },
    { icon: <Users size={24} />, title: "User Research" },
    { icon: <Lightbulb size={24} />, title: "Innovation" },
    { icon: <Target size={24} />, title: "KPI Definition" },
    { icon: <BarChart2 size={24} />, title: "Growth Metrics" }
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
            My Expertise in Fintech
          </motion.h2>
          
          <motion.p
            className="text-lg text-fintech-gray"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A balanced combination of product management skills, financial knowledge, 
            and technical capabilities that I bring to every project.
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
            <SkillCategory title="Product Management" skills={productSkills} />
            <SkillCategory title="Technical Knowledge" skills={technicalSkills} />
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-fintech-dark">Areas of Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {expertiseAreas.map((area, index) => (
                <Expertise key={index} icon={area.icon} title={area.title} />
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-fintech-dark">Industry Knowledge</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Payments", "Digital Banking", "Investment Platforms", 
                  "Blockchain", "RegTech", "InsurTech", "Lending", 
                  "Personal Finance", "Open Banking", "Compliance"
                ].map((industry, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-fintech-teal/10 text-fintech-blue rounded-full text-sm"
                  >
                    {industry}
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
