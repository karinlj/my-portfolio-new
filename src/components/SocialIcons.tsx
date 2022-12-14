import { StyledSocialLinkList } from "./layout/NavigationLinks";
import styled from "styled-components";
import { colors } from "./styles/variables";
import { StyledLinkItem } from "./styles/general";

//with props
const StyledNavSocialLinkItem = styled(StyledLinkItem).attrs(
  ({ className }): any => ({
    className: "nav_social_link_item",
  })
)`
  margin-bottom: 0.3rem;
  a.link {
    color: ${colors.linkcolor};
    &.active,
    :visited {
      color: ${colors.linkcolor};
    }
  }
  i {
    font-size: 1.1rem;
    height: 30px;
  }
`;

interface IiconListItem {
  url: string;
  icon: string;
  ariaLabel: string;
  text: string;
}

const iconList: IiconListItem[] = [
  {
    url: "mailto:kaljunggren@gmail.com",
    icon: "fa-regular fa-envelope",
    ariaLabel: "Karin email",
    text: "Email me",
  },
  {
    url: "https://se.linkedin.com/in/karin-ljunggren",
    icon: "fa-brands fa-linkedin-in",
    ariaLabel: "Karin Linkedin",
    text: "Linkedin",
  },
  {
    url: "https://github.com/karinlj",
    icon: "fa-brands fa-github",
    ariaLabel: "Karin github",
    text: "gitHub",
  },
];

const SocialIcons = () => {
  return (
    <StyledSocialLinkList>
      {iconList.map((item, index) => {
        return (
          <StyledNavSocialLinkItem key={index}>
            <a
              href={item.url}
              target="_top"
              aria-label="Karin email"
              className="link"
            >
              <i className={`${item.icon} link_icon`} aria-hidden="true"></i>

              <span className="link_text" data-testid="textSpan">
                {item.text}
              </span>
            </a>
          </StyledNavSocialLinkItem>
        );
      })}
    </StyledSocialLinkList>
  );
};

export default SocialIcons;
