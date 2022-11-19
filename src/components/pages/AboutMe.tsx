import React, { useState, useEffect } from "react";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IAbout } from "../../interfaces";
//import monstera_dark from "../../images/monstera_dark_2.jpg";
import sunflower from "../../images/sunflower_3.jpg";

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
    <main className="about">
      <div className="container">
        <div
          className="home_img_wrapper"
          style={{
            background: `url(${sunflower})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="centered_text">
            <HeaderPages heading="About Me" />
            {loadingAbout && <p className="loading">...Loading</p>}

            <div className="container">
              {aboutData
                ? documentToReactComponents(aboutData.fields.aboutContent)
                : ""}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default AboutMe;
