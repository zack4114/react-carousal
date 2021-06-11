import React from 'react'

function CarousalTextComponent({data}) {
    return (
        <div>
          <p>{data?.data?.text}</p>
        </div>
    )
}

export default CarousalTextComponent
