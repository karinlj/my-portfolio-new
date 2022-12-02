import { NavLink } from "react-router-dom";
import SocialIcons from "../SocialIcons";
import styled from "styled-components";
import { device, colors } from "../styles/variables";

const StyledNavLinks = styled.div.attrs({
  className: "nav_links",
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${colors.background_darkgrey_darker};
  height: auto;
  padding: 2rem 0;
  @media ${device.mobileM} {
    height: 1000%;
    padding: 1rem 0 0 0;
    position: relative;
    top: 0;
  }
`;

export const StyledLinkList = styled.ul.attrs({
  className: "styled_link_list",
})`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1 0;
  margin-bottom: 1.5rem;
`;

export const StyledSocialLinkList = styled(StyledLinkList)`
  justify-content: flex-end;
  flex: 0 0 auto;
  margin: 0;
`;

interface IProps {
  clickLink?(): void;
}

interface IlistItem {
  url: string;
  icon: string;
  text: string;
}

const linkList: IlistItem[] = [
  {
    url: "/about",
    icon: "fa-solid fa-user",
    text: "About",
  },
  {
    url: "/skills",
    icon: "fa-solid fa-graduation-cap",
    text: "Skills",
  },
  {
    url: "/workWays",
    icon: "fa-solid fa-heart",
    text: "How I work",
  },
  {
    url: "/projects",
    icon: "fa-solid fa-folder-open",
    text: "Projects",
  },
  {
    url: "/personalProjects",
    icon: "fa-regular fa-folder-open",
    text: "Personal projects",
  },
  {
    url: "/curriculum",
    icon: "fa-solid fa-file-lines",
    text: "CV",
  },
];
const Navlinks = ({ clickLink }: IProps) => {
  return (
    <>
      {/* <div className="link_item home_link">
        <NavLink to="/" onClick={clickLink} className="link">
          <span className="link_icon cursive">K</span>
          <p className="link_text">Home</p>
        </NavLink>
      </div> */}

      <StyledNavLinks>
        <StyledLinkList>
          {linkList.map((item, index) => {
            return (
              <li className="link_item" key={index}>
                <NavLink to={item.url} onClick={clickLink} className="link">
                  <i className={`${item.icon} link_icon`}></i>
                  <p className="link_text">{item.text}</p>
                </NavLink>
              </li>
            );
          })}
        </StyledLinkList>

        <SocialIcons />
      </StyledNavLinks>
    </>
  );
};
export default Navlinks;
