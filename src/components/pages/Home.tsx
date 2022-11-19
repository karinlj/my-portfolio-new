import { useState, useEffect } from "react";
//import monstera_lighter from "../../images/monstera_lighter.jpg";
import sunflower from "../../images/sunflower_2.jpg";
import { client } from "../../client";
import { IAbout } from "../../interfaces";
import styled from "styled-components";
import { colors, device } from "../styles/variables";

export const ImageWrapper = styled.section.attrs({
  className: "image_wrapper",
})`
  position: relative;
  border-radius: $themeBorder_radius;
  height: calc(100vh - 7rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    content: "";
    display: block;
    border-radius: $themeBorder_radius;
  }
`;

const HeadingSection = styled.section.attrs({
  className: "heading_section",
})`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const HomeHeading = styled.h1.attrs({
  className: "home_heading",
})`
  font-size: 3.8rem;
  position: relative;
  font-family: "Amatic SC", cursive;
  font-weight: 700;
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

const HomeSubHeading = styled.p.attrs({
  className: "home_sub_heading",
})`
  font-size: 1.6rem;
  color: ${colors.themeLightHeadingcolor};
  font-family: "Amatic SC", cursive;
  font-weight: 700;
  position: relative;

  @media ${device.mobileS} {
    font-size: 3.8rem;
  }
  @media ${device.mobileM} {
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
            <ImageWrapper
              style={{
                background: `url(${sunflower})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <HeadingSection>
                {loadingAbout && <p className="loading">...Loading</p>}
                {aboutData ? (
                  <div>
                    <HomeHeading>{aboutData.fields.heading}</HomeHeading>
                    <HomeSubHeading>{aboutData.fields.text}</HomeSubHeading>
                  </div>
                ) : (
                  ""
                )}
              </HeadingSection>
            </ImageWrapper>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
