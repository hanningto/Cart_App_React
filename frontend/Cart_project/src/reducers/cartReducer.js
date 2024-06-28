

export const cartReducer = (cart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...cart, action.product]
            break
        case 'REMOVE_FROM_CART':
            console.log(`Product id from reducer ${action.id}`)
            return cart.filter((item) =>{
                item.id !== action.id
            })
            break;
    
        default:
            break;
    }
}