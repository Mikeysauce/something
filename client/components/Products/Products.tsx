import React from 'react';
import { StyledProducts, Title } from './styles';
import { Hero } from '../Hero';
import { Product } from './Product';

const buildProducts = (data) => data.map((product) => <Product {...product} />);

const Products = ({ data }) => (
  <>
    <Title>Products</Title>
    <Hero image="https://source.unsplash.com/random/600x300">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <h4>Bottles</h4>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <h4>Bottles</h4>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </Hero>
  </>
);

export { Products };
