import styled, { css } from 'styled-components';
import { rem } from 'polished';

interface Props {
  white?: boolean;
  underline?: boolean;
}

const Text = styled.p<Props>`
  position: relative;
  color: ${(props) => (props.white ? 'white' : 'black')};
  margin-bottom: ${rem('10px')};
  ${(props) =>
    props.underline &&
    css`
      &:after {
        content: '';
        width: 15%;
        height: 3px;
        background-color: ${(props) => props.theme.colors.secondary};
        display: block;
        position: absolute;
        bottom: -15px;
      }
    `};
`;

export { Text };
