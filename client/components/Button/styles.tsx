import styled, { css } from "styled-components";
import { rem } from "polished";

interface ButtonProps {
  secondary?: boolean;
  clear?: boolean;
}

const Button = styled.button<ButtonProps>`
  border-radius: 2px;
  font-family: Poppins;
  font-size: 17px;
  color: #ffffff;
  border: none;
  outline: none;
  padding: ${rem("4px")} ${rem("16px")};
  cursor: pointer;
  ${(props) =>
    props.secondary &&
    css`
      background-color: ${props.theme.colors.secondary};
      text-shadow: 1px 1px 2px rgba(199, 139, 21, 0.5);
    `};
  ${(props) =>
    props.clear &&
    css`
      background-color: transparent;
    `}
`;
export { Button };
