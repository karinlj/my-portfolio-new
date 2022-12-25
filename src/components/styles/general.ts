import styled from "styled-components";
import { colors, device } from "./variables";

//typography
export const BaseHeader = styled.span`
  color: ${colors.textcolor_light};
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

//loading
export const StyledContentLoading = styled.p`
  color: ${colors.text_gray};
`;

//centered text
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
    color: ${colors.textcolor_light};
    position: relative;
  }
  p,
  li {
    line-height: 2;
    position: relative;
    color: ${colors.textcolor_light};
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

//menu
export const StyledLinkItem = styled.li.attrs({
  className: "link_item",
})`
  position: relative;
  text-align: center;
  width: 50px;
  a.link {
    width: 50px;
    display: inline-block;
    position: relative;
    transition: all 0.5s ease;
    padding: 1rem;
    border-bottom: 2px solid transparent;
    letter-spacing: 0.5px;
    color: ${colors.navcolor};
    text-decoration: none;
    cursor: pointer;
    &.active,
    :visited {
      color: ${colors.navcolor};
    }
    &.active {
      filter: drop-shadow(0 0 3px white);
    }
    &:hover {
      .link_icon {
        opacity: 0;
        visibility: hidden;
      }
      .link_text {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  .link_icon,
  .link_text {
    width: 50px;
    height: 50px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    transition: 600ms ease;
  }
  i {
    font-size: 1.1rem;
    @media ${device.mobileM} {
      font-size: 1.3rem;
    }
  }
  .link_icon {
    opacity: 1;
    visibility: visible;
  }
  .link_text {
    font-size: 0.6rem;
    opacity: 0;
    visibility: hidden;
    margin: 0;
    @media ${device.mobileM} {
      font-size: 0.75rem;
    }
  }
`;
//projects
export const StyledProjects = styled.section`
  min-height: 500px;
  .col-12,
  .col-md-6,
  .col-lg-4 {
    margin-bottom: 2rem;
  }
`;
