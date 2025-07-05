import React from "react";
import photo from "../assets/image/Vector 187.png"

import TwoPhoto from "../assets/image/Group 2346.png"
import threePhoto from "../assets/image/doodles mixed round.png"
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="text">
          <h1 className="h1">YOUSSEF TAREK</h1>
          <h1 className="span">FRONTEND DEVELOPER</h1>
          <img loading="lazy" src={photo} alt="photo error" />
          <a href="files/YoussefCv.pdf" download>Download Cv <i className="fa-solid fa-download"></i></a>
        </div>
        <div className="image">
          <img loading="lazy"  src={TwoPhoto} alt="photo error" className="photo1"/>

          <img loading="lazy"  src={threePhoto} alt="photo error" className="photo2"/>
        </div>
      </div>
    </div>
  );
};

export default Home;