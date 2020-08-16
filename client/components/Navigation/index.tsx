import { useRouter } from "next/router";
import { StyledNav, NavItemContainer } from "./styles";
import { NavItem } from "./NavItem";

const navigationItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
  },
];

const Navigation = ({ items = navigationItems, currentRoute }) => {
  return (
    <StyledNav>
      <NavItemContainer>
        {items.map(({ href, label }) => (
          <NavItem href={href} active={currentRoute === href}>
            {label}
          </NavItem>
        ))}
      </NavItemContainer>
    </StyledNav>
  );
};

export { Navigation };
