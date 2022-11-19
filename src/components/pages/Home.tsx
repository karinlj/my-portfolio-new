import { useState, useEffect } from "react";
//import monstera_lighter from "../../images/monstera_lighter.jpg";
import sunflower from "../../images/sunflower_2.jpg";

import { client } from "../../client";

import { IAbout } from "../../interfaces";

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
            <div
              className="home_img_wrapper"
              style={{
                background: `url(${sunflower})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <section className="heading_box_section">
                {loadingAbout && <p className="loading">...Loading</p>}
                {aboutData ? (
                  <h1 className="home_name cursive">
                    {aboutData.fields.heading}
                    <span className="home_name_sub cursive">
                      {aboutData.fields.text}
                    </span>
                  </h1>
                ) : (
                  ""
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
