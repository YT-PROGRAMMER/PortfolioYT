import React from "react";
import photo1 from "../assets/image/html.jpg"
import photo2 from "../assets/image/css.jpg"
import photo3 from "../assets/image/js.jpg"
import photo4 from "../assets/image/bootstrap.jpg"
import photo5 from "../assets/image/react.jpg"
import photo6 from "../assets/image/git.jpg"
import photo7 from "../assets/image/github.jpg"
import photo8 from "../assets/image/cmd.jpg"

const Skills = () => {
  const skills = [
    { title: "Html", url:  photo1  },
    { title: "Css", url:  photo2  },
    { title: "JavaScript", url:  photo3  },
    { title: "Bootstrap", url:  photo4  },
    { title: "React", url:  photo5  },
    { title: "Git", url: photo6  },
    { title: "GitHub", url:  photo7  },
    { title: "Cmd", url: photo8},
  ];
  return (
    <div className="skills">
      <div className="container">
        <h1>
          My <span>Skills</span>
        </h1>
        <div className="cards">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="card">
                  <img
                    src={skill.url}
                    alt="icon error"
                    width="100px"
                    height="100px"
                  />
                <p>{skill.title}</p>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
