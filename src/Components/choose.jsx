import React from 'react'



function Choose() {
  return (
    <div className="w-full flex justify-evenly  items-center bg-[#fafafa]" style={{height:'80vh'}}>
        <div className="w-2/5">
            <img src="Rectangle 3.svg" alt="" style={{ transform:'scale(0.87)'}}/>
        </div>
        <div className="w-2/5">
          <p className="text-3xl text-[#0F298B] font-bold" style={{fontFamily: 'Space Grotesk'}}>Why should you choose us</p>
          <p className="font-medium" style={{fontFamily: 'Space Grotesk'}}> Creating quality urban lifestyles,building stronger <br /> communities </p>
        <div className="flex justify-evenly" >
            <div className="">
            <p className="flex pb-3.5 font-medium"><span><img src="Vector.svg" alt="" style={{ transform:'scale(0.79)'}}/></span>World Class</p>
            <p className="flex font-medium"><span><img src="Vector.svg" alt="" style={{ transform:'scale(0.79)'}} /></span>Trusted</p>
            </div>
            <div className="">
            <p className="flex pb-3.5 font-medium"><span><img src="Vector.svg" alt="" style={{ transform:'scale(0.79)'}}/></span>Affordable</p>
            <p className="flex font-medium"><span><img src="Vector.svg" alt="" style={{ transform:'scale(0.79)'}} /></span>Amenities</p>
            </div>
  
        </div>
        </div>
    </div>
  )
}

export default Choose;