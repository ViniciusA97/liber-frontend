import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: 'Roboto', sans-serif;
  }

  button:focus{
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }

  button:hover{
    cursor: pointer;
  }

  textarea:focus, input:focus, select:focus {
    outline: 0;
  }

`;
 
export default GlobalStyle;