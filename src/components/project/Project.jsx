import "./project.css";

const Project = ({title,tech, desc,img,link}) => {
    return (
        <div className="p">
            <h3>{title}</h3>
            <p className="tech">{tech}</p>
            <p className="desc">{desc}</p>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt="" className="p-img"/>                  
                </a>
        </div>
    )
}

export default Project;
