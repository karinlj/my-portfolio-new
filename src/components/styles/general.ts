import styled from "styled-components";
import { colors, device, themeSettings } from "./variables";

// h1 {
//     font-size: 2.3rem;
//     font-weight: 500;
//     @media all and (min-width: $md-min) {
//       font-size: 2.8rem;
//     }
//     @media all and (min-width: $lg-min) {
//       font-size: 3.3rem;
//     }
//     @media all and (min-width: $xl-min) {
//       font-size: 3.5rem;
//     }
//   }

//typography
// h1,
// h2,
// h3,
// h4,
// h5,
// h6 {
//   font-weight: 500;
//   color: ${colors.themeLightHeadingcolor};
// }

export const StyledCenteredText = styled.section.attrs({
  className: "centered_text",
})`
  margin: 0 auto;
  padding: 3rem 0;
  @media ${device.mobileM} {
    width: 75%;
    padding: 0;
  }
  @media ${device.laptop} {
    width: 80%;
  }
  @media ${device.laptopL} {
    width: 70%;
  }
  @media ${device.desktop} {
    width: 50%;
  }
  h1,
  h2 {
    color: ${colors.themeLightHeadingcolor};
    position: relative;
  }
  p,
  li {
    line-height: 2;
    position: relative;
    color: ${colors.themeLightHeadingcolor};
  }
  a {
    color: ${colors.linkcolor};
    &:hover {
      text-decoration: none;
      filter: drop-shadow(0 0 3px white);
      transition: all 1s ease;
    }
  }
  ul {
    margin-bottom: 2rem;
  }
`;
