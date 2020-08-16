import Link from "next/link";
import { NavItem as StyledNavItem } from "./styles";

interface NavItemProps {
  href: string;
  active: boolean;
  children: React.ReactChild;
}

const NavItem = ({ href, active, children }: NavItemProps) => (
  <StyledNavItem active={active}>
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  </StyledNavItem>
);

export { NavItem };
