import styled, { css } from 'styled-components';
import { up, down, between, only } from 'styled-breakpoints';
import { rem } from 'polished';

interface NavItemProps {
  active?: boolean;
  withHover?: boolean;
}

const Buttons = styled.div`
  margin-left: 1rem;
  display: flex;
`;

const NavActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${down('tablet')} {
    flex-direction: column;
    > :first-child {
      margin: 1rem 0;
    }
  }

  ${between('tablet', 'desktop')} {
    flex-basis: 34%;
  }
  ${up('lgDesktop')} {
    flex-basis: 28%;
  }
`;

const Nav = styled.nav`
  display: flex;
  background: #34558b;
  padding: ${rem('20px')};
  color: #ffffff;
  justify-content: space-between;
  align-items: center;
  ${down('tablet')} {
    flex-direction: column;
  }
`;

const NavItemContainer = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li<NavItemProps>`
  font-family: 'Poppins', sans-serif;
  font-size: ${rem('18px')};
  padding: 0 ${rem('5px')};
  color: white;

  ${up('tablet')} {
    font-size: ${rem('25px')};
    padding: 0 ${rem('16px')};
  }

  ${(props) =>
    props.active &&
    css`
      color: ${props.theme.colors.secondary};
    `};

  a {
    text-decoration: none;
    color: inherit;
    position: relative;

    ${(props) =>
      props.withHover &&
      css`
        &:after {
          width: 0;
          content: ' ';
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
`;

export { Nav, NavItem, NavItemContainer, NavActionsContainer, Buttons };
