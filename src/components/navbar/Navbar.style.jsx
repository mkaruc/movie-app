import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex';
import { Link } from 'react-router-dom';

const Nav = styled(Flex)`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  justify-content: space-between;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;

`;

export const HomePage = styled(Link)`
text-align: center;

padding: 1rem 2rem;
cursor: pointer;
text-decoration: none;
color: ${({ theme }) => theme.colors.linkColor};
transition: all 0.3s ease-in;
&:hover {
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: bold;
}`;

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '400px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in;
  }
`;

export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }`;

export const LogoutButton=styled(Flex)`
@media (max-width: ${({ theme }) => theme.screens.lg}) {
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: ${({ isOpen }) => (isOpen ? '400px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in;
}
`;


export default Nav;