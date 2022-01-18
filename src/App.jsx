import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext, useState } from "react";
import { ThemeContext } from "./context";
import Hamburger from "./components/hamburger/Hamburger";
import Menu from "./components/menu/Menu";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [menuOpen, setMenuOpen] = useState(false);

  return( 
    <div 
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
        transition: "0.3s ease"
      }}
    >
      <Toggle/>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  );
};

export default App;