const cartReducers = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

        case "REMOVE_TO_CART":
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) }

        case "CHANGE_QTY":
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id ? item.qty = action.payload.qty : item.qty) }

        //  case "SEARCH_BAR" : 
        //   return {...state , products :state.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))};
        default:
            return state;
    }
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: action.payload }
        default:
            return state;
    }
}

export default cartReducers;