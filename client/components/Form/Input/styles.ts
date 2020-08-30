import styled, { css } from 'styled-components';
import { rem } from 'polished';

interface LabelProps {
  hasError?: boolean;
}

const StyledInput = styled.input`
  border-radius: 4px;
  outline: none;
  border: 1px solid ${(props) => props.theme.text.darkGrey};
  width: 100%;
  height: ${rem('50px')};
  padding: ${rem('16px')};
`;

const Label = styled.label<LabelProps>`
  display: block;
  margin-bottom: ${rem('6px')};
  position: relative;
  color: ${(props) =>
    props.hasError ? props.theme.colors.secondary : 'white'};
  ${(props) => props.theme.fonts.primary};

  ${(props) =>
    props.hasError &&
    css`
      &:after {
        display: block;
        content: '';
        height: 6px;
        width: 100%;
        background: red;
        position: absolute;
        bottom: -60px;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-bottom: 4px solid red;
        border-radius: 3px;
      }
    `}
`;

const Container = styled.div`
  padding: ${rem('16px')} 0;
`;

export { StyledInput, Label, Container };
