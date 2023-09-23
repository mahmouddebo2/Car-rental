import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Premium Car Rental in Your Area
        </h2>
        <h3 className="text-[20px] text-gray-500 pr-20 mt-5">
          Book the selected car effortlessly, Pay for driving only, Book the Car
          Now
        </h3>
        <button className="bg-blue-500 text-white rounded-full p-2 px-5 hover:scale-105 transition-all mt-5">
            Explore Cars
        </button>
      </div>

      <div>
        <Image
        src="/hero.png"
        alt="hero section"
        width={400}
        height={500}
        className="object-cover w-full align-middle"
        
        />
      </div>
    </div>
  );
}

export default Hero;
