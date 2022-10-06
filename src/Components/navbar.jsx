import React from 'react'

function Navbar() {

    const navlist=['Home','Rent','Land','Agent','ContactUs']

    const list= navlist.map((nav) => 
        <li className="list-none no-underline">{nav}</li>
    )
    const ulStyle={
        display: 'flex',
        justifyContent: 'space-evenly'
        
    }

  return (
    <div className="w-full flex justify-evenly items-center " style={{height:'8vh', borderBottom: '1px solid #C4C4C4' }}>
        <div className="w-1/5 ml-20">
            <img src="rectangle 6.svg" alt="" width="120"/>
        </div>
        <ul style={ulStyle} className="w-2/4 list-none no-underline">{list}</ul>
        <div className="w-1/4">
        <button className="bg-[#2549D3] w-28 h-10 rounded-md text-white">Get Start</button>
        </div>
       
    </div>
  )
}

export default Navbar