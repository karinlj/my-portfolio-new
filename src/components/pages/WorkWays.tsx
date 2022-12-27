import { useState, useEffect } from "react";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import { IWorkingWays } from "../../interfaces";
import coverImage from "../../images/sunflower_4.jpg";
import coverImageMobile from "../../images/sunflower_4_mobile.jpg";
import styled from "styled-components";
import { colors } from "../styles/variables";
import {
  StyledCenteredText,
  StyledImageWrapper,
  StyledH2,
  StyledContentLoading,
} from "../styles/general";

const StyledSubHeader = styled(StyledH2).attrs({
  className: "styled_sub_header",
})`
  font-family: "Amatic SC", cursive;
  font-weight: 700;
  color: ${colors.textcolor_light};
`;

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
    <main>
      <div className="container">
        <StyledImageWrapper image={coverImage} mobileImage={coverImageMobile}>
          <StyledCenteredText>
            <HeaderPages
              heading="How I like to work"
              subHeading="I am developing for people and value communication."
            />

            {loadingWorkingWays && (
              <StyledContentLoading>...Loading</StyledContentLoading>
            )}
            <div className="container">
              <div className="row">
                {workingWays &&
                  workingWays.map((entry, index) => {
                    const { title, list } = entry.fields;

                    return (
                      <div className="col-12 col-md-6" key={index}>
                        <StyledSubHeader>{title}</StyledSubHeader>
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
          </StyledCenteredText>
        </StyledImageWrapper>
      </div>
    </main>
  );
};
export default WorkWays;
