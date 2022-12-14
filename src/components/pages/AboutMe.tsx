import { useState, useEffect } from "react";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IAbout } from "../../interfaces";
import coverImage from "../../images/sunflower_8.jpg";
import coverImageMobile from "../../images/sunflower_8_mobile.jpg";
import {
  StyledCenteredText,
  StyledContentLoading,
  StyledImageWrapper,
} from "../styles/general";

const AboutMe = () => {
  const [aboutData, setAboutData] = useState<IAbout | null>(null);
  const [loadingAbout, setLoadingAbout] = useState(false);

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
          <StyledCenteredText>
            <HeaderPages heading="About Me" />
            {loadingAbout && (
              <StyledContentLoading>...Loading</StyledContentLoading>
            )}

            <div className="container">
              {aboutData
                ? documentToReactComponents(aboutData.fields.aboutContent)
                : ""}
            </div>
          </StyledCenteredText>
        </StyledImageWrapper>
      </div>
    </main>
  );
};
export default AboutMe;
