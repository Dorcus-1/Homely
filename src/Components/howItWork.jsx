import React from 'react'

function HowItWork() {
  return (
    <div className=" w-full flex flex-col  justify-around bg-[#fafafa]" style={{height:'80vh'}}>
        <div className="flex flex-col h-1/5 justify-center items-center">
            <h3 className="text-3xl text-[#0F298B] font-bold" style={{fontFamily: 'Space Grotesk'}}>How it works</h3>
            <p>This is how our products work</p>
        </div>
        <div className="flex h-3/4  justify-evenly  items-center">
            <div className="h-3/4 w-1/5 bg-white flex flex-col justify-evenly items-center" >
                <img src="address mark.svg" alt="" />
                <p className=" font-medium text-3xl"  style={{fontFamily: 'Space Grotesk'}}>Find Home</p>
                <p   className=" font-light" style={{fontFamily: 'Space Grotesk'}}>Our properties are located at prime areas where by there won’t be problem with transportation </p>
            </div>
            <div className="bg-white h-3/4 w-1/5 flex flex-col justify-evenly items-center" style={{boxShadow:' 24px 24px 48px rgba(0, 0, 0, 0.05)'}}>
            <img src="Smart house.svg" alt="" />
            <p className="font-medium text-3xl"  style={{fontFamily: 'Space Grotesk'}}>Make payment</p>
            <p   className=" font-thin" style={{fontFamily: 'Space Grotesk'}}>Our estates comes with good network,portable water , 24hrs light and round the clock security.</p>
            </div>
            <div className=" bg-white h-3/4 w-1/5 flex flex-col justify-evenly items-center" style={{}}>
            <img src="secure.svg" alt="" />
                <p className=" text-3xl font-medium"  style={{fontFamily: 'Space Grotesk'}}>Make it official</p>
                <p className=" font-thin" style={{fontFamily: 'Space Grotesk'}}>We have been in business for over 32 years,for client outside the country you can trust  us to deliver well.</p>
            </div>
        </div>
    </div>
  )
}

export default HowItWork