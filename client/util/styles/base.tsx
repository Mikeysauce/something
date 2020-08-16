import { css } from "styled-components";

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
    font-family: "Poppins", sans-serif;
  }
  p:not(:last-of-type) {
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2.25rem;
  }
  h4 {
    font-size: 2.15rem;
  }
  h5,
  h6 {
    font-size: 1.5rem;
  }
`;

export { baseStyles };
