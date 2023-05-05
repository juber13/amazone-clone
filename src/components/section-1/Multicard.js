import React from 'react'


const MultiCard = ({it}) =>{
    return (
       <>
          <div className='mob-container'>
          {it.store.map((t , index) => {
          return(
             <div className='mob1 mob' key={index}>
             <img src={t.img} alt="" data-index={t.type}/>
             <span style={{fontSize : "10px" , font :"wrap"}}>{t.text}</span>
         </div>
       )
    })}
    </div>
       </>
    )
  }
export default MultiCard