import React, { useState } from 'react';
import bottleImage from "../../assests/images/open.png";
import bottleCapImage from "../../assests/images/cap.png";
import "../../assests/css/animationpage.css";
import SmartSip from '../smartSip';


const HomeNewIndex = () => {

  const handleKnowMoreClick = () => {
    // alert("testing")
    const element = document.getElementById('smart-sip');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <>
   
    <div className={`flex relative justify-center items-center h-screen`}>
      <div className="flex flex-col items-center relative">
        <img
          src={bottleCapImage}
          alt="Bottle Cap"
          className="w-full mt-5 rotate-left relative z-10 top-52"
        />

        <div className="text-heading-wrap w-full absolute right-16 mr-4 ">
          <h1 className="title relative right-10">
            <span className="w-full relative right-12">
              Self Cleaning bottle
            </span>
            <br /> In 60 Seconds
          </h1>
          <div className="sub-title relative right-6">
            Hit refresh with the Intelligently clean bottle built for adventure
          </div>
          <div className="know-more">
          <button
         
          
            className="py-1 px-4 relative left-24 bg-yellow-300 rounded-md text-gray-700 text-sm hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            KNOW MORE
          </button>
        </div>
        </div>

        <div    onClick={handleKnowMoreClick}  className="circles "></div>
        <img
          src={bottleImage}
          alt="Water Bottle"
          className="w-full relative top-32 "
        />
      </div>
      
    </div>


    <section id='smart-sip' className='h-screen w-auto'>
      <SmartSip />
    </section>

    

    </>
  );
};

export default HomeNewIndex;
