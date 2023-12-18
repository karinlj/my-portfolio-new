import { useState, useEffect } from "react";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IAbout } from "../../interfaces";
import styled from "styled-components";
import { device, colors } from "../styles/variables";
import coverImage from "../../images/hugo.jpg";
import coverImageMobile from "../../images/sunflower_8_mobile.jpg";
import {
  StyledCenteredText,
  StyledContentLoading,
  StyledImageWrapper,
} from "../styles/general";

const StyledLink = styled.a.attrs({
  className: "forward_link",
})`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  color: ${colors.linkcolor};
  text-decoration: none;
  cursor: pointer;
  float: right;
  text-transform: uppercase;
  font-weight: 700;
  &.active,
  :visited {
    color: ${colors.linkcolor};
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
  /* &::before {
    content: "fas fa-arrow-right";
    color: white;
  } */
  &.fas {
    color: white;
  }
`;

const AboutMe = () => {
  const [aboutData, setAboutData] = useState<IAbout | null>(null);
  const [loadingAbout, setLoadingAbout] = useState(false);

  const abortContrl = new AbortController();
  const getAboutData = () => {
    client
      .getEntries({
        content_type: "aboutDataFront",
        signal: abortContrl.signal,
      })
      .then((response) => {
        setAboutData(response.items[0] as any);
        setLoadingAbout(false);
      })
      .catch((error) => console.log("error", error));
  };
  //get Items from contentful
  useEffect(() => {
    setLoadingAbout(true);
    getAboutData();
    //eslint-disable-next-line
  }, []);

  return (
    <main>
      <div className="container">
        <StyledImageWrapper image={coverImage} mobileImage={coverImageMobile}>
          <HeaderPages heading="About Me" />

          <StyledCenteredText>
            {loadingAbout && (
              <StyledContentLoading>...Loading</StyledContentLoading>
            )}
            <div className="container">
              {aboutData
                ? documentToReactComponents(aboutData.fields.aboutContent)
                : ""}
            </div>
          </StyledCenteredText>
          {aboutData ? (
            <>
              <StyledLink>
                {" "}
                {aboutData.fields.link} <i className="fas fa-arrow-right"></i>
              </StyledLink>
            </>
          ) : (
            ""
          )}
        </StyledImageWrapper>
      </div>
    </main>
  );
};
export default AboutMe;
