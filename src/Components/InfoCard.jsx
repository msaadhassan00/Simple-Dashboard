import React from 'react';
import Card from './Card';

const InfoCard = () => {
  return (
    <div className='border bg-white w-[900px] mx-20 p-6 mt-5 rounded-3xl'>
      <div className="">
        <div className="flex">
          <div className="border-r-2 w-[15rem] h-16 flex flex-col justify-center p-1">
            <h1 className="text-2xl text-[#72AA83]">St Judes Hospital</h1>
            <p className="text-xs leading-3">Sarasota, FL 33178</p>
          </div>
          <div className="border-r-2 w-[15rem] h-16 flex flex-col justify-center items-center">
            <h1 className="text-2xl text-[#72AA83]"> 10 - 17 </h1>
            <p className="text-sm leading-3">Oct - Dec</p>
          </div>
          <div className="w-[16rem] h-16 flex flex-col justify-center px-16">
            <h1 className="text-2xl text-[#72AA83]"> 20 Rooms </h1>
            <p className="text-xs leading-3">10 Singles, 10 Doubles</p>
          </div>
        </div>
        <div className="w-96 h-10 rounded-full flex justify-center text-sm items-center mt-5">
          <div className="border-r-2 w-full p-2 px-5 bg-[#85C371] text-white rounded-full">
            RECEIVED
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default InfoCard;
