import profileImg from "../../assets/images/logo.jpg";
import './About.css'
export default function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="container">

        <div className="about-grid">

          {/* 🖼️ IMAGE */}
          <div className="about-image">
            <img src={profileImg} alt="Profile" />
          </div>

          {/* 🧠 CONTENT */}
          <div className="about-content">

            <h2>About Me</h2>

            <p>
              I’m a Frontend Developer specialized in building modern,
              responsive and high-performance web applications using React.
            </p>

            <p>
              I focus on clean UI, reusable components, and smooth user
              experience with attention to every detail.
            </p>

            {/* 🔥 STATS */}
            <div className="about-stats">

              <div>
                <h3>10+</h3>
                <span>Projects</span>
              </div>

              <div>
                <h3>1+</h3>
                <span>Years Experience</span>
              </div>

              <div>
                <h3>Fast</h3>
                <span>Performance</span>
              </div>

            </div>

            {/* 🧩 SKILLS */}
            <div className="skills">

              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>Git</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}