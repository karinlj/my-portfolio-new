import { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import ToggleBtn from "../../components/ToggleBtn";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device, colors } from "../styles/variables";
import { StyledLinkItem } from "../styles/general";

const StyledNavHeader = styled.header.attrs({
  className: "nav_header",
})`
  padding: 1rem 1rem;
  background: ${colors.background_darkgrey_darker};
  height: 4rem;
  @media ${device.mobileM} {
    display: block;
    position: fixed;
    top: 0;
    height: 100%;
    width: 4.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

//with props
const StyledNavHomeLinkItem = styled(StyledLinkItem).attrs(
  ({ className }): any => ({
    className: "nav_home_link_item",
  })
)`
  height: 50px;
  color: transparent;
  a.link {
    color: ${colors.linkcolor};
    &.active,
    :visited {
      color: ${colors.linkcolor};
    }
  }
  .link_icon {
    color: ${colors.linkcolor} !important;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 1;
  }
  p.link_text {
    top: 15px !important;
  }
`;

const StyledNavbarBigscreen = styled.nav.attrs({
  className: "navbar_bigscreen",
})`
  padding: 0.5rem 0;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media ${device.mobileM} {
    display: flex;
  }
`;

const StyledNavbarMobile = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: fixed;
  right: 0;
  top: 4rem;
  width: 50px;
  opacity: 0;
  z-index: 100;
  @media ${device.mobileM} {
    display: none;
  }
  //toggle open menu
  &.navbar_mobile_open {
    animation: transitionIn 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`;
const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    //menu open class toggle and btn rotate class toggle
    setMobileOpen(!mobileOpen);
  };
  const clickLink = () => {
    if (mobileOpen) {
      //menu open class removed
      setMobileOpen(false);
    }
  };
  //prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("no_scroll");
    } else {
      document.body.classList.remove("no_scroll");
    }
  }, [mobileOpen]);

  return (
    <StyledNavHeader id="nav">
      <StyledNavHomeLinkItem>
        <NavLink to="/" onClick={clickLink}>
          <span className="link_icon cursive">K</span>
        </NavLink>
      </StyledNavHomeLinkItem>

      <ToggleBtn toggleMenu={toggleMenu} mobileOpen={mobileOpen} />

      <StyledNavbarMobile
        className={`navbar_mobile ${mobileOpen ? "navbar_mobile_open" : ""}`}
      >
        <NavigationLinks clickLink={clickLink} />
      </StyledNavbarMobile>

      <StyledNavbarBigscreen>
        <NavigationLinks />
      </StyledNavbarBigscreen>
    </StyledNavHeader>
  );
};
export default NavBar;
