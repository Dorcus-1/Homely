import React from 'react'


function Testimonials(props) {
   const {testimon}= props;
  

  return (
    <div className=" flex flex-col justify-center items-center w-full bg-[#fafafa]" style={{height:'50vh'}}>
      <div className=" flex flex-col h-1/6 justify-end w-full">
        <p className="text-3xl text-[#0F298B] font-bold" style={{fontFamily: 'Space Grotesk'}}>Testimonials</p>
        <p>This is what our client are saying</p>
      </div>
      <div className="w-5/6 flex justify-end">
        <button className="bg-[#2549D3] w-28 h-10 flex  justify-center items-center rounded-md text-white">View more</button>
        </div>
      <div className=" flex justify-evenly  h-3/6">
        {props.testimon.map(paragraphs =>(
          <div className=" flex flex-col h-4/5 w-2/12 justify-center rounded-lg bg-white">
            <div className="">
            <p className="font-medium ">{paragraphs.name}</p>
            <p className="text-xs">{paragraphs.country}</p>
            </div>
     
            <p className="text-sm opacity-70">{paragraphs.testimony}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials