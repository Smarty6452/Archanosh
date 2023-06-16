import React from "react";
import "../../assests/css/testimonial.css";
import Footer from "../footer/footer";

const Testimonial = () => {
  return (
    <div className=" h-screen">
        <div className="testimonial-wrap pb-20">

        
      <div className="test-title text-white text-center uppercase p-20">
        Testimonial<span className="blink">_</span>
      </div>

      <div className="flex justify-center mx-6 items-center gap-24">
       

        <div className="testimonial card-bg rounded-lg shadow-md p-4 md:p-6 border-white border-2 relative">
          <img
            className="rounded-full w-14 h-14 image-border absolute -top-4 left-4"
            src="https://www.w3schools.com/w3images/avatar.jpg"
            alt="Avatar"
          />
          <div className="text-start">
            <p className="mt-4 text-sm md:mt-6 pt-2 pb-10 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              auctor risus ut diam aliquet, vitae suscipit tortor semper.
              Phasellus pulvinar id sapien id pellentesque.
            </p>
          </div>
          <div className="text-sm text-white absolute bottom-2 left-6">
            <h2>Austin</h2>
            <h4 className="text-xs">Athelete</h4>
          </div>
          <div className="absolute bottom-2 right-2 text-white text-sm">
            <span>ADIBAS</span>
          </div>
        </div>

        <div className="testimonial card-bg rounded-lg shadow-md p-4 md:p-6 border-white border-2 relative transform scale-125">
          <img
            className="rounded-full w-14 h-14 image-border absolute -top-4 left-4"
            src="https://www.w3schools.com/w3images/avatar.jpg"
            alt="Avatar"
          />
          <div className="text-start">
            <p className="mt-4 text-sm md:mt-6 pt-2 pb-10 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              auctor risus ut diam aliquet, vitae suscipit tortor semper.
              Phasellus pulvinar id sapien id pellentesque.
            </p>
          </div>
          <div className="text-sm text-white absolute bottom-2 left-6">
            <h2>Austin</h2>
            <h4 className="text-xs">Athelete</h4>
          </div>
          <div className="absolute bottom-2 right-2 text-white text-sm">
            <span>ADIBAS</span>
          </div>
        </div>

        <div className="testimonial card-bg rounded-lg shadow-md p-4 md:p-6 border-white border-2 relative">
          <img
            className="rounded-full w-14 h-14 image-border absolute -top-4 left-4"
            src="https://www.w3schools.com/w3images/avatar.jpg"
            alt="Avatar"
          />
          <div className="text-start">
            <p className="mt-4 text-sm md:mt-6 pt-2 pb-10 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              auctor risus ut diam aliquet, vitae suscipit tortor semper.
              Phasellus pulvinar id sapien id pellentesque.
            </p>
          </div>
          <div className="text-sm text-white absolute bottom-2 left-6">
            <h2>Austin</h2>
            <h4 className="text-xs">Athelete</h4>
          </div>
          <div className="absolute bottom-2 right-2 text-white text-sm">
            <span>ADIBAS</span>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Testimonial;
