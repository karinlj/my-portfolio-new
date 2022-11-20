import React, { useState, useEffect } from "react";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import { ISkillItem } from "../../interfaces";

const Skills = () => {
  const [skillItems, setSkillItems] = useState<ISkillItem[] | null>(null);
  const [loadingSkills, setLoadingskills] = useState(false);

  const abortContrl = new AbortController();
  const getSkillItems = () => {
    client
      .getEntries({
        content_type: "skillNew",
        order: "fields.sortNumber",
        signal: abortContrl.signal,
      })
      .then((response) => {
        setSkillItems(response.items as any);
        setLoadingskills(false);
      })
      .catch((error) => console.log("error", error));
  };

  //get Items from contentful
  useEffect(() => {
    setLoadingskills(true);
    getSkillItems();
    //eslint-disable-next-line
  }, []);

  return (
    <main className="skills">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-2">
            <HeaderPages heading="My skills" />
          </div>

          <div className="col-12 col-md-10">
            <section className="skills_section">
              <div className="container">
                <section className="boxes">
                  {loadingSkills && <p className="loading">...Loading</p>}

                  {skillItems &&
                    skillItems.map((entry) => {
                      return (
                        <div className="skills_row">
                          <h2 className="skills_heading">
                            {" "}
                            {entry.fields.title}
                          </h2>
                          <div className="row box_row" key={entry.sys.id}>
                            {entry.fields.skills.map((item) => {
                              return (
                                <div className="col-2">
                                  <div className="boxes_icon">
                                    <div className="boxes_icon_content">
                                      <i
                                        className={`fa-${item.icon} icon`}
                                        aria-hidden="true"
                                      ></i>
                                      <p className="text">{item.text}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* {skillColumns &&
                    skillColumns.map((entry, index) => {
                      const { icon, title, content } = entry.fields;
                      return (
                        // <div
                        //   className="box"
                        //   style={{
                        //     background: `url(${monstera_square2}) no-repeat`,
                        //   }}
                        //   key={entry.sys.id}
                        // >
                        <div className="box" key={entry.sys.id}>
                          <div className="boxes_text_part_outer">
                            <div className="boxes_text_part_inner">
                            <i
                                className={`fas fa-${icon} boxes_icon`}
                                aria-hidden="true"
                              ></i>
                              <i
                                className={`fab fa-${icon} boxes_icon`}
                                aria-hidden="true"
                              ></i> 
                              <h3 className="heading"> {title}</h3>
                              <div className="text">
                                {documentToReactComponents(content)}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })} */}
    </main>
  );
};
export default Skills;
