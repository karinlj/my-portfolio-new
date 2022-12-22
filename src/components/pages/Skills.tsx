import React, { useState, useEffect } from "react";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import { ISkillItem } from "../../interfaces";
import { StyledContentLoading } from "../styles/general";
import { StyledH2 } from "../styles/general";
import styled from "styled-components";
import { device, colors } from "../styles/variables";

const StyledSkillsSection = styled.section.attrs({
  className: "styled_skills_section",
})`
  @media ${device.mobileM} {
    margin-top: 2rem;
  }
  .skills_row {
    margin-bottom: 2rem;
    @media ${device.laptop} {
      margin-bottom: 1rem;
    }
    @media ${device.desktop} {
      margin-bottom: 4rem;
    }
  }
`;

const StyledSubHeader = styled(StyledH2)`
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.4;
`;

const StyledBoxItem = styled.div.attrs({
  className: "styled_box_item",
})`
  margin-bottom: 2rem;
  @media ${device.mobileM} {
    margin-bottom: 1.5rem;
  }
  .box_item_icon_content {
    text-align: center;
    width: 50%;
  }
  .icon {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    color: ${colors.themeLightHeadingcolor};
  }
  .text {
    font-size: 0.75rem;
  }
`;
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
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 col-xl-2">
            <HeaderPages heading="My skills" />
          </div>
          <div className="col-12 col-lg-9 col-xl-10">
            <StyledSkillsSection>
              <div className="container">
                {loadingSkills && (
                  <StyledContentLoading>...Loading</StyledContentLoading>
                )}
                {skillItems &&
                  skillItems.map((entry) => {
                    return (
                      <div className="skills_row">
                        <StyledSubHeader as="h2">
                          {" "}
                          {entry.fields.title}
                        </StyledSubHeader>
                        <div className="row box_row" key={entry.sys.id}>
                          {entry.fields.skills.map((item) => {
                            return (
                              <div className="col-4 col-lg-2">
                                <StyledBoxItem>
                                  <div className="box_item_icon_content">
                                    <i
                                      className={`fa-${item.icon} icon`}
                                      aria-hidden="true"
                                    ></i>
                                    <p className="text">{item.text}</p>
                                  </div>
                                </StyledBoxItem>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </StyledSkillsSection>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Skills;
