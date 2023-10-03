import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGasPump } from "react-icons/fa";

import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";
function CarCard(props: any) {
  const [car, setCar] = useState<any>();
useEffect(()=>{
  if(props.car){
    setCar(props.car)
  }
},[props.car])

  return car&& (
    <>
      <div
        className="roup bg-gray-200 p-2 sm:p-5 rounded-3xl  sm:m-5 
hover:bg-white 
 cursor-pointer duration-50 ease-in-out transition
border-blue-500"
      >
        <h2 className="text-[20px] font-medium mb-2">
          {car.name}
          <h2 className="text-[28px] font-bold mb-2">
            <span className="text-[12px] font-light">$</span>
            {car.price}
            <span className="text-[12px] font-light"> /day</span>
          </h2>
        </h2>

        <Image
          src={car.image?.url}
          alt={car.name}
          width={220}
          height={220}
          className="w-[250] h-[150px] mb-3 object-contain"
        />

        <div className="flex justify-around group-hover:hidden">
          <div className="text-center text-gray-500">
            <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car?.carType}
            </h2>
          </div>
          <div className="text-center text-gray-500">
            <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car.seat} Seat
            </h2>
          </div>
          <div className=" text-center text-gray-500 ">
            <FaGasPump className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car.carAvg} MPG
            </h2>
          </div>
        </div>
        <button className="hidden group-hover:flex bg-gradient-to-r
     from-blue-400 to-blue-700
    p-2 rounded-lg text-white w-full px-5 justify-between">
            Rent Now 
            <span className="bg-blue-400 p-1 rounded-md ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}

export default CarCard;
