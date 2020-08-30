import { css } from 'styled-components';
import { rem } from 'polished';

const baseStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: 'Poppins', sans-serif;
  }
  p:not(:last-of-type) {
    margin-bottom: ${rem('16px')};
  }
  h1 {
    font-size: ${rem('48px')};
  }
  h2 {
    font-size: ${rem('44px')};
  }
  h3 {
    font-size: ${rem('40px')};
  }
  h4 {
    font-size: ${rem('36px')};
  }
  h5,
  h6 {
    font-size: ${rem('24px')};
  }
  .heading__group {
    margin-bottom: ${rem('16px')};
  }
`;

export { baseStyles };
