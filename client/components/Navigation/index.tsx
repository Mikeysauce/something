import { Nav, NavItemContainer, NavActionsContainer, Buttons } from './styles';
import { NavItem } from './NavItem';
import { SearchBox } from '../SearchBox';
import { useRouter, NextRouter } from 'next/router';
import { Button } from '../Button/styles';

const navigationItems = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/products',
    label: 'Products',
  },
  {
    href: '/reviews',
    label: 'Reviews',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

const handleNavigation = (target: string, router: NextRouter) => (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  router.push(target);
};

const Navigation = ({ items = navigationItems, currentRoute, isLoggedIn }) => {
  const router = useRouter();
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
          {isLoggedIn ? (
            <Button secondary onClick={handleNavigation('/account', router)}>
              My Account
            </Button>
          ) : (
            <>
              <Button secondary onClick={handleNavigation('/register', router)}>
                Register
              </Button>
              <Button clear onClick={handleNavigation('/login', router)}>
                Login
              </Button>
            </>
          )}
        </Buttons>
      </NavActionsContainer>
    </Nav>
  );
};

export { Navigation };
