import React from "react";
import Home from "./Home";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Home />
      <div className="flex flex-col md:flex-row justify-between p-8 kanit-regular ">
        {/* Contact Info Section */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8 ">
          <h2 className="text-3xl font-bold  mb-4">Get In Touch</h2>
          <p className="mb-8 text-gray-600">
          I would be thrilled to work with you on your project. My inbox is always open, you can contact me with the contact form here or via my mail below:
          </p>
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <span className="mr-4 text-xl">
                <i className="fas fa-map-marker-alt"></i>
              </span>
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-4 text-xl">
                <i className="fas fa-phone-alt"></i>
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-xl">
                <i className="fas fa-envelope"></i>
              </span>
              <div>
                <p className="font-bold">E-Mail</p>
                <p>medbug24@gmail.com</p>
                <p>fizza.asghar24@gmail.com </p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-xl">
                <i className="fas fa-envelope"></i>
              </span>
              <div className="flex items-center mt-4"> {/* Added mt-4 for top margin */}
  <p className="font-bold mr-2">LinkedIn</p>
  <a href="https://www.linkedin.com/in/medicalwriter-fizza" target="_blank" rel="noopener noreferrer"> {/* Ensure the link is complete */}
    <img
      src="linkedin.png" // Replace with the actual path to your LinkedIn icon image
      alt="LinkedIn Icon"
      className="h-8 w-8" // Increased size to h-8 and w-8
    />
  </a>
</div>

            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 bg-black p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Form</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 p-2 rounded-md focus:outline-none"
              />
              
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="e-Mail"
                className="flex-1 p-2 rounded-md focus:outline-none"
              />
        
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-2 rounded-md focus:outline-none"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-[#f1c40f] text-black py-2 px-4 rounded-md hover:bg-[#8b6d00] transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
