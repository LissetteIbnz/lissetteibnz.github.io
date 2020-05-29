import { injectGlobal } from 'emotion';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Maven+Pro|Quicksand&display=swap');

:root {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.7;
  letter-spacing: normal;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  font-family: 'Maven Pro', 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Helvetica Neue', sans-serif;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
}

html {
  background: #fafafa;
  color: #121212;

  a {
  color: #b665e6;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: #000000;
    outline: none;
    }
  }

  &[data-theme='dark'] {
    background: #2c3e50;
    color: #fff;
    a {
      &:hover,
      &:active,
      &:focus {
        color: #fff;
      }
    }
  }

  transition: color ease-in-out 0.3s, background-color ease-in-out 0.3s;

  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #696969;
}
::-webkit-scrollbar-thumb:active {
  background: #3f3f3f;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

/*---------------------------------------
  TYPOGRAPHY
-----------------------------------------*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Quicksand', 'Roboto', sans-serif;
  font-weight: bold;
  line-height: 1.2;
  margin: 1.6rem 0 0.83333rem;
  text-rendering: optimizeLegibility;
}

h1 {
  font-size: 2.22222rem;
  font-weight: 600;
  line-height: 50px;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.6rem;
}

h4 {
  font-size: 1.33333rem;
}

h5 {
  font-size: 1.11111rem;
}

h6 {
  font-size: 1rem;
}

p,
a {
  text-rendering: optimizeLegibility;
}

ul {
  list-style: none;
}
`;
