import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./hamburger.css";

const Hamburger = ({menuOpen, setMenuOpen}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
            <div className="h" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="line1" style={{backgroundColor: menuOpen || darkMode ? "white" : "black", transform: menuOpen ? "rotate(43deg)" : "none"}}></span>
                <span className="line2" style={{opacity: menuOpen ? "0" : "1", backgroundColor: darkMode ? "white" : "black"}}></span>
                <span className="line3" style={{backgroundColor: menuOpen || darkMode ? "white" : "black", transform: menuOpen ? "rotate(-43deg)" : "none"}}></span>   
            </div>
    );
};

export default Hamburger;
