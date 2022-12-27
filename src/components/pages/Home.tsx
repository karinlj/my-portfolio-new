import { useState, useEffect } from "react";
//import monstera_lighter from "../../images/monstera_lighter.jpg";
import coverImage from "../../images/sunflower_1.jpg";
import coverImageMobile from "../../images/sunflower_1_mobile.jpg";
import { client } from "../../client";
import { IAbout } from "../../interfaces";
import styled from "styled-components";
import { device, colors } from "../styles/variables";
import {
  StyledH1,
  StyledContentLoading,
  StyledImageWrapper,
} from "../styles/general";

const StyledHeadingSection = styled.section.attrs({
  className: "heading_section",
})`
  display: flex;
  justify-content: center;
  padding: 2rem;
  position: relative;
`;

const StyledHomeHeading = styled(StyledH1).attrs({
  className: "home_heading",
})`
  font-size: 3.8rem;
  color: ${colors.textcolor_light};
  @media ${device.mobileS} {
    font-size: 5.5rem;
  }
  @media ${device.mobileM} {
    font-size: 6.5rem;
  }
  @media ${device.laptop} {
    font-size: 7rem;
  }
  @media ${device.laptopL} {
    font-size: 8rem;
  }
`;

const StyledHomeSubHeading = styled(StyledH1).attrs({
  className: "home_sub_heading",
})`
  font-size: 1.6rem;
  color: ${colors.textcolor_light};
  @media ${device.mobileS} {
    font-size: 2rem;
  }
  @media ${device.laptop} {
    font-size: 2.4rem;
  }
`;

const Home = () => {
  const [aboutData, setAboutData] = useState<IAbout | null>(null);
  const [loadingAbout, setLoadingAbout] = useState(false);

  //stop the fetch when component using it unmounts
  const abortContrl = new AbortController();
  const getAboutData = () => {
    client
      .getEntries({
        content_type: "aboutData",
        signal: abortContrl.signal,
      })
      .then((response) => {
        setAboutData(response.items[0] as any);
        setLoadingAbout(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    setLoadingAbout(true);
    getAboutData();
    //clean up
    return () => {
      abortContrl.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="home">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <StyledImageWrapper
              image={coverImage}
              mobileImage={coverImageMobile}
            >
              <StyledHeadingSection>
                {loadingAbout && (
                  <StyledContentLoading>...Loading</StyledContentLoading>
                )}
                {aboutData ? (
                  <div>
                    <StyledHomeHeading as="h1">
                      {aboutData.fields.heading}
                    </StyledHomeHeading>
                    <StyledHomeSubHeading as="p">
                      {aboutData.fields.text}
                    </StyledHomeSubHeading>
                  </div>
                ) : (
                  ""
                )}
              </StyledHeadingSection>
            </StyledImageWrapper>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
