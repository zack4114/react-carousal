import React from 'react'

function CarousalDivComponent({data}) {
    return (
        <div>
          <h1>{data?.data?.heading}</h1>
          <p>{data?.data?.text}</p>
        </div>
    )
}

export default CarousalDivComponent
