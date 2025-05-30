import { useEffect, useState } from "react";
import img1 from "../assets/image/1.png";
import img2 from "../assets/image/2.png";
import img3 from "../assets/image/3.png";
import img4 from "../assets/image/4.png";
import img5 from "../assets/image/5.png";
import img6 from "../assets/image/6.png";
import img7 from "../assets/image/libarary.png";
import img8 from "../assets/image/QR.png";
import img9 from "../assets/image/password.png";
import img10 from "../assets/image/8.png";
import img11 from "../assets/image/9.png";
import img12 from "../assets/image/10.png";
import img13 from "../assets/image/libarary.png";
import img14 from "../assets/image/react.png";

const projectsData = [
  {
    title: "kasper",
    type: "html&css",
    url: "https://yt-programmer.github.io/template-two/",
    img: img1,
  },
  {
    title: "leon",
    type: "html&css",
    url: "https://yt-programmer.github.io/template-one-/",
    img: img2,
  },
  {
    title: "portfolio",
    type: "html&css",
    url: "https://yt-programmer.github.io/MT_/",
    img: img3,
  },
  {
    title: "Mentor1",
    type: "html&css",
    url: "https://yt-programmer.github.io/fron-mentor-1-/",
    img: img4,
  },
  {
    title: "Mentor2",
    type: "html&css",
    url: "https://yt-programmer.github.io/front-mentor-3/",
    img: img5,
  },
  {
    title: "Mentor3",
    type: "html&css",
    url: "https://yt-programmer.github.io/frontend-mentor-2/",
    img: img6,
  },

  {
    title: "library",
    type: "js",
    url: "https://yt-programmer.github.io/library-/library.html",
    img: img7,
  },
  {
    title: "QrCode",
    type: "js",
    url: "https://yt-programmer.github.io/Qr-Code-/",
    img: img8,
  },
  {
    title: "generatedPassword",
    type: "js",
    url: "https://yt-programmer.github.io/generated-password/",
    img: img9,
  },
  {
    title: "chatBot",
    type: "js",
    url: "https://yt-programmer.github.io/chat-bot/",
    img: img10,
  },
  {
    title: "jannahPath",
    type: "js",
    url: "https://jannahpath.ct.ws/",
    img: img11,
  },
  {
    title: "cruds",
    type: "js",
    url: "https://yt-programmer.github.io/cruds/",
    img: img12,
  },

  {
    title: "library",
    type: "bootstrap",
    url: "https://yt-programmer.github.io/library-/library.html",
    img: img13,
  },

  {
    title: "shoppingCart",
    type: "react",
    url: "https://r-five-xi.vercel.app/",
    img: img14,
  },
];

const listLinks = [
  {
    title: "All",
    type: "all",
  },
  {
    title: "Html & Css",
    type: "html&css",
  },
  {
    title: "js",
    type: "js",
  },
  {
    title: "React",
    type: "react",
  },
  {
    title: "Bootstrap",
    type: "bootstrap",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [currentComponent, setCurrentComponent] = useState("all");

  const handleFilter = (filterBy) => {
    if (filterBy === "all") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.type === filterBy
      );
      setProjects(filteredProjects);
    }
  };

  useEffect(() => {
    handleFilter(currentComponent);
  }, [currentComponent]);

  const filterProjects = (type) => {
    setCurrentComponent(type);
  };

  return (
    <div className="projects">
      <div className="container">
        <div className="head">
          <h1>
            My <span> Works</span>
          </h1>
          <ul>
            {listLinks.map((project) => (
              <li
                key={project.type}
                className={currentComponent === project.type ? "active" : ""}
              >
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => filterProjects(project.type)}
                >
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="cards">
          {projects.map((project, id) => {
            return (
              <div key={id} className="card">
                <div className="front">
                  <img src={project.img} />
                </div>
                <div className="back">
                  <p>{project.title}</p>
                  <a href={project.url}>
                    <i className="fa-solid fa-link"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
