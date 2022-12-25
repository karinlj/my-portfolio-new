import React, { useState } from "react";
import { ISubItem } from "../interfaces";
import { StyledH4 } from "./styles/general";
import styled from "styled-components";
import { colors, device, themeSettings } from "./styles/variables";

const StyledAccordion = styled.button.attrs({
  className: "styled_accordion",
})`
  background: transparent;
  border: none;
  padding: 0.4rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 0.5rem auto;
  border-radius: ${themeSettings.themeBorder_radius};
  width: 100%;
  text-align: left;
  .heading {
    cursor: pointer;
    transition: all 0.4s linear;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    .arrow {
      transition: all 0.3s linear;
      font-size: 0.9rem;
      margin-left: 0.5rem;
      height: 1rem;
      color: $textcolor_dark;
      padding: 2px;
      &:hover {
        color: ${colors.linkcolor};
      }
    }
  }
  .cv_content {
    margin-bottom: 0;
    padding: 0rem 1rem 0rem 2rem;
    font-size: 90%;
    max-height: 0;
    overflow-y: hidden;
    transition: all 0.4s ease-out;
    opacity: 0;
    line-height: 1.5;
  }
  &.open {
    .heading {
      margin-bottom: 1rem;
    }
    .arrow {
      transform: rotate(180deg);
    }
    .cv_content {
      opacity: 1;
      max-height: 350px;
    }
  }
`;

const StyledHeading = styled(StyledH4)`
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0;
  @media ${device.mobileM} {
    font-size: 0.9rem;
  }
`;
const Accordion = ({ heading, content }: ISubItem) => {
  // The CURRENTTARGET property always refers to the element whose event listener triggered the event,
  //  opposed to the TARGET  property, which returns the element that triggered the event.
  const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle("open");
    setOpenAccordion(!openAccordion);
  };

  return (
    <StyledAccordion
      onClick={toggleAccordion}
      aria-label="Courses content"
      aria-expanded={openAccordion ? "true" : "false"}
    >
      <div className="heading">
        <StyledHeading as="h4">{heading}</StyledHeading>
        <i className="fas fa-chevron-down arrow" aria-hidden="true"></i>
      </div>
      <p className="cv_content">{content}</p>
    </StyledAccordion>
  );
};
export default Accordion;
