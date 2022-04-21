import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState ("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_i7qhqwd', 
                'template_6q6dznb', 
                formRef.current, 
                'user_1lfbGMWYbx3W39FHF0rUG'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                    }, 
                    (error) => {
                    console.log(error.text);
                    }
            );
        // clearing values
        setName(""); setSubject(""); setEmail(""); setMessage("");
    };

    return (
        <div id="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        CONTACT
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <FontAwesomeIcon icon ={faGithub} className="c-icon"></FontAwesomeIcon>
                            <a href="https://github.com/DuncanBrewster" target="_blank" rel="noreferrer" style={{color: darkMode ? "#fff" : "#000"}}>
                                Github
                            </a>
                        </div>
                        <div className="c-info-item">
                            <FontAwesomeIcon icon ={faLinkedin} className="c-icon"></FontAwesomeIcon>
                            <a href="https://www.linkedin.com/in/duncanwb/" target="_blank" rel="noreferrer" style={{color: darkMode ? "#fff" : "#000"}}>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        Have a question or want to work together?
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} name="user_name" required/>
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} name="user_subject" required/>
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} name="user_email" required/>
                        <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} rows="5" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} name="message" required/>
                        <button>Send</button>
                        <div className="c-done">
                            {done && "Thank you for the message!"}
                        </div>
                    </form>                 
                </div>
            </div>
        </div>
    );
};

export default Contact;
