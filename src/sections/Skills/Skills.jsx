import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import "./Skills.css";

export default function Skills() {
  return (
    <section data-aos="fade-up" className="skills-section">
      <div className="container text-center">
        <h2 className="title">Skills</h2>

        <div className="skills-grid">
          <div className="skill">
            <FaGithub size={40} />
            <h5>Github</h5>
          </div>

          <div className="skill">
            <FaHtml5 size={40} />
            <h5>HTML5</h5>
          </div>

          <div className="skill">
            <FaCss3Alt size={40} />
            <h5>CSS</h5>
          </div>

          <div className="skill">
            <FaJs size={40} />
            <h5>JavaScript</h5>
          </div>

          <div className="skill">
            <FaReact size={40} />
            <h5>React</h5>
          </div>

          <div className="skill">
            <FaBootstrap size={40} />
            <h5>Bootstrap</h5>
          </div>
        </div>
      </div>
    </section>
  );
}