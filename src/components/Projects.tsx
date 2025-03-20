
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink, Layers, CreditCard, PieChart, Shield } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  image: string;
  results: string[];
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number>(1);

  const projects: Project[] = [
    {
      id: 1,
      title: "223Poultry - Agribusiness Platform",
      description: "Founded and led strategic initiatives focused on Agribusiness Assistance, Training and Education, and creating sustainable networking opportunities for industry professionals.",
      tags: ["Founder", "Agribusiness", "Sustainability", "Digital Collaboration"],
      icon: <Layers size={24} />,
      image: "bg-gradient-to-br from-blue-500 to-teal-400",
      results: [
        "Established training programs for sustainable practices",
        "Created digital collaboration network for industry professionals",
        "Developed information sharing platform for agribusiness news",
        "Implemented strategic initiatives for business assistance"
      ]
    },
    {
      id: 2,
      title: "Kotak Online - New Accounts Platform",
      description: "Developed and monitored KPIs using analytics tools to optimize platforms and implemented strategies based on customer insights to enhance user engagement.",
      tags: ["Analytics", "User Engagement", "Conversion Optimization", "Financial Services"],
      icon: <CreditCard size={24} />,
      image: "bg-gradient-to-br from-purple-500 to-indigo-500",
      results: [
        "Enhanced user engagement metrics",
        "Improved conversion rates through funnel optimization",
        "Implemented robust tracking with Google Analytics & Mixpanel",
        "Developed data-driven optimization strategies"
      ]
    },
    {
      id: 3,
      title: "ThinkReduce - Information Repository",
      description: "Created detailed IRP wireframes and prototypes ensuring rapid iteration and user-centric improvements, while developing systems to enhance profile matching, sorting, and prioritization.",
      tags: ["Wireframing", "Prototyping", "User Research", "Document Management"],
      icon: <PieChart size={24} />,
      image: "bg-gradient-to-br from-emerald-500 to-blue-500",
      results: [
        "Developed user-centric wireframes and prototypes using Figma",
        "Created document management system for library resources",
        "Implemented profile matching and sorting algorithms",
        "Integrated feedback mechanisms for continuous improvement"
      ]
    },
    {
      id: 4,
      title: "Helpy Meta - API Integration",
      description: "Developed and managed APIs for SaaS integration, implementing automated testing and third-party service integration to improve product efficiency and scalability.",
      tags: ["API Development", "Integration", "Testing", "Scalability"],
      icon: <Shield size={24} />,
      image: "bg-gradient-to-br from-blue-600 to-indigo-600",
      results: [
        "Streamlined business data flow with API integrations",
        "Implemented automated API testing with Postman/Newman",
        "Integrated third-party services including Razorpay and Q-Nexus",
        "Enhanced developer efficiency and user experience"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="chip mb-4">Featured Projects</div>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-fintech-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Product Solutions That Make an Impact
          </motion.h2>
          
          <motion.p
            className="text-lg text-fintech-gray"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of my work developing innovative products and solutions 
            that solve real problems and deliver measurable results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className={`glass-card rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                    activeProject === project.id 
                      ? "border-l-4 border-fintech-blue shadow-lg" 
                      : "hover:border-l-4 hover:border-fintech-teal"
                  }`}
                  onClick={() => setActiveProject(project.id)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`text-fintech-blue ${activeProject === project.id ? "text-fintech-blue" : "text-fintech-gray"}`}>
                        {project.icon}
                      </div>
                      <h3 className={`font-medium transition-colors ${
                        activeProject === project.id ? "text-fintech-dark" : "text-fintech-gray"
                      }`}>
                        {project.title}
                      </h3>
                    </div>
                    <ChevronRight size={18} className={`transition-transform ${
                      activeProject === project.id ? "rotate-90 text-fintech-blue" : "text-fintech-gray"
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            {projects.map((project) => (
              project.id === activeProject && (
                <motion.div
                  key={project.id}
                  className="glass-card rounded-xl overflow-hidden h-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`h-48 ${project.image} flex items-center justify-center text-white`}>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-fintech-gray mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-fintech-dark">Key Results</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="text-fintech-blue mt-1">
                              <ChevronRight size={16} />
                            </div>
                            <span className="text-fintech-gray">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-end">
                      <button className="flex items-center gap-2 text-fintech-blue hover:text-fintech-dark transition-colors">
                        <span>View Details</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
