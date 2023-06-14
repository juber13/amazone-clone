import React , {createContext, useContext, useEffect, useReducer , useState} from 'react'
import cartReducers from './cartReducers';
const Cart =  createContext();



const Context = ({children}) => {
 const [loding , setLoading] = useState(false);
  const [state , disPatch] =  useReducer(cartReducers ,{
    products : [],
    cart  : []
  })

  useEffect(() => {
    const fetchData  = async() => {
        try{
            setLoading(true);
            const res = await fetch('https://fakestoreapi.com/products');
            const data =  await res.json();
            state.products = data.length > 0 ? data : [];
            disPatch(state) 
            setLoading(false);

        }catch(err){
            console.log(err);
        }
    }

    fetchData();
  },[])

  return (
    <Cart.Provider value={{state , disPatch , loding}}>{children}</Cart.Provider>
  )
}

// console.log(state);

export const CartState = () => {
    return useContext(Cart);
}

export default Context