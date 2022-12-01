import React from "react";
import Accordion from "./Accordion";
import { ICurriculumItem } from "../interfaces";
import { StyledH3 } from "./styles/general";

interface IProps {
  entry: ICurriculumItem;
}
function CurriculumSection({ entry }: IProps) {
  const { title, titleLink, date, description, siteList, subItemList } =
    entry.fields;

  return (
    <article className="curriculum_item">
      <StyledH3 as="h3">
        <a
          href={titleLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Company homepage"
        >
          {title}
          {""}
        </a>
      </StyledH3>
      <p className="date">{date} </p>
      <p className="description">{description}</p>
      {siteList &&
        siteList.map((site, index) => {
          return (
            <div className="site" key={index}>
              <a
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site page"
              >
                {site}
                {""}
              </a>
            </div>
          );
        })}

      {/* course_items accordion */}
      {subItemList &&
        subItemList.map((item, i) => {
          return (
            <section className="course_items" key={i}>
              <Accordion heading={item.heading} content={item.content} />
            </section>
          );
        })}
    </article>
  );
}

export default CurriculumSection;
