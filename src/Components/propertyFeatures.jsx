import React from 'react'
import Projects from './Projects'

function PropertyFeatures() {
    const houseProps = [{ 
        image:'maison.svg',
        name:'The Palace',
        phase:'Lekki,phase2',
        structure:'Duplex',
        price:'$2000'
      },
      {
        image:'Rectangle 3.svg',
        name:'IVY RORY',
        phase:'Lekki,phase2',
        structure:'Duplex',
        price:'$2000' ,
        id:"2"
      },
      {
      image:'whitehouse.svg',
      name:'REXONA',
      phase:'Lekki,phase2',
      structure:'Duplex',
      price:'$2000' 
      }
  ]
  return (
    <div>
        <Projects houseProps={houseProps}/>
    </div>
  )
}

export default PropertyFeatures