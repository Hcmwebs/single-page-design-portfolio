import { createGlobalStyle, styled } from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root{

--bgColor:rgba(21,21,21,1.0);
--footerBgColor:rgba(36,36,36,1.0);
--bodyColor:rgba(217,217,217,1.0);
--headingColor:rgba(255,255,255,1.0);
--accent:rgba(78,225,160,1.0);
--error: rgba(255, 111, 91, 1.0);
--maxWidth:1440px;
--fixedWidth:600px;
--transition-1: all 0.3s ease-in-out;
--transition-2: all 0.6s ease-in-out;
--transition-3: all 0.8s ease-in-out;
--mobile : 375px;
--tablet : 768px;
--desktop : 1440px;
--medium: 500;
--bold: 700;

}


*, *::before, *::after{
  padding: 0;
	margin: 0;
	box-sizing:border-box;
  font: inherit;
}

html {
  font-size: 100%; /*16px*/
  color-scheme:dark light;
  height: 100%;
}

body {
  background: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  color: #000000;
}

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}


img, picture, svg {
  display: block;
  max-width:100%;
  object-fit: cover;
}

`

export default GlobalStyles
