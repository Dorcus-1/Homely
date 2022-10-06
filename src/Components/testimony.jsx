import React from 'react'
import Testimonials from './Testimonials'

function Testimony() {
    const testimon= [
        {
            name:'Alex Godwin',
            country:'South Africa',
            testimony:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus'
        },
        {
            name:'Alex Godwin',
            country:'South Africa',
            testimony:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus'
        },
        {
            name:'Alex Godwin',
            country:'South Africa',
            testimony:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus'
        }
    ]
  return (
    <div>
        <Testimonials testimon={testimon} ></Testimonials>
    </div>
  )
}

export default Testimony