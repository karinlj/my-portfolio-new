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

function App() {
  return (
    <div className="app" style={{ height: "100%" }}>
      <BrowserRouter>
        <NavBar />
        <div className="content">
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
      </BrowserRouter>
    </div>
  );
}

export default App;
