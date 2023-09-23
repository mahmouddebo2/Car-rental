"use client";

import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import ToastMsg from "@/components/ToastMsg";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import {CreatedFlagContext} from '@/context/CreatedFlagContext' 
export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  // const [showToastMsgs, setShowToastMsgs] = useState<boolean>(false);

  useEffect(() => {
    getCarList();
  }, []);

  const getCarList = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
  };

  const filterCarList = (brand:string)=> {
    const filterList = carsOrgList.filter((item:any)=>
    item.carBrand == brand);
    setCarsList(filterList);
  }

  const orderCarList = (order:any)=> {
    const sorteData = [...carsOrgList].sort((a,b)=>
    order ==-1? a.price - b.price:b.price - a.price);
    setCarsList(sorteData);
  }


  return (
    <div className="p-5 sm:px-10 md:px-20">
      <CreatedFlagContext.Provider value={{}}>

     
      <Hero />
      <SearchInput />
      <CarsFiltersOption carsList={carsOrgList} setBrand = {(value:string)=> filterCarList(value)}
      orderCarList={(value:string)=>orderCarList(value)}/>
      <CarsList carsList={carsList} />
      </CreatedFlagContext.Provider>
    </div>
  );
}


