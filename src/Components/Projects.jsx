import React from 'react';
import { useEffect } from 'react';

function Projects(props) {
    // const {houseProps} = props;
    useEffect(() => {
     console.log(props)
    },[])
  return (
    <div className="flex flex-col w-full justify-evenly bg-[#fafafa]" style={{height:'80vh'}}>
        <div className="flex flex-col justify-center items-center h-1/5">
            <p className="text-3xl text-[#0F298B] font-bold" style={{fontFamily: 'Space Grotesk'}}>Our Featured Properties</p>
            <p>One of our biggest product to be featured and that has sold <br/> out the most.</p>
        </div>
        <div className="w-11/12 flex justify-end">
        <button className="bg-[#2549D3] w-28 h-10 flex  justify-center items-center rounded-md text-white">View more</button>
        </div>
        <div className="flex justify-evenly items-center h-4/5 w-full ">
           {props.houseProps.map(houseprop =>(
            <div className={houseprop.id==2?'flex flex-col h-3/5 w-1/5 bg-white shadow-[24px 24px 48px rgba(0, 0, 0, 0.05)] rounded-tr-3xl rounded-bl-3xl shadow-md': "flex flex-col h-3/5 w-1/5 bg-white rounded-tr-3xl rounded-bl-3xl"} id={houseprop.id}> 
            <div className="flex h-3/4 justify-center items-center">
            <img  src={houseprop.image} alt="image" style={{ transform:'scale(0.92)'}}/>
            </div>
            <div className="flex h-1/5 w-full  justify-around items-center">
            <div className="">
            <p className="font-medium">{houseprop.name}</p>
            <p className="text-xs">{houseprop.phase}</p>
           </div>
           <div className="">
            <p>{houseprop.structure}</p>
            <p className="text-[#0F298B] font-medium">{houseprop.price}</p>
           </div>
            </div>
         
           </div>
            )
        )}
        </div>
    </div>
  )
}

export default Projects