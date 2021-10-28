import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.primary};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    border-color: ${props => props.theme.borderColor};
    /* overscroll-behavior: none; */
  }
`;
 
export default GlobalStyle;