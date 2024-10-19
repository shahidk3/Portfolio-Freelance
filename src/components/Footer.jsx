import React from "react";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Footer = () => {
  return (
    <>
      <motion.div
        className="w-full text-white "
        initial="hidden"
        animate="visible"
        variants={footerVariants}
      >
        <footer className="bg-[#f1c40f] text-black py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
              <p className="text-lg font-bold text-black">
                "Welcome to Medbug"
              </p>

              </div>
              <div>
                <h2 className="text-black text-lg font-bold mb-4">
                Credentials
                </h2>
                <ul className="text-sm text-black">
                  <li className="mb-2">Medical Writer || Pharm-D || SEO Healthcare Blog Writer || Freelance Writer</li>
                 
                </ul>
              </div>
              <div>
                <h2 className="text-black text-lg font-bold mb-4">
                  Services
                </h2>
                <ul className="text-sm text-black">
                  <li className="mb-2">Blogging • Content Strategy • Copywriting • Writing • Technical Writing • Search Engine Optimization (SEO)</li>
                  
                </ul>
              </div>
              <div>
                <h2 className="text-black text-lg font-bold mb-4">
                  GET IN TOUCH
                </h2>
                <ul className="text-sm text-black">
                  <li className="mb-2">Email: medbug24@gmail.com </li>
                  <li className="mb-2">Email: fizza.asghar24@gmail.com </li>
                  <li className="mb-2">
                  Linkedin:
  <a href="http://linkedin.com/in/medicalwriter-fizza" target="_blank" rel="noopener noreferrer"> {/* Ensure the link is complete */}
    <img
      src="linkedin.png" // Replace with the actual path to your LinkedIn icon image
      alt="LinkedIn Icon"
      className="h-10 w-10" // Increased size to h-8 and w-8
    />
  </a>
                  </li>
                </ul>
              </div>
             
  

            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default Footer;
