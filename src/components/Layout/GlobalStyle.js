import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 50px;

  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  

  background-color: #ffffff;
  color: #ffffff;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

input {
  padding: 5px;
  margin-top: 5px;

  border-radius: 5px;

  outline: transparent;
  border: transparent;
}

button {
  font-size: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
}

h1,
h2 {
  text-align: center;
}

p {
  margin: 0;
}

span {
  font-size: 12px;
  color: red;
}

`;
