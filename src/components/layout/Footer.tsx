import contentful_logo_small from "../../images/contentful_logo_small.png";
import react_logo_small from "../../images/react_logo_small.png";
import styled from "styled-components";
import { device, colors } from "../styles/variables";

const FooterSection = styled.footer.attrs({
  className: "footer_section",
})`
  padding: 1rem 1.5rem;
  min-height: 150px;
  position: relative;
  @media ${device.mobileM} {
    margin-left: 5rem;
  }
  p {
    margin-bottom: 0;
    font-size: 0.7rem;
  }
`;

const StyledBackToTopLink = styled.div.attrs({
  className: "back_to_top_link",
})`
  position: absolute;
  bottom: 2.5rem;
  right: 2rem;
  font-size: 1rem;
  transition: all 0.3s ease-in;
  &:hover {
    transform: translateY(-4px);
    filter: drop-shadow(0 0 3px white);
  }
  &:active {
    transform: translateY(-4px);
    filter: none;
  }
  a {
    color: ${colors.linkcolor};
  }
`;

const FooterLogoWrapper = styled.section.attrs({
  className: "footer_logo_wrapper",
})`
  @media ${device.mobileM} {
    float: right;
  }
`;

const FooterLogoSection = styled.section.attrs({
  className: "footer_logo_section",
})`
  a {
    transition: all 1s ease;
    &:hover {
      filter: drop-shadow(0 0 3px white);
      text-decoration: none;
    }
  }
  img {
    display: inline;
    margin: 0 0.6rem 0 0;
    &.react_logo {
      width: 4.3rem;
      height: auto;
    }
    &.contentful_logo {
      width: 7.6rem;
      height: auto;
    }
  }
`;
const FooterCopy = styled.p.attrs({
  className: "footer_copy",
})`
  color: #737373;
`;
const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-md-6" style={{ clear: "both" }}>
            <FooterLogoWrapper>
              <FooterLogoSection>
                <p>Powered by</p>
                <a href="https://reactjs.org/">
                  <img
                    src={react_logo_small}
                    alt="React logo"
                    className="react_logo"
                  />
                </a>
                &amp; &nbsp;
                <a href="https://www.contentful.com/">
                  <img
                    src={contentful_logo_small}
                    alt="Contentful logo"
                    className="contentful_logo"
                  />
                </a>
              </FooterLogoSection>

              <FooterCopy>
                © {new Date().getFullYear()}- Karin Ljunggren
              </FooterCopy>
            </FooterLogoWrapper>
          </div>
        </div>
      </div>
      <StyledBackToTopLink>
        <a href="#siteContent">
          <i className="fa-solid fa-angles-up"></i>
        </a>
      </StyledBackToTopLink>
    </FooterSection>
  );
};
export default Footer;
