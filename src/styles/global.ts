import { createGlobalStyle } from 'styled-components'
import '@radix-ui/themes/styles.css'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter.ttf') format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* outline: solid 1px red; */
  }
  html {
    font-size: 62.5%; // 1rem = 10px
  }

  html, border-style, #__next{
    height: 100%;
  }

  body {
    font-family: -apple-system, 'Inter', BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100%;
  }
`

export default GlobalStyles
