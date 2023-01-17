import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root{
--white: rgba(255,255,255,1.0)
--black:rgba(3,3,3,1.0);
--mediumBrown:rgba(122,116,110,1.0);
--lightCream: rgba(255, 247, 240, 1.0)
--galacticBlue:rgba(117,92,222,1.0);
--summerYellow:rgba(246,165,96,1.0);
--pink:rgba(243, 158,158,1.0);
--lightRed:rgba(235,117,101,1.0)
--cyan:rgba(97,196,183,1.0)
--darkPurple:rgba(85,32,73,1.0);
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
  height: 100%;
}

body {
  background-color:var(--lightCream);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: var(--medium);
  line-height: 1.75;
  color:var(--mediumBrown);
  display: grid;
  place-items: center;
  min-height: 100vh;
}
p{

}

h1, h2, h3, h4, h5 {
  margin:0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: var(--bold);
  line-height: 1.3;
}

h1 {
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
  object-fit: cover
}



`

export default GlobalStyles
