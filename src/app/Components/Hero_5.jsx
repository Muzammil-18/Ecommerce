
 
import React from 'react';

const Hero_5 = () => {
  return (
    <>
      <section
        className="w-full md:h-[444px] h-[390px] flex justify-center relative bg-center bg-cover  mt-5 md:bg-[url('/assets/hero5_bgimg.png')] bg-[url('/assets/Emailsign.png')]"
      >
          <div className="md:flex hidden justify-center items-center absolute md:top-[316px] top-[268px] ">
            <input
              className="md:w-[354px] w-[224px] h-[55px] p-3 border-2 border-solid border-black"
              placeholder="your@gmail.com"
            />
            <button className=" md:w-[118px] w-[98px] h-[55px] text-white bg-[#2A254B]">
              Sign Up
            </button>
          </div>

      </section>
    </>
  );
};

export default Hero_5;
