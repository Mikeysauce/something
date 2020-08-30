import styled from 'styled-components';

const StyledHero = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
`;

const StyledContent = styled.div`
  color: white;
  width: 100%;
`;

const StyledImage = styled.img`
  display: block;
`;

export { StyledHero, StyledContent, StyledImage };
