import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  transition-property: color,background;
  transition-duration: .3s;
}

div, p, h1, h2, h3, h4, a, span {
  user-select: none;
}

a, button {
  cursor: pointer;
}
`;