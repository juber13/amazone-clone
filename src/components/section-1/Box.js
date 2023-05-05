import React from 'react'
import MultiCard from './Multicard'
import { useNavigate } from 'react-router-dom'
const Box = ({item}) =>{
   const navigate = useNavigate();

   const renderItem = (e) => {
      // alert('working');
      // console.log(e.target.dataset.index);
      if(e.target.dataset.index)
      navigate(`/${e.target.dataset.index}`);

   }
    return(
       <div className='card ' onClick={renderItem} >
          <h3>{item.heading}</h3>
          {item.store.length > 0 ? <MultiCard it={item}/> : <img src={item.img} alt="" data-index={item.type}/>}
          <span className='seeAll-text'>{item.show}</span>
       </div>
    )
 }
 
export default Box