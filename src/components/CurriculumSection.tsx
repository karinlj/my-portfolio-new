import Accordion from "./Accordion";
import { ICurriculumItem } from "../interfaces";
import { StyledH3 } from "./styles/general";
import styled from "styled-components";
import { colors, device } from "./styles/variables";

const StyledCurriculumItem = styled.article.attrs({
  className: "curriculum_item",
})`
  position: relative;
  width: 100%;
  padding: 0.5rem 0;
  color: ${colors.textcolor_dark};
  p {
    color: ${colors.textcolor_dark};
  }
  a {
    cursor: pointer;
    color: ${colors.textcolor_dark};

    &:hover {
      transition: all 1s ease;
      text-decoration: none;
      color: ${colors.linkcolor};
    }
  }
  .date {
    display: block;
    padding: 0.2rem 0 0.5rem 0;
    margin: 0;
    font-size: 0.8rem;
  }
  .description {
    font-size: 0.9rem;
  }
`;

const StyledTitle = styled(StyledH3)`
  font-size: 1rem;
  letter-spacing: 0.8px;
  margin-bottom: 0rem;
  color: ${colors.textcolor_dark};
`;

const StyledSiteItem = styled.div.attrs({
  className: "styled_site_item",
})`
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  a {
    position: relative;
    display: inline-block;
    margin-bottom: 0.3rem;
    color: ${colors.linkcolor};
    &:hover {
      color: ${colors.linkcolor};
      transition: all 0.5s ease;
      text-decoration: none;
    }
  }
`;

interface IProps {
  entry: ICurriculumItem;
}
function CurriculumSection({ entry }: IProps) {
  const { title, titleLink, date, description, siteList, subItemList } =
    entry.fields;

  return (
    <StyledCurriculumItem>
      <StyledTitle as="h3">
        <a
          href={titleLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Company homepage"
        >
          {title}
          {""}
        </a>
      </StyledTitle>
      <p className="date">{date} </p>
      <p className="description">{description}</p>
      {siteList &&
        siteList.map((site, index) => {
          return (
            <StyledSiteItem key={index}>
              <a
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site page"
              >
                {site}
                {""}
              </a>
            </StyledSiteItem>
          );
        })}

      {/* course_items accordion */}
      {subItemList &&
        subItemList.map((item, i) => {
          return (
            <>
              <Accordion
                key={i}
                heading={item.heading}
                content={item.content}
              />
            </>
          );
        })}
    </StyledCurriculumItem>
  );
}

export default CurriculumSection;
