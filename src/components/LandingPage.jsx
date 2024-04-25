import React from "react";
import Button from "./Button";
const LandingPage = () => {
  return (
    <>
      <div className="landing w-full bg-[#811915]  min-h-[70vh] flex justify-center items-start   flex-col relative p-4 lg:p-12 lg:min-h-[80vh] ">


        <div className="img">
          <img src="./mobileCover.png" alt="" className="absolute z-[0] w-[100%] h-[100%] object-cover left-0 top-0 lg:hidden" />
        </div>

        <div className="img">
          <img src="./person.png" alt="" className="absolute z-[0] w-[50%] h-[100%] object-cover right-0 top-0 hidden  lg:block" />
        </div>

        <div className="content z-15 absolute w-[100%] h-[100%] flex justify-center items-start flex-col top-0 left-0 opacity-50 bg-[--red] lg:opacity-100 lg:bg-transparent  lg:bg-gradient-to-r lg:from-[#121212e0] lg:via-[#121212e7] lg:to-[#01010100] "></div>



        <p className="font-normal text-2xl text-[--primary] z-10 md:text-3xl lg:text-5xl ">Namaste, Welcome to Amrutam</p>

        <h1 className="font-semibold text-3xl text-[--white] my-5 z-10 leading-[2.5rem]  md:text-4xl lg:text-6xl md:w-[100%] xl:w-[100%] 2xl:w-[60%] lg:my-10 lg:leading-[5rem]">Step into Holistic Healing with <span className="text-[--primary] underline">Ayurveda</span> Book Consultation with certified Experts.</h1>

        <p className="font-light text-lg text-[--white] z-10 md:text-2xl  lg:text-3xl lg:w-[60%]">Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>

        <Button content="BOOK AN APPOINTMENT" />
      </div>

      <div className="cardContainer w-screen bg-[--primary] flex justify-center items-center">
        <div className="container  w-[100]">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">

            <div className="bg-[--primary]  p-4 flex items-center">

              <div className="flex-shrink-0 mr-4">
                <img src="./message.png" alt="" className="border border-[--green] p-4 rounded-full bg-white mr-2 " />
              </div>
              <div>
                <p className="text-lg font-medium text-[--secondary]">convenient online & In-clinic consultations</p>
              </div>
            </div>

            <div className="bg-[--primary]  p-4 flex items-center">
              <div className="flex-shrink-0 mr-4">
                <img src="./shield.png" alt="" className="border border-[--green] p-4 rounded-full bg-white mr-2 " />

              </div>
              <div>
                <p className="text-lg font-medium text-[--secondary]">Safe and effective treatment</p>
              </div>
            </div>

            <div className="bg-[--primary]  p-4 flex items-center">
              <div className="flex-shrink-0 mr-4">
                <img src="./doctor.png" alt="" className="border border-[--green] p-4 rounded-full bg-white mr-2 " />

              </div>
              <div>
                <p className="text-lg font-medium text-[--secondary]">Experienced Ayurvedic Practitioners</p>
              </div>
            </div>
            
            <div className="bg-[--primary]  p-4 flex items-center">
              <div className="flex-shrink-0 mr-4">
                <img src="./prescription.png" alt="" className="border border-[--green] p-4 rounded-full bg-white mr-2 " />

              </div>
              <div>
                <p className="text-lg font-medium text-[--secondary]">personalized Treatment Plans & Guidance</p>
              </div>
            </div>


          </div>
        </div>
      </div>

    </>
  );
};

export default LandingPage;


