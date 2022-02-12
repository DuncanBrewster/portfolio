import "./projectList.css";
import Project from "../project/Project";
import { products } from "../../data";

const ProjectList = () => {
    return (
        <div id="pl">
            <div className="pl-texts">
                <h1 className="pl-title">PROJECTS</h1>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Project key={item.id} title={item.title} tech={item.tech} desc={item.desc} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
