import React, {  createContext, useContext, useReducer } from 'react'
import shopReducer from '../reducers/shopReducer';
const ShopContext = createContext();

 const ShopProvider = ({children}) => {
    const [cartItems, dispatch] = useReducer(shopReducer, [])
 
    return (
        <ShopContext.Provider value={{cartItems, dispatch}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopProvider
export const useShop = () => useContext(ShopContext)