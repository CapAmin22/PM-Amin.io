
import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Gauge, Users } from "lucide-react";

const AboutCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div
    className="glass-card rounded-xl p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="mb-4 text-fintech-blue">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-fintech-dark">{title}</h3>
    <p className="text-fintech-gray">{description}</p>
  </motion.div>
);

const About = () => {
  const strengths = [
    {
      icon: <Target size={28} />,
      title: "Product Strategy",
      description: "Experienced in developing MVPs and using data insights to drive user-centric solutions and innovation."
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Ideation & Innovation",
      description: "Passion for transforming complex problems into elegant solutions through creative thinking and user-focused approaches."
    },
    {
      icon: <Gauge size={28} />,
      title: "Cross-Functional Leadership",
      description: "Proven leader skilled at uniting cross-functional teams to achieve business objectives."
    },
    {
      icon: <Users size={28} />,
      title: "Strategic Vision",
      description: "Balancing business needs with technical feasibility to create product roadmaps that drive growth and innovation."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="chip mb-4">About Me</div>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-fintech-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Product Management | Founder | Strategy & Innovation | Ideation
          </motion.h2>
          
          <motion.p
            className="text-lg text-fintech-gray mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Product Management Professional also Experienced in Business Analysis, Product Development and Leadership. Expert in developing MVPs, using data insights to drive user-centric solutions and innovation. Proven leader skilled at uniting cross-functional teams to achieve business objectives.
          </motion.p>
          
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="#experience"
              className="text-fintech-blue font-medium hover:text-fintech-dark transition-colors subtle-underline"
            >
              My Experience
            </a>
            <a
              href="#projects"
              className="text-fintech-blue font-medium hover:text-fintech-dark transition-colors subtle-underline"
            >
              See My Work
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((item, index) => (
            <AboutCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
