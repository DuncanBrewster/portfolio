import "./about.css";
import Logo from "../../img/logo.png";
import Me from "../../img/headshot-transparent.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const About = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div id="a">
            <div className="a-left">
                <div className="a-card bg1"></div>
                <div className="a-card bg2">
                    <div className="a-card">
                        <img 
                            src={Me} 
                            alt="" 
                            className="a-img" 
                        />
                    </div>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">ABOUT ME</h1>
                <p className="a-desc">
                Ever since I’ve entered the world of software development, I have been drawn to the combination of intuition, creativity, and growth the field offers. Striving for the simplest solutions, having multiple creative paths to get there, and being challenged along the way excites me to continue improving my skills.  
                </p>
                <p className="a-sub">
                    Below, you’ll find projects I’ve completed that showcase my proficiency in developing software.
                </p>
                <div className="a-logo">
                    <img src={Logo} alt="" className="a-logo-img" />
                    <div className="a-logo-texts">
                        <h4 className="a-logo-title" style={{color: darkMode && "#7bd09b"}}>Coding Certifications</h4>
                    <ul className="a-logo-desc">
                        <li>Responsive Web Design</li>
                        <li>JavaScript Algorithms and Data Structures</li>
                        <li>Front End Development Libraries</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
