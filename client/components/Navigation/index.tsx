import { Nav, NavItemContainer, NavActionsContainer, Buttons } from "./styles";
import { NavItem } from "./NavItem";
import { SearchBox } from "../SearchBox";
import { Button } from "../Button/styles";

const navigationItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/reviews",
    label: "Reviews",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const Navigation = ({ items = navigationItems, currentRoute }) => {
  return (
    <Nav>
      <NavItemContainer>
        {items.map(({ href, label }) => (
          <NavItem key={label} href={href} active={currentRoute === href}>
            {label}
          </NavItem>
        ))}
      </NavItemContainer>
      <NavActionsContainer>
        <SearchBox />
        <Buttons>
          <Button secondary>Register</Button>
          <Button clear>Login</Button>
        </Buttons>
      </NavActionsContainer>
    </Nav>
  );
};

export { Navigation };
