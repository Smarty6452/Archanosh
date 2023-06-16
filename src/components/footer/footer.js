import React from 'react';
import "../../assests/css/footer.css"
import {  RiFacebookFill } from 'react-icons/ri';
import {  FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="flex flex-wrap pt-8 mx-6">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <h4 className="font-semibold mb-2 ml-6">Help</h4>
          <ul className="list-none pl-6">
            <li className="mb-1 text-sm"><a href="#">FAQ</a></li>
            <li className="mb-1 text-sm"><a href="#">Review My Account</a></li>
            <li className="mb-1 text-sm"><a href="#">Corporate</a></li>
            <li className="mb-1 text-sm"><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <h4 className="font-semibold mb-2 ml-6">Shop</h4>
          <ul className="list-none pl-6">
            <li className="mb-1 text-sm"><a href="#">Pure V</a></li>
            <li className="mb-1 text-sm"><a href="#">Gifts</a></li>
            <li className="mb-1 text-sm"><a href="#">Travel Set</a></li>
            <li className="mb-1 text-sm"><a href="#">Accessories</a></li>
        </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <h4 className="font-semibold mb-2 ml-6">About</h4>
          <ul className="list-none pl-6">
            <li className="mb-1 text-sm"><a href="#">Magazine</a></li>
            <li className="mb-1 text-sm"><a href="#">Press</a></li>
            <li className="mb-1 text-sm"><a href="#">Our Story</a></li>
            <li className="mb-1 text-sm"><a href="#">Tech Use</a></li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
          <h4 className="font-semibold mb-4">Sign up for the newsletter</h4>
          <div className="flex relative">
            <input type="text" placeholder="Enter your email" className="border border-gray-600 rounded-3xl px-4 py-2 w-full  relative" />
            <svg className="w-5 h-5 text-gray-500 absolute top-1/2 right-2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
              
            </svg>
            <button className="signup-btn absolute text-white px-4 h-10 rounded-3xl ml-2 top-1  text-sm  right-1">Sign Up</button>
          </div>
        </div>
      </div>
   

      <div className='bottom-wrap '>
        <div className="bottom-wrap-wave ">

       
      <div className='wave flex justify-between pb-10 px-10 pt-6'>
    
        <div className="copyright text-sm">
          Copyright Arachnomesh 2022
        </div>
        <div className="social-icons ">
          <ul>
            <li className='text-black '><FaLinkedinIn  size={12}/></li>
            <li className='text-black '><RiFacebookFill size={12} /></li>
            <li className='text-black '><AiOutlineTwitter size={12}/></li>
            <li className='text-black '><IoLogoWhatsapp size={12} /></li>
          </ul>
        </div>
     

    <div className="policy text-white text-sm">
        <span className='mr-10'>T&C</span>
        <span>Privacy Policy</span>
    </div>
    </div>
    </div>
      </div>
    </footer>
  );
}

export default Footer;
