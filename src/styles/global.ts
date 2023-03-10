import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  // Fonts
  @font-face {
    font-family: PlanetKosmos;
    src: url('/fonts/planetkosmos.woff') format('woff');
    font-style: normal;
    font-display: swap;
  }

  // Global Styles
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  // Selection 
  ::-moz-selection {
    color: black;
    background: #04d361;
  }

  ::selection {
    color: black;
    background: #04d361;
  }

  // Trackbar
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #000;
  }

  ::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #444;
  }
  
  a {
    color: unset;
    text-decoration: none;
  }
  
  body {
    background: ${(props) => props.theme.colors.background};
    min-height: 100vh;
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Inter, sans-serif;
  }

  main {
    min-height: 100vh;
  }
`;

export const Container = styled.div`
  padding: 0px 12vw;

  @media only screen and (max-width: 768px) {
    padding: 0px 6vw;
  }
`;
