import { createGlobalStyle } from "styled-components";
import { colors, device } from "./variables";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}
body {
  font-family: 'Roboto', 'Helvetica', sans-serif;
  font-size: 0.9rem;
  color: ${colors.themeLightHeadingcolor};
  background: ${colors.background_darkgrey};
  position: relative;
}
body.no_scroll {
  overflow: hidden;
}
@keyframes transitionIn {
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
main {
  animation: transitionIn 1.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.my-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 6px;
    padding-left: 6px;
  }
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
.site_content {
  padding: 3.5rem 1rem;
  min-height: 100vh;
  @media ${device.mobileM} {
    margin-left: 5rem;
    padding: 3.5rem 3.5rem 1rem 3.5rem;
  }
}
p,
li {
  font-size: 1rem;
  line-height: 1.6;
  // @media all and (min-width: $xl-min) {
  //   font-size: 1.05rem;
  // }
}
section {
  p {
    font-size: 1rem;
    line-height: 1.4;
    // @media all and (min-width: $xl-min) {
    //   font-size: 1.05rem;
    // }
  }
  h2,
  h3,
  h4 {
    margin-bottom: 1.3rem;
  }
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media all and (min-width: 1700px) {
    max-width: 1500px;
  }
}
.cursive {
  font-family: "Amatic SC", cursive;
  font-weight: 700;
}
`;

export default GlobalStyle;
