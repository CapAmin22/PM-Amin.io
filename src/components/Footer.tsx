
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fintech-dark text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="md:col-span-1 lg:col-span-1">
            <motion.a
              href="#"
              className="text-xl font-bold mb-6 inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="shimmer-text">Alex Morgan</span>
            </motion.a>
            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Product Manager specializing in financial technology solutions that transform how people interact with money.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </motion.div>
          </div>

          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <motion.h3
                className="text-lg font-semibold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Quick Links
              </motion.h3>
              <motion.ul
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {["Home", "About", "Projects", "Experience", "Skills", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <ChevronRight size={14} />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>

            <div>
              <motion.h3
                className="text-lg font-semibold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Resources
              </motion.h3>
              <motion.ul
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {[
                  "Case Studies",
                  "Fintech Blog",
                  "Product Insights",
                  "Research Papers",
                  "Industry News",
                  "Partner Network"
                ].map((resource) => (
                  <li key={resource}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <ChevronRight size={14} />
                      <span>{resource}</span>
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-1">
            <motion.h3
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Subscribe to Newsletter
            </motion.h3>
            <motion.p
              className="text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Stay updated with the latest fintech trends and my project updates.
            </motion.p>
            <motion.form
              className="flex"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-fintech-dark"
              />
              <button
                type="submit"
                className="bg-fintech-blue hover:bg-fintech-blue/80 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>

        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-1 mb-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-400" />
            <span>and precision</span>
          </div>
          <p>&copy; {currentYear} Alex Morgan. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
