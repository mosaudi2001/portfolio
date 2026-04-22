import { useNavigate } from "react-router-dom";
import projects from "../../data/projects";
import "./Projects.css";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="projects-section">
      <div className="container text-center">

        <h2 className="section-title" data-aos="fade-up">
          My Projects
        </h2>

        <div className="projects-grid">

          {projects.map((p) => (
            <div
              className="project-card"
              key={p.id}
              data-aos="zoom-in"
              onClick={() => navigate(`/project/${p.id}`)}
            >

              <div className="img-wrapper">
                <img src={p.images[0]} alt={p.title} />
              </div>

              <div className="project-info">
                <h5>{p.title}</h5>
                <p>{p.description}</p>

                <span className="view-text">
                  View Details →
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}