import React from 'react'
import Info from '../Components/Info'
import InfoCard from '../Components/InfoCard'

const Home = () => {
  return (
    <div className='bg-[#D9D9D9] w-full'>
        <h1 className='text-[#72AA83] text-xl ml-20 my-5'>You currently have 3 requests</h1>
        <Info />    
        <InfoCard />
    </div>
  )
}

export default Home