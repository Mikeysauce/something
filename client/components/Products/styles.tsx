import styled from 'styled-components';
import { up, down, between, only } from 'styled-breakpoints';
import { rem } from 'polished';

const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
  align-items: center;
  padding: 3rem 0 0 0;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: ${rem('48px')};
`;

const StyledProduct = styled.div`
  background: #eaeaea;
  flex-basis: 30%;
  margin-bottom: 1rem;
  padding: 1rem;

  ${down('tablet')} {
    flex-basis: 45%;
  }
`;
export { StyledProducts, StyledProduct, Title };
