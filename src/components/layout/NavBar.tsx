import { useState, useEffect } from "react";
import Navlinks from "./Navlinks";
import ToggleBtn from "../../components/ToggleBtn";
import { NavLink } from "react-router-dom";

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
      //console.log("mobileOpen:", mobileOpen);
      document.body.classList.add("no_scroll");
    } else {
      document.body.classList.remove("no_scroll");
    }
  }, [mobileOpen]);

  return (
    <header className="nav_header" id="nav">
      <div className="link_item home_link">
        <NavLink to="/" onClick={clickLink} className="link">
          <span className="link_icon cursive">K</span>
          <p className="link_text">Home</p>
        </NavLink>
      </div>
      <ToggleBtn toggleMenu={toggleMenu} mobileOpen={mobileOpen} />

      <nav
        className={`navbar_mobile ${mobileOpen ? "navbar_mobile_open" : ""}`}
      >
        <Navlinks clickLink={clickLink} />
      </nav>

      <nav className="navbar_bigscreen">
        <Navlinks />
      </nav>
    </header>
  );
};
export default NavBar;
