import React from 'react'


const MultiCard = ({it}) =>{
    return (
       <>
          <div className='mob-container'>
          {it.store.map((t) => {
          return(
             <div className='mob1 mob'>
             <img src={t.img} alt="" />
             <span style={{fontSize : "10px" , font :"wrap"}}>{t.text}</span>
         </div>
       )
    })}
    </div>
       </>
    )
  }
export default MultiCard