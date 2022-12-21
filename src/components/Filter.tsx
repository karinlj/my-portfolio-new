import React, { useState, useEffect } from "react";
import { IFilter } from "../interfaces";
import { StyledH2 } from "./styles/general";
import styled from "styled-components";
import { device, colors } from "./styles/variables";

const StyledSubHeader = styled(StyledH2)`
  margin-bottom: 0rem;
  font-size: 1.2rem;
`;

const StyledFilterOptions = styled.section.attrs({
  className: "styled_filter_options",
})`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  //custom checkboxes
  /* Customize the label (the container) */
  .option {
    text-transform: capitalize;
    display: block;
    position: relative;
    padding-left: 1.6rem;
    margin-bottom: 12px;
    margin-right: 0.7rem;
    cursor: pointer;
    font-size: 0.9rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media ${device.mobileM} {
      margin-right: 1rem;
      padding-left: 1.9rem;
    }
    /* Hide the browser's default checkbox */
    input.sr_only {
      position: absolute;
      clip: rect(1px, 1px, 1px, 1px);
      overflow: hidden;
      cursor: pointer;
      top: 0;
      left: 0;
      height: 19px;
      width: 19px;
      z-index: 100;
      &:checked {
        ~ .checkmark {
          border: 1px solid ${colors.bluecolor};
          background-color: ${colors.bluecolor};
          /* Show checkmark when checked */
          &:after {
            display: block;
          }
        }
      }
      &:focus {
        ~ .checkmark {
          padding: 0.5rem;
          outline: solid 2px ${colors.themecolor};
          outline-offset: 5px;
          border-radius: 1px;
        }
      }
    }
    /* Create a custom checkbox */
    .checkmark {
      border-radius: 3px;
      position: absolute;
      top: 0;
      left: 0;
      height: 19px;
      width: 19px;
      background-color: ${colors.lightgray};
      border: 1px solid ${colors.text_gray};
      @media ${device.mobileM} {
        height: 21px;
        width: 21px;
      }
      /* Create the checkmark/indicator (hidden when not checked) */
      &:after {
        content: "";
        position: absolute;
        display: none;
        //style it
        left: 7px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        @media ${device.mobileM} {
          left: 8px;
          top: 4px;
        }
      }
    }
    /* On mouse-over, add a grey background color */
    &:hover {
      input {
        ~ .checkmark {
          filter: brightness(80%);
          -webkit-filter: brightness(80%);
          transition: all 1s ease;
        }
      }
    }
  }
`;

interface IProps {
  displayItems(names: string[]): void;
  activeFilter: IFilter[];
}
export const Filter = ({ displayItems, activeFilter }: IProps) => {
  //initializing state to 'big' components filter-state sent as prop
  const [techFilter, setTechFilter] = useState(activeFilter);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //  console.log("event.currentTarget", event.currentTarget);
    let updatedFilter = [...techFilter];
    //sets chosen input to checked/unchecked
    updatedFilter.map((item) => {
      const { id, checked } = event.target;

      //id needs to be string
      if ("id_" + item.id === id) {
        item.isChecked = checked;
      }
      return item;
    });
    setTechFilter(updatedFilter);
  };

  useEffect(() => {
    const checkedItems = techFilter.filter((item) => {
      return item.isChecked;
    });
    const checkedItemNames = checkedItems.map((item) => {
      return item.name;
    });
    //calling  prop-function sending checked names parameter up to parent comp
    displayItems(checkedItemNames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [techFilter]);

  return (
    <main>
      <StyledSubHeader>Techniques</StyledSubHeader>
      <StyledFilterOptions>
        {techFilter.map((item, index) => {
          return (
            <label className="option" key={index}>
              {item.name}
              <input
                type="checkbox"
                id={`id_${item.id}`}
                className="sr_only"
                name={item.name}
                checked={item.isChecked}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
          );
        })}
      </StyledFilterOptions>
    </main>
  );
};
