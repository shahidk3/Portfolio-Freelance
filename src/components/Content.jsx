import React, { useEffect, useRef } from "react";
import Home from "./Home";
import { Carousel } from "@material-tailwind/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Avatar } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const img = imgRef.current;
    const carousel = carouselRef.current;

    gsap.fromTo(
      text,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      img,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      carousel,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: carousel,
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <>
      <Home />

      <div
  ref={sectionRef}
  className="flex justify-center items-center flex-col text-center px-4 py-8 md:py-12 lg:py-16 md:flex-row lg:flex-row bg-cover bg-center"
>
  <div
    ref={textRef}
    className="flex flex-col items-center text-center text-lg mb-4 md:mb-6 lg:mb-8 max-w-2xl bg-white bg-opacity-70 p-4 rounded-md" // Added a background for better visibility
  >
    <p className="font-extrabold mb-2 sm:text-xl md:text-2xl lg:text-3xl md:mb-4">
       Fizza Asghar 
    </p>

    <p className="mb-6 md:mb-8">
      "Medical Writer and Copywriter"
    </p>
    <p className="mb-6 md:mb-8">
      "Translating Medical Research Into Digestible Content"
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-2 md:mt-4">
      <button className="bg-black text-white px-6 py-2 rounded-3xl w-auto text-base md:text-lg">
        <Link to="/contact">Get In Touch!</Link>
      </button>
      <button className="text-black w-auto text-base md:text-lg">
        <a href="#about">Get To Know!</a>
      </button>
    </div>
  </div>

  <img
    ref={imgRef}
    src="writer.png"
    alt="PODAR logo"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
  />
</div>


      <div className="flex text-center text-lg font-semibold justify-center mb-6 sm:text-xl md:text-2xl lg:text-3xl">
        <p> Always available to discuss your medical content needs and creative projects.</p>
      </div>

      <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
        <div
          ref={carouselRef}
          className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
        >
          <div className="aspect-square md:aspect-[16/9]">
            <Carousel className="rounded-xl h-full">
              <img
                src="/first image.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="/second image.jpg"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="/third.png"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
        </div>
      </div>

      <div id="about" className="bg-black py-8 md:py-12 gap-4 lg:py-16 mt-5 kanit-regular">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row md:flex-row items-start justify-between gap-8 font-poppins">
            <div className="w-full md:w-1/2">
            <p className="text-amber-500 font-bold text-lg md:text-2xl mb-2">
              Expertise:
              </p>
              <p className="text-white text-xl sm:text-lg md:text-xl lg:text-3xl leading-tight">
              Fizza Asghar is a seasoned and passionate medical writer and copywriter, dedicated to delivering clear, concise, accurate and engaging medical content. 
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain"
                src="/black box.png"
                alt="Black box illustration"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-row items-start justify-between gap-10 font-poppins mt-8">
            
            <div className="w-full mt-7 md:w-1/2">
            <p className="text-amber-500 font-bold text-lg md:text-2xl mb-2">
              Credentials:
              </p>
              <p className="text-white text-xl sm:text-lg md:text-xl lg:text-3xl leading-tight">
              She is a Doctor of Pharmacy (Pharm-D)  and has done internships in the community, Pharmaceutical Industries and Hospitals as a pharmacist. 
<p>She has gained medical writing skills from the Sarah Nelson Stanford university course, Health Writer Hub and Coursera. 
Her expertise spans across creating articles, blogs, educational materials and research driven content for patients, professionals and the general public. 
</p></p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain"
                src="/vision.png"
                alt="Black box illustration"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mt-8 md:flex-row items-start justify-between gap-8 font-poppins">
            <div className="w-full md:w-1/2">
            <p className="text-amber-500 font-bold text-lg md:text-2xl pt-6 mb-2">
  Collaboration:
</p>
<p className="text-white text-xl sm:text-lg md:text-xl lg:text-3xl leading-tight">
              Always eager to collaborate with medical, pharmaceutical and healthcare Industries that are committed to provide quality healthcare information. 
              we are always open to talk about  your medical content needs, projects and creative opportunities.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain"
                src="/Mission.png"
                alt="Black box illustration"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Content;