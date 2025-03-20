
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, TrendingUp, LineChart, DollarSign } from "lucide-react";

const Hero = () => {
  const floatingIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingIconsRef.current) return;
      
      const icons = floatingIconsRef.current.querySelectorAll('.floating-icon');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      icons.forEach((icon, index) => {
        const speed = index % 2 === 0 ? 20 : -20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        (icon as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-teal-50 opacity-80"></div>
      
      {/* Floating fintech icons */}
      <div ref={floatingIconsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-icon absolute top-1/4 left-1/4 text-fintech-blue opacity-10">
          <TrendingUp size={80} />
        </div>
        <div className="floating-icon absolute top-2/3 left-1/5 text-fintech-teal opacity-10">
          <LineChart size={120} />
        </div>
        <div className="floating-icon absolute top-1/3 right-1/4 text-fintech-highlight opacity-10">
          <DollarSign size={100} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="chip mb-4">Product Manager</div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-fintech-dark mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Transforming Financial<br />
              <span className="shimmer-text">Experiences</span> Through<br />
              Product Innovation
            </motion.h1>
            
            <motion.p
              className="text-lg text-fintech-gray mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Specialized in fintech product management with a passion for creating seamless, 
              user-centered financial solutions that drive business growth and customer satisfaction.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a 
                href="#projects" 
                className="px-6 py-3 bg-fintech-blue text-white rounded-md font-medium transition-all hover:bg-fintech-dark hover:scale-105"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white border border-fintech-blue text-fintech-blue rounded-md font-medium transition-all hover:bg-fintech-blue/5"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              <div className="glass-card rounded-2xl p-6 shadow-xl">
                <div className="h-[420px] bg-gradient-to-br from-fintech-blue to-fintech-teal rounded-xl flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-sm uppercase tracking-wider mb-2 opacity-80">Product Vision</div>
                    <div className="text-3xl font-semibold max-w-xs mx-auto">Building the future of financial technology</div>
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-xl p-4 absolute -bottom-6 -left-6 max-w-xs shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <div className="text-sm font-medium">Latest Achievement</div>
                </div>
                <p className="text-sm text-fintech-dark">
                  Increased user engagement by 47% in digital banking platform
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" className="text-fintech-blue">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
