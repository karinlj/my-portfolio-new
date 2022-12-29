import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import PersonalProjects from "./components/pages/PersonalProjects";
import About from "./components/pages/AboutMe";
import Skills from "./components/pages/Skills";
import WorkWays from "./components/pages/WorkWays";
import Curriculum from "./components/pages/Curriculum";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import GlobalStyle from "./components/styles/globalStyles";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  device,
  lightTheme,
  grayTheme,
  colors,
} from "./components/styles/variables";
import styled from "styled-components";

export const StyledToggleThemeBtn = styled.button.attrs({
  className: "toggle_btn",
})`
  border: none;
  background: transparent;
  color: ${colors.textcolor_light};
  position: absolute;
  width: 30px;
  height: 30px;
  top: 1.1rem;
  right: 3.5rem;
  display: block;
  border-radius: 50%;
  line-height: 1;
  transition: all 0.3s ease-in;
  &:hover {
    filter: drop-shadow(0 0 3px white);
  }
  &:active {
    filter: none;
  }
  @media ${device.mobileM} {
    right: 1.1rem;
    color: ${({ theme }) => theme.btn_color};
  }
  @media ${device.laptop} {
    width: 40px;
    height: 40px;
  }
  i {
    font-size: 1.1rem;
    position: relative;

    @media ${device.mobileM} {
      font-size: 1.4rem;
    }
  }
`;

function App() {
  const [isGrayMode, setGrayMode] = useState(true);
  const themeToggler = () => {
    setGrayMode(!isGrayMode);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={isGrayMode ? grayTheme : lightTheme}>
        <StyledToggleThemeBtn onClick={themeToggler} aria-label="Toggle theme">
          {isGrayMode ? (
            <i className="fa-regular fa-moon" aria-hidden="true"></i>
          ) : (
            <i className="fa-regular fa-sun" aria-hidden="true"></i>
          )}
        </StyledToggleThemeBtn>
        <GlobalStyle />
        <NavBar />
        <div className="site_content">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Skills />} path="/skills" />
            <Route element={<WorkWays />} path="/workWays" />
            <Route element={<Projects></Projects>} path="/projects" />
            <Route
              element={<PersonalProjects></PersonalProjects>}
              path="/personalProjects"
            />
            <Route element={<Curriculum />} path="/curriculum" />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
