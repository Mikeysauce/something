import React from 'react';
import { StyledHero, StyledContent, StyledImage } from './styles';

const Hero = ({ image, children }) => (
  <StyledHero>
    <StyledContent>{children}</StyledContent>
    <div>
      <StyledImage src={image} />
    </div>
  </StyledHero>
);

export { Hero };
