import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

// import {cartReducers} from "./cartReducers";
import cartReducers from "./cartReducers";
import { productReducer } from "./cartReducers";
const Cart = createContext();

const Context = ({ children }) => {
  const [loding, setLoading] = useState(false);
  const [state, dispatch] = useReducer(cartReducers, { products: [], cart: []});

  useEffect(() => {
    const fetchData  = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        state.products = data.length > 0 ? data : [];
        dispatch(state);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

      fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const [productState , productDispatch] = useReducer(productReducer, { searchQuery: "", });

  return (
    <Cart.Provider value={{ state, dispatch, loding, productState , productDispatch }}>
      {children}
    </Cart.Provider>
  );
};


export const CartState = () => {
  return useContext(Cart);
};

export default Context;
