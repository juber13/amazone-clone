import React from 'react'
import MultiCard from './Multicard'

const Box = ({item}) =>{
    return(
       <div className='card '>
          <h3>{item.heading}</h3>
          {item.store.length > 0 ? <MultiCard it={item}/> : <img src={item.img} alt="" />}
          <span className='seeAll-text'>{item.show}</span>
       </div>
    )
 }
 
  

export default Box