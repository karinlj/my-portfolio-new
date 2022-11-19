import React, { useState, useEffect } from "react";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import { IWorkingWays } from "../../interfaces";
import sunflower from "../../images/sunflower_1.jpg";

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
        <div
          className="home_img_wrapper"
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
                      <div className="col-12 col-md-6 col-xl-5" key={index}>
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
        </div>
      </div>

      {/* <div className="col-12">
              <section className="boxes">
                <HeaderPages
                  heading="How I like to work"
                  subHeading="   I am developing for people and value communication."
                />

                <div className="boxes_inner workingWays">
                  {loadingWorkingWays && <p className="loading">...Loading</p>}

                  {workingWays &&
                    workingWays.map((entry, index) => {
                      const { icon, title, list } = entry.fields;

                      return (
                        <div className="box workingWays">
                          <div className="boxes_text_part_outer" key={index}>
                            <div className="boxes_text_part_inner">
                              <i
                                className={`fas fa-${icon} boxes_icon`}
                                aria-hidden="true"
                              ></i>
                              <h3 className="heading">{title}</h3>

                              <ul>
                                {list.map((item, index) => {
                                  return <li key={index}>{item}</li>;
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </section>
            </div> */}
    </main>
  );
};
export default WorkWays;
