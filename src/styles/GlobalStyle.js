import { createGlobalStyle } from 'styled-components';
import image from '../assets/foto-fundo.svg';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Epilogue, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.lightGreen} no-repeat;
    background-image: url(${image});
    background-size: cover;
  }
`;

export default GlobalStyle;
