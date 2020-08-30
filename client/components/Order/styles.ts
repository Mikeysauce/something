import styled from 'styled-components';
import { rem } from 'polished';
import { down } from 'styled-breakpoints';

const StyledOrder = styled.div`
  padding: ${rem('16px')};
  max-width: 980px;
  margin: 0 auto;
  h4 {
    margin-bottom: ${rem('10px')};
  }

  p {
    margin: 0;
  }

  .mapboxgl-map,
  .mapboxgl-canvas-container {
    height: 500px;
  }
`;

const StyledList = styled.ul`
  ${(props) => props.theme.fonts.primary};
  li:not(:last-of-type) {
    margin-bottom: ${rem('5px')};
  }
`;

const StyledProductContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: ${rem('16px')} 0;

  &::after {
    position: absolute;
    bottom: 0;
    width: 50px;
    height: 5px;
    background-color: ${(props) => props.theme.colors.secondary};
    display: block;
    content: '';
  }

  ${down('tablet')} {
    flex-direction: column;
  }

  .product_card {
    flex-basis: 30%;
    background: #f8f8f8;
    margin-bottom: 2rem;
    box-shadow: 0px 4px 4px rgba(30, 30, 30, 0.25),
      -4px -2px 4px rgba(30, 30, 30, 0.25);

    ${down('tablet')} {
      max-width: 360px;
      width: 100%;
    }
    p {
      margin-bottom: ${rem('6px')};
    }
  }
`;

const StyledProducts = styled.div`
  margin-top: ${rem('24px')};
`;

export { StyledOrder, StyledList, StyledProductContainer, StyledProducts };
