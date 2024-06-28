import React from 'react';
import ProductComponent from './Product.Component';
import redShoe from "../assets/redJordans.jpg"
import blackShoe from '../assets/blackJordan.jpg'
import orangeShoe from '../assets/orangeJordans.jpg'

// Sample product data
const products = [
  {
    id: 1,
    name: 'Jordan Proto-Lyte',
    price: 12800,
    images: {
      red: redShoe,
      black: blackShoe,
      orange: orangeShoe,
    },
  },
   {
    id: 2,
    name: 'Jordan Proto-Lyte',
    price: 12800,
    images: {
      red: redShoe,
      black: blackShoe,
      orange: orangeShoe,
    },
  },
  {
    id: 3,
    name: 'Jordan Proto-Lyte',
    price: 12800,
    images: {
      red: redShoe,
      black: blackShoe,
      orange: orangeShoe,
    },
  }
  // Add more products as needed
];

// DisplayProductComponent to render a list of ProductComponent
const DisplayProductComponent = () => {
  return (
    <div>
      {products.map((product) => (
        
        <ProductComponent
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          images={product.images}
        />
      ))}
    </div>
  );
};

export default DisplayProductComponent;
