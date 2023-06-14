import { createGlobalStyle } from "styled-components";

export default  createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,'General Sans Variable';
  scroll-behavior:smooth;
}
button,a{
  cursor: pointer;
}
`;

