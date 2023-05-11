import React from 'react'
import CardItem from './CardItem'

const Cards = ({displayedData}) => {
    
  return (
    <div className='grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {displayedData.map((item) => (
        <CardItem item={item}  />
      ))}
    </div>
  )
}

export default Cards