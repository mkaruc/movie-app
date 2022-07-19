import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex';

export const Div = styled(Flex)`
  flex-direction: row;
  `;
export const LoginContainer = styled(Flex)`
  flex-direction: column;
  `;

export const FormContainer = styled(Flex)`
  height: auto;
  width: auto;
  background: rgba(0, 173, 181, 0.5);
  border: 2px solid #e1f1dd;
  padding: 0.5rem;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: white;
  font-size: 3rem;
`;

export const StyledInput = styled.input`
  height: 3rem;
  font-size: 1rem;
  width: 15rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-size: 2rem;
  background: rgba(61, 32, 192, 0.9);
  color: white;
  border: none;
  margin: 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledImg = styled.img`
  width: 70%;
  height: 100%;
  margin: 0;
`;
