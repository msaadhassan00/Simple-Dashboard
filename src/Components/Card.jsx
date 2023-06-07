import React from 'react';
import logo from '../assets/logo.PNG';
import Button from './Button.jsx'

const Card = () => {
  return (
    <div className="bg-[#F5F4F4] border w-64 h-48 mt-5 flex flex-col justify-around rounded-2xl text-[#72AA83]">
      <div className='flex flex-col justify-center items-center p-2'>
        <img src={logo} className="w-16" alt="logo" />
        <h1 className="text-[#72AA83]">Holiday Inn</h1>
      </div>
      <div className="w-full text-xs text-center border-t-4 rounded-2xl p-2">
       <p>1.5 miles away from job location</p>
       <div className='flex justify-between mt-2'>
        <div className='flex flex-col '>
            <span>Singles:$120</span>
            <span>Doubles:$145</span>
        </div>
        <div>
            <Button btn={'Book Now'}/>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Card;
