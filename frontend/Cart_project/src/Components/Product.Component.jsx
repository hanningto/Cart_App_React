import React, { useState } from 'react';
import { useCart } from '../contexts/cartContext';

// ProductComponent to display product details and add to cart functionality
const ProductComponent = ({ id, name, price, images }) => {
  const [currentColor, setCurrentColor] = useState('orange');
  const [currentImage, setCurrentImage] = useState(images.orange);
  const { dispatch } = useCart();

  // Handle color change and update current image
  const handleColorChange = (color) => {
    setCurrentColor(color);
    setCurrentImage(images[color]);
  };

  const addToCart = (product) => {
    dispatch({type: 'ADD_TO_CART', product})
}

  // Add product to cart with current color and image
  const handleAddToCart = () => {
    addToCart({ id, name, price, color: currentColor, image: currentImage });
  };

  return (
    <div style={{ backgroundColor: currentColor, padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
      <h1>{name}</h1>
      <img src={currentImage} alt={`${currentColor} shoe`} style={{ width: '300px', height: 'auto' }} />
      <p>Running Collection</p>
      <p>Ksh {price}</p>
      <div>
        <button onClick={() => handleColorChange('red')} style={{ backgroundColor: 'red', padding: '10px', margin: '5px' }}>Red</button>
        <button onClick={() => handleColorChange('black')} style={{ backgroundColor: 'black', color: 'white', padding: '10px', margin: '5px' }}>Black</button>
        <button onClick={() => handleColorChange('orange')} style={{ backgroundColor: 'orange', padding: '10px', margin: '5px' }}>Orange</button>
      </div>
      <button onClick={handleAddToCart} style={{ padding: '10px', marginTop: '10px' }}>Add to Cart</button>
    </div>
  );
};

export default ProductComponent;
