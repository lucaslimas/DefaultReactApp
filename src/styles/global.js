import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #e9ebee;
    color: #1d2129;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialized !important;
  }
`;

export default GlobalStyle;
