import React, {  createContext, useContext, useReducer, useState } from 'react'
import { cartReducer } from '../reducers/cartReducer';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, [])
 
    return (
        <CartContext.Provider value={{cart: cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)