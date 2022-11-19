import React, { useState, useEffect } from "react";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import { IWorkingWays } from "../../interfaces";
import sunflower from "../../images/sunflower_1.jpg";
import { ImageWrapper } from "./Home";

const WorkWays = () => {
  const [workingWays, setWorkingWays] = useState<IWorkingWays[] | null>(null);
  const [loadingWorkingWays, setLoadingWorkingWays] = useState(false);

  const abortContrl = new AbortController();
  const getworkingWays = () => {
    client
      .getEntries({
        content_type: "workingWays",
        order: "fields.sortNumber",
        signal: abortContrl.signal,
      })
      .then((response) => {
        console.log("getworkingWays", workingWays);
        setWorkingWays(response.items as any);
        setLoadingWorkingWays(false);
      })
      .catch((error) => console.log("error", error));
  };
  //get Items from contentful
  useEffect(() => {
    setLoadingWorkingWays(true);
    getworkingWays();
    //eslint-disable-next-line
  }, []);

  return (
    <main className="work_ways">
      <div className="container">
        <ImageWrapper
          style={{
            background: `url(${sunflower})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="centered_text">
            <HeaderPages
              heading="How I like to work"
              subHeading="I am developing for people and value communication."
            />

            {loadingWorkingWays && <p className="loading">...Loading</p>}
            <div className="container">
              <div className="row">
                {workingWays &&
                  workingWays.map((entry, index) => {
                    const { title, list } = entry.fields;

                    return (
                      <div className="col-12 col-md-6" key={index}>
                        <h2 className="heading cursive">{title}</h2>
                        <ul>
                          {list.map((item, index) => {
                            return <li key={index}>{item}</li>;
                          })}
                        </ul>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </ImageWrapper>
      </div>
    </main>
  );
};
export default WorkWays;
