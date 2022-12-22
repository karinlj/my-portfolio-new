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
import { greenTheme, grayTheme } from "./components/styles/variables";
import styled from "styled-components";

export const StyledToggleBtn = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.btn_background};
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  i {
    font-size: 1.6rem;
  }
`;

function App() {
  const [isGrayMode, setGrayMode] = useState(true);

  const themeToggler = () => {
    setGrayMode(!isGrayMode);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={isGrayMode ? grayTheme : greenTheme}>
        <StyledToggleBtn onClick={themeToggler}>
          {isGrayMode ? (
            <i className="fa-solid fa-droplet" title="Green"></i>
          ) : (
            <i className="fa-solid fa-droplet" title="Gray"></i>
          )}
        </StyledToggleBtn>
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
