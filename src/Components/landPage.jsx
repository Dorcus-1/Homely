import React from 'react'
import Navbar from './navbar.jsx'


function LandPage() {
  return (
    <div>
        <div className=" w-full flex flex-col justify-around items-center bg-[#fafafa]" style={{height:'100vh'}}>
            <Navbar/>
        <div className="w-full flex justify-evenly" style={{height:'60vh'}}>
            <div className=" flex-col flex justify-around h-5/6 ">
            <h1 className="text-5xl text-[#0F298B] justify-start" style={{fontFamily: 'Space Grotesk'}}> Helping you find the <br/> property of your <br/> dreams.</h1>
            <p className="" style={{fontFamily: 'Space Grotesk'}}>Creating quality urban lifestyles,building strong communities</p>
            <div className="flex justify-around">
              <button className="bg-[#2549D3] text-white rounded" style={{width:'182px', boxshadow:' 24px 24px 48px rgba(0, 0, 0, 0.1)'}} >Learn More</button>
              <img src="Group 1.svg" alt="" />
            </div>
            </div>
            <div className="">
                <img src="Group 2.svg" alt="" style={{ transform:'scale(0.79)'}}/>
            </div>
        </div>
        <div className="w-2/3 flex justify-around items-center bg-white rounded-3xl" style={{height:'15vh', boxShadow:' 24px 24px 48px rgba(37, 73, 211, 0.05)'}}>
        <div className="flex flex-col">
          <p className="text-[#0F298B] flex font-bold">Location<span><img src="arrow.svg" alt=""style={{ transform:'scale(0.58)'}} /></span> </p>
          <p className="opacity-50 text-black">Lekki</p>
        </div>
        <div className="flex flex-col">
        <p className="text-[#0F298B] flex font-bold">Location<span><img src="arrow.svg" alt=""style={{ transform:'scale(0.58)'}} /></span> </p>
          <p className="opacity-50 text-black">Lekki</p>
        </div>
        <div className="flex flex-col">
        <p className="text-[#0F298B] flex font-bold">Location<span><img src="arrow.svg" alt=""style={{ transform:'scale(0.58)'}} /></span> </p>
          <p className="opacity-50 text-black">Lekki</p>
        </div>
        <div className="">
        <button className="bg-[#2549D3] w-28 h-10 flex  justify-center items-center rounded-md text-white"><span><img src="Vector.svg" alt="" style={{ transform:'scale(0.58)'}}  /></span> Search</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default LandPage