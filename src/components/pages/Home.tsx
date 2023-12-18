import { useState, useEffect } from "react";
//import monstera_lighter from "../../images/monstera_lighter.jpg";
// import coverImage from "../../images/sunflower_1.jpg";
import coverImageMobile from "../../images/sunflower_1_mobile.jpg";
import coverImage from "../../images/me.jpg";
import { client } from "../../client";
import { IHome } from "../../interfaces";
import styled from "styled-components";
import { device, colors } from "../styles/variables";
import {
  BaseHeader,
  StyledH1,
  StyledContentLoading,
  StyledImageWrapper,
} from "../styles/general";

const StyledHeadingSection = styled.section.attrs({
  className: "heading_section",
})`
  padding: 1rem;
  /* display: flex;
  justify-content: center;
  padding: 2rem;
  position: relative; */
`;

const StyledHomeHeading = styled(StyledH1).attrs({
  className: "home_heading",
})`
  text-transform: uppercase;
  text-align: center;
  padding-top: 15rem;
  margin-bottom: 3rem;
  font-size: 4rem;
  /* color: ${colors.textcolor_light}; */
  color: ${colors.lilacPastel};
  @media ${device.mobileS} {
    font-size: 5.5rem;
  }
  @media ${device.mobileM} {
    font-size: 6.5rem;
  }
  /* @media ${device.laptop} {
    font-size: 7rem;
  }
  @media ${device.laptopL} {
    font-size: 8rem;
  } */

  @media ${device.laptopL} {
    font-size: 13rem;
  }
`;

const StyledHomeSubHeading = styled(BaseHeader).attrs({
  className: "home_sub_heading",
})`
  font-size: 2rem;
  color: ${colors.textcolor_light};
  @media ${device.mobileS} {
    font-size: 2.2rem;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
  /* font-size: 2rem;
  color: ${colors.textcolor_light};
  @media ${device.mobileS} {
    font-size: 2.2rem;
  }
  @media ${device.laptop} {
    font-size: 2.4rem;
  } */
`;

const Home = () => {
  const [homeData, setHomeData] = useState<IHome | null>(null);
  const [loadingHome, setloadingHome] = useState(false);

  //stop the fetch when component using it unmounts
  const abortContrl = new AbortController();
  const getHomeData = () => {
    client
      .getEntries({
        content_type: "homeData",
        signal: abortContrl.signal,
      })
      .then((response) => {
        setHomeData(response.items[0] as any);
        setloadingHome(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    setloadingHome(true);
    getHomeData();
    //clean up
    return () => {
      abortContrl.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <StyledImageWrapper
              image={coverImage}
              mobileImage={coverImageMobile}
            >
              <StyledHeadingSection>
                {loadingHome && (
                  <StyledContentLoading>...Loading</StyledContentLoading>
                )}
                {homeData ? (
                  <>
                    <StyledHomeSubHeading as="p">
                      {homeData.fields.preamble}
                    </StyledHomeSubHeading>
                    <div>
                      <StyledHomeHeading as="h1">
                        {homeData.fields.title}
                      </StyledHomeHeading>
                    </div>
                    <StyledHomeSubHeading as="p">
                      {homeData.fields.description}
                    </StyledHomeSubHeading>
                  </>
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
