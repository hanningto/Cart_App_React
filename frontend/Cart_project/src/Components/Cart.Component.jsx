import { useState } from 'react';
import React from 'react';
import { useCart } from '../contexts/cartContext';

// Cart component to display items in the cart and allow removing items
const Cart = () => {
  const { cart, dispatch } = useCart();


  const [itemQuantity, setItemQuantity] = useState(1)



  const removeFromCart = (id) => {
    console.log(id)
      dispatch({type: 'REMOVE_FROM_CART', id})
  }

  const IncreaseQuantity = () => {
      setItemQuantity(itemQuantity + 1)
      console.log(itemQuantity)
  }

  const decreaseQuantity = (id) => {
      setItemQuantity(itemQuantity - 1)
      if(itemQuantity === 1){
          removeFromCart(id)
      }
      console.log(itemQuantity)
  }


  return (
    <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
              {item.name} - Ksh {item.price} ({item.color})
              <button onClick={() => IncreaseQuantity()}>Increase</button>
              <span > {itemQuantity} </span>
              
              <button onClick={() => decreaseQuantity(item.id)}>Decrease</button>
              {` product id ${item.id}`}
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px' }}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
