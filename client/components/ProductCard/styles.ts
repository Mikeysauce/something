import styled from 'styled-components';

const StyledProductCard = styled.div`
  display: block;
  .product__details {
    height: 90px;
    padding: 1rem;

    p:nth-of-type(1) {
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 600;
      color: #717171;
    }
  }
`;

export { StyledProductCard };
