import React from 'react'

function CarousalImageComponent({data}) {
    return (
        <div>
          <img src={data?.data?.imgUri} alt={data?.data?.imgUri} style={{objectFit:'cover'}}/>
        </div>
    )
}

export default CarousalImageComponent
