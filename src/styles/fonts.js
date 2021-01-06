import sans300woff2 from "../assets/fonts/open-sans-v18-latin-300.woff2"
import sans300woff from "../assets/fonts/open-sans-v18-latin-300.woff"

import sans400woff2 from "../assets/fonts/open-sans-v18-latin-regular.woff2"
import sans400woff from "../assets/fonts/open-sans-v18-latin-regular.woff"

import sans700woff2 from "../assets/fonts/open-sans-v18-latin-700.woff2"
import sans700woff from "../assets/fonts/open-sans-v18-latin-700.woff"

import { createGlobalStyle } from "styled-components"

const Typography = createGlobalStyle`
  /* open-sans-300 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url(${sans300woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${sans300woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* open-sans-regular - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${sans400woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${sans400woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* open-sans-700 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url(${sans700woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${sans700woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  html {
    font-family: "Open Sans", sans-serif;
    color: var(--font-color);
  }
`

export default Typography
