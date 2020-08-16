import styled, { css } from "styled-components";
import { rem } from "polished";

interface NavItemProps {
  active?: boolean;
  withHover?: boolean;
}

const StyledNav = styled.nav`
  background: #34558b;
  padding: ${rem("20px")};
  color: #ffffff;
`;

const NavItemContainer = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li<NavItemProps>`
  font-family: "Poppins", sans-serif;
  font-size: ${rem("25px")};
  color: white;
  padding: 0 ${rem("16px")};

  a {
    text-decoration: none;
    color: inherit;
    position: relative;

    ${(props) =>
      props.withHover &&
      css`
        &:after {
          width: 0;
          content: " ";
          display: block;
        }
        &:hover,
        &:focus {
          &:after {
            transition: width 150ms ease-in-out;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            width: 100%;
            margin: 0 auto;
            height: 5px;
            background-color: white;
          }
        }
      `}
  }
  ${(props) =>
    props.active &&
    css`
      color: ${props.theme.colors.secondary};
    `}
`;

export { StyledNav, NavItem, NavItemContainer };
