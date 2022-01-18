import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.css";

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"});
    };
    return (
        <div className="t">
            <FontAwesomeIcon icon ={faSun} className="t-icon"></FontAwesomeIcon>
            <FontAwesomeIcon icon ={faMoon} className="t-icon"></FontAwesomeIcon>
            <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25, transition: "0.3s ease"}}></div>
        </div>
    )
}

export default Toggle;
