import React, { useState } from "react";
import bottleImage from "../../assests/images/open.png";
import bottleCapImage from "../../assests/images/cap.png";
import "../../assests/css/homeGlobal.css";
import HomeNewIndex from "../home";
import { BiCart } from 'react-icons/bi';

const Home = () => {
  const [showContent, setShowContent] = useState(true);
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleClick = () => {
    setShowContent(false);
    setTimeout(() => {
      setShowNewComponent(true);
    }, 250);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="flex cursor-pointer justify-center  h-screen"
      >
        {showContent && (
          <div
            className={`relative flex flex-col items-center mt-24 ${
              showNewComponent ? "fade-out" : ""
            }`}
          >
            <img
              src={bottleCapImage}
              alt="Bottle Cap"
              className={`w-full relative -top-1  rotate-left ${
                showNewComponent ? "fade-out" : ""
              }`}
            />
            <div
              className={`circle ${showNewComponent ? "fade-out" : ""}`}
            ></div>
            <img
              src={bottleImage}
              alt="Water Bottle"
              className={`w-full mt-5 relative top-40 ${
                showNewComponent ? "fade-out" : ""
              }`}
            />
          </div>
        )}
        {showNewComponent && <NewComponent />}
      </div>

      {!showNewComponent && (
        <div className="fixed-button flex relative">
          <span><BiCart size={16} className="absolute top-3 left-1  text-white"  /> </span>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      )}
    </>
  );
};

const NewComponent = () => {
  return (
    <div className="text-black text-2xl fade-in">
      <HomeNewIndex />
    </div>
  );
};

export default Home;
