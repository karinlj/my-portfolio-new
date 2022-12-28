import { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import ToggleMenuBtn from "../../components/ToggleMenuBtn";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device, colors } from "../styles/variables";
import { StyledLinkItem } from "../styles/general";

const StyledNavHeader = styled.header.attrs({
  className: "nav_header",
})`
  padding: 1rem 1rem;
  background: ${({ theme }) => theme.background_nav};
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
  position: static;
  height: 50px;
  color: transparent;
  @media ${device.mobileM} {
    position: relative;
  }
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
    width: 25px;
    top: 0.5rem;
    left: 0.8rem;
    @media ${device.mobileM} {
      width: 50px;
      top: 0;
      left: 0;
    }
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
  top: 3.5rem;
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

      <ToggleMenuBtn toggleMenu={toggleMenu} mobileOpen={mobileOpen} />

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
