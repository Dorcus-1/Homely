import React from 'react';


function Footer(props) {
    const myFooter= props;
  return (
    <div className="flex bg-[#0F298B] w-full justify-evenly items-center" style={{height:'40vh'}}>
  
            <div className="h-full w-1/5 flex flex-col justify-evenly items-center">
              <img src="Rectangle 6.svg" alt="" style={{ transform:'scale(0.75)'}} />  
              <p className="text-white pb-2 pl-24">Solution for easy and flexible <br /> house hunting.You can trust us <br /> anywhere through this <br /> platform </p>
              <p className="text-black pt-2">&copy;2022 Ernor </p>
            </div>
            <div className="h-full w-3/4 flex justify-evenly items-center">
        {props.myFooter.map(line=>(
            <div className=" ">
                <p className="text-white font-medium text-2xl" style={{fontFamily: 'Space Grotesk'}}>{line.head}</p>
                <p className="text-white pt-2">{line.first}</p>
                <p className="text-white pt-2">{line.sec}</p>
                <p className="text-white pt-2">{line.third}</p>
                <p className="text-white pt-2">{line.four}</p>
                
            </div>
        ))}
     </div>
    </div>
  )
}

export default Footer