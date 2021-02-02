import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 16px Roboto, sans-serif;
    color: ${props => props.theme.color.text};
    background-color: ${props => props.theme.color.background};
  }
`
