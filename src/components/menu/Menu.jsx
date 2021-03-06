import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./menu.css";

const Menu = ({menuOpen, setMenuOpen}) => {

    const theme = useContext (ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="menu" style={{right: menuOpen ? "0": "-300px", backgroundColor: darkMode ? "#7bd09b": "#00203F"}}>
            <ul className="list">
                <li className="listItems" onClick={()=> setMenuOpen(false)}>
                    <a href="#i">Home</a>
                </li>
                <li className="listItems" onClick={()=> setMenuOpen(false)}>
                    <a href="#a">About</a>
                </li>
                <li className="listItems" onClick={()=> setMenuOpen(false)}>
                    <a href="#pl">Projects</a>
                </li>
                <li className="listItems" onClick={()=> setMenuOpen(false)}>
                    <a href="#c">Contact</a>
                </li>
            </ul>        
        </div>
    );
};

export default Menu;
