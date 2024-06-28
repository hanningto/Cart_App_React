const ACTIONS = {
    ADD : "ADD_TO_CART",
    DECREMENT: "DECREMENT_QUANTITY",
    REMOVE: "REMOVE_FROM_CART",
}

const shopReducer = (cartItems, action) => {
    const itemIndex = cartItems.findIndex((item) => item.id === action.item.id)
    if (action.type === ACTIONS.ADD){
        if(itemIndex>=0){
            const updateCartItems = cartItems.map((item, index) => {
                if(index===itemIndex){
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
        return updateCartItems
        }
        else{
            return [...cartItems, {...action.item, quantity: 1}]
        }
    }
    
    if (action.type === ACTIONS.DECREMENT){
        if(itemIndex>=0){
            const updateCartItems = cartItems.map((item, index) => {
                if(index===itemIndex){
                    return {...item, quantity: item.quantity - 1}
                }
                return item
            })
        return updateCartItems
        }
        
    }

    if (action.type === ACTIONS.REMOVE){
        return cartItems.filter((item) => item.id !== action.item.id)
        
    }


}


export default shopReducer