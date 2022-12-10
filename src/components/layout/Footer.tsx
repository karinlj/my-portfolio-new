import contentful_logo_small from "../../images/contentful_logo_small.png";
import react_logo_small from "../../images/react_logo_small.png";
import styled from "styled-components";
import { device } from "../styles/variables";

const FooterSection = styled.footer.attrs({
  className: "footer_section",
})`
  padding: 1rem 1.5rem;
  min-height: 150px;
  /* display: flex;
  @media ${device.mobileM} {
    justify-content: flex-end;
  } */
  p {
    margin-bottom: 0;
    font-size: 0.7rem;
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
          <div className="col-12 col-md-4 col-xl-3">
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
          </div>
        </div>
      </div>
    </FooterSection>
  );
};
export default Footer;
