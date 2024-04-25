import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#3a643b17] text-white py-8">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 text-black">
                {/* Left Section */}
                {/* support@amrutam.co.in
        Amrutam Pharmaceuticals Pvt Ltd., 
        chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001

        +91 9713171999 */}
                <div className="mb-4 md:mb-0 w-[100%] ">
                    {/* Company details */}
                    <p className="text-xl font-bold text-[--secondary] my-4">Get in Touch</p>
                    <p className="text-lg">support@amrutam.co.in</p>
                    <p className="text-lg">Amrutam Pharmaceuticals Pvt Ltd., <br />  chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
                    <p className="text-lg">+91 9713171999</p>
                </div>

                {/* Middle Section */}
                <div className="flex items-center justify-center  space-x-4 w-[100%] p-4">
                    {/* Social Links */}
                    <a href="#" className="text-2xl">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-2xl">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-2xl">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-2xl">
                        <FaYoutube />
                    </a>
                    <a href="#" className="text-2xl">
                        <FaPinterest />
                    </a>
                    <a href="#" className="text-2xl">
                        <FaTwitter />
                    </a>
                </div>

                {/* Right Section */}
                <div className="mb-4 md:mb-0 w-[100%]  flex justify-start items-start flex-col">
                    {/* Company details */}
                    <h1  className="text-xl font-bold text-[--secondary] my-4">Information</h1>
                    <a href="#" className="text-lg">About Us</a>
                    <a href="#" className="text-lg">Terms and Conditions</a>
                    <a href="#" className="text-lg">Privacy Policy</a>
                    <a href="#" className="text-lg">Privacy Policy for Mobile App</a>
                    <a href="#" className="text-lg">Shipping and return policy</a>
                    <a href="#" className="text-lg">Internation Delivery</a>
                    <a href="#" className="text-lg">For Business, Hotels and Resorts</a>
                </div>

           
            </div>

            {/* Newsletter Section */}
            <div className="container mx-auto mt-8 px-4  flex justify-center items-center flex-col">
                <p className="text-center mb-8 text-xl text-[--secondary] ">Subscribe to our Newsletter and join Amrutam Family today!</p>
                <form className="flex items-center justify-center bg-white w-[90%] lg:w-[40%]  rounded-[40px] border-[2px] border-[--secondary] overflow-hidden" >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="rounded-l-lg py-4 px-9 outline-none focus:ring-2 focus:ring-blue-500 text-black w-[75%]"
                    />
                    <button className="bg-black text-white py-4 px-4 rounded-r-[40px] w-[30%]">
                        Subscribe
                    </button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;

