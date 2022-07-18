import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex';

export const MainContainer = styled.div`
  display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const Card = styled(Flex)`
  flex-direction: column;
  height: 34rem;
  width: 20rem;
  padding: 0.5rem;
  border-radius: 3px;
  margin: 0.7rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
  &:hover .overview{
            transform: translateX(0%);
        }
`;

export const Image = styled.img`
  height: 30rem;
  border-radius: 10px;
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: .7rem;
  border-radius: 5px;
  width: 20rem;
`;
export const Overview = styled.p`
  color: white;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
        font-size: 1.5rem;
        padding: 1rem;
        transform: translateX(100%);
        z-index: 1;
        transition: transform 0.7s ease-in-out;
       
`;
