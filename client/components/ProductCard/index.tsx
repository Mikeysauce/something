import React from 'react';
import { StyledProductCard } from './styles';

const ProductCard = ({ name, price, key, category }) => (
  <StyledProductCard className="product_card">
    <img
      style={{ display: 'block', width: '100%' }}
      src={`http://source.unsplash.com/random/250x125?sig=${key}`}
    />
    <div className="product__details">
      <p>{category.name}</p>
      <p>{name}</p>
      <p>£ {price}</p>
    </div>
  </StyledProductCard>
);

export { ProductCard };
