import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto.ttf') format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; // 1rem = 10px
  }

  html, border-style, #__next{
    height: 100%;
  }

  body {
    font-family: 'Roboto';
    height: 100%;
  }
`

export default GlobalStyles
