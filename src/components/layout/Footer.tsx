import contentful_logo_small from "../../images/contentful_logo_small.png";
import react_logo_small from "../../images/react_logo_small.png";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <section className="footer_logo_section">
          <p>Powered by</p>
          <div className="powered_by">
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
          </div>
        </section>
        <section className="footer_copy">
          <p className="">© {new Date().getFullYear()}- Karin Ljunggren</p>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
