import "./intro.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Background1 from "../../img/background1.png";
import Background2 from "../../img/background2.png";

const Intro = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div id="i" style={{backgroundImage: !darkMode && "linear-gradient(0deg, rgba(0,32,63,1) 30%, rgba(9,9,121,1) 46%, rgba(0,212,255,1) 100%)", color: !darkMode && "white"}}>
            <img src={Background1} alt="" className="i-bg" style={{opacity: !darkMode && 0}}/>
            <img src={Background2} alt="" className="i-bg" style={{opacity: darkMode && 0}}/>
            <div className="sky">
                <div className="star" ></div>
                <div className="star" ></div>
                <div className="star" ></div>
                <div className="star" ></div>
                <div className="star" ></div>
                <div className="star" ></div>
                <div className="star" ></div>
                <div className="star" ></div>
                <div className="star" ></div>
                <div className="star" ></div>
                <div className="star" ></div>
                <div className="star" ></div>
            </div>
            <div className="i-body">
                <div className="i-body-wrapper">
                    <h2 className="i-intro">HELLO, MY NAME IS</h2>
                    <h1 className="i-name">DUNCAN BREWSTER</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item" >WEB DEVELOPER</div>
                            <div className="i-title-item" >UI/UX DESIGNER</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I have a passion for developing and designing intuitive, dynamic, and responsive applications. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro;


