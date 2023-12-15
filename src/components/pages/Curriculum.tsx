import { useState, useEffect } from "react";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import CurriculumSection from "../CurriculumSection";
import { ICurriculumItem } from "../../interfaces";
import { Link } from "react-router-dom";
import { StyledContentLoading } from "../styles/general";
import styled from "styled-components";
import { colors, device, themeSettings } from "../styles/variables";
import { StyledH2 } from "../styles/general";

const StyledBgWrapper = styled.section.attrs({
  className: "styled_bg_wrapper",
})`
  position: relative;
  padding: 3rem 1rem;
  background: ${({ theme }) => theme.background_inverse};
  color: ${({ theme }) => theme.text_inverse};
  border-radius: ${themeSettings.themeBorder_radius};
  height: 100%;
  transition: all 0.2s linear;
  @media ${device.mobileS} {
    padding: 3rem 2rem;
  }
`;

const StyledTitle = styled(StyledH2)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text_inverse};
  @media ${device.mobileM} {
    font-size: 1.6rem;
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.linkcolor};
  transition: all 1s ease;
  &:hover {
    filter: drop-shadow(0 0 3px white);
  }
`;

const Curriculum = () => {
  const [workItems, setWorkItems] = useState<ICurriculumItem[] | null>(null);
  const [schoolItems, setSchoolItems] = useState<ICurriculumItem[] | null>(
    null
  );
  const [loadingWorkItems, setLoadingWorkItems] = useState(false);
  const [loadingSchoolItems, setLoadingSchoolItems] = useState(false);

  const getWorkItems = () => {
    client
      .getEntries({
        content_type: "workItem",
        order: "-fields.sortDate",
      })
      .then((response) => {
        setWorkItems(response.items as any);
        setLoadingWorkItems(false);
      })
      .catch((error) => console.log("error", error));
  };
  const getSchoolItems = () => {
    client
      .getEntries({
        content_type: "schoolItem",
        order: "-fields.sortDate",
      })
      .then((response) => {
        setSchoolItems(response.items as any);
        setLoadingSchoolItems(false);
      })
      .catch((error) => console.log("error", error));
  };
  //get Items from contentful
  useEffect(() => {
    setLoadingWorkItems(true);
    getWorkItems();
    setLoadingSchoolItems(true);
    getSchoolItems();
  }, []);

  return (
    <main>
      <HeaderPages heading="Curriculum" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6" style={{ marginBottom: "2rem" }}>
            {/* Work Experience */}
            <StyledBgWrapper>
              <div>
                <StyledTitle as="h2">Work Experience</StyledTitle>
                <section>
                  {loadingWorkItems && (
                    <StyledContentLoading>...Loading</StyledContentLoading>
                  )}
                  {workItems &&
                    workItems.map((entry) => {
                      return (
                        <CurriculumSection entry={entry} key={entry.sys.id} />
                      );
                    })}
                </section>
              </div>
            </StyledBgWrapper>
          </div>

          <div className="col-12 col-lg-6" style={{ marginBottom: "2rem" }}>
            {/* education */}
            <StyledBgWrapper>
              <div>
                <StyledTitle as="h2">Education</StyledTitle>
                <section>
                  {loadingSchoolItems && (
                    <StyledContentLoading>...Loading</StyledContentLoading>
                  )}
                  {schoolItems &&
                    schoolItems.map((entry) => {
                      return (
                        <CurriculumSection entry={entry} key={entry.sys.id} />
                      );
                    })}
                </section>
              </div>
            </StyledBgWrapper>
          </div>
        </div>

        <StyledLink to="/resume_dev_sv.pdf" target="_blank" download>
          Download Resume.pdf
        </StyledLink>
      </div>
    </main>
  );
};
export default Curriculum;
