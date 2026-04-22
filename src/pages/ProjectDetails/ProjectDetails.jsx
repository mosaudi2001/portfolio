import { useParams, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import projects from "../../data/projects";
import "./ProjectDetails.css";
import PageWrapper from "../../component/PageWrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const swiperRef = useRef(null);
  const [hoverSide, setHoverSide] = useState(null);

  const projectIndex = projects.findIndex((p) => p.id == id);
  const project = projects[projectIndex];

  if (!project) return <h2 className="not-found">Not Found</h2>;

  const next = projects[projectIndex + 1];
  const prev = projects[projectIndex - 1];

  const images = project.images || [project.image];
  const enableLoop = images.length > 1;

  return (
    <PageWrapper>
      <section className="project-page">
        <div className="container">
          <div className="project-box">

            {/* 🔥 IMAGE */}
            <div className="image-section">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={10}
                slidesPerView={1}
                loop={enableLoop}
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="image-wrapper"
                      onMouseMove={(e) => {
                        const width = e.currentTarget.clientWidth;
                        const x = e.nativeEvent.offsetX;

                        const cursor = e.currentTarget.querySelector(".cursor");
                        if (cursor) {
                          cursor.style.left = e.nativeEvent.offsetX + "px";
                          cursor.style.top = e.nativeEvent.offsetY + "px";
                        }

                        if (x > width / 2) {
                          setHoverSide("right");
                        } else {
                          setHoverSide("left");
                        }
                      }}
                      onMouseLeave={() => setHoverSide(null)}
                      onClick={(e) => {
                        const width = e.currentTarget.clientWidth;
                        const x = e.nativeEvent.offsetX;

                        if (x > width / 2) {
                          swiperRef.current.slideNext();
                        } else {
                          swiperRef.current.slidePrev();
                        }
                      }}
                    >
                      <img src={img} alt={project.title} className="slide-img" />

                      {/* 🔥 CUSTOM CURSOR */}
                      <div className={`cursor ${hoverSide || ""}`}></div>

                      {/* overlay arrows */}
                      <div className="overlay">
                        <span className="arrow">←</span>
                        <span className="arrow">→</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* 🧠 CONTENT */}
            <div className="content-section">
              <span className="tag">Featured Project</span>

              <h1>{project.title}</h1>

              <p className="desc">{project.longDescription}</p>

              <div className="buttons">
                <a href="#" className="btn-primary">Live Demo</a>
                <a href="#" className="btn-outline">GitHub</a>
              </div>

              <div className="nav-buttons">
                {prev && (
                  <button onClick={() => navigate(`/project/${prev.id}`)}>
                    ← Previous
                  </button>
                )}

                {next && (
                  <button onClick={() => navigate(`/project/${next.id}`)}>
                    Next →
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}