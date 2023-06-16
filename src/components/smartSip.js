import React from "react";
import "../assests/css/smartsip.css";
import bottle1 from "../assests/images/bottle1.png";
import bottle2 from "../assests/images/bottle2.png";
import bottle3 from "../assests/images/botlle3.png";
import Testimonial from "./Testimonials/testimonial";

const SmartSip = () => {
  const handleKnowMoreClick = () => {
    const element = document.getElementById("testimonials");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div onClick={handleKnowMoreClick} className=" h-screen   ">
        <div className="  pt-28 relative ">
          <div
           
            className="grid grid-cols-4 gap-4 bg-sip    py-4"
          >
            <div className="bg-wrap transform rotate-12">
              <img src={bottle1} alt="Image 1" />
            </div>
            <div className="bg-wrap transform rotate-90 relative  -top-32">
              <img src={bottle2} alt="Image 2" />
            </div>
            <div className="bg-wrap relative transform rotate-12 right-7 top-16">
              <img src={bottle1} alt="Image 3" />
            </div>
            <div className="bg-wrap transform -rotate-12 relative left-10 -top-12">
              <img src={bottle3} alt="Image 3" />
            </div>
          </div>
          <div className="absolute top-72 left-0 right-0 text-center  text-white z-10">
            <h1 className="smart-text font-bold">
              A Smart Way <br /> to Sip
            </h1>
          </div>
        </div>
      </div>

      <section id="testimonials">
        <Testimonial />
      </section>
    </>
  );
};

export default SmartSip;
