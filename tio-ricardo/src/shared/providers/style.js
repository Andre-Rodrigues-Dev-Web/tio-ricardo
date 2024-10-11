import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#0070f3',
  },
};

// Criando um reset global
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
  }
`;

// Criando um componente estilizado como exemplo
export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;