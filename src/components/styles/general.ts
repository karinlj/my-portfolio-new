import styled from "styled-components";
import { colors, device, themeSettings } from "./variables";

//typography
const BaseHeader = styled.span`
  color: ${colors.themeLightHeadingcolor};
  font-weight: 500;
  position: relative;
  line-height: 1.2;
`;
export const StyledH1 = styled(BaseHeader)`
  font-family: "Amatic SC", cursive;
  font-weight: 700;
  font-size: 2.3rem;
  @media ${device.mobileM} {
    font-size: 2.8rem;
  }
  @media ${device.laptop} {
    font-size: 3.3rem;
  }
  @media ${device.laptopL} {
    //font-size: 3.5rem;
    font-size: 2.9rem;
  }
`;
export const StyledH2 = styled(BaseHeader)`
  font-size: 2rem;
  @media ${device.mobileS} {
    font-size: 2.1rem;
  }
  //kolla
  @media ${device.mobileM} {
    font-size: 2.2rem;
  }
  @media ${device.laptop} {
    font-size: 2.2rem;
  }
  @media ${device.laptopL} {
    font-size: 2.2rem;
  }
`;
export const StyledH3 = styled(BaseHeader)`
  font-size: 1.2rem;
  // line-height: 1.4;
  @media ${device.mobileS} {
    font-size: 1.3rem;
  }
  @media ${device.laptopL} {
    font-size: 1.4rem;
  }
`;
export const StyledH4 = styled(BaseHeader)`
  font-size: 1.15rem;
  @media ${device.laptop} {
    font-size: 1.25rem;
  }
  @media ${device.laptopL} {
    font-size: 1.35rem;
  }
`;
export const StyledH5 = styled(BaseHeader)`
  font-size: 1.1rem;
  @media ${device.mobileM} {
    font-size: 1.1rem;
  }
  @media ${device.laptopL} {
    font-size: 1.2rem;
  }
`;
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
