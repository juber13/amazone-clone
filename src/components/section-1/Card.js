import React from 'react'
import './card.css'
import data from '../../../src/StoreData'
import Box from './Box'

const Card = () => {
   console.log(data)
  return (
   <div className="card-container">  
     {data.map(item => <Box item={item}/>)}
   </div>
  )
}

export default Card