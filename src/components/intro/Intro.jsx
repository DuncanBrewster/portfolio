import "./intro.css";
import Me from "../../img/headshot-transparent.png";

const intro = () => {
    return (
        <div id="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">HELLO, MY NAME IS</h2>
                    <h1 className="i-name">DUNCAN</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">WEB DEVELOPER</div>
                            <div className="i-title-item">UI/UX DESIGNER</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I have a passion for developing and designing intuitive, dynamic, and responsive applications. 
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default intro;


