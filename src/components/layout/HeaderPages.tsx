import styled from "styled-components";
import { StyledH1 } from "../styles/general";
import { device } from "../styles/variables";

const StyledHeaderPages = styled.header.attrs({
  className: "styled_header_pages",
})`
  position: relative;
  padding: 0 0 2rem 0;
  @media ${device.mobileM} {
    padding: 0 0 3rem 0;
  }
`;

interface IProps {
  heading: string;
  subHeading?: string;
}
const HeaderPages = ({ heading, subHeading }: IProps) => {
  return (
    <StyledHeaderPages>
      <div className="container">
        <StyledH1 as="h1">{heading}</StyledH1>
        <p>{subHeading}</p>
      </div>
    </StyledHeaderPages>
  );
};
export default HeaderPages;
